"use client";
import { Logo } from "@/components/logo";
import { NavbarItem } from "./navbar-item";
import Image from "next/image";
import {strapiImage} from "@/lib/strapi/strapiImage";

type Props = {
    navbarData: {
        text: string;
    }[];
    logo: any;
    socialMedias: any
    orderLink: string;
};

const scrollToMenuWithOffset = () => {
    const menuElement = document.getElementById("menu");
    if (menuElement) {
        const offset = 50;
        const elementPosition = menuElement.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
        });
    }
};

export const DesktopNavbar = ({ navbarData, logo, socialMedias, orderLink }: Props) => {
    const handleItemClick = (index: number) => {
        switch (index) {
            case 0:
                window.open(orderLink, "_blank", "noopener,noreferrer");
                break;
            case 1:
                document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                });
                break;
            case 2:
                document.getElementById("footer")?.scrollIntoView({
                    behavior: "smooth",
                });
                break;
            case 3:
                scrollToMenuWithOffset();
                break;
            default:
                break;
        }
    };

    return (
      <>
          <div className="bg-primary">
              <div className="border-b-4 border-mainText">
                  <div className="flex justify-center py-8">
                      <Logo image={logo?.image} />
                  </div>
              </div>
          </div>
          <div className="bg-primary sticky top-0 z-50 border-b-4 border-mainText">
              <div className="flex items-center justify-between relative h-full px-8">
                  <div className="flex items-center justify-center flex-grow h-[50px]">
                      <div className="flex items-center gap-2">
                          {navbarData.map((item, index) => (
                              <NavbarItem
                                  key={item.text}
                                  isLast={navbarData.length - 1 === index}
                                  onClick={() => handleItemClick(index)}
                              >
                                  {item.text}
                              </NavbarItem>
                          ))}
                      </div>
                  </div>
                  <div className="flex items-center justify-end gap-8">
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
      </>
  );
};
