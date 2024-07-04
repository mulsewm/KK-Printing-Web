'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

interface MobileMenuProps {
    isMobileMenuOpen: boolean;
    handleMobileMenu: (open: boolean) => void;
}

export default function MobileMenu({ isMobileMenuOpen, handleMobileMenu }: MobileMenuProps) {
    const pathname = usePathname()

    const handleMenuClick = () => {
        handleMobileMenu(false);
    }

    return (
        <>
            <ul className={`navigation me-0 ${isMobileMenuOpen ? 'open' : ''}`}>
                <li className={pathname == "/" ? "active" : ""}>
                    <Link href="/" onClick={handleMenuClick}>HOME</Link>
                </li>
                <li className={pathname == "/#about" ? "active" : ""}>
                    <Link href="/#about" onClick={handleMenuClick}>ABOUT</Link>
                </li>
                <li className={pathname == "/#service" ? "active" : ""}>
                    <Link href="/#service" onClick={handleMenuClick}>SERVICES</Link>
                </li>
                <li className={pathname == "/#blog" ? "active" : ""}>
                    <Link href="/#blog" onClick={handleMenuClick}>BLOG</Link>
                </li>
                <li className={pathname == "/#contact" ? "active" : ""}>
                    <Link href="/#contact" onClick={handleMenuClick}>CONTACT</Link>
                </li>
            </ul>
        </>
    )
}
