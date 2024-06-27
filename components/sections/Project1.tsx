'use client'
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    breakpoints: {
        '1200': {
            slidesPerView: 3,
        },
        '992': {
            slidesPerView: 2,
        },
        '768': {
            slidesPerView: 1,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
}

export default function Project1() {
    return (
        <>
            <section className="project-area-1 pt-120 pb-110 overflow-hidden">
                <div className="section__title section__title-two mb-60 text-lg-start text-center">
                    <div className="container-fluid">
                        <div className="row gx-0">
                            <div className="col-xl-2 col-lg-3">
                                <h6 className="sub-title wow img-custom-anim-left">Project</h6>
                            </div>
                            <div className="col-xxl-4 col-xl-5 col-lg-6">
                                <h2 className="title wow img-custom-anim-left">OUR COOLEST PROJECT</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-0">
                    <div className="swiper project-slider-active">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            <SwiperSlide>
                                <div className="project-card-item shine-animate-item">
                                    <div className="project-card-thumb">
                                        <Link className="shine-animate" href="/project-details">
                                            <img src="/assets/img/project/project1-1.jpg" alt="img" />
                                        </Link>
                                    </div>
                                    <div className="project-card-content">
                                        <h4 className="project-card-title"><Link href="/project-details">Wepay</Link></h4>
                                        <span className="project-card-text">Branding</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-card-item shine-animate-item">
                                    <div className="project-card-thumb">
                                        <Link className="shine-animate" href="/project-details">
                                            <img src="/assets/img/project/project1-2.jpg" alt="img" />
                                        </Link>
                                    </div>
                                    <div className="project-card-content">
                                        <h4 className="project-card-title"><Link href="/project-details">Payrole</Link></h4>
                                        <span className="project-card-text">Mobile App</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-card-item shine-animate-item">
                                    <div className="project-card-thumb">
                                        <Link className="shine-animate" href="/project-details">
                                            <img src="/assets/img/project/project1-3.jpg" alt="img" />
                                        </Link>
                                    </div>
                                    <div className="project-card-content">
                                        <h4 className="project-card-title"><Link href="/project-details">Sportly</Link></h4>
                                        <span className="project-card-text">Website Design</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-card-item shine-animate-item">
                                    <div className="project-card-thumb">
                                        <Link className="shine-animate" href="/project-details">
                                            <img src="/assets/img/project/project1-1.jpg" alt="img" />
                                        </Link>
                                    </div>
                                    <div className="project-card-content">
                                        <h4 className="project-card-title"><Link href="/project-details">Wepay</Link></h4>
                                        <span className="project-card-text">Branding</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-card-item shine-animate-item">
                                    <div className="project-card-thumb">
                                        <Link className="shine-animate" href="/project-details">
                                            <img src="/assets/img/project/project1-2.jpg" alt="img" />
                                        </Link>
                                    </div>
                                    <div className="project-card-content">
                                        <h4 className="project-card-title"><Link href="/project-details">Payrole</Link></h4>
                                        <span className="project-card-text">Mobile App</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-card-item shine-animate-item">
                                    <div className="project-card-thumb">
                                        <Link className="shine-animate" href="/project-details">
                                            <img src="/assets/img/project/project1-3.jpg" alt="img" />
                                        </Link>
                                    </div>
                                    <div className="project-card-content">
                                        <h4 className="project-card-title"><Link href="/project-details">Sportly</Link></h4>
                                        <span className="project-card-text">Website Design</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}
