import {IRamen} from "@/components/home/ramens";
import {PriceStar} from "@/components/icons/price-star";
import {VeganIcon} from "@/components/icons/vegan-icon";
import {VegetarianIcon} from "@/components/icons/vegetarian-icon";
import {DoubleSpicyIcon} from "@/components/icons/double-spicy-icon";
import {SpicyIcon} from "@/components/icons/spicy-icon";

interface IProps {
    ramen: IRamen,
}
export const Ramen = ({ ramen }: IProps) => {
    return (
        <article className="py-24 px-16">
            <div className="flex items-center justify-between mb-12">
                <div className="flex items-center">
                    <h3 className="text-primary font-bold text-2xl mr-2">{ramen.name}</h3>
                    <span className="flex items-center gap-2">
                        {ramen.vegan && (
                            <VeganIcon />
                        )}
                        {ramen.vegetarian && (
                            <VegetarianIcon />
                        )}
                        {ramen.double_spicy && (
                            <DoubleSpicyIcon />
                        )}
                        {ramen.spicy && (
                            <SpicyIcon />
                        )}
                    </span>
                </div>
                <p className="relative flex items-center justify-center">
                    <span className="relative z-10 text-2xl font-bold">{ramen.price}</span>
                    <span className="absolute">
                        <PriceStar />
                    </span>
                </p>
            </div>
            <div className="space-y-3">
                {ramen.details.map((item, index) => {
                    return (
                        <div key={`${item.prefix}-${item.ingredients}-${index}`}>
                            <p className="text-primary break-words font-medium">
                                <span className="text-secondary uppercase">{item.prefix}</span> {item.ingredients}
                            </p>
                        </div>
                    )
                })}
            </div>
        </article>
    )
}
