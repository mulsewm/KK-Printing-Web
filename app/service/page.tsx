import Accordion from '@/components/elements/Accordion'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Service() {

    return (
        <>
            <section className="service-area-2 pt-120 pb-120">
                <div className="container">
                    <div className="section__title mb-50 wow img-custom-anim-left">
                        <div className="row gy-4">
                            <div className="col-lg-7">
                                <h2 className="title">OUR SERVICES</h2>
                            </div>
                            <div className="col-lg-5">
                                <p className="sec-title">Explore our wide range of printing and stationery services, crafted to meet all your personal and business needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-30 gy-30">
                        <div className="col-xl-4 col-md-6">
                            <div className="service-card style2">
                                <div className="service-card-img">
                                    <img src="/assets/img/service/printing-tshirts.jpg" alt="Printing on T-shirts" />
                                </div>
                                <h5 className="service-card-number">01</h5>
                                <h4 className="service-card-title"><Link href="/service-details">Printing on T-shirts</Link></h4>
                                <p className="service-card-text">Get high-quality designs printed on T-shirts for personal or promotional use.</p>
                                <Link href="/service-details" className="link-btn">
                                    Learn More
                                    <i className="icon-arrow-top-left" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="service-card style2">
                                <div className="service-card-img">
                                    <img src="/assets/img/service/advertisements.jpg" alt="Advertisements" />
                                </div>
                                <h5 className="service-card-number">02</h5>
                                <h4 className="service-card-title"><Link href="/service-details">Advertisements (Banners and Stickers)</Link></h4>
                                <p className="service-card-text">Effective advertising solutions with our high-quality banners and stickers.</p>
                                <Link href="/service-details" className="link-btn">
                                    Learn More
                                    <i className="icon-arrow-top-left" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="service-card style2">
                                <div className="service-card-img">
                                    <img src="/assets/img/service/catalogs.jpg" alt="Catalogs and Booklets" />
                                </div>
                                <h5 className="service-card-number">03</h5>
                                <h4 className="service-card-title"><Link href="/service-details">Catalogs and Booklets</Link></h4>
                                <p className="service-card-text">Professional and attractive catalogs and booklets to showcase your products and services.</p>
                                <Link href="/service-details" className="link-btn">
                                    Learn More
                                    <i className="icon-arrow-top-left" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="service-card style2">
                                <div className="service-card-img">
                                    <img src="/assets/img/service/business-cards.jpg" alt="Business Cards" />
                                </div>
                                <h5 className="service-card-number">04</h5>
                                <h4 className="service-card-title"><Link href="/service-details">Business Cards</Link></h4>
                                <p className="service-card-text">Create a lasting impression with our high-quality business card printing services.</p>
                                <Link href="/service-details" className="link-btn">
                                    Learn More
                                    <i className="icon-arrow-top-left" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="service-card style2">
                                <div className="service-card-img">
                                    <img src="/assets/img/service/wedding-invitations.jpg" alt="Wedding Invitations" />
                                </div>
                                <h5 className="service-card-number">05</h5>
                                <h4 className="service-card-title"><Link href="/service-details">Wedding Invitations</Link></h4>
                                <p className="service-card-text">Beautifully designed wedding invitations to make your special day memorable.</p>
                                <Link href="/service-details" className="link-btn">
                                    Learn More
                                    <i className="icon-arrow-top-left" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="service-card style2">
                                <div className="service-card-img">
                                    <img src="/assets/img/service/stationery.jpg" alt="Stationery Supplies" />
                                </div>
                                <h5 className="service-card-number">06</h5>
                                <h4 className="service-card-title"><Link href="/service-details">Stationery Supplies</Link></h4>
                                <p className="service-card-text">A wide range of stationery items for your office and personal needs.</p>
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
