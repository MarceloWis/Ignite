import { Stripe } from "stripe";
import { NextApiRequest, NextApiResponse } from "next";
import { Readable } from 'stream';
import { stripe } from "../../services/stripe";
import { saveSubscription } from "./_lib/manageSubscription";


async function buffer(readable: Readable) {
    const chunks = [];
    for await (const chunk of readable) {
        chunks.push(
            typeof chunk === "string" ? Buffer.from(chunk) : chunk
        )
    }
    return Buffer.concat(chunks);
}

export const config = {
    api: {
        bodyParser: false
    }
}

const relevantEvents = new Set([
    'checkout.session.completed',
    'customer.subscriptions.created',
    'customer.subscriptions.updated',
    'customer.subscriptions.deleted',
])


export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const buff = await buffer(req);
        const secret = req.headers['stripe-signature']

        let event: Stripe.Event;

        try {
            event = stripe.webhooks.constructEvent(buff, secret, process.env.STRIPE_WEBHOOK_SECRECT);
        } catch (error) {
            return res.status(400).send(`Webhoook error ${error.message}`)
        }

        const type = event.type;

        if (!relevantEvents.has(type)) {
            try {
                switch (type) {
                    case'customer.subscription.updated':
                    case'customer.subscription.deleted':
                    const subscription = event.data.object as Stripe.Subscription;

                    await saveSubscription(subscription.id, subscription.customer.toString(), false)

                    break;
                    case 'checkout.session.completed':
                        const checkoutSession = event.data.object as Stripe.Checkout.Session
                        await saveSubscription(checkoutSession.subscription.toString(), checkoutSession.customer.toString(), true)

                        break;

                    default:
                        throw new Error("Unhandled events");

                }
            } catch (error) {
                return res.json({ error: 'Webhook handler failed' })
            }
        }


        return res.json({ ok: true })
    } else {
        throw new Error("Error")
    }

}
