import Link from "next/link"

export default function Work() {
    return (
        <>
            <section className="work-area pt-120 pb-120 dark-bg">
                <div className="container">
                    <div className="work-wrap-header">
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
                            <div className="work-counter-wrap wow img-custom-anim-left">
                                <span className="counter-number">140</span>K+ Projects Done
                            </div>
                        </div>
                        <h3 className="work-wrap-text wow img-custom-anim-right">
                            Design from our team always have philosophy that grounded in attention to detail.
                        </h3>
                    </div>
                    <div className="pt-100 pb-120">
                        <div className="row gy-40 align-items-center">
                            <div className="col-lg-6 wow img-custom-anim-left">
                                <div className="work-img-wrap1">
                                    <img src="/assets/img/others/work-thumb1-1.jpg" alt="img" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="work-wrap-details wow img-custom-anim-left ">
                                    <div className="section__title mb-40">
                                        <h2 className="title text-white">NICE BLOCK APPLE  MANGO</h2>
                                        <p className="sec-text text-white">Nice Block Apple  Mango about ice block that has
                                            theme cute branding and fun coloring. The client want us to create more unique
                                            and creative design than before.</p>
                                    </div>
                                    <div className="blog__post-meta">
                                        <ul className="list-wrap">
                                            <li><Link href="/blog-details">BRANDING</Link></li>
                                            <li><Link href="/blog-details">LOGO DESIGN</Link></li>
                                            <li><Link href="/blog-details">MOCKUP</Link></li>
                                        </ul>
                                    </div>
                                    <div className="tg-button-wrap mt-70">
                                        <Link href="/about" className="link-btn">
                                            View Project
                                            <i className="icon-arrow-top-left" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-40 align-items-center flex-row-reverse">
                        <div className="col-xl-5 col-lg-6 wow img-custom-anim-right">
                            <div className="work-img-wrap1">
                                <img src="/assets/img/others/work-thumb1-2.jpg" alt="img" />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="work-wrap-details wow img-custom-anim-right ">
                                <div className="section__title mb-40">
                                    <h2 className="title text-white">DANIEL BARKLE CARD HOLOGRAPHIC</h2>
                                    <p className="sec-text text-white">We love our residential design and build projects - big
                                        and small! From full builds, major renovations or a new lease of life to individual
                                        space and creating perfect place.</p>
                                </div>
                                <div className="blog__post-meta">
                                    <ul className="list-wrap">
                                        <li><Link href="/blog-details">BRANDING</Link></li>
                                        <li><Link href="/blog-details">LOGO DESIGN</Link></li>
                                        <li><Link href="/blog-details">MOCKUP</Link></li>
                                    </ul>
                                </div>
                                <div className="tg-button-wrap mt-70">
                                    <Link href="/about" className="link-btn">
                                        View Project
                                        <i className="icon-arrow-top-left" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tg-button-wrap mt-80 justify-content-center">
                        <Link href="/about" className="btn big-circle-btn style2 gsap-magnetic">
                            VIEW ALL
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
