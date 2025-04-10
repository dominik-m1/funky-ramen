import fetchContentType from "@/lib/strapi/fetchContentType";
import {Hero} from "@/components/home/hero";
import {JapanTitle} from "@/components/ui/JapanTitle";
import {Appetizers} from "@/components/home/Appetizers";
import {Ramens} from "@/components/home/ramens";

export default async function HomePage() {
    const heroData = await fetchContentType('hero', { populate: '*' }, true);
    const appetizersData = await fetchContentType('appetizer', { populate: '*' }, true);
    const ramensData = await fetchContentType('ramen', {
        populate: {
            image: true,
            description: {
                populate: {
                    details: true,
                },
            },
        },
    }, true);


    return (
        <div className="relative overflow-hidden">
            <Hero data={heroData}/>
            <Appetizers data={appetizersData}/>
            <Ramens data={ramensData}/>
            <JapanTitle title="Dodatki do ramenu" />
            <JapanTitle title="Nie ramen" accent/>
            <JapanTitle title="Deser" />
        </div>
    );
}
