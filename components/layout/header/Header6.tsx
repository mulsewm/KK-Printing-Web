import Link from 'next/link';
import Menu from '../Menu';
import OffcanvasMenu from '../OffcanvasMenu';
import MobileMenu from '../MobileMenu';

interface Header6Props {
    scroll: boolean;
    isMobileMenu: boolean;
    handleMobileMenu: (open: boolean) => void;
    isOffcanvasMenu: boolean;
    handleOffcanvasMenu: () => void;
}

export default function Header6({ scroll, isMobileMenu, handleMobileMenu, isOffcanvasMenu, handleOffcanvasMenu }: Header6Props) {
    return (
        <>
            <header>
                <div id="sticky-header" className={`tg-header__area transparent-header tg-header__area-six ${scroll ? "sticky-menu" : ""}`}>
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="tgmenu__wrap">
                                    <nav className="tgmenu__nav">
                                        <div className="logo">
                                            <Link href="/">
                                                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>
                                                    <span style={{ color: '#000' }}>KK</span> <span style={{ color: '#000' }}>Trading</span>
                                                </h1>
                                            </Link>
                                        </div>
                                        <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                                            <Menu />
                                        </div>
                                        <div className="tgmenu__action d-none d-md-block">
                                            <ul className="list-wrap">
                                                <li className="offCanvas-menu" onClick={handleOffcanvasMenu}>
                                                    <a className="menu-tigger sidebar-btn">
                                                        <span className="line" />
                                                        <span className="line" />
                                                        <span className="line" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="mobile-nav-toggler" onClick={() => handleMobileMenu(true)}>
                                            <a className="sidebar-btn">
                                                <span className="line" />
                                                <span className="line" />
                                                <span className="line" />
                                            </a>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className={`tgmobile__menu ${isMobileMenu ? 'open' : ''}`}>
                    <nav className="tgmobile__menu-box">
                        <div className="close-btn" onClick={() => handleMobileMenu(false)}><i className="fas fa-times" /></div>
                        <div className="nav-logo">
                            <Link href="/">
                                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0, color: '#fff' }}>
                                    <span style={{ color: '#fff' }}>KK</span> <span style={{ color: '#fff' }}>Trading</span>
                                </h1>
                            </Link>
                        </div>
                        <div className="tgmobile__menu-outer">
                            <MobileMenu isMobileMenuOpen={isMobileMenu} handleMobileMenu={handleMobileMenu} />
                        </div>
                        <div className="tgmobile__menu-bottom">
                            <div className="contact-info">
                                <ul className="list-wrap">
                                    <li><Link href="mailto:kkprint.st@gmail.com">kkprint.st@gmail.com</Link></li>
                                    <li><Link href="tel:+251910357628">+251 910 35 76 28</Link></li>
                                </ul>
                            </div>
                            <div className="social-links">
                                <ul className="list-wrap">
                                    <li><Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f" /></Link></li>
                                    <li><Link href="https://twitter.com" target="_blank"><i className="fab fa-twitter" /></Link></li>
                                    <li><Link href="https://www.whatsapp.com/" target="_blank"><i className="fab fa-whatsapp" /></Link></li>
                                    <li><Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram" /></Link></li>
                                    <li><Link href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className={`tgmobile__menu-backdrop ${isMobileMenu ? 'active' : ''}`} onClick={() => handleMobileMenu(false)} />
                {/* End Mobile Menu */}
                {/* offCanvas-menu */}
                <OffcanvasMenu isOffcanvasMenu={isOffcanvasMenu} handleOffcanvasMenu={handleOffcanvasMenu} />
                {/* offCanvas-menu-end */}
            </header>
        </>
    );
}
