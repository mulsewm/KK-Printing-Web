import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BlogDetails() {

    return (
        <>

            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Blog Details">
                <section className="blog__details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="blog__details-wrap mb-100">
                                    <div className="blog__details-thumb">
                                        <img src="/assets/img/blog/blog-details-1-1.jpg" alt="img" />
                                        <div className="blog__post-meta">
                                            <ul className="list-wrap">
                                                <li><i className="far fa-user" /><Link href="/blog-details">ADMIN</Link></li>
                                                <li><i className="far fa-comments" /><Link href="/blog-details">COMMENTS (0)</Link></li>
                                                <li><i className="far fa-clock" />DECEMBER 14, 2023</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog__details-content">
                                        <h2 className="page-title mb-30">AI IN HEALTHCARE: REVOLUTIONIZING THE MEDICAL INDUSTRY</h2>
                                        <p className="mb-30">In recent years, the healthcare industry has witnessed a groundbreaking transformation driven by the integration of artificial intelligence (AI) technologies. These advancements are revolutionizing patient care, medical research, diagnostics, and treatment strategies. The synergy between AI and healthcare is reshaping the landscape of medicine, offering new possibilities and improved outcomes.</p>
                                        <p>One of the most remarkable applications of AI in healthcare is in diagnostics. Machine learning algorithms are capable of analyzing vast amounts of medical data with unprecedented speed and accuracy. This has led to earlier and more precise disease detection, greatly enhancing the chances of successful treatment.</p>
                                        <blockquote>
                                            <p>Vexa has been an invaluable partner to us. Any talent we've worked with has shown a deep
                                                understanding of digital experiences. They're able to seamlessly integrate with our team and meet the level of craft that we hold ourselves accountable to. </p>
                                        </blockquote>
                                        <p className="mb-0">AI-driven predictive analytics are being used to forecast disease outbreaks and patient admission rates, enabling hospitals and healthcare facilities to allocate resources more efficiently. This is especially crucial during public health emergencies.</p>
                                        <div className="blog__details-content-bottom">
                                            <div className="row align-items-center">
                                                <div className="col-xl-6">
                                                    <div className="post-tags">
                                                        <h5 className="title">TAGS:</h5>
                                                        <ul className="list-wrap">
                                                            <li><Link href="/#">Marketing</Link></li>
                                                            <li><Link href="/#">Brand</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="blog-post-share">
                                                        <h5 className="title">SHARE:</h5>
                                                        <div className="footer__social2">
                                                            <ul className="list-wrap">
                                                                <li><Link href="https://twitter.com" target="_blank"><i className="fab fa-twitter" /></Link></li>
                                                                <li><Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f" /></Link></li>
                                                                <li><Link href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in" /></Link></li>
                                                                <li><Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram" /></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inner__page-nav pt-30">
                                            <Link href="/#" className="nav-btn text-md-end">
                                                <div className="text-wrap mb-0">
                                                    <i className="fa fa-arrow-left me-2" />
                                                    <span>
                                                        VIEW PRE PROJECT
                                                    </span>
                                                </div>
                                            </Link>
                                            <Link href="/#" className="nav-btn">
                                                <div className="text-wrap mb-0">
                                                    <span>
                                                        VIEW NEXT PROJECT
                                                    </span>
                                                    <i className="fa fa-arrow-right ms-2" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-respond">
                                    <h3 className="comment-reply-title mb-20">02 COMMENTS</h3>
                                    <form action="#" className="comment-form">
                                        <p className="comment-notes">Your email address will not be published.Required fields are marked*</p>
                                        <div className="row gy-35">
                                            <div className="col-lg-6 form-group">
                                                <label className="form-icon-left"><img src="/assets/img/icon/svg-img/user.svg" alt="icon" /></label>
                                                <input type="text" className="form-control style-border" name="name" id="name" placeholder="Name*" />
                                            </div>
                                            <div className="col-lg-6 form-group">
                                                <label className="form-icon-left"><img src="/assets/img/icon/svg-img/envelope.svg" alt="icon" /></label>
                                                <input type="text" className="form-control style-border" name="email" id="email" placeholder="Email*" />
                                            </div>
                                            <div className="col-12 form-group">
                                                <label className="form-icon-left"><img src="/assets/img/icon/svg-img/brush.svg" alt="icon" /></label>
                                                <textarea name="message" placeholder="Message*" id="contactForm" className="form-control style-border" />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-three square-btn mt-40">POST COMMENT</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <aside className="blog-sidebar">
                                    <div className="blog-widget">
                                        <div className="sidebar-search-form">
                                            <form action="#">
                                                <input type="text" placeholder="Search Here..." />
                                                <button type="submit"><i className="fas fa-search" /></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="blog-widget">
                                        <h4 className="widget-title">Categories</h4>
                                        <div className="sidebar-cat-list">
                                            <ul className="list-wrap">
                                                <li><Link href="/#">Archive <span>(3)</span></Link></li>
                                                <li><Link href="/#">Branding <span>(6)</span></Link></li>
                                                <li><Link href="/#">Company <span>(2)</span></Link></li>
                                                <li><Link href="/#">Design <span>(1)</span></Link></li>
                                                <li><Link href="/#">Business <span>(4)</span></Link></li>
                                                <li><Link href="/#">Modern <span>(1)</span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog-widget widget-rc-post">
                                        <h4 className="widget-title">Latest Posts</h4>
                                        <div className="rc-post-wrap">
                                            <div className="rc-post-item">
                                                <div className="thumb">
                                                    <Link href="/blog-details"><img src="/assets/img/blog/rc_post01.jpg" alt="img" /></Link>
                                                </div>
                                                <div className="content">
                                                    <h4 className="title"><Link href="/blog-details">A GLIMPSE INTO MY
                                                        CREATIVE PORTFOLIO</Link></h4>
                                                    <span className="date">Jan 26, 2024</span>
                                                </div>
                                            </div>
                                            <div className="rc-post-item">
                                                <div className="thumb">
                                                    <Link href="/blog-details"><img src="/assets/img/blog/rc_post02.jpg" alt="img" /></Link>
                                                </div>
                                                <div className="content">
                                                    <h4 className="title"><Link href="/blog-details">DESIGNING THE FUTURE: A CREATIVE PORTFOLIO</Link></h4>
                                                    <span className="date">Jan 26, 2024</span>
                                                </div>
                                            </div>
                                            <div className="rc-post-item">
                                                <div className="thumb">
                                                    <Link href="/blog-details"><img src="/assets/img/blog/rc_post03.jpg" alt="img" /></Link>
                                                </div>
                                                <div className="content">
                                                    <h4 className="title"><Link href="/blog-details">DIVING INTO SUSTAINABLE GARDENING</Link></h4>
                                                    <span className="date">Jan 26, 2024</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-widget">
                                        <h4 className="widget-title">Tags</h4>
                                        <div className="sidebar-tag-list">
                                            <ul className="list-wrap">
                                                <li><Link href="/#">Agency</Link></li>
                                                <li><Link href="/#">Awards</Link></li>
                                                <li><Link href="/#">Brand</Link></li>
                                                <li><Link href="/#">Marketing</Link></li>
                                                <li><Link href="/#">Contemporary</Link></li>
                                                <li><Link href="/#">Education</Link></li>
                                                <li><Link href="/#">Modern</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}