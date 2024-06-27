import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function ServiceDetails() {

    return (
        <>

            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="Services Details">
                <div>
                    <div className="service-details-page-area pt-110 ">
                        <div className="container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-xl-6">
                                    <div className="section__title mb-50">
                                        <h2 className="title">INNOVATIVE PACKAGE DESIGNS</h2>
                                        <p className="sec-text">Let's explore the world of cutting-edge packaging design and its impact on the market.</p>
                                    </div>
                                </div>
                                <div className="col-xl-auto align-self-end">
                                    <div className="service-list7-wrap">
                                        <h4 className="service-list7-title">Product Design</h4>
                                        <ul>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Mobile  Web Apps</li>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> User Experience</li>
                                            <li><img src="/assets/img/icon/arrow-left.svg" alt="img" /> Data Visualization</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="service-inner-thumb mt-60 mb-110">
                                <img className="w-100" src="/assets/img/service/service-details-1-1.jpg" alt="img" />
                                <h3 className="page-title mt-60 mb-30">UI Deliverables</h3>
                                <p className="mb-30">User experience design includes elements of interaction design, visual design, information architecture, user research, and other disciplines, and is concerned with all facts of the overall experience delivered to users. Following is a short analysis of its constituent parts. Graphic treatment of interface elements is often perceived as the visual design.</p>
                                <p>Visual design, also commonly known as graphic design, user interface design, communication design, and visual communication, represents the aesthetics or look-and-feel of the front end of any user interface.</p>
                                <h3 className="page-title mt-60 mb-30">UI Deliverables</h3>
                                <p className="mb-0">UX designers' main goal is to solve the end-users' problems, and thus the ability to communicate the design to stakeholders and developers is critical to the ultimate success of the design. Regarding UX specification documents, these requirements depend on the client or the organization involved in designing a product. The four major deliverables are: a title page, an introduction to the feature, wireframes and a version history.</p>
                            </div>
                            <div className="row gy-40 justify-content-between">
                                <div className="col-xl-5">
                                    <h3 className="page-title mb-30">We tell the stories of your business.</h3>
                                    <p className="mb-30">The following details the responsibilities a user experience designer may have at each phase of a project.</p>
                                    <div className="service-list7-wrap">
                                        <ul>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Ethnographic research</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Surveying</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Customer feedback and testing</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Focus group administration</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Non-directed interview</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Contextual Interview</li>
                                            <li><img src="/assets/img/icon/check-circle2.svg" alt="img" /> Mental modeling</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <img className="w-100" src="/assets/img/service/service-details-1-2.jpg" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*======== / Service Details Area ========*/}
                    {/*==============================
    Project Area 03
    ==============================*/}
                    <section className="project-area-3 pt-110 pb-120 overflow-hidden">
                        <div className="container">
                            <div className="section__title mb-50 text-center">
                                <h2 className="title">Other Projects</h2>
                            </div>
                            <div className="row gy-60 justify-content-between masonary-active">
                                <div className="col-lg-6 filter-item">
                                    <div className="project-card-item8 shine-animate-item wow img-custom-anim-top">
                                        <div className="project-card-thumb">
                                            <Link className="shine-animate" href="/project-details">
                                                <img className="w-100" src="/assets/img/project/project9-1.jpg" alt="img" />
                                            </Link>
                                        </div>
                                        <div className="project-card-content">
                                            <h4 className="project-card-title"><Link href="/project-details">Ddipiscing</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 filter-item">
                                    <div className="project-card-item8 mt-lg-200 shine-animate-item wow img-custom-anim-right">
                                        <div className="project-card-thumb">
                                            <Link className="shine-animate" href="/project-details">
                                                <img className="w-100" src="/assets/img/project/project9-2.jpg" alt="img" />
                                            </Link>
                                        </div>
                                        <div className="project-card-content">
                                            <h4 className="project-card-title"><Link href="/project-details">Rarturient</Link></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}