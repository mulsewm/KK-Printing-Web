import Link from "next/link"

export default function Blog2() {
    return (
        <>
            <section className="blog-area-1 pt-110">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <div className="section__title mb-50">
                                <h2 className="title wow img-custom-anim-left">LATEST BLOG</h2>
                            </div>
                        </div>
                        <div className="col-lg-auto">
                            <div className="tg-button-wrap mb-50">
                                <Link href="/blog" className="btn border-dark2 wow img-custom-anim-right">
                                    See All Blog
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-40 justify-content-center">
                        <div className="col-xl-4 col-md-6">
                            <div className="blog__post-item-two shine-animate-item">
                                <div className="blog__post-thumb">
                                    <Link className="shine-animate" href="/blog-details"><img src="/assets/img/blog/2-1.jpg" alt="img" /></Link>
                                </div>
                                <div className="blog__post-content">
                                    <h3 className="title"><Link href="/blog-details">The Importance of a Strong Brand Positioning</Link></h3>
                                    <Link href="/about" className="link-btn">
                                        Read More
                                        <i className="icon-arrow-top-left" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog__post-item-two shine-animate-item">
                                <div className="blog__post-thumb">
                                    <Link className="shine-animate" href="/blog-details"><img src="/assets/img/blog/2-2.jpg" alt="img" /></Link>
                                </div>
                                <div className="blog__post-content">
                                    <h3 className="title"><Link href="/blog-details">The Role of Market Research in Branding of the years</Link></h3>
                                    <Link href="/about" className="link-btn">
                                        Read More
                                        <i className="icon-arrow-top-left" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog__post-item-two shine-animate-item">
                                <div className="blog__post-thumb">
                                    <Link className="shine-animate" href="/blog-details"><img src="/assets/img/blog/2-3.jpg" alt="img" /></Link>
                                </div>
                                <div className="blog__post-content">
                                    <h3 className="title"><Link href="/blog-details">The Impact of Social Media on Branding Strategy</Link></h3>
                                    <Link href="/about" className="link-btn">
                                        Read More
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
