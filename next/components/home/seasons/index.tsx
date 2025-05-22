import {AnimateFromBottom, AnimateFromLeft} from "@/components/animations/animate-direction";
import {AppetizerItem} from "@/components/home/appetizers/atoms/appetizerItem";
import {IAppetizer} from "@/components/home/appetizers";
import {IRamen} from "@/components/home/ramens";
import {RamenSmall} from "@/components/home/ramens/atoms/ramen-small";

interface IProps {
    data: {
        title: string;
        ramens_title: string;
        apetizers_title: string;
        desserts_title: string;
        ramens: IRamen[];
        apetizers: IAppetizer[];
        desserts: IAppetizer[];
    }
}

const Seasons = ({ data }: IProps) => {
    const title = data.title || "";
    const firstFour = title.slice(0, 4);
    const rest = title.slice(4);
    return (
        <section>
            <div className="h-[108px] flex items-center justify-center border-y-4 border-mainText">
                <h2 className="uppercase text-4xl text-center md:text-6xl font-japan text-secondary">
                    {firstFour}<span className="text-primary">{rest}</span>
                </h2>
            </div>
            <div className="lg:flex justify-center">
                <div className="border-r-4 border-mainText w-full lg:w-1/2">
                    <AnimateFromBottom>
                        <h3 className="text-secondary text-3xl font-bold uppercase mt-12 px-12">{data.ramens_title}</h3>
                        {data.ramens.map((item) => (
                            <RamenSmall ramen={item} key={item.id}/>
                        ))}
                    </AnimateFromBottom>
                </div>
                <div className="w-full lg:w-1/2 flex items-center justify-center py-12">
                    <div className="w-full border-t-4 border-mainText lg:border-0 pt-16 lg:pt-0">
                        <AnimateFromLeft>
                            <div className="px-12 lg:px-0 lg:max-w-[480px] xl:max-w-[540px] mx-auto">
                                <h3 className="text-secondary text-3xl font-bold uppercase mb-10">{data.apetizers_title}</h3>
                                <div className="w-full space-y-3">
                                    {data.apetizers.map((item) => (
                                        <AppetizerItem appetizer={item} key={item.id}/>
                                    ))}
                                </div>
                            </div>
                        </AnimateFromLeft>
                        <AnimateFromLeft>
                            <div className="border-t-4 border-mainText py-16 mt-24">
                                <div className="px-12 lg:px-0 lg:max-w-[480px] xl:max-w-[540px] mx-auto">
                                    <h3 className="text-secondary text-3xl font-bold uppercase mb-10">{data.desserts_title}</h3>
                                    <div className="w-full space-y-3">
                                        {data.desserts.map((item) => (
                                            <AppetizerItem appetizer={item} key={item.id}/>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </AnimateFromLeft>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Seasons;
