import "./globals.css";
import { Footer } from "@/components/footer";
import fetchContentType from "@/lib/strapi/fetchContentType";
import {Container} from "@/components/container";
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
                <Container>
                    <Navbar data={pageData}/>
                    {children}
                    <Footer data={pageData.footer} />
                </Container>
            </body>
        </html>
    );
}
