import Link from 'next/link'

export default function Footer1() {
    return (
        <>
            <footer>
                <div className="footer__area black-bg">
                    <div className="container">
                        {/* <div className="footer__cta-wrap pt-115 pb-120">
                            <p className="footer__cta-wrap-text text-white pb-115"><i className="fas fa-circle" /> Just share your printing or stationery needs, and we will provide the best solutions!</p>
                            <h2 className="footer__cta-wrap-title"><Link className="link-btn text-white" href="/contact">Let's start a project <i className="icon-arrow-top-left" /></Link></h2>
                        </div> */}
                        <div className="footer__top fix">
                            <div className="row justify-content-between">
                                <div className="col-xl-auto col-md-6">
                                    <div className="footer__widget footer__location">
                                        <h4 className="footer__widget-title">Location</h4>
                                        <div className="footer__content">
                                            <p>Addis Ababa, Ethiopia</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-auto col-md-6">
                                    <div className="footer__widget footer__conversation">
                                        <h4 className="footer__widget-title">Start a conversation</h4>
                                        <div className="footer__content">
                                            <p><Link href="mailto:kkprint.st@gmail.com">kkprint.st@gmail.com</Link></p>
                                            <p><Link href="mailto:sales@kktradinget.com">sales@kktradinget.com</Link></p>
                                            <p>Mobile: <Link href="tel:+251910357628">+251 910 35 76 28</Link></p>
                                            <p>Mobile 2: <Link href="tel:+251984716454">+251 984 71 64 54</Link></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-auto col-md-6">
                                    <div className="footer__widget footer__copyright">
                                        <h4 className="footer__widget-title">© {new Date().getFullYear()} KK Printing, All rights reserved.</h4>
                                        <div className="footer__link">
                                            <ul className="list-wrap">
                                                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-auto col-md-6 col-sm-6">
                                    <div className="footer__widget footer__social">
                                        <ul className="list-wrap">
                                            <li><Link href="https://www.facebook.com/" target="_blank"><i className="social-icon fab fa-facebook-f" />FACEBOOK <i className="icon-arrow-top-left" /></Link></li>
                                            <li><Link href="https://www.instagram.com/" target="_blank"><i className="social-icon fab fa-instagram" />INSTAGRAM <i className="icon-arrow-top-left" /></Link></li>
                                            <li><Link href="https://www.pinterest.com" target="_blank"><i className="social-icon fab fa-pinterest" />PINTEREST <i className="icon-arrow-top-left" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <div className="container text-center">
                            <button className="scroll__footer-top scroll-to-target open text-white" data-target="html">
                                Back to top <i className="fas fa-arrow-up" />
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
