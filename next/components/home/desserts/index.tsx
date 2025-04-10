import {JapanTitle} from "@/components/ui/JapanTitle";
import {Container} from "@/components/container";
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

export const Desserts = ({ data }: IProps) => {
    return (
        <section>
            <JapanTitle title={data.title}/>
            <Container className="flex flex-col justify-center items-center gap-8 py-10">
                {data.content.map(item => {
                    return (
                        <div key={item.id} className="flex items-center">
                            <span className="text-primary font-bold max-w-[360px]">{item.text}</span>
                            <span className="ml-4 bg-secondary font-bold rounded-full flex items-center justify-center w-[30px] h-[30px] flex-shrink-0">
                                {item.price}
                            </span>
                        </div>
                    )
                })}
            </Container>
        </section>
    )
}
