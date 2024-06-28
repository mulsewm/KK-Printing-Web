import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Marquee from "react-fast-marquee"

export default function () {
    return (
        <>
            {/*======== / Skill Section ========*/}
            {/*==============================
Skill Area 01
==============================*/}
            <section className="skill-area-1 pt-120 pb-120 black-bg position-relative">
                <div className="skill-area-bg-shape1 square-shape-wrap">
                    <div className="square-shape1" />
                    <div className="square-shape3" />
                    <div className="square-shape4" />
                </div>
                <div className="container">
                    <div className="row gy-40 align-items-center">
                        <div className="col-xl-5">
                            <div className="skill-thumb-box1 wow img-custom-anim-left">
                                <img src="/assets/img/others/skill1-1.jpg" alt="img" />
                                <div className="square-shape-wrap">
                                    <div className="square-shape1" />
                                    <div className="square-shape2" />
                                    <div className="square-shape3" />
                                    <div className="square-shape4" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="skill-wrap1">
                                <div className="section__title mb-50 wow img-custom-anim-left">
                                    <h2 className="title text-white">DEVOTED TO PROVIDING QUALITY STATIONERY AND PRINTING SERVICES</h2>
                                    <p className="sec-text text-white">At KK Printing and Stationery, we are committed to delivering top-quality office supplies and printing solutions to meet the diverse needs of our clients. Our mission is to ensure customer satisfaction through exceptional service and premium products.</p>
                                </div>
                                <div className="skill-feature">
                                    <h3 className="skill-feature_title">STATIONERY SUPPLIES</h3>
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '95%' }}>
                                        </div>
                                        <div className="progress-value"><span className="counter-number">95</span>%</div>
                                    </div>
                                </div>
                                <div className="skill-feature">
                                    <h3 className="skill-feature_title">PRINTING SERVICES</h3>
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '90%' }}>
                                        </div>
                                        <div className="progress-value"><span className="counter-number">90</span>%</div>
                                    </div>
                                </div>
                                <div className="skill-feature">
                                    <h3 className="skill-feature_title">CUSTOMER SATISFACTION</h3>
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '98%' }}>
                                        </div>
                                        <div className="progress-value"><span className="counter-number">98</span>%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    
            {/*======== / Award Section ========*/}
            {/*==============================
Award Area
==============================*/}
            <section className="award-area-1 pt-110 pb-120 theme-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="section__title mb-50 wow img-custom-anim-left">
                                <h2 className="title">AWARDS & RECOGNITIONS</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-end">
                        <div className="col-lg-12">
                            <ul className="award-wrap-area">
                                <li className="single-award-list">
                                    <div className="award-details">
                                        <h4><Link href="/">Best Stationery Supplier</Link></h4>
                                        <p>National Business Awards</p>
                                    </div>
                                    <span className="award-year">2023</span>
                                </li>
                                <li className="single-award-list">
                                    <div className="award-details">
                                        <h4><Link href="/">Top Printing Services</Link></h4>
                                        <p>Industry Excellence Awards</p>
                                    </div>
                                    <span className="award-year">2022</span>
                                </li>
                                <li className="single-award-list">
                                    <div className="award-details">
                                        <h4><Link href="/">Customer Satisfaction Award</Link></h4>
                                        <p>Service Quality Awards</p>
                                    </div>
                                    <span className="award-year">2021</span>
                                </li>
                                <li className="single-award-list">
                                    <div className="award-details">
                                        <h4><Link href="/">Innovative Solutions</Link></h4>
                                        <p>Business Innovation Awards</p>
                                    </div>
                                    <span className="award-year">2020</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
    
            {/*======== / Marquee Section ========*/}
           
        </>
    )
}
