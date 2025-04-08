"use client";
import { Logo } from "@/components/logo";
import { NavbarItem } from "./navbar-item";
import {Container} from "@/components/container";
import Image from "next/image";
import {strapiImage} from "@/lib/strapi/strapiImage";
import React from "react";

type Props = {
    navbarData: {
        text: string;
    }[];
    logo: any;
    socialMedias: any
};

export const DesktopNavbar = ({ navbarData, logo, socialMedias }: Props) => {
  return (
    <nav className="bg-primary">
      <div className="border-b-4 border-mainText">
        <Container className="flex justify-center py-8">
          <Logo image={logo?.image} />
        </Container>
      </div>
      <div className="border-b-4 border-mainText">
        <Container className="flex items-center justify-center relative">
          <div className="flex items-center h-[50px] gap-2">
            {navbarData.map((item, index) => (
                <NavbarItem
                    key={item.text}
                    isLast={navbarData.length - 1 === index}
                >
                  {item.text}
                </NavbarItem>
            ))}
          </div>
            <div className="flex items-center gap-8 absolute right-0">
                {socialMedias.map((item) => (
                    <div key={item.id}>
                        <a href={item.link} target="_blank">
                            <Image
                                src={strapiImage(item.icon.url)}
                                alt="Funky Ramen Bar Social Media"
                                width={item.icon.width}
                                height={item.icon.height}
                                draggable={false}
                            />
                        </a>
                    </div>
                ))}
            </div>
        </Container>
      </div>
    </nav>
  );
};
