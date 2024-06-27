import Layout from '@/components/layout/Layout'
import Link from 'next/link'

export default function Blog() {
    return (
        <>
            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Blog">
                {/* <BlogPost showItem={6} style={1} showPagination /> */}
                <section className="blog-area-4 pt-110 pb-120">
                    <div className="container">
                        <div className="row gy-80 justify-content-center">
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
                            <div className="col-xl-4 col-md-6">
                                <div className="blog__post-item-five shine-animate-item">
                                    <div className="blog__post-thumb">
                                        <Link className="shine-animate" href="/blog-details"><img src="/assets/img/blog/7-4.jpg" alt="img" /></Link>
                                    </div>
                                    <div className="blog__post-content">
                                        <h3 className="title"><Link href="/blog-details">How digital marketing can boost your business?</Link></h3>
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
                                        <Link className="shine-animate" href="/blog-details"><img src="/assets/img/blog/7-5.jpg" alt="img" /></Link>
                                    </div>
                                    <div className="blog__post-content">
                                        <h3 className="title"><Link href="/blog-details">Embracing inclusion for collaborative success</Link></h3>
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
                                        <Link className="shine-animate" href="/blog-details"><img src="/assets/img/blog/7-6.jpg" alt="img" /></Link>
                                    </div>
                                    <div className="blog__post-content">
                                        <h3 className="title"><Link href="/blog-details">The latest trends with digital marketing agency</Link></h3>
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

            </Layout>
        </>
    )
}