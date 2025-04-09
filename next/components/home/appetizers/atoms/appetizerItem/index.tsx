import {IAppetizer} from "@/components/home/appetizers";
import {DoubleSpicyIcon} from "@/components/icons/double-spicy-icon";
import {SpicyIcon} from "@/components/icons/spicy-icon";
import {VeganIcon} from "@/components/icons/vegan-icon";
import {VegetarianIcon} from "@/components/icons/vegetarian-icon";

interface IProps {
    appetizer: IAppetizer
}
export const AppetizerItem = ({ appetizer }: IProps) => {
    return (
        <div key={appetizer.id} className="border-b-4 border-dotted border-[#ef4e31] relative w-full">
            <div className="flex absolute -left-12 top-4 w-[40px] justify-end gap-x-1 items-center">
                {appetizer.vegan && (
                    <VeganIcon />
                )}
                {appetizer.vegetarian && (
                    <VegetarianIcon />
                )}
                {appetizer.double_spicy && (
                    <DoubleSpicyIcon />
                )}
                {appetizer.spicy && (
                    <SpicyIcon />
                )}
            </div>
            <div className="text-primary pr-14">
                <span className="font-bold uppercase bg-white relative top-3 pr-2">
                    {appetizer.name}
                    <p className="lowercase font-medium inline ml-1">{appetizer.ingredients}</p>
                </span>
            </div>
            <p className="text-secondary font-bold absolute right-0 -bottom-3 bg-white pl-1">
                {appetizer.price}
            </p>
        </div>
    );
};
