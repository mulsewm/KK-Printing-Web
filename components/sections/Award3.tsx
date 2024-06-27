import Link from "next/link"

export default function Award3() {
    return (
        <>
            <section className="award-area-6 pb-120 black2-bg">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-12">
                            <ul className="award-wrap-area-6">
                                <li className="single-award-list list-header">
                                    <span className="project-number">#</span>
                                    <div className="award-details">
                                        <h4 className="title">AWARD</h4>
                                    </div>
                                    <div className="award-project-wrap">
                                        <h4 className="project-name">PROJECT</h4>
                                    </div>
                                </li>
                                <li className="single-award-list">
                                    <span className="project-number">01</span>
                                    <div className="award-details">
                                        <h4 className="title">New York Design Week</h4>
                                    </div>
                                    <div className="award-project-wrap">
                                        <h4 className="project-name"><Link href="/project">MAIN DEVELOPER</Link></h4>
                                        <span className="award-year">2020</span>
                                    </div>
                                </li>
                                <li className="single-award-list">
                                    <span className="project-number">02</span>
                                    <div className="award-details">
                                        <h4 className="title">The Blue Design Awards</h4>
                                    </div>
                                    <div className="award-project-wrap">
                                        <h4 className="project-name"><Link href="/project">ANIMATOR</Link></h4>
                                        <span className="award-year">2022</span>
                                    </div>
                                </li>
                                <li className="single-award-list">
                                    <span className="project-number">03</span>
                                    <div className="award-details">
                                        <h4 className="title">Berlin Interactive Award</h4>
                                    </div>
                                    <div className="award-project-wrap">
                                        <h4 className="project-name"><Link href="/project">MAIN DEVELOPER</Link></h4>
                                        <span className="award-year">2023</span>
                                    </div>
                                </li>
                                <li className="single-award-list">
                                    <span className="project-number">04</span>
                                    <div className="award-details">
                                        <h4 className="title">Best Web Flow</h4>
                                    </div>
                                    <div className="award-project-wrap">
                                        <h4 className="project-name"><Link href="/project">BEST INNOVATIONS</Link></h4>
                                        <span className="award-year">2021</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
