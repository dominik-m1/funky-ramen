"use client";
import { Logo } from "@/components/logo";
import { NavbarItem } from "./navbar-item";
import Image from "next/image";
import {strapiImage} from "@/lib/strapi/strapiImage";
import {Container} from "@/components/container";

export interface INavProps {
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

export const handleItemClick = (index: number, orderLink) => {
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
            window.scrollTo({
                top: document.body.scrollHeight,
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

export const DesktopNavbar = ({ navbarData, logo, socialMedias, orderLink }: INavProps) => {
    return (
      <>
          <div className="hidden md:block bg-primary">
              <div className="border-b-4 border-mainText">
                  <div className="flex justify-center py-8">
                      <Logo image={logo?.image} />
                  </div>
              </div>
          </div>
          <div className="hidden md:block bg-primary sticky top-0 z-50 border-b-4 border-mainText">
                  <div>
                      <Container className="flex items-center justify-between relative h-full px-8">
                          <div className="flex items-center justify-center flex-grow h-[50px]">
                              <div className="flex items-center gap-2">
                                  {navbarData.map((item, index) => (
                                      <NavbarItem
                                          key={item.text}
                                          isLast={navbarData.length - 1 === index}
                                          onClick={() => handleItemClick(index, orderLink)}
                                      >
                                          {item.text}
                                      </NavbarItem>
                                  ))}
                              </div>
                          </div>
                          <div className="flex items-center justify-end gap-8">
                              {socialMedias.map((item) => {
                                  const iconUrl = strapiImage(item.icon.url);
                                  return (
                                      <div key={item.id}>
                                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                                              <div
                                                  className="group w-6 h-6 bg-secondary hover:bg-white transition-colors duration-300"
                                                  style={{
                                                      WebkitMaskImage: `url(${iconUrl})`,
                                                      maskImage: `url(${iconUrl})`,
                                                      WebkitMaskRepeat: 'no-repeat',
                                                      maskRepeat: 'no-repeat',
                                                      WebkitMaskPosition: 'center',
                                                      maskPosition: 'center',
                                                      WebkitMaskSize: 'contain',
                                                      maskSize: 'contain',
                                                  }}
                                              />
                                          </a>
                                      </div>
                                  );
                              })}
                          </div>
                      </Container>
                  </div>
          </div>
      </>
  );
};
