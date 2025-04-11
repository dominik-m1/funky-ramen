import {JapanTitle} from "@/components/ui/JapanTitle";

interface IProps {
    data: {
        title: string;
        content: {
            id: string;
            text: string;
            price: string;
        }[]
    }
}
export const Additions = ({data}: IProps) => {
    return (
        <section>
            <JapanTitle title={data.title} />
            <div className="flex justify-center items-center gap-8 py-10">
                {data.content.map(item => {
                    return (
                        <div key={item.id} className="flex items-center gap-2">
                            <span className="text-primary font-bold">{item.text}</span>
                            <span className="bg-secondary font-bold rounded-full flex items-center justify-center w-[30px] h-[30px]">{item.price}</span>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
