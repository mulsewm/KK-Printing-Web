import Link from "next/link"

export default function Hero2() {
    return (
        <>
            <section className="hero-wrapper hero-2">
                <div className="hero-thumb2-1 wow img-custom-anim-right">
                    <div className="thumb">
                        <img src="/assets/img/hero/hero-2-2.jpg" alt="hero" />
                    </div>
                </div>
                <div className="container">
                    <div className="hero-style2">
                        <div className="row">
                            <div className="col-lg-10">
                                <h1 className="hero-title wow img-custom-anim-left text-white" data-wow-duration="1.5s" data-wow-delay="0.1s">WE ARE A <img src="/assets/img/hero/hero-2-1.jpg" alt="img" /></h1>
                                <h1 className="hero-title text-theme wow img-custom-anim-right" data-wow-duration="1.5s" data-wow-delay="0.2s"><span className="text-theme">CREATIVE DIGITAL</span></h1>
                                <h1 className="hero-title text-center wow img-custom-anim-left text-white" data-wow-duration="1.5s" data-wow-delay="0.3s">AGENCY</h1>
                            </div>
                            <div className="col-xl-9 offset-xl-2 align-self-end">
                                <div className="hero-flex-wrap">
                                    <div className="hero-flex-content">
                                        <p className="hero-text wow img-custom-anim-left text-white" data-wow-duration="1.5s" data-wow-delay="0.1s">Based in London, We specialize in creating immersive digital experiences that resonate with users and
                                            drive meaningful engagement.</p>
                                        <div className="tg-button-wrap mt-40">
                                            <Link href="/about" className="btn square-btn wow img-custom-anim-left">
                                                VIEW OUR WORK
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
                                        <div className="work-counter-wrap wow img-custom-anim-right">
                                            <div className="text-theme"><span className="counter-number">1400</span>+</div> Projects Done
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-thumb2-2 wow img-custom-anim-left">
                    <div className="thumb">
                        <img src="/assets/img/hero/hero-2-3.jpg" alt="hero" />
                    </div>
                </div>
            </section>
        </>
    )
}
