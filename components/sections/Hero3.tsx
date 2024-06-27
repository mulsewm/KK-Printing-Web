import Link from "next/link"

export default function Hero3() {
    return (
        <>
            <section className="hero-wrapper hero-3">
                <div className="container">
                    <div className="hero-style3">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="hero-title wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1s">Experienced
                                    Digital Agency
                                    Studio
                                </h1>
                                <p className="hero-text wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1s">We're not just developers we're digital architects, passionate about turning.</p>
                                <div className="tg-button-wrap g-0 wow img-custom-anim-left">
                                    <Link href="/contact" className="btn-with-icon">
                                        <span className="btn btn-two icon-btn">
                                            <i className="icon-arrow-top-left" />
                                        </span>
                                        <span className="btn btn-two">
                                            GET IN TOUCH
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-thumb3-1 position-relative">
                    <div className="square-shape-wrap">
                        <div className="square-shape1" />
                        <div className="square-shape2" />
                        <div className="square-shape3" />
                        <div className="square-shape4" />
                    </div>
                    <div className="thumb wow img-custom-anim-right position-relative">
                        <div className="square-shape-wrap">
                            <div className="square-shape1" />
                            <div className="square-shape2" />
                            <div className="square-shape3" />
                            <div className="square-shape4" />
                        </div>
                        <img src="/assets/img/hero/hero-3-1.jpg" alt="hero" />
                    </div>
                </div>
            </section>
        </>
    )
}
