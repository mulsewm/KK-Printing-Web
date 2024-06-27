import Link from "next/link"

export default function Service5() {
    return (
        <>
            <section className="service-area-6 pb-120 black2-bg">
                <div className="section__title section__title-three mb-55 wow img-custom-anim-left">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-9">
                                <h6 className="sub-title2 text-white">SERVICES</h6>
                                <h2 className="title title2 text-white">WE OFFER A WIDE RANGE OF BRAND SERVICES</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row gy-30 justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="service-card2 shine-animate-item">
                                <h5 className="service-card2-number">01.</h5>
                                <h4 className="service-card2-title"><Link href="/service-details">BRANDING DESIGN</Link></h4>
                                <p className="service-card2-text">We care success relationships fuel success we love building</p>
                                <div className="service-card2-img shine-animate">
                                    <img src="/assets/img/service/6-1.jpg" alt="img" />
                                    <Link href="/service-details" className="btn icon-btn">
                                        <i className="icon-arrow-top-left" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-card2 shine-animate-item">
                                <h5 className="service-card2-number">02.</h5>
                                <h4 className="service-card2-title"><Link href="/service-details">WEB DEVELOPMENT</Link></h4>
                                <p className="service-card2-text">We care success relationships fuel success we love building</p>
                                <div className="service-card2-img shine-animate">
                                    <img src="/assets/img/service/6-2.jpg" alt="img" />
                                    <Link href="/service-details" className="btn icon-btn">
                                        <i className="icon-arrow-top-left" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-card2 shine-animate-item">
                                <h5 className="service-card2-number">03.</h5>
                                <h4 className="service-card2-title"><Link href="/service-details">DIGITAL MARKETING</Link></h4>
                                <p className="service-card2-text">We care success relationships fuel success we love building</p>
                                <div className="service-card2-img shine-animate">
                                    <img src="/assets/img/service/6-3.jpg" alt="img" />
                                    <Link href="/service-details" className="btn icon-btn">
                                        <i className="icon-arrow-top-left" />
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
