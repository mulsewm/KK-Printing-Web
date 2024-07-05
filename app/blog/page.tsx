import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import blogData from '@/util/blog.json' // Make sure this path is correct

export default function Blog() {
    return (
        <>
            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Blog">
                {/* <BlogPost showItem={6} style={1} showPagination /> */}
                <section className="blog-area-4 pt-110 pb-120">
                    <div className="container">
                        <div className="row gy-80 justify-content-center">
                            {blogData.map((post) => (
                                <div className="col-xl-4 col-md-6" key={post.id}>
                                    <div className="blog__post-item-five shine-animate-item">
                                        <div className="blog__post-thumb">
                                            <Link className="shine-animate" href={`/blog-details/${post.id}`}>
                                                <img src={`/assets/img/blog/${post.img}`} alt={post.title} />
                                            </Link>
                                        </div>
                                        <div className="blog__post-content">
                                            <h3 className="title">
                                                <Link href={`/blog-details/${post.id}`}>{post.title}</Link>
                                            </h3>
                                            <Link href={`/blog-details/${post.id}`} className="link-btn">
                                                Read More
                                                <i className="icon-arrow-top-left" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
