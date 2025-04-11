import fetchContentType from "@/lib/strapi/fetchContentType";
import {Hero} from "@/components/home/hero";
import {Appetizers} from "@/components/home/Appetizers";
import {Ramens} from "@/components/home/ramens";
import {Additions} from "@/components/home/additions";
import {NotRamens} from "@/components/home/not-ramens";
import {Desserts} from "@/components/home/desserts";
import {AboutUs} from "@/components/home/about-us";
import {generateMetadataObject} from "@/lib/shared/metadata";

export async function generateMetadata() {
    const pageData = await fetchContentType("global", { filters: { locale: "pl" } }, true);
    const seoData = pageData?.seo || {};
    const metadata = generateMetadataObject(seoData);

    return {
        ...metadata,
        keywords: seoData.keywords || '',
        robots: seoData.metaRobots || 'index,follow',
        alternates: {
            canonical: seoData.canonicalURL || '',
        },
    };
}

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
    const additionsData = await fetchContentType('addition', { populate: '*' }, true);
    const notRamenData = await fetchContentType('not-ramen', { populate: '*' }, true);
    const dessertsData = await fetchContentType('dessert', { populate: '*' }, true);
    const aboutUsData = await fetchContentType('about-us', { populate: '*' }, true);

    return (
        <div className="relative overflow-hidden">
            <Hero data={heroData}/>
            <Appetizers data={appetizersData}/>
            <Ramens data={ramensData}/>
            <Additions data={additionsData} />
            <NotRamens data={notRamenData}/>
            <Desserts data={dessertsData}/>
            <AboutUs data={aboutUsData} />
        </div>
    );
}
