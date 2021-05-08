import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import { stripe } from "../../services/stripe";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'POST') {
        const session = await getSession({ req })
        const stripeCustomer = await stripe.customers.create({
            email: session.user.email
        })

try {
    const checkoutSession = await stripe.checkout.sessions.create({
        customer: stripeCustomer.id,
        payment_method_types: ['card'],
        billing_address_collection: 'required',
        line_items: [{price: 'price_1Iot3zIxjbzV6Bng34p5WmAO', quantity: 1} ],
        mode: 'subscription',
        allow_promotion_codes: true,
        success_url: 'https://localhost:3000/posts',
        cancel_url: 'https://localhost:3000/',
    })
    return res.status(200).json({ sessionId: checkoutSession.id })
} catch (error) {
    console.log(error)
    res.status(405).end('Method not allowed')
}
        
        

    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method not allowed')
    }
}