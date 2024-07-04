'use client'
import AOS from 'aos'
import { useEffect, useState } from "react"
import AddClassBody from '../elements/AddClassBody'
import BackToTop from '../elements/BackToTop'
import DataBg from '../elements/DataBg'
import MagnetsComponent from '../elements/MagnetsComponent'
import Breadcrumb from './Breadcrumb'
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'

import Header1 from "./header/Header1"
import Header6 from './header/Header6'
import Header8 from './header/Header8'

interface LayoutProps {
    headerStyle?: Number
    footerStyle?: Number
    children?: React.ReactNode
    breadcrumbTitle?: string
}

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children }: LayoutProps) {
    const [scroll, setScroll] = useState<boolean>(false)
    const [isMobileMenu, setMobileMenu] = useState<boolean>(false)
    const [isOffcanvasMenu, setOffcanvasMenu] = useState<boolean>(false)

    const handleMobileMenu = (): void => {
        setMobileMenu(!isMobileMenu)
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
    }

    const handleOffcanvasMenu = (): void => {
        setOffcanvasMenu(!isOffcanvasMenu)
    }

    useEffect(() => {
        const WOW: any = require('wowjs');
        (window as any).wow = new WOW.WOW({ live: false });

        (window as any).wow.init()
        AOS.init()

        const onScroll = () => {
            setScroll(window.scrollY > 100)
        }

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <>
            {!headerStyle && <Header8 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isOffcanvasMenu={isOffcanvasMenu} handleOffcanvasMenu={handleOffcanvasMenu} />}
            {headerStyle == 1 && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isOffcanvasMenu={isOffcanvasMenu} handleOffcanvasMenu={handleOffcanvasMenu} />}
            {headerStyle == 6 && <Header6 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isOffcanvasMenu={isOffcanvasMenu} handleOffcanvasMenu={handleOffcanvasMenu} />}
            {headerStyle == 8 && <Header8 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isOffcanvasMenu={isOffcanvasMenu} handleOffcanvasMenu={handleOffcanvasMenu} />}

            <DataBg />
            <MagnetsComponent />
            <AddClassBody />

            <main className="fix" id='top'>
                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
                {children}
            </main>

            {!footerStyle && <Footer1 />}
            {footerStyle == 1 && <Footer1 />}
            {footerStyle == 2 && <Footer2 />}

            <BackToTop target="#top" />
        </>
    )
}
