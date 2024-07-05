import Link from "next/link"

export default function Hero7() {
    return (
        <>
            <section className="hero-wrapper hero-7">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="hero-style7">
                                <h1 className="hero-title wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1s">
                                DELIVERING TOP-NOTCH PRINTING AND STATIONERY SERVICES <img src="/assets/img/hero/hero-7-1.jpg" alt="img" />
                                </h1>
                                <div className="hero-flex-wrap">
                                    <img className="content-thumb wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.2s" src="/assets/img/hero/hero-7-2.jpg" alt="img" />
                                    <p className="hero-text wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s">KK Printing and Stationery offers a wide range of printing services and stationery supplies to meet all your needs.</p>
                                    <div className="tg-button-wrap" data-aos="fade-up" data-aos-delay={200}>
                                        <Link href="/#contact" className="btn big-circle-btn style4 gsap-magnetic">
                                            LET'S TALK WITH US
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
