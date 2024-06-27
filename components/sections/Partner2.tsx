import Link from "next/link"

export default function Partner2() {
    return (
        <>
            <section className="partner-area-2 pt-120 pb-120">
                <div className="container">
                    <div className="partner-shape2-1 position-relative">
                        <div className="square-shape-wrap">
                            <div className="square-shape1" />
                            <div className="square-shape2" />
                            <div className="square-shape3" />
                            <div className="square-shape4" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ul className="client-list-wrap">
                                <li>
                                    <Link href="/#">
                                        <img src="/assets/img/partner/partner2-1.svg" alt="img" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <img src="/assets/img/partner/partner2-2.svg" alt="img" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <img src="/assets/img/partner/partner2-3.svg" alt="img" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <img src="/assets/img/partner/partner2-4.svg" alt="img" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <img src="/assets/img/partner/partner2-5.svg" alt="img" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <img src="/assets/img/partner/partner2-6.svg" alt="img" />
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
