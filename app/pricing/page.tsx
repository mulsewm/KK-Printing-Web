import Accordion from '@/components/elements/Accordion'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Pricing() {

    return (
        <>

            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Pricing">
                <div>
                    <section className="pricing-area-1 pt-110 pb-120 overflow-hidden">
                        <div className="container">
                            <div className="section__title mb-50 wow img-custom-anim-top text-center">
                                <h2 className="title">Pick a plan</h2>
                            </div>
                            <div className="row gy-30 justify-content-center">
                                <div className="col-lg-4 col-md-6 wow img-custom-anim-left">
                                    <div className="pricing-card style2">
                                        <h4 className="pricing-card_title">Startup</h4>
                                        <div className="price-card-wrap">
                                            <h4 className="pricing-card_price"><span className="currency">$</span>180<span className="duration">/mo</span>
                                            </h4>
                                        </div>
                                        <p>What’s included:</p>
                                        <div className="checklist">
                                            <ul>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Web  Mobile</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Free Custom Domain</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Best Hosting Ever</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Outstanding Support</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Web Design</li>
                                            </ul>
                                        </div>
                                        <div className="tg-button-wrap justify-content-center">
                                            <Link href="/contact" className="btn btn-two square-btn">
                                                CHOOSE THIS PLAN
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow img-custom-anim-top">
                                    <div className="pricing-card active style2">
                                        <h4 className="pricing-card_title">Pro</h4>
                                        <div className="price-card-wrap">
                                            <h4 className="pricing-card_price"><span className="currency">$</span>190<span className="duration">/mo</span>
                                            </h4>
                                        </div>
                                        <p>What’s included:</p>
                                        <div className="checklist">
                                            <ul>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Web  Mobile</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Free Custom Domain</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Best Hosting Ever</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Outstanding Support</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Web Design</li>
                                            </ul>
                                        </div>
                                        <div className="tg-button-wrap justify-content-center">
                                            <Link href="/contact" className="btn btn-two square-btn">
                                                CHOOSE THIS PLAN
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow img-custom-anim-right">
                                    <div className="pricing-card style2">
                                        <h4 className="pricing-card_title">Team</h4>
                                        <div className="price-card-wrap">
                                            <h4 className="pricing-card_price"><span className="currency">$</span>280<span className="duration">/mo</span>
                                            </h4>
                                        </div>
                                        <p>What’s included:</p>
                                        <div className="checklist">
                                            <ul>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Web  Mobile</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Free Custom Domain</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Best Hosting Ever</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Outstanding Support</li>
                                                <li><img src="/assets/img/icon/svg-img/check-circle.svg" alt="img" /> Web Design</li>
                                            </ul>
                                        </div>
                                        <div className="tg-button-wrap justify-content-center">
                                            <Link href="/contact" className="btn btn-two square-btn">
                                                CHOOSE THIS PLAN
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*======== / Pricing Section ========*/}
                    {/*==============================
    FAQ Area 2
    ==============================*/}
                    <section className="faq-area-2 pb-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <Accordion />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}