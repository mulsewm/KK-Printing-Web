import Link from "next/link"

export default function Award2() {
    return (
        <>
            <section className="award-area-1 pt-110 pb-120 theme-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="section__title mb-50 wow img-custom-anim-left">
                                <h2 className="title">AWARDS  RECOGNITIONS</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-end">
                        <div className="col-lg-12">
                            <ul className="award-wrap-area">
                                <li className="single-award-list">
                                    <div className="award-details">
                                        <h4><Link href="/about">Honorable Mention</Link></h4>
                                        <p>AWWARDS</p>
                                    </div>
                                    <span className="award-year">2022</span>
                                </li>
                                <li className="single-award-list">
                                    <div className="award-details">
                                        <h4><Link href="/about">Site of The Day</Link></h4>
                                        <p>CSS Winners</p>
                                    </div>
                                    <span className="award-year">2021</span>
                                </li>
                                <li className="single-award-list">
                                    <div className="award-details">
                                        <h4><Link href="/about">Best UI Design</Link></h4>
                                        <p>CSS Design Awards</p>
                                    </div>
                                    <span className="award-year">2024</span>
                                </li>
                                <li className="single-award-list">
                                    <div className="award-details">
                                        <h4><Link href="/about">Site of The Day</Link></h4>
                                        <p>AWWARDS</p>
                                    </div>
                                    <span className="award-year">2023</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
