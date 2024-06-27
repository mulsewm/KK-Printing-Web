import Link from "next/link"

export default function Service2() {
    return (
        <>
            <section className="service-area-2 pt-120 pb-120">
                <div className="section__title section__title-two text-lg-start text-center">
                    <div className="container-fluid">
                        <div className="row gx-0">
                            <div className="col-xl-2 col-lg-3">
                                <h6 className="sub-title wow img-custom-anim-left">SERVICES</h6>
                            </div>
                            <div className="col-xl-6 col-lg-9">
                                <h2 className="title wow img-custom-anim-left">DESIGN  DEVELOPMENT SERVICES</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row gx-0 service-card-wrap">
                        <div className="col-xl-3 col-md-6 service-card-item">
                            <div className="service-card">
                                <div className="service-card-img">
                                    <img src="/assets/img/service/1-3.jpg" alt="img" />
                                </div>
                                <h5 className="service-card-number">01</h5>
                                <h4 className="service-card-title"><Link href="/service-details">UI/UX Design</Link></h4>
                                <p className="service-card-text">Build success through strong relationships. Let us assist you in building your brand.</p>
                                <Link href="/service-details" className="link-btn">
                                    Learn More
                                    <i className="icon-arrow-top-left" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 service-card-item">
                            <div className="service-card">
                                <div className="service-card-img">
                                    <img src="/assets/img/service/1-2.jpg" alt="img" />
                                </div>
                                <h5 className="service-card-number">02</h5>
                                <h4 className="service-card-title"><Link href="/service-details">Web Design</Link></h4>
                                <p className="service-card-text">Build success through strong relationships. Let us assist you in building your brand.</p>
                                <Link href="/service-details" className="link-btn">
                                    Learn More
                                    <i className="icon-arrow-top-left" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 service-card-item">
                            <div className="service-card">
                                <div className="service-card-img">
                                    <img src="/assets/img/service/1-3.jpg" alt="img" />
                                </div>
                                <h5 className="service-card-number">03</h5>
                                <h4 className="service-card-title"><Link href="/service-details">Brand Design</Link></h4>
                                <p className="service-card-text">Build success through strong relationships. Let us assist you in building your brand.</p>
                                <Link href="/service-details" className="link-btn">
                                    Learn More
                                    <i className="icon-arrow-top-left" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 service-card-item">
                            <div className="service-card">
                                <div className="service-card-img">
                                    <img src="/assets/img/service/1-2.jpg" alt="img" />
                                </div>
                                <h5 className="service-card-number">04</h5>
                                <h4 className="service-card-title"><Link href="/service-details">Brand Design</Link></h4>
                                <p className="service-card-text">Build success through strong relationships. Let us assist you in building your brand.</p>
                                <Link href="/service-details" className="link-btn">
                                    Learn More
                                    <i className="icon-arrow-top-left" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
