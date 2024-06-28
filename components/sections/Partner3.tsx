import Link from "next/link"

export default function Partner3() {
    return (
        <>
            <section className="partner-area-1 pt-120">
                <div className="container">
                    <div className="row">
                    <div className="section__title mb-50">
                        <h2 className="title wow img-custom-anim-left">OUR <span className="text-stroke"> CORPORATE PARTNERS</span></h2>
                    </div>
                        <div className="col-12">
                            <ul className="client-list-wrap">
                            <li>
                                    <Link href="/#">
                                        <img src="/assets/img/partner/aacity-logo.png" alt="img" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <img src="/assets/img/partner/apc-logo.png" alt="img" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <img src="/assets/img/partner/bunapen-logo.png" alt="img" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <img src="/assets/img/partner/uniliver-logo.png" alt="img" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <img src="/assets/img/partner/sinarline-logo.svg" alt="img" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <img src="/assets/img/partner/logo-aau.png" alt="aau" />
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
