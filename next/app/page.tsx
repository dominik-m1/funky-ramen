import fetchContentType from "@/lib/strapi/fetchContentType";
import {Hero} from "@/components/home/hero";

export default async function HomePage() {
    const heroData = await fetchContentType('hero', { populate: '*' }, true);

    return (
        <div className="relative overflow-hidden">
            <Hero data={heroData}/>
        </div>
    );
}
