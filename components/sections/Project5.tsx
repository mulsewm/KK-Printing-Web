import Link from "next/link"

export default function Project5() {
    return (
        <>
            <section className="project-area-6 pb-120 overflow-hidden black2-bg">
                <div className="section__title section__title-three mb-55 wow img-custom-anim-left">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-10">
                                <h6 className="sub-title2 text-white">RECENT WORK</h6>
                                <h2 className="title title2 text-white">WE ACHIEVED REMARKABLE PROJECT SUCCESS.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-6">
                            <div className="project-card-item5 shine-animate-item">
                                <div className="project-card-content wow img-custom-anim-left">
                                    <h4 className="project-card-title text-white"><Link href="/project-details">THE ORDINARY</Link></h4>
                                    <p className="project-card-text text-white">DesignDigital, WebContent, Campaigns Events  Activations</p>
                                </div>
                                <div className="project-card-thumb wow img-custom-anim-top">
                                    <Link className="shine-animate" href="/project-details">
                                        <img src="/assets/img/project/project6-1.jpg" alt="img" />
                                    </Link>
                                </div>
                                <h6 className="project-year text-white">2024</h6>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-card-item5 shine-animate-item">
                                <div className="project-card-content wow img-custom-anim-left">
                                    <h4 className="project-card-title text-white"><Link href="/project-details">DREAMY VISIONS</Link></h4>
                                    <p className="project-card-text text-white">DesignDigital, WebContent, Campaigns Events  Activations</p>
                                </div>
                                <div className="project-card-thumb wow img-custom-anim-top">
                                    <Link className="shine-animate" href="/project-details">
                                        <img src="/assets/img/project/project6-2.jpg" alt="img" />
                                    </Link>
                                </div>
                                <h6 className="project-year text-white">2024</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
