import {JapanTitle} from "@/components/ui/JapanTitle";
import Image from "next/image";
import {strapiImage} from "@/lib/strapi/strapiImage";
import {AppetizerItem} from "@/components/home/appetizers/atoms/appetizerItem";
import {AnimateFromLeft, AnimateFromRight} from "@/components/animations/animate-direction";

export interface IAppetizer {
    id: number;
    name: string;
    ingredients: string;
    price: string;
    double_spicy: boolean | null;
    spicy: boolean | null;
    vegan: boolean | null;
    vegetarian: boolean | null;
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
        description: IAppetizer[]
    }
}

export const Appetizers = ({data}: IProps) => {
    return (
        <section>
            <JapanTitle title={data.title} />
            <div className="flex">
                    <div className="w-full lg:w-1/2 flex items-center justify-center py-12">
                        <AnimateFromLeft>
                            <div className="max-w-[540px] space-y-3 px-14 xl:px-0">
                                {data.description.map((item) => (
                                    <AppetizerItem appetizer={item} key={item.id}/>
                                ))}
                            </div>
                        </AnimateFromLeft>
                    </div>
                    <div className="hidden lg:flex bg-secondary w-1/2 items-end">
                        <AnimateFromRight>
                            <Image
                                src={strapiImage(data.image.url)}
                                alt="Funky Ramen Bar"
                                width={data.image.width}
                                height={data.image.height}
                                draggable={false}
                            />
                        </AnimateFromRight>
                    </div>
            </div>
        </section>
    )
}
