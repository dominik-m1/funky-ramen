"use client";

import { ReactNode } from "react";
import {cn} from "@/lib/utils";

type Props = {
  children: ReactNode;
  isLast: boolean;
};

export function NavbarItem({
  children,
  isLast,
  onClick,
}: Props) {
  return (
    <span
        onClick={onClick}
        className={cn(
            "font-bold uppercase text-mainText h-[50px] flex items-center px-6 cursor-pointer hover:text-secondary transition duration-200",
            isLast ? "bg-secondary text-primary md:border-x-4 border-mainText hover:bg-mainText hover:text-primary" : "",
        )}
    >
      {children}
    </span>

  );
}
