import Image from "next/image";
import {strapiImage} from "@/lib/strapi/strapiImage";
import {WaveIcon} from "@/components/icons/wave-icon";
import ReactMarkdown from "react-markdown";

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
                className="hidden md:block w-full h-[480px] bg-center bg-cover bg-fixed border-y-4 border-mainText"
                style={{
                    backgroundImage: `url(${strapiImage(data.main_image.url)})`,
                }}
            />
            <div className="h-[420px] md:hidden">
                <Image
                    src={strapiImage(data.main_image.url)}
                    alt="Funky Ramen Bar"
                    width={data.main_image.width}
                    height={data.main_image.height}
                    className="h-full object-cover"
                    draggable={false}
                />
            </div>
            <div className="bg-primary border-b-4 border-mainText" id="about">
                <div className="py-20">
                    <h3 className="text-mainText uppercase text-center text-3xl mb-20 font-bold">{data.about_title}</h3>
                    <p className="max-w-[85%] mx-auto text-justify">
                        <ReactMarkdown>
                            {data.about_text}
                        </ReactMarkdown>
                    </p>
                    <div className="flex justify-center mt-20">
                        <WaveIcon />
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row">
                <div className="bg-secondary pb-20 lg:pb-0 w-full lg:w-1/2 pt-20 lg:border-r-2 border-b-4 lg:border-b-2 border-mainText">
                    <h3 className="text-primary uppercase text-center text-3xl mb-20 font-bold">{data.kitchen_title}</h3>
                    <p className=" max-w-[75%] lg:max-w-[500px] m-auto text-justify">
                        <ReactMarkdown>
                            {data.kitchen_text}
                        </ReactMarkdown>
                    </p>
                </div>
                <div className="pt-20 w-full lg:w-1/2 lg:border-l-2 border-b-2 border-mainText">
                    <h3 className="text-secondary uppercase text-center text-3xl mb-20 font-bold">{data.bar_title}</h3>
                    <p className="text-primary max-w-[75%] lg:max-w-[500px] m-auto text-justify">
                        <ReactMarkdown>
                            {data.bar_text}
                        </ReactMarkdown>
                    </p>
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
                className="overflow-hidden flex justify-center w-full border-t-2 border-b-4 border-mainText bg-center bg-cover bg-no-repeat"
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
                    className="-mb-2 max-h-[450px] lg:max-h-[500px] w-auto"
                />
            </div>
        </section>
    )
}
