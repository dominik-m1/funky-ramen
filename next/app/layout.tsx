import "./globals.css";
import { Footer } from "@/components/footer";
import fetchContentType from "@/lib/strapi/fetchContentType";
import {Navbar} from "@/components/navbar";

export default async function RootLayout({
     children,
 }: {
    children: React.ReactNode;
}) {
    const pageData = await fetchContentType('global', { filters: { locale: 'pl' } }, true);
    return (
        <html lang="pl" suppressHydrationWarning>
            <body suppressHydrationWarning>
                <Navbar data={pageData}/>
                    {children}
                <Footer data={pageData.footer} />
            </body>
        </html>
    );
}
