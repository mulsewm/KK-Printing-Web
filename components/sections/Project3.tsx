import Link from "next/link"

export default function Project3() {
    return (
        <>
            <section className="project-area-3 pt-110 pb-120 overflow-hidden">
                <div className="container">
                    <div className="section__title mb-20 wow img-custom-anim-left">
                        <h2 className="title">Our Lastes Project's</h2>
                    </div>
                    <div className="project-wrap3">
                        <div className="row gy-60 justify-content-between masonary-active">
                            <div className="col-lg-5 filter-item">
                                <div className="project-card-item3 style1 shine-animate-item wow img-custom-anim-top">
                                    <div className="project-card-thumb">
                                        <Link className="shine-animate" href="/project-details">
                                            <img src="/assets/img/project/project3-1.jpg" alt="img" />
                                        </Link>
                                    </div>
                                    <div className="project-card-content">
                                        <h4 className="project-card-title"><Link href="/project-details">WEBSITE REDESIGN</Link></h4>
                                        <div className="tg-button-wrap">
                                            <Link href="/about" className="link-btn style2">
                                                View Project
                                                <i className="icon-arrow-top-left" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 filter-item">
                                <div className="project-card-item3 style2 mt-lg-60 shine-animate-item wow img-custom-anim-right">
                                    <div className="project-card-thumb">
                                        <Link className="shine-animate" href="/project-details">
                                            <img src="/assets/img/project/project3-2.jpg" alt="img" />
                                        </Link>
                                    </div>
                                    <div className="project-card-content">
                                        <h4 className="project-card-title"><Link href="/project-details">Lorien Website Design</Link></h4>
                                        <div className="tg-button-wrap">
                                            <Link href="/about" className="link-btn style2">
                                                View Project
                                                <i className="icon-arrow-top-left" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tg-button-wrap g-0 wow img-custom-anim-top mt-100 justify-content-center">
                            <Link href="/project" className="btn-with-icon style2">
                                <span className="btn btn-three icon-btn">
                                    <i className="icon-arrow-top-left" />
                                </span>
                                <span className="btn btn-five">
                                    SEE ALL PROJECTS
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
