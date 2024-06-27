import Link from "next/link"

export default function Blog1() {
    return (
        <>
            <section className="blog-area-1 pt-110 pb-120">
                <div className="container">
                    <div className="section__title mb-50">
                        <h2 className="title wow img-custom-anim-left">INSIGHTS</h2>
                    </div>
                    <div className="row gy-30 align-items-end">
                        <div className="col-12">
                            <div className="blog__post-item">
                                <div className="blog__post-thumb wow img-custom-anim-right">
                                    <Link href="/blog-details"><img src="/assets/img/blog/1-1.jpg" alt="img" /></Link>
                                </div>
                                <div className="blog__post-content wow img-custom-anim-left">
                                    <span className="blog__post-date">20 Jan 2024</span>
                                    <h3 className="title"><Link href="/blog-details">New user-friendly design framework for
                                        global IT products</Link></h3>
                                    <div className="blog__post-bottom">
                                        <div className="blog__post-meta">
                                            <ul className="list-wrap">
                                                <li><Link href="/blog-details">BRANDING</Link></li>
                                                <li><Link href="/blog-details">LOGO DESIGN</Link></li>
                                                <li><Link href="/blog-details">MOCKUP</Link></li>
                                            </ul>
                                        </div>
                                        <Link href="/about" className="link-btn">
                                            Read More
                                            <i className="icon-arrow-top-left" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="blog__post-item">
                                <div className="blog__post-thumb wow img-custom-anim-right">
                                    <Link href="/blog-details"><img src="/assets/img/blog/1-2.jpg" alt="img" /></Link>
                                </div>
                                <div className="blog__post-content wow img-custom-anim-left">
                                    <span className="blog__post-date">20 Jan 2024</span>
                                    <h3 className="title"><Link href="/blog-details">Introduction to Branding for UI/UX
                                        Designers</Link></h3>
                                    <div className="blog__post-bottom">
                                        <div className="blog__post-meta">
                                            <ul className="list-wrap">
                                                <li><Link href="/blog-details">BRANDING</Link></li>
                                                <li><Link href="/blog-details">LOGO DESIGN</Link></li>
                                                <li><Link href="/blog-details">MOCKUP</Link></li>
                                            </ul>
                                        </div>
                                        <Link href="/about" className="link-btn">
                                            Read More
                                            <i className="icon-arrow-top-left" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="blog__post-item">
                                <div className="blog__post-thumb wow img-custom-anim-right">
                                    <Link href="/blog-details"><img src="/assets/img/blog/1-3.jpg" alt="img" /></Link>
                                </div>
                                <div className="blog__post-content wow img-custom-anim-left">
                                    <span className="blog__post-date">20 Jan 2024</span>
                                    <h3 className="title"><Link href="/blog-details">Blender for Beginners: A Tutorial That’ll
                                        Help You Get Started</Link></h3>
                                    <div className="blog__post-bottom">
                                        <div className="blog__post-meta">
                                            <ul className="list-wrap">
                                                <li><Link href="/blog-details">BRANDING</Link></li>
                                                <li><Link href="/blog-details">LOGO DESIGN</Link></li>
                                                <li><Link href="/blog-details">MOCKUP</Link></li>
                                            </ul>
                                        </div>
                                        <Link href="/about" className="link-btn">
                                            Read More
                                            <i className="icon-arrow-top-left" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tg-button-wrap justify-content-center mt-70">
                        <Link href="/about" className="btn border-dark wow img-custom-anim-top">
                            More Insights
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
