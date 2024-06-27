import Link from "next/link"

export default function Team2() {
    return (
        <>
            <section className="team-area-6 overflow-hidden black2-bg">
                <div className="section__title section__title-three mb-55 wow img-custom-anim-left">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-8">
                                <h6 className="sub-title2 text-white">OUR TEAM</h6>
                                <h2 className="title title2 text-white">GET ACQUAINTED WITH OUR TEAM</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row gx-30 gy-30 justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow img-custom-anim-top">
                            <div className="team-card style2">
                                <div className="team-card-thumb">
                                    <img src="/assets/img/team/team-6-1.jpg" alt="img" />
                                </div>
                                <div className="team-card-details">
                                    <div className="media-left">
                                        <h4 className="team-card-title"><Link href="/team-details">Terry Souro</Link></h4>
                                        <p className="team-card-text">Creative Director</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow img-custom-anim-top">
                            <div className="team-card style2">
                                <div className="team-card-thumb">
                                    <img src="/assets/img/team/team-6-2.jpg" alt="img" />
                                </div>
                                <div className="team-card-details">
                                    <div className="media-left">
                                        <h4 className="team-card-title"><Link href="/team-details">Souro Terry</Link></h4>
                                        <p className="team-card-text">Creative Director</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow img-custom-anim-top">
                            <div className="team-card style2">
                                <div className="team-card-thumb">
                                    <img src="/assets/img/team/team-6-3.jpg" alt="img" />
                                </div>
                                <div className="team-card-details">
                                    <div className="media-left">
                                        <h4 className="team-card-title"><Link href="/team-details">Stephen</Link></h4>
                                        <p className="team-card-text">Creative Director</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow img-custom-anim-top">
                            <div className="team-card style2">
                                <div className="team-card-thumb">
                                    <img src="/assets/img/team/team-6-4.jpg" alt="img" />
                                </div>
                                <div className="team-card-details">
                                    <div className="media-left">
                                        <h4 className="team-card-title"><Link href="/team-details">Terry Souro</Link></h4>
                                        <p className="team-card-text">Creative Director</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
