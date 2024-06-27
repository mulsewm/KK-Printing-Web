import Link from "next/link"

export default function Blog7() {
    return (
        <>
            <section className="blog-area-4 pt-110 pb-120">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-5">
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
                            <div className="blog__post-item-five shine-animate-item">
                                <div className="blog__post-thumb">
                                    <Link className="shine-animate" href="/blog-details"><img src="/assets/img/blog/7-1.jpg" alt="img" /></Link>
                                </div>
                                <div className="blog__post-content">
                                    <h3 className="title"><Link href="/blog-details">OUR DESIGN PROCESS EXPLAINED</Link></h3>
                                    <Link href="/about" className="link-btn">
                                        Read More
                                        <i className="icon-arrow-top-left" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog__post-item-five shine-animate-item">
                                <div className="blog__post-thumb">
                                    <Link className="shine-animate" href="/blog-details"><img src="/assets/img/blog/7-2.jpg" alt="img" /></Link>
                                </div>
                                <div className="blog__post-content">
                                    <h3 className="title"><Link href="/blog-details">A PEEK INTO OUR BRANDING STRATEGY</Link></h3>
                                    <Link href="/about" className="link-btn">
                                        Read More
                                        <i className="icon-arrow-top-left" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog__post-item-five shine-animate-item">
                                <div className="blog__post-thumb">
                                    <Link className="shine-animate" href="/blog-details"><img src="/assets/img/blog/7-3.jpg" alt="img" /></Link>
                                </div>
                                <div className="blog__post-content">
                                    <h3 className="title"><Link href="/blog-details">DEVELOPING SEAMLESS MOBILE APPS</Link></h3>
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
