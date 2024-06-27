import Link from "next/link"

export default function Hero8() {
    return (
        <>
            <section className="hero-wrapper hero-8 black2-bg">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-5">
                            <div className="hero-thumb7">
                                <img src="/assets/img/hero/hero-8-1.jpg" alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="hero-style8">
                                <h1 className="hero-title text-white wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1s">
                                    I’m Thomas.
                                </h1>
                                <h1 className="hero-title text-white wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1s">
                                    I create digital products
                                </h1>
                                <h1 className="hero-title text-white wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1s">
                                    experienced.
                                </h1>
                                <p className="hero-text text-white wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s">I focused on creating memorable digital experiences, mainly creating.</p>
                                <div className="tg-button-wrap wow img-custom-anim-left">
                                    <div className="custom-arrow" />
                                    <Link href="/about" className="btn big-circle-btn style3 gsap-magnetic">
                                        LET'S TALK WITH US
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
