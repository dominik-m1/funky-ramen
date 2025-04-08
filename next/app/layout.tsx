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
                    leftNavbarItems={pageData.navbar.left_navbar_items}
                    logo={pageData.navbar.logo}
                />
                    {children}
                <Footer data={pageData.footer} />
            </body>
        </html>
    );
}
