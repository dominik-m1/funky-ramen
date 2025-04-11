import {DesktopNavbar} from "@/components/navbar/desktop-navbar";
import {MobileNavbar} from "@/components/navbar/mobile-navbar";

export const Navbar = ({
    data
}) => {
    return (
        <>
            <DesktopNavbar
                navbarData={data.navbar.navbar_items}
                logo={data.navbar.logo}
                socialMedias={data.Socials}
                orderLink={data.navbar.order_link}
            />
            <MobileNavbar
                navbarData={data.navbar.navbar_items}
                logo={data.navbar.logo}
                socialMedias={data.Socials}
                orderLink={data.navbar.order_link}
            />
        </>
    )
}
