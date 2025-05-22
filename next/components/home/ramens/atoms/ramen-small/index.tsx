import {IRamen} from "@/components/home/ramens";

interface IProps {
    ramen: IRamen,
}
export const RamenSmall = ({ ramen }: IProps) => {
    return (
        <article className="px-12 my-12">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center border-b-4 border-dotted border-[#ef4e31] relative w-full">
                    <div className="text-primary pr-14">
                        <span className="font-bold uppercase bg-white relative top-3 pr-2">
                            {ramen.name}
                        </span>
                    </div>
                    <p className="text-secondary font-bold absolute right-0 -bottom-3 bg-white pl-1">
                        {ramen.price}
                    </p>
                </div>
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
