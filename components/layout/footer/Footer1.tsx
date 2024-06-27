import Link from 'next/link'

export default function Footer1() {
    return (
        <>
            <footer>
                <div className="footer__area dark-bg">
                    <div className="container">
                        <div className="footer__cta-wrap pt-115 pb-120">
                            <p className="footer__cta-wrap-text text-white pb-115"><i className="fas fa-circle" /> Just send us your
                                idea and we will turn it into beautiful designs!</p>
                            <h2 className="footer__cta-wrap-title"><Link className="link-btn text-white" href="/contact">Let's start a
                                project <i className="icon-arrow-top-left" /></Link></h2>
                        </div>
                        <div className="footer__top fix">
                            <div className="row justify-content-between">
                                <div className="col-xl-auto col-md-6">
                                    <div className="footer__widget footer__location">
                                        <h4 className="footer__widget-title">Location</h4>
                                        <div className="footer__content">
                                            <p>Las Vegas, NV, USA
                                                201 Spear Street,
                                                San Francisco, CA, USA
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-auto col-md-6">
                                    <div className="footer__widget footer__conversation">
                                        <h4 className="footer__widget-title">Start a conversation</h4>
                                        <div className="footer__content">
                                            <p><Link href="mailto:work@vexadesign.com">work@vexadesign.com</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-auto col-md-6">
                                    <div className="footer__widget footer__copyright">
                                        <h4 className="footer__widget-title">© {new Date().getFullYear()} Vexa, All rights reserved.</h4>
                                        <div className="footer__link">
                                            <ul className="list-wrap">
                                                <li><Link href="/contact">Privacy Policy</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-auto col-md-6 col-sm-6">
                                    <div className="footer__widget footer__social">
                                        <ul className="list-wrap">
                                            <li><Link href="https://www.facebook.com/" target="_blank"><i className="social-icon fab fa-facebook-f" />FACEBOOK <i className="icon-arrow-top-left" /></Link></li>
                                            <li><Link href="https://www.instagram.com/" target="_blank"><i className="social-icon fab fa-instagram" />INSTAGRAM <i className="icon-arrow-top-left" /></Link></li>
                                            <li><Link href="https://twitter.com" target="_blank"><i className="social-icon fab fa-pinterest" />PINTEREST <i className="icon-arrow-top-left" /></Link></li>
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
