"use client";
import { useState } from "react";
import {handleItemClick, INavProps} from "@/components/navbar/desktop-navbar";
import {Logo} from "@/components/logo";
import {NavbarItem} from "@/components/navbar/navbar-item";
import Image from "next/image";
import {strapiImage} from "@/lib/strapi/strapiImage";
import {MenuIcon} from "@/components/icons/menu-icon";

export const MobileNavbar = ({ navbarData, logo, socialMedias, orderLink}: INavProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 w-full z-50 block md:hidden bg-primary px-2 border-b-4 border-mainText">
        <div className="h-[70px] flex items-center justify-between">
            <Logo image={logo?.image} className="max-w-[300px]"/>
            <span onClick={() => setOpen(prevState => !prevState)}>
                <MenuIcon />
            </span>
        </div>
        <div
            className={`px-8 overflow-hidden transition-all duration-300 ease-in-out transform ${
                open ? 'max-h-[1000px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
            }`}
        >
            <div className="flex flex-col">
                {navbarData.map((item, index) => (
                    <NavbarItem
                        key={item.text}
                        isLast={navbarData.length - 1 === index}
                        onClick={() => {
                            handleItemClick(index, orderLink);
                            setOpen(prev => !prev);
                        }}
                    >
                        {item.text}
                    </NavbarItem>
                ))}
                <div className="flex items-center justify-center gap-4 py-4">
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
            </div>
        </div>
    </div>
  );
};
