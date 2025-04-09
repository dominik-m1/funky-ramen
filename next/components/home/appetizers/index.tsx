import {JapanTitle} from "@/components/ui/JapanTitle";
import Image from "next/image";
import {strapiImage} from "@/lib/strapi/strapiImage";
import {AppetizerItem} from "@/components/home/appetizers/atoms/appetizerItem";

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
                <div className="w-1/2 flex items-center justify-center py-12">
                    <div className="max-w-[540px] space-y-3">
                        {data.description.map((item) => (
                            <AppetizerItem appetizer={item} key={item.id}/>
                        ))}
                    </div>
                </div>
                <div className="bg-secondary w-1/2">
                    <Image
                        src={strapiImage(data.image.url)}
                        alt={data.image.alternativeText}
                        width={data.image.width}
                        height={data.image.height}
                        draggable={false}
                    />
                </div>
            </div>
        </section>
    )
}
