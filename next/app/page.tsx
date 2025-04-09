import fetchContentType from "@/lib/strapi/fetchContentType";
import {Hero} from "@/components/home/hero";
import {JapanTitle} from "@/components/ui/JapanTitle";
import {Appetizers} from "@/components/home/Appetizers";

export default async function HomePage() {
    const heroData = await fetchContentType('hero', { populate: '*' }, true);
    const appetizersData = await fetchContentType('appetizer', { populate: '*' }, true);

    return (
        <div className="relative overflow-hidden">
            <Hero data={heroData}/>
            <Appetizers data={appetizersData}/>
            <JapanTitle title="Ramen" />
            <JapanTitle title="Dodatki do ramenu" />
            <JapanTitle title="Nie ramen" accent/>
            <JapanTitle title="Deser" />
        </div>
    );
}
