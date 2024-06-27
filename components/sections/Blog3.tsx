import Link from "next/link"

export default function Blog3() {
    return (
        <>
            <section className="blog-area-3 pt-110 pb-120 position-relative">
                <div className="blog-area-bg-shape1 square-shape-wrap d-lg-inline-flex d-none">
                    <div className="square-shape1" />
                    <div className="square-shape2" />
                    <div className="square-shape3" />
                    <div className="square-shape4" />
                </div>
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
                                <Link href="/blog" className="btn border-dark2 wow img-custom-anim-right">
                                    See All Blog
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-40 justify-content-center">
                        <div className="col-xl-4 col-md-6">
                            <div className="blog__post-item-three shine-animate-item">
                                <div className="blog__post-thumb">
                                    <Link className="shine-animate" href="/blog-details"><img src="/assets/img/blog/3-1.jpg" alt="img" /></Link>
                                </div>
                                <div className="blog__post-content">
                                    <h3 className="title"><Link href="/blog-details">8 design systems you can check out and download</Link></h3>
                                    <span className="blog__post-date">Jan 26, 2024</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog__post-item-three shine-animate-item">
                                <div className="blog__post-thumb">
                                    <Link className="shine-animate" href="/blog-details"><img src="/assets/img/blog/3-2.jpg" alt="img" /></Link>
                                </div>
                                <div className="blog__post-content">
                                    <h3 className="title"><Link href="/blog-details">Step-by-step guide for choosing great font pairs</Link></h3>
                                    <span className="blog__post-date">Jan 26, 2024</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog__post-item-three shine-animate-item">
                                <div className="blog__post-thumb">
                                    <Link className="shine-animate" href="/blog-details"><img src="/assets/img/blog/3-3.jpg" alt="img" /></Link>
                                </div>
                                <div className="blog__post-content">
                                    <h3 className="title"><Link href="/blog-details">Design tutorials to become an expert UX/UI designer</Link></h3>
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
