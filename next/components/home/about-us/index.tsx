import Image from "next/image";
import {strapiImage} from "@/lib/strapi/strapiImage";
import {Container} from "@/components/container";
import {WaveIcon} from "@/components/icons/wave-icon";

interface IImage {
    url: string;
    width: number;
    height: number;
    alternativeText: string;
}
interface IProps {
    data: {
        main_image: IImage;
        about_title: string;
        about_text: string;
        kitchen_title: string;
        kitchen_text: string;
        bar_title: string;
        bar_text: string;
        bar_image: IImage;
        bottom_image: IImage
    }
}
export const AboutUs = ({ data }: IProps) => {
    return (
        <section>
            <div
                className="w-full h-[480px] bg-center bg-cover bg-fixed border-y-4 border-mainText"
                style={{
                    backgroundImage: `url(${strapiImage(data.main_image.url)})`,
                }}
            />
            <div className="bg-primary border-b-4 border-mainText" id="about">
                <Container className="py-20">
                    <h3 className="text-mainText uppercase text-center text-3xl mb-8 font-bold">{data.about_title}</h3>
                    <p className="font-medium">{data.about_text}</p>
                    <div className="flex justify-center mt-20">
                        <WaveIcon />
                    </div>
                </Container>
            </div>
            <div className="flex">
                <div className="bg-secondary w-1/2 pt-20 border-r-2 border-b-2 border-mainText">
                    <h3 className="text-primary uppercase text-center text-3xl mb-20 font-bold">{data.kitchen_title}</h3>
                    <p className="font-medium max-w-[500px] m-auto text-justify">{data.kitchen_text}</p>
                </div>
                <div className="pt-20 w-1/2 border-l-2 border-b-2 border-mainText">
                    <h3 className="text-secondary uppercase text-center text-3xl mb-20 font-bold">{data.bar_title}</h3>
                    <p className="font-medium text-primary max-w-[500px] m-auto text-justify">{data.bar_text}</p>
                    <div className="flex justify-center">
                        <Image
                            src={strapiImage(data.bar_image.url)}
                            alt="Funky Ramen Bar"
                            width={data.bar_image.width}
                            height={data.bar_image.height}
                            draggable={false}
                        />
                    </div>
                </div>
            </div>
            <div
                className="flex justify-center w-full border-t-2 border-b-4 border-mainText bg-center bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url(/assets/img/footer-bg.png)`,
                }}
            >
                <Image
                    src={strapiImage(data.bottom_image.url)}
                    alt="Funky Ramen Bar"
                    width={data.bottom_image.width}
                    height={data.bottom_image.height}
                    draggable={false}
                    className="-mb-2"
                />
            </div>
        </section>
    )
}
