import { useRouter } from "next/dist/client/router";
import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";

interface ActiveLink extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export default function ActiveLink({ children, activeClassName, ...rest }:  ActiveLink) {
  const { asPath } = useRouter();
  const className = asPath === rest.href ? activeClassName : '';

  return (
    <Link {...rest}>
        { cloneElement(children, { className}) }
    </Link>
  )
}
