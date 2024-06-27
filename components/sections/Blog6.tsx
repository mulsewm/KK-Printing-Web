import Link from "next/link"

export default function Blog6() {
    return (
        <>
            <section className="blog-area-4 pb-120 black2-bg">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-7">
                            <div className="section__title mb-55">
                                <h2 className="title title2 text-white wow img-custom-anim-left">OUR BLOG POSTS</h2>
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
                                    <Link className="shine-animate" href="/blog-details"><img src="/assets/img/blog/6-1.jpg" alt="img" /></Link>
                                </div>
                                <div className="blog__post-content">
                                    <div className="blog__post-meta">
                                        <span className="blog__post-author">By <Link href="/blog">vexa</Link></span>
                                        <span className="blog__post-date">Jan 26, 2024</span>
                                    </div>
                                    <h3 className="title"><Link className="text-white" href="/blog-details">GETTING YOUR TEAM ONBOARD A NEW APP</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog__post-item-four shine-animate-item">
                                <div className="blog__post-thumb">
                                    <Link className="shine-animate" href="/blog-details"><img src="/assets/img/blog/6-2.jpg" alt="img" /></Link>
                                </div>
                                <div className="blog__post-content">
                                    <div className="blog__post-meta">
                                        <span className="blog__post-author">By <Link href="/blog">vexa</Link></span>
                                        <span className="blog__post-date">Jan 26, 2024</span>
                                    </div>
                                    <h3 className="title"><Link className="text-white" href="/blog-details">HOW TO DESIGN PACKAGING FOR YOUR NEXT PRODUCT</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog__post-item-four shine-animate-item">
                                <div className="blog__post-thumb">
                                    <Link className="shine-animate" href="/blog-details"><img src="/assets/img/blog/6-3.jpg" alt="img" /></Link>
                                </div>
                                <div className="blog__post-content">
                                    <div className="blog__post-meta">
                                        <span className="blog__post-author">By <Link href="/blog">vexa</Link></span>
                                        <span className="blog__post-date">Jan 26, 2024</span>
                                    </div>
                                    <h3 className="title"><Link className="text-white" href="/blog-details">HOW TO CREATE A PRODUCTIVE MEETING ENVIRONMENT</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
