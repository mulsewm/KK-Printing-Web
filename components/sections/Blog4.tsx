import Link from "next/link"

export default function Blog4() {
    return (
        <>
            <section className="blog-area-4 pt-110 pb-120">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-5">
                            <div className="section__title mb-50">
                                <h2 className="title wow img-custom-anim-left">Insights
                                    We Created</h2>
                            </div>
                        </div>
                        <div className="col-lg-auto">
                            <div className="tg-button-wrap mb-50">
                                <Link href="/blog" className="btn border-dark4 wow img-custom-anim-right">
                                    See All Blog
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-40 justify-content-center">
                        <div className="col-xl-4 col-md-6">
                            <div className="blog__post-item-three shine-animate-item">
                                <div className="blog__post-thumb">
                                    <Link className="shine-animate" href="/blog-details"><img src="/assets/img/blog/4-1.jpg" alt="img" /></Link>
                                </div>
                                <div className="blog__post-content">
                                    <h3 className="title"><Link href="/blog-details">How digital marketing can boost your business?</Link></h3>
                                    <span className="blog__post-date">Jan 26, 2024</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog__post-item-three shine-animate-item">
                                <div className="blog__post-thumb">
                                    <Link className="shine-animate" href="/blog-details"><img src="/assets/img/blog/4-2.jpg" alt="img" /></Link>
                                </div>
                                <div className="blog__post-content">
                                    <h3 className="title"><Link href="/blog-details">Embracing inclusion for collaborative success</Link></h3>
                                    <span className="blog__post-date">Jan 26, 2024</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog__post-item-three shine-animate-item">
                                <div className="blog__post-thumb">
                                    <Link className="shine-animate" href="/blog-details"><img src="/assets/img/blog/4-3.jpg" alt="img" /></Link>
                                </div>
                                <div className="blog__post-content">
                                    <h3 className="title"><Link href="/blog-details">The latest trends with digital marketing agency</Link></h3>
                                    <span className="blog__post-date">Jan 26, 2024</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
