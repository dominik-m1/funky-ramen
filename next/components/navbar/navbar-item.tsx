"use client";

import { Link } from "next-view-transitions";
import { ReactNode } from "react";

type Props = {
  href: never;
  children: ReactNode;
  className?: string;
  target?: string;
};

export function NavbarItem({
  children,
  href,
  target,
  className,
}: Props) {

  return (
    <Link
      href={href}
      target={target}
    >
      {children}
    </Link>

  );
}
