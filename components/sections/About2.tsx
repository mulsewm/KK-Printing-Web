import Link from "next/link"

export default function About2() {
    return (
        <>
            <section className="about-area-8 black2-bg">
                <div className="container">
                    <div className="row gy-40 justify-content-between align-items-center">
                        <div className="col-xl-4 col-lg-6">
                            <div className="about-thumb-box8 wow img-custom-anim-left">
                                <img src="/assets/img/others/about8-1.jpg" alt="img" />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="section__title about-wrap8 mb-0 wow img-custom-anim-left">
                                <p className="sec-text2 text-white">Living in Sydney, I Work As A Design Engineer By Day. Otherwise, I’m Just A Human Trying To Make Sense Of The World.</p>
                                <div className="tg-button-wrap g-0 mt-60">
                                    <Link href="/about" className="btn-with-icon  mt-20">
                                        <span className="btn icon-btn">
                                            <i className="icon-arrow-top-left" />
                                        </span>
                                        <span className="link-btn style3 text-white ms-3">
                                            MORE ABOUT ME
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
