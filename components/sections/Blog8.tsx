import Link from "next/link"

export default function Blog8() {
    return (
        <>
            <section className="blog-area-7 pt-110 pb-120 black2-bg">
                <div className="container">
                    <div className="section__title mb-50">
                        <h2 className="title title2 wow img-custom-anim-left text-white">Articles  News</h2>
                    </div>
                    <div className="row gy-60 align-items-end">
                        <div className="col-12">
                            <div className="blog__post-item-six">
                                <div className="blog__post-thumb wow img-custom-anim-right">
                                    <Link href="/blog-details"><img src="/assets/img/blog/8-1.jpg" alt="img" /></Link>
                                </div>
                                <div className="blog__post-content wow img-custom-anim-left">
                                    <div className="blog__post-meta">
                                        <span className="blog__post-author">By <Link href="/blog">vexa</Link></span>
                                        <span className="blog__post-date">Jan 26, 2024</span>
                                    </div>
                                    <h3 className="title"><Link href="/blog-details">How to design packaging for your next product</Link></h3>
                                    <p className="blog-text">We care success relationships fuel success we love building</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="blog__post-item-six">
                                <div className="blog__post-thumb wow img-custom-anim-right">
                                    <Link href="/blog-details"><img src="/assets/img/blog/8-2.jpg" alt="img" /></Link>
                                </div>
                                <div className="blog__post-content wow img-custom-anim-left">
                                    <div className="blog__post-meta">
                                        <span className="blog__post-author">By <Link href="/blog">vexa</Link></span>
                                        <span className="blog__post-date">Jan 26, 2024</span>
                                    </div>
                                    <h3 className="title"><Link href="/blog-details">5 free hot typographies to download in 2024</Link></h3>
                                    <p className="blog-text">We care success relationships fuel success we love building</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
