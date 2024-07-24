import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Service() {
    return (
        <>
            
                <section id="service" className="service-area-2 pt-20 pb-120">
                    <div className="container">
                        <div className="section__title mb-50 wow img-custom-anim-left">
                            <div className="row gy-4">
                                <div className="col-lg-7">
                                    <h2 className="title">OUR SERVICES</h2>
                                </div>
                                <div className="col-lg-5">
                                    <p className="sec-title">Explore our wide range of stationery supplies and printing services, crafted to meet all your office and personal needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row gx-30 gy-30">
                            <div className="col-xl-4 col-md-6">
                                <div className="service-card style2">
                                    <div className="service-card-img">
                                        <img src="/assets/img/service/stationery-supplies.jpg" alt="Stationery Supplies" />
                                    </div>
                                    <h5 className="service-card-number">01</h5>
                                    <h4 className="service-card-title"><Link href="#">Stationery Supplies</Link></h4>
                                    <p className="service-card-text">A wide range of stationery items for your office and personal needs, ensuring quality and reliability.</p>
                                    <Link href="#" className="link-btn">
                                        Learn More
                                        <i className="icon-arrow-top-left" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="service-card style2">
                                    <div className="service-card-img">
                                        <img src="/assets/img/service/office-supplies-list.jpg" alt="Office Supplies" />
                                    </div>
                                    <h5 className="service-card-number">02</h5>
                                    <h4 className="service-card-title"><Link href="#">Office Supplies</Link></h4>
                                    <p className="service-card-text">Comprehensive office supplies to keep your workspace fully equipped and functional.</p>
                                    <Link href="#" className="link-btn">
                                        Learn More
                                        <i className="icon-arrow-top-left" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="service-card style2">
                                    <div className="service-card-img">
                                        <img src="/assets/img/service/80-gsm-sinarline-a4-paper-198.webp" alt="Premium Paper Products" />
                                    </div>
                                    <h5 className="service-card-number">03</h5>
                                    <h4 className="service-card-title"><Link href="#">Premium Paper Products</Link></h4>
                                    <p className="service-card-text">High-quality paper products for printing, writing, and all your office needs.</p>
                                    <Link href="#" className="link-btn">
                                        Learn More
                                        <i className="icon-arrow-top-left" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="service-card style2">
                                    <div className="service-card-img">
                                        <img src="/assets/img/service/still-life-cmyk-toners-arrangement.jpg" alt="Custom Printing Services" />
                                    </div>
                                    <h5 className="service-card-number">04</h5>
                                    <h4 className="service-card-title"><Link href="#">Custom Printing Services</Link></h4>
                                    <p className="service-card-text">Tailored printing solutions for business cards, brochures, flyers, and more.</p>
                                    <Link href="#" className="link-btn">
                                        Learn More
                                        <i className="icon-arrow-top-left" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="service-card style2">
                                    <div className="service-card-img">
                                        <img src="/assets/img/service/hygiene-supplies.jpg" alt="Hygiene and Sanitary Supplies" />
                                    </div>
                                    <h5 className="service-card-number">05</h5>
                                    <h4 className="service-card-title"><Link href="#">Hygiene and Sanitary Supplies</Link></h4>
                                    <p className="service-card-text">Comprehensive range of hygiene items including hand sanitizers, cleaning supplies, and sanitary products for a clean and safe environment.</p>
                                    <Link href="#" className="link-btn">
                                        Learn More
                                        <i className="icon-arrow-top-left" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="service-card style2">
                                    <div className="service-card-img">
                                        <img src="/assets/img/service/electric-supplies.jpg" alt="Electric Materials and Equipment" />
                                    </div>
                                    <h5 className="service-card-number">06</h5>
                                    <h4 className="service-card-title"><Link href="#">Electric Materials and Equipment</Link></h4>
                                    <p className="service-card-text">Providing UPS, stabilizers, air conditioners, wiring, cables, and other electrical tools and accessories for all your power needs.</p>
                                    <Link href="#" className="link-btn">
                                        Learn More
                                        <i className="icon-arrow-top-left" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
           
        </>
    )
}
