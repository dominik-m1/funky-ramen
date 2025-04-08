// layout.tsx
import "./globals.css";
import { Footer } from "@/components/footer";
import fetchContentType from "@/lib/strapi/fetchContentType";
import {DesktopNavbar} from "@/components/navbar/desktop-navbar";

export default async function RootLayout({
     children,
 }: {
    children: React.ReactNode;
}) {
    const pageData = await fetchContentType('global', { filters: { locale: 'pl' } }, true);
    return (
        <html lang="pl" suppressHydrationWarning>
            <body suppressHydrationWarning>
                <DesktopNavbar
                    navbarData={pageData.navbar.navbar_items}
                    logo={pageData.navbar.logo}
                    socialMedias={pageData.Socials}
                />
                    {children}
                <Footer data={pageData.footer} />
            </body>
        </html>
    );
}
