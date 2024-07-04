import Accordion from '@/components/elements/Accordion'
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
                                <h4 className="service-card-title"><Link href="/service-details">Stationery Supplies</Link></h4>
                                <p className="service-card-text">A wide range of stationery items for your office and personal needs, ensuring quality and reliability.</p>
                                <Link href="/service-details" className="link-btn">
                                    Learn More
                                    <i className="icon-arrow-top-left" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="service-card style2">
                                <div className="service-card-img">
                                    <img src="/assets/img/service/office-supplies.jpg" alt="Office Supplies" />
                                </div>
                                <h5 className="service-card-number">02</h5>
                                <h4 className="service-card-title"><Link href="/service-details">Office Supplies</Link></h4>
                                <p className="service-card-text">Comprehensive office supplies to keep your workspace fully equipped and functional.</p>
                                <Link href="/service-details" className="link-btn">
                                    Learn More
                                    <i className="icon-arrow-top-left" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="service-card style2">
                                <div className="service-card-img">
                                    <img src="/assets/img/service/premium-paper-products.jpg" alt="Premium Paper Products" />
                                </div>
                                <h5 className="service-card-number">03</h5>
                                <h4 className="service-card-title"><Link href="/service-details">Premium Paper Products</Link></h4>
                                <p className="service-card-text">High-quality paper products for printing, writing, and all your office needs.</p>
                                <Link href="/service-details" className="link-btn">
                                    Learn More
                                    <i className="icon-arrow-top-left" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="service-card style2">
                                <div className="service-card-img">
                                    <img src="/assets/img/service/writing-instruments.jpg" alt="Writing Instruments" />
                                </div>
                                <h5 className="service-card-number">04</h5>
                                <h4 className="service-card-title"><Link href="/service-details">Writing Instruments</Link></h4>
                                <p className="service-card-text">A variety of pens, pencils, markers, and other writing instruments to suit every need.</p>
                                <Link href="/service-details" className="link-btn">
                                    Learn More
                                    <i className="icon-arrow-top-left" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="service-card style2">
                                <div className="service-card-img">
                                    <img src="/assets/img/service/custom-printing.jpg" alt="Custom Printing Services" />
                                </div>
                                <h5 className="service-card-number">05</h5>
                                <h4 className="service-card-title"><Link href="/service-details">Custom Printing Services</Link></h4>
                                <p className="service-card-text">Tailored printing solutions for business cards, brochures, flyers, and more.</p>
                                <Link href="/service-details" className="link-btn">
                                    Learn More
                                    <i className="icon-arrow-top-left" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="service-card style2">
                                <div className="service-card-img">
                                    <img src="/assets/img/service/advertising-materials.jpg" alt="Advertising Materials" />
                                </div>
                                <h5 className="service-card-number">06</h5>
                                <h4 className="service-card-title"><Link href="/service-details">Advertising Materials</Link></h4>
                                <p className="service-card-text">High-quality banners, stickers, and other advertising materials to promote your business.</p>
                                <Link href="/service-details" className="link-btn">
                                    Learn More
                                    <i className="icon-arrow-top-left" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*======== / Service Section ========*/}
        </>
    )
}
