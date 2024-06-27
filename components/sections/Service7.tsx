import Link from "next/link"

export default function Service7() {
    return (
        <>
            <section className="service-area-7 pt-110 pb-105 position-relative overflow-hidden">
                <div className="container">
                    <div className="section__title mb-50 wow img-custom-anim-left">
                        <div className="row gy-4">
                            <div className="col-lg-8">
                                <h2 className="title title2 text-white">My Best Services We Offer</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-90 justify-content-between">
                        <div className="col-lg-6">
                            <div className="single-service-card-8 tg-img-reveal-item" data-fx={1} data-img="assets/img/project/project7-1.jpg">
                                <div className="service-card-details">
                                    <h4 className="service-card-title"><Link href="/service-details"><span className="service-number">01/</span> UI/UX Design</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single-service-card-8 tg-img-reveal-item" data-fx={1} data-img="assets/img/project/project7-4.jpg">
                                <div className="service-card-details">
                                    <h4 className="service-card-title"><Link href="/service-details"><span className="service-number">02/</span> Brand Design</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single-service-card-8 tg-img-reveal-item" data-fx={1} data-img="assets/img/project/project7-2.jpg">
                                <div className="service-card-details">
                                    <h4 className="service-card-title"><Link href="/service-details"><span className="service-number">03/</span> Web Design</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single-service-card-8 tg-img-reveal-item" data-fx={1} data-img="assets/img/project/project7-3.jpg">
                                <div className="service-card-details">
                                    <h4 className="service-card-title"><Link href="/service-details"><span className="service-number">04/</span> Graphic Design</Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
