'use client'
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    spaceBetween: 30,
    loop: true,
    slidesPerView: "auto" as const,
    breakpoints: {
        '1200': {
            slidesPerView: "auto" as const,
        },
        '992': {
            slidesPerView: "auto" as const,
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

export default function Project4() {
    return (
        <>
            <section className="project-area-4 pt-90 pb-120 overflow-hidden black2-bg">
                <div className="container">
                    <div className="section__title mb-55">
                        <h2 className="shadow-title">PROJECT</h2>
                        <h2 className="title title2 text-white wow img-custom-anim-left">OVER 200 <br /> PROJECTS DONE.</h2>
                    </div>
                </div>
                <div className="container-fluid p-0">
                    <div className="swiper project-slider3-active">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            <SwiperSlide>
                                <div className="project-card-item4 shine-animate-item">
                                    <div className="project-card-thumb">
                                        <Link className="shine-animate" href="/project-details">
                                            <img src="/assets/img/project/project5-1.jpg" alt="img" />
                                        </Link>
                                    </div>
                                    <div className="project-card-content">
                                        <h4 className="project-card-title"><Link href="/project-details">Lorien Website Design</Link></h4>
                                        <span className="project-card-text">Design</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-card-item4 shine-animate-item">
                                    <div className="project-card-thumb">
                                        <Link className="shine-animate" href="/project-details">
                                            <img src="/assets/img/project/project5-2.jpg" alt="img" />
                                        </Link>
                                    </div>
                                    <div className="project-card-content">
                                        <h4 className="project-card-title"><Link href="/project-details">Lorien Website Design</Link></h4>
                                        <span className="project-card-text">Design</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-card-item4 shine-animate-item">
                                    <div className="project-card-thumb">
                                        <Link className="shine-animate" href="/project-details">
                                            <img src="/assets/img/project/project5-3.jpg" alt="img" />
                                        </Link>
                                    </div>
                                    <div className="project-card-content">
                                        <h4 className="project-card-title"><Link href="/project-details">Lorien Website Design</Link></h4>
                                        <span className="project-card-text">Design</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-card-item4 shine-animate-item">
                                    <div className="project-card-thumb">
                                        <Link className="shine-animate" href="/project-details">
                                            <img src="/assets/img/project/project5-1.jpg" alt="img" />
                                        </Link>
                                    </div>
                                    <div className="project-card-content">
                                        <h4 className="project-card-title"><Link href="/project-details">Lorien Website Design</Link></h4>
                                        <span className="project-card-text">Design</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-card-item4 shine-animate-item">
                                    <div className="project-card-thumb">
                                        <Link className="shine-animate" href="/project-details">
                                            <img src="/assets/img/project/project5-2.jpg" alt="img" />
                                        </Link>
                                    </div>
                                    <div className="project-card-content">
                                        <h4 className="project-card-title"><Link href="/project-details">Lorien Website Design</Link></h4>
                                        <span className="project-card-text">Design</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-card-item4 shine-animate-item">
                                    <div className="project-card-thumb">
                                        <Link className="shine-animate" href="/project-details">
                                            <img src="/assets/img/project/project5-3.jpg" alt="img" />
                                        </Link>
                                    </div>
                                    <div className="project-card-content">
                                        <h4 className="project-card-title"><Link href="/project-details">Lorien Website Design</Link></h4>
                                        <span className="project-card-text">Design</span>
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
