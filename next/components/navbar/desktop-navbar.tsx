"use client";
import { Logo } from "@/components/logo";
import { NavbarItem } from "./navbar-item";
import {
  useMotionValueEvent,
  useScroll,
  motion,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {Container} from "@/components/container";


type Props = {
  leftNavbarItems: {
    URL: string;
    text: string;
    target?: string;
  }[];
  logo: any;
};

export const DesktopNavbar = ({ leftNavbarItems, logo }: Props) => {
  const { scrollY } = useScroll();

  const [showBackground, setShowBackground] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    if (value > 100) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  });
  return (
    <nav className="bg-primary">
      <Container className="flex flex-row gap-2 items-center">
        <Logo image={logo?.image} />
        <div className="flex items-center gap-1.5">
          {leftNavbarItems.map((item) => (
              <NavbarItem href={`/` as never} key={item.text} target={item.target}>
                {item.text}
              </NavbarItem>
          ))}
        </div>
      </Container>
    </nav>
  );
};
