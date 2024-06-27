import Link from "next/link"
import CircleComponent from '../elements/CircleComponent'

export default function Hero4() {
    return (
        <>
            <section className="hero-wrapper hero-4" data-background="assets/img/hero/hero-4-1.jpg">
                <div className="container">
                    <div className="hero-style4">
                        <div className="row">
                            <div className="col-lg-11">
                                <h1 className="hero-title wow img-custom-anim-left text-white" data-wow-duration="1.5s" data-wow-delay="0.1s">YOUR DIGITAL MARKETING TEAM
                                </h1>
                                <div className="hero-flex-wrap">
                                    <div className="hero-flex-content">
                                        <p className="hero-text wow img-custom-anim-left text-white" data-wow-duration="1.5s" data-wow-delay="0.1s">Beautiful design has the power to captivate audiences. VEXA specializes in creating stunning designs.</p>
                                        <div className="tg-button-wrap g-0 wow img-custom-anim-left">
                                            <Link href="/contact" className="btn-with-icon">
                                                <span className="btn btn-four icon-btn">
                                                    <i className="icon-arrow-top-left" />
                                                </span>
                                                <span className="btn btn-four">
                                                    GET IN TOUCH
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="work-thumb-wrap">
                                        <div className="work-group-thumb wow img-custom-anim-top">
                                            <div className="thumb">
                                                <img src="/assets/img/others/group-img-1-1.jpg" alt="img" />
                                            </div>
                                            <div className="thumb">
                                                <img src="/assets/img/others/group-img-1-2.jpg" alt="img" />
                                            </div>
                                            <div className="thumb">
                                                <img src="/assets/img/others/group-img-1-3.jpg" alt="img" />
                                            </div>
                                        </div>
                                        <div className="work-counter-wrap wow img-custom-anim-right mt-10">
                                            <div><span className="counter-number">140</span>K+</div> Projects Done
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center scroll-to-target wow img-custom-anim-top" data-target="#scroll-down-sec">
                            {/* <div className="circle-text-wrap position-relative">
                                <div className="circle-text-tag">
                                    <span className="hero-title-anime">SCROLL DOWN SCROLL DOWN SCROLL DOWN</span>
                                </div>
                                <i className="icon-arrow-top-left arrow-down" />
                            </div> */}
                            <CircleComponent />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
