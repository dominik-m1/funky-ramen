import { Link } from "next-view-transitions";
import Image from "next/image";
import {strapiImage} from "@/lib/strapi/strapiImage";
import {Container} from "@/components/container";
import {AnimateFromBottom} from "@/components/animations/animate-direction";

interface IProps {
    data: {
        address: string;
        address_link: string;
        phone: string;
        phone_link: string;
        image: any
    }
}

export const Footer = async ({ data }: IProps) => {
  const imageData = data.image[0];
  return (
    <footer className="bg-primary py-[110px] px-8">
        <Container>
            <AnimateFromBottom>
                <div className="flex-col md:flex-row flex items-center justify-around gap-8 md:gap-0">
                    <Link
                        className="text-mainText font-bold hover:text-secondary"
                        title={data.address}
                        href={data.phone_link} target="_blank">
                        {data.address}
                    </Link>
                    <Image
                        src={strapiImage(imageData.url)}
                        alt="Funky Ramen Bar"
                        width={imageData.width}
                        height={imageData.height}
                        draggable={false}
                    />
                    <Link
                        id="footer"
                        className="text-mainText font-bold hover:text-secondary"
                        title={data.phone}
                        href={data.phone_link} target="_blank">
                        {data?.phone}
                    </Link>
                </div>
            </AnimateFromBottom>
        </Container>
    </footer>
  );
};
