import Link from "next/link"

export default function Skill2() {
    return (
        <>
            <section className="skill-area-2 pt-110 pb-120 gray-bg overflow-hidden">
                <div className="container">
                    <div className="row gy-40 flex-row-reverse">
                        <div className="col-xl-5 align-self-end">
                            <div className="skill-thumb-box2 wow img-custom-anim-right">
                                <img src="/assets/img/others/skill2-1.jpg" alt="img" />
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="skill-wrap2 pe-xxl-5">
                                <div className="section__title mb-50 wow img-custom-anim-left">
                                    <h2 className="title">CREATING QUALITY DESIGN EXPERIENCES</h2>
                                    <p className="sec-text">We shifted our talents to frontier science because we wanted our work to
                                        have tangible, human-positive impact. Also, we get front row seats to the
                                        future.</p>
                                </div>
                                <div className="skill-feature style2">
                                    <h3 className="skill-feature_title">DEVELOPMENT</h3>
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '70%' }}>
                                        </div>
                                        <div className="progress-value"><span className="counter-number">70</span>%</div>
                                    </div>
                                </div>
                                <div className="skill-feature style2">
                                    <h3 className="skill-feature_title">MARKETING</h3>
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '90%' }}>
                                        </div>
                                        <div className="progress-value"><span className="counter-number">90</span>%</div>
                                    </div>
                                </div>
                                <div className="tg-button-wrap g-0 wow img-custom-anim-left mt-60">
                                    <Link href="/about" className="btn-with-icon style2">
                                        <span className="btn btn-three icon-btn">
                                            <i className="icon-arrow-top-left" />
                                        </span>
                                        <span className="btn btn-five">
                                            ABOUT US
                                        </span>
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
