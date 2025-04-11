interface IProps {
    title: string;
    accent?: boolean;
}

export const JapanTitle = ({ title, accent }: IProps) => {
    const [firstWord, ...rest] = title.split(' ');
    const restOfTitle = rest.join(' ');

    return (
        <section className="bg-primary h-[108px] flex items-center justify-center border-y-4 border-mainText">
            <h2 className="uppercase text-4xl text-center md:text-6xl font-japan text-mainText">
                {accent ? (
                    <>
                        <span className="text-secondary">{firstWord}</span>{' '}
                        {restOfTitle}
                    </>
                ) : (
                    title
                )}
            </h2>
        </section>
    );
};
