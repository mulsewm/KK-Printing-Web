import Link from "next/link"

export default function Service4() {
    return (
        <>
            <section className="service-area-4 pt-110 pb-120" id="scroll-down-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section__title mb-50">
                                <h2 className="title wow img-custom-anim-left">EXPLORE OUR CLIENT SERVICES</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-0 gy-0">
                        <div className="col-12">
                            <ul className="service-wrap-area style2">
                                <li className="single-service-list">
                                    <div className="service-details">
                                        <p className="service-tag">01.</p>
                                        <h4 className="service-title"><Link href="/service-details">Social Advertising</Link></h4>
                                    </div>
                                    <p className="service-text">We care success relationships fuel success we love building</p>
                                    <div className="btn-wrap">
                                        <Link href="/service-details" className="icon-btn">
                                            <i className="icon-arrow-top-left2" />
                                        </Link>
                                    </div>
                                </li>
                                <li className="single-service-list">
                                    <div className="service-details">
                                        <p className="service-tag">02.</p>
                                        <h4 className="service-title"><Link href="/service-details">SEO Optimization</Link></h4>
                                    </div>
                                    <p className="service-text">We care success relationships fuel success we love building</p>
                                    <div className="btn-wrap">
                                        <Link href="/service-details" className="icon-btn">
                                            <i className="icon-arrow-top-left2" />
                                        </Link>
                                    </div>
                                </li>
                                <li className="single-service-list">
                                    <div className="service-details">
                                        <p className="service-tag">03.</p>
                                        <h4 className="service-title"><Link href="/service-details">Content Creation</Link></h4>
                                    </div>
                                    <p className="service-text">We care success relationships fuel success we love building</p>
                                    <div className="btn-wrap">
                                        <Link href="/service-details" className="icon-btn">
                                            <i className="icon-arrow-top-left2" />
                                        </Link>
                                    </div>
                                </li>
                                <li className="single-service-list">
                                    <div className="service-details">
                                        <p className="service-tag">04.</p>
                                        <h4 className="service-title"><Link href="/service-details">Email Marketing</Link></h4>
                                    </div>
                                    <p className="service-text">We care success relationships fuel success we love building</p>
                                    <div className="btn-wrap">
                                        <Link href="/service-details" className="icon-btn">
                                            <i className="icon-arrow-top-left2" />
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
