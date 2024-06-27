import Link from "next/link"

export default function Service3() {
    return (
        <>
            <section className="service-area-3 pt-110 pb-120 position-relative">
                <div className="service-area-bg-shape1 square-shape-wrap d-lg-inline-flex d-none">
                    <div className="square-shape1" />
                    <div className="square-shape2" />
                    <div className="square-shape3" />
                    <div className="square-shape4" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="section__title mb-50 wow img-custom-anim-left">
                                <h2 className="title">WE SPECIALIZE IN CRAFTING EXPERIENCES.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-0 gy-0">
                        <div className="col-12">
                            <ul className="service-wrap-area">
                                <li className="single-service-list">
                                    <div className="service-details">
                                        <p className="service-tag">01/ BRANDING</p>
                                        <h4 className="service-title"><Link href="/service-details">Branding Design</Link></h4>
                                    </div>
                                    <p className="service-text">We care success relationships fuel success we love building</p>
                                    <div className="btn-wrap">
                                        <Link href="/service-details" className="link-btn">
                                            View Project
                                            <i className="icon-arrow-top-left" />
                                        </Link>
                                    </div>
                                </li>
                                <li className="single-service-list">
                                    <div className="service-details">
                                        <p className="service-tag">02/ DEVELOPMENT</p>
                                        <h4 className="service-title"><Link href="/service-details">Web Development</Link></h4>
                                    </div>
                                    <p className="service-text">We care success relationships fuel success we love building</p>
                                    <div className="btn-wrap">
                                        <Link href="/service-details" className="link-btn">
                                            View Project
                                            <i className="icon-arrow-top-left" />
                                        </Link>
                                    </div>
                                </li>
                                <li className="single-service-list">
                                    <div className="service-details">
                                        <p className="service-tag">03/ Design</p>
                                        <h4 className="service-title"><Link href="/service-details">Graphic Design</Link></h4>
                                    </div>
                                    <p className="service-text">We care success relationships fuel success we love building</p>
                                    <div className="btn-wrap">
                                        <Link href="/service-details" className="link-btn">
                                            View Project
                                            <i className="icon-arrow-top-left" />
                                        </Link>
                                    </div>
                                </li>
                                <li className="single-service-list">
                                    <div className="service-details">
                                        <p className="service-tag">04/ Marketing</p>
                                        <h4 className="service-title"><Link href="/service-details">Digital Marketing</Link></h4>
                                    </div>
                                    <p className="service-text">We care success relationships fuel success we love building</p>
                                    <div className="btn-wrap">
                                        <Link href="/service-details" className="link-btn">
                                            View Project
                                            <i className="icon-arrow-top-left" />
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
