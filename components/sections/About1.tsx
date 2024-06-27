import Link from "next/link"

export default function About1() {
    return (
        <>
            <section className="about-area-5 black2-bg pt-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="section__title mb-40">
                                <h2 className="shadow-title">ABOUT US</h2>
                                <h2 className="title title2 text-white wow img-custom-anim-left">BUILDING CUSTOMER-COMPANY BRIDGES.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-end">
                        <div className="col-lg-7">
                            <div className="section__title mb-90 wow img-custom-anim-left">
                                <p className="sec-text2 text-white">FROM USER EXPERIENCE TO STUNNING VISUALS, KRAK'S WEBSITE DESIGNS ARE UNMATCHED. EXPLORE OUR PORTFOLIO AND SEE WHY WE'RE THE AWARD–WINNING CHOICE FOR BUSINESSES.</p>
                                <Link href="/about" className="btn-with-icon style3 mt-20">
                                    <span className="btn btn-five icon-btn">
                                        <i className="icon-arrow-top-left" />
                                    </span>
                                    <span className="link-btn style3 text-white ms-3">
                                        LEARN MORE
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-0 gy-0">
                        <div className="col-12">
                            <div className="about-thumb-box1 wow img-custom-anim-top">
                                <img src="/assets/img/others/about5-1.jpg" alt="img" />
                            </div>
                            <div className="counter-grid-wrap mt-80">
                                <div className="counter-card wow img-custom-anim-top">
                                    <h2 className="counter-card-number">01</h2>
                                    <h3 className="counter-card-title"><span className="counter-number">20</span>+ years of experience</h3>
                                </div>
                                <div className="counter-card wow img-custom-anim-top">
                                    <h2 className="counter-card-number">02</h2>
                                    <h3 className="counter-card-title"><span className="counter-number">150</span>+ projects</h3>
                                </div>
                                <div className="counter-card wow img-custom-anim-top">
                                    <h2 className="counter-card-number">03</h2>
                                    <h3 className="counter-card-title"><span className="counter-number">35</span> Team Members</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
