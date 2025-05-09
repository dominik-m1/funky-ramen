import {JapanTitle} from "@/components/ui/JapanTitle";
import {Ramen} from "@/components/home/ramens/atoms/ramen";
import { Fragment } from "react";
import Image from "next/image";
import {strapiImage} from "@/lib/strapi/strapiImage";
import {AnimateFromBottom} from "@/components/animations/animate-direction";

export interface IRamen {
    id: number;
    name: string;
    price: string;
    double_spicy: boolean | null,
    spicy: boolean | null,
    vegan: boolean | null,
    vegetarian: boolean | null,
    details: {
        prefix: string;
        ingredients: string;
    }[]

}
interface IProps {
    data: {
        title: string;
        image: {
            url: string;
            width: number;
            height: number;
            alternativeText: string;
        },
        description: IRamen[]
    }
}
export const Ramens = ({ data }: IProps) => {
    return (
        <section id="menu">
            <JapanTitle title={data.title} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
                {data.description.map((item, index) => {
                    let borderClasses = "md:border-l-2 lg:border-l-0 lg:border-t-2 border-b-2 lg:border-r-2 border-mainText";

                    if (index === 3) {
                        return (
                            <Fragment key={`image-${item.id}`}>
                                <div className={borderClasses}>
                                    <AnimateFromBottom>
                                        <Ramen ramen={item} image={data.image} />
                                    </AnimateFromBottom>
                                </div>
                                <div className={`hidden lg:flex border-2 border-mainText bg-secondary items-center justify-center p-2`}>
                                    <AnimateFromBottom>
                                        <Image
                                            src={strapiImage(data.image.url)}
                                            alt="Funky Ramen Bar"
                                            width={data.image.width}
                                            height={data.image.height}
                                            draggable={false}
                                        />
                                    </AnimateFromBottom>
                                </div>
                            </Fragment>
                        );
                    }
                    if (index === 0) {
                        borderClasses = "border-b-4 lg:border-b-2 md:border-r-2 border-mainText";
                    } else if (index === 1) {
                        borderClasses = "md:border-l-2 lg:border-r-2 border-b-4 lg:border-b-2 border-mainText";
                    } else if (index === 2) {
                        borderClasses = "md:border-r-2 lg:border-r-0 lg:border-l-2 border-b-4 md:border-b-2 border-mainText";
                    } else if (index === 4) {
                        borderClasses = "md:border-r-2 lg:border-r-0 border-t-2 border-b-2 lg:border-l-2 border-mainText";
                    } else if (index === 5) {
                        borderClasses = "md:border-l-2 lg:border-l-0 border-t-2 lg:border-r-2 border-b-2 lg:border-b-0 border-mainText";
                    } else if (index === 6) {
                        borderClasses = "border-t-2 md:border-r-2 lg:border-l-2 border-mainText";
                    } else if (index === 7) {
                        borderClasses = "border-t-4 md:border-t-2 md:border-l-2 border-mainText";
                    } else if (index === 8) {
                        borderClasses = "border-t-2 border-l-2 border-mainText";
                    }

                    return (
                        <div className={borderClasses} key={item.id}>
                            <AnimateFromBottom>
                                <Ramen ramen={item} image={data.image} />
                            </AnimateFromBottom>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};


