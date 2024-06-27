import Link from "next/link"

export default function Project7() {
    return (
        <>
            <section className="project-area-8 pb-120 black2-bg position-relative">
                <div className="container">
                    <div className="row gy-80">
                        <div className="col-12 portfolio-static">
                            <div className="project-card-item7">
                                <div className="project-card-content">
                                    <span className="project-number">Project 01</span>
                                    <h4 className="project-card-title">
                                        <Link href="/project-details">Faherty Brand</Link>
                                    </h4>
                                </div>
                                <div className="project-card-thumb wow img-custom-anim-top">
                                    <Link href="/project-details">
                                        <img src="/assets/img/project/project8-1.jpg" alt="img" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 portfolio-static">
                            <div className="project-card-item7">
                                <div className="project-card-content">
                                    <span className="project-number">Project 02</span>
                                    <h4 className="project-card-title">
                                        <Link href="/project-details">The Gentle Way</Link>
                                    </h4>
                                </div>
                                <div className="project-card-thumb wow img-custom-anim-top">
                                    <Link href="/project-details">
                                        <img src="/assets/img/project/project8-2.jpg" alt="img" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 portfolio-static">
                            <div className="project-card-item7">
                                <div className="project-card-content">
                                    <span className="project-number">Project 03</span>
                                    <h4 className="project-card-title">
                                        <Link href="/project-details">Carhartt WIP</Link>
                                    </h4>
                                </div>
                                <div className="project-card-thumb wow img-custom-anim-top">
                                    <Link href="/project-details">
                                        <img src="/assets/img/project/project8-3.jpg" alt="img" />
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
