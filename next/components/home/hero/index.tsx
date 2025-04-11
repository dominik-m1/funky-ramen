import Image from "next/image";
import {strapiImage} from "@/lib/strapi/strapiImage";
import {CTAButton} from "@/components/elements/client-button";

export const Hero = ({ data }) => {
    return (
        <section className="flex">
            <div className="w-1/2 bg-mainText flex items-center justify-center py-4 lg:py-[50px]">
                <Image
                    src={strapiImage(data.image.url)}
                    alt={data.image.alternativeText}
                    width={data.image.width}
                    height={data.image.height}
                    draggable={false}
                />
            </div>
            <div className="w-1/2 bg-primary flex flex-col justify-center items-center">
                <div className="w-3/4 lg:w-[480px]">
                    <h1 className="hidden lg:block text-mainText text-5xl uppercase font-medium w-full relative pb-4">
                        <Image
                            src="/assets/img/circle.png"
                            alt="Decorative circle"
                            width={120}
                            height={80}
                            className="absolute right-3 -top-4"
                        />
                        {data.title}
                        <span className="inline-block border-b-4 border-mainText rounded-sm w-[60%] absolute left-1 bottom-0" />
                    </h1>
                    <p className="text-mainText font-bold relative mt-12 ml-1">
                        <span className="inline-block border-b-4 border-mainText rounded-sm w-full absolute -top-2" />
                        {data.address}
                    </p>
                    <p className="text-mainText font-bold relative mt-4 ml-1">
                        <span className="inline-block border-b-4 border-mainText rounded-sm w-full absolute -top-2" />
                        {data.label}
                    </p>
                    <div className="flex flex-col justify-between relative mt-4 ml-1">
                        <span className="inline-block border-b-4 border-mainText rounded-sm w-full absolute -top-2" />
                        {data.opening.map(el => {
                            return (
                                <div key={el.id} className="font-bold flex justify-between">
                                    <p className="text-mainText">{el.day}</p>
                                    <p className="text-secondary">{el.hours}</p>
                                </div>
                            )
                        })}
                        <CTAButton
                            text={data.cta.text}
                            url={data.cta.URL}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
};
