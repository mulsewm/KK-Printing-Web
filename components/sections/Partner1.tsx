import Link from "next/link"

export default function Partner1() {
    return (
        <>
            <section className="partner-area-1 pt-110 pb-120">
                <div className="container">
                    <div className="section__title mb-50">
                        <h2 className="title wow img-custom-anim-left">OUR NEXT GEN PARTNERS</h2>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ul className="client-list-wrap">
                                <li>
                                    <Link href="/#">
                                        <img src="/assets/img/partner/partner1-1.svg" alt="img" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <img src="/assets/img/partner/partner1-2.svg" alt="img" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <img src="/assets/img/partner/partner1-3.svg" alt="img" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <img src="/assets/img/partner/partner1-4.svg" alt="img" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <img src="/assets/img/partner/partner1-5.svg" alt="img" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <img src="/assets/img/partner/partner1-6.svg" alt="img" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
