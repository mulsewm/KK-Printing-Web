'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from 'react'
interface ActiveState {
    status: boolean
    key: number
}

export default function MobileMenu() {
    const pathname = usePathname()
    const [isActive, setIsActive] = useState<ActiveState>({
        status: false,
        key: 0,
    })

    const handleClick = (key: number) => {
        if (isActive.key === key) {
            setIsActive({
                ...isActive,
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <ul className="navigation me-0">
                <li className="menu-item-has-children"><Link href="/#">HOME</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                        <li className={pathname == "/" ? "active" : ""}><Link href="/">Digital Agency</Link></li>
                        <li className={pathname == "/home-2" ? "active" : ""}><Link href="/home-2">Creative Agency</Link></li>
                        <li className={pathname == "/home-3" ? "active" : ""}><Link href="/home-3">Design Studio</Link></li>
                        <li className={pathname == "/home-4" ? "active" : ""}><Link href="/home-4">Digital Marketing</Link></li>
                        <li className={pathname == "/home-5" ? "active" : ""}><Link href="/home-5">Modern Agency</Link></li>
                        <li className={pathname == "/home-6" ? "active" : ""}><Link href="/home-6">Creative Studio</Link></li>
                        <li className={pathname == "/home-7" ? "active" : ""}><Link href="/home-7">Startup Agency</Link></li>
                        <li className={pathname == "/home-8" ? "active" : ""}><Link href="/home-8">Personal Portfolio</Link></li>
                    </ul>
                    <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleClick(1)}><span className="plus-line" /></div>
                </li>
                <li className="menu-item-has-children"><Link href="/#">PAGES</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                        <li className={pathname == "/about" ? "active" : ""}><Link href="/about">About Us</Link></li>
                        <li className={pathname == "/service" ? "active" : ""}><Link href="/service">Service</Link></li>
                        <li className={pathname == "/service-details" ? "active" : ""}><Link href="/service-details">Service Details</Link></li>
                        <li className={pathname == "/team" ? "active" : ""}><Link href="/team">Our Team</Link></li>
                        <li className={pathname == "/team-details" ? "active" : ""}><Link href="/team-details">Team Details</Link></li>
                        <li className={pathname == "/pricing" ? "active" : ""}><Link href="/pricing">Pricing</Link></li>
                        <li className={pathname == "/faq" ? "active" : ""}><Link href="/faq">FAQ Page</Link></li>
                        <li className={pathname == "/error" ? "active" : ""}><Link href="/error">404 Error Page</Link></li>
                    </ul>
                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleClick(2)}><span className="plus-line" /></div>
                </li>
                <li className="menu-item-has-children"><Link href="/#">PORTFOLIO</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                        <li className={pathname == "/project" ? "active" : ""}><Link href="/project">Portfolio</Link></li>
                        <li className={pathname == "/project-details" ? "active" : ""}><Link href="/project-details">Portfolio Details</Link></li>
                    </ul>
                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleClick(3)}><span className="plus-line" /></div>
                </li>
                <li className="menu-item-has-children"><Link href="/#">BLOG</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                        <li className={pathname == "/blog" ? "active" : ""}><Link href="/blog">Our Blog</Link></li>
                        <li className={pathname == "/blog-details" ? "active" : ""}><Link href="/blog-details">Blog Details</Link></li>
                    </ul>
                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleClick(4)}><span className="plus-line" /></div>
                </li>
                <li className={pathname == "/contact" ? "active" : ""}><Link href="/contact">CONTACT</Link></li>
            </ul>
        </>
    )
}
