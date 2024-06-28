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
                <li className={pathname == "/" ? "active" : ""}><Link href="/">HOME</Link></li>
                <li className="menu-item-has-children"><Link href="/#">ABOUT</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                        <li className={pathname == "/about" ? "active" : ""}><Link href="/about">About Us</Link></li>
                    </ul>
                    <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleClick(1)}><span className="plus-line" /></div>
                </li>
                <li className="menu-item-has-children"><Link href="/#">SERVICES</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                        <li className={pathname == "/service" ? "active" : ""}><Link href="/service">Service</Link></li>
                        <li className={pathname == "/service-details" ? "active" : ""}><Link href="/service-details">Service Details</Link></li>
                    </ul>
                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleClick(2)}><span className="plus-line" /></div>
                </li>
                <li className="menu-item-has-children"><Link href="/#">BLOG</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                        <li className={pathname == "/blog" ? "active" : ""}><Link href="/blog">Our Blog</Link></li>
                        <li className={pathname == "/blog-details" ? "active" : ""}><Link href="/blog-details">Blog Details</Link></li>
                    </ul>
                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleClick(3)}><span className="plus-line" /></div>
                </li>
                <li className={pathname == "/contact" ? "active" : ""}><Link href="/contact">CONTACT</Link></li>
            </ul>
        </>
    )
}
