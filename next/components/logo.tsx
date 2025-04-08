import React from "react";

import { Link } from "next-view-transitions";

import { strapiImage } from "@/lib/strapi/strapiImage";
import Image from "next/image";

export const Logo = ({ image }) => {
  if (image) {
    return (
      <Link
        href={`/`}
      >
        <Image
            src={strapiImage(image?.url)}
            alt="Funky Ramen Bar"
            width={image?.width}
            height={image?.height}
            draggable={false}
        />
      </Link>
    );
  }

  return;
};
