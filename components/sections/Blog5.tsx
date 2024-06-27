import Link from "next/link"

export default function Blog5() {
    return (
        <>
            <section className="blog-area-4 pt-90 pb-120 black2-bg">
                <div className="container">
                    <div className="row justify-content-between align-items-end">
                        <div className="col-lg-6">
                            <div className="section__title mb-55">
                                <h2 className="shadow-title">BLOG</h2>
                                <h2 className="title title2 text-white wow img-custom-anim-left">Our Blog Posts</h2>
                            </div>
                        </div>
                        <div className="col-lg-auto">
                            <div className="tg-button-wrap mb-50">
                                <Link href="/blog" className="btn border-white square-btn btn-font2 wow img-custom-anim-right">
                                    See All Blog
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-40 justify-content-center">
                        <div className="col-xl-4 col-md-6">
                            <div className="blog__post-item-four shine-animate-item">
                                <div className="blog__post-thumb">
                                    <Link className="shine-animate" href="/blog-details"><img src="/assets/img/blog/5-1.jpg" alt="img" /></Link>
                                </div>
                                <div className="blog__post-content">
                                    <div className="blog__post-meta">
                                        <span className="blog__post-author">By <Link href="/blog">vexa</Link></span>
                                        <span className="blog__post-date">Jan 26, 2024</span>
                                    </div>
                                    <h3 className="title"><Link className="text-white" href="/blog-details">OUR DESIGN PROCESS EXPLAINED</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog__post-item-four shine-animate-item">
                                <div className="blog__post-thumb">
                                    <Link className="shine-animate" href="/blog-details"><img src="/assets/img/blog/5-2.jpg" alt="img" /></Link>
                                </div>
                                <div className="blog__post-content">
                                    <div className="blog__post-meta">
                                        <span className="blog__post-author">By <Link href="/blog">vexa</Link></span>
                                        <span className="blog__post-date">Jan 26, 2024</span>
                                    </div>
                                    <h3 className="title"><Link className="text-white" href="/blog-details">STRATEGIES FOR SPEED AND USER EXPERIENCE</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog__post-item-four shine-animate-item">
                                <div className="blog__post-thumb">
                                    <Link className="shine-animate" href="/blog-details"><img src="/assets/img/blog/5-3.jpg" alt="img" /></Link>
                                </div>
                                <div className="blog__post-content">
                                    <div className="blog__post-meta">
                                        <span className="blog__post-author">By <Link href="/blog">vexa</Link></span>
                                        <span className="blog__post-date">Jan 26, 2024</span>
                                    </div>
                                    <h3 className="title"><Link className="text-white" href="/blog-details">A PEEK INTO OUR BRANDING STRATEGY</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
