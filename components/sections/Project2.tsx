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

export default function Project2() {
    return (
        <>
            <section className="project-area-2 pt-120 pb-120 overflow-hidden black-bg">
                <div className="container custom-container2">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="section__title mb-50 wow img-custom-anim-top text-center">
                                <h2 className="title text-white">OUR COOLEST PROJECT</h2>
                            </div>
                        </div>
                    </div>
                    <div className="swiper project-slider2-active">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            <SwiperSlide>
                                <div className="project-card-item2 shine-animate-item">
                                    <div className="project-card-thumb">
                                        <Link className="shine-animate" href="/project-details">
                                            <img src="/assets/img/project/project2-1.jpg" alt="img" />
                                        </Link><Link href="/project-details" className="btn big-circle-btn style2 gsap-magnetic">
                                            VIEW PROJECT
                                        </Link>
                                    </div>
                                    <div className="project-card-content">
                                        <h4 className="project-card-title"><Link href="/project-details">Ddipiscing</Link></h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-card-item2 shine-animate-item">
                                    <div className="project-card-thumb">
                                        <Link className="shine-animate" href="/project-details">
                                            <img src="/assets/img/project/project2-2.jpg" alt="img" />
                                        </Link><Link href="/project-details" className="btn big-circle-btn style2 gsap-magnetic">
                                            VIEW PROJECT
                                        </Link>
                                    </div>
                                    <div className="project-card-content">
                                        <h4 className="project-card-title"><Link href="/project-details">Rarturient</Link></h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-card-item2 shine-animate-item">
                                    <div className="project-card-thumb">
                                        <Link className="shine-animate" href="/project-details">
                                            <img src="/assets/img/project/project2-3.jpg" alt="img" />
                                        </Link><Link href="/project-details" className="btn big-circle-btn style2 gsap-magnetic">
                                            VIEW PROJECT
                                        </Link>
                                    </div>
                                    <div className="project-card-content">
                                        <h4 className="project-card-title"><Link href="/project-details">Wit amet</Link></h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-card-item2 shine-animate-item">
                                    <div className="project-card-thumb">
                                        <Link className="shine-animate" href="/project-details">
                                            <img src="/assets/img/project/project2-1.jpg" alt="img" />
                                        </Link><Link href="/project-details" className="btn big-circle-btn style2 gsap-magnetic">
                                            VIEW PROJECT
                                        </Link>
                                    </div>
                                    <div className="project-card-content">
                                        <h4 className="project-card-title"><Link href="/project-details">Ddipiscing</Link></h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-card-item2 shine-animate-item">
                                    <div className="project-card-thumb">
                                        <Link className="shine-animate" href="/project-details">
                                            <img src="/assets/img/project/project2-2.jpg" alt="img" />
                                        </Link><Link href="/project-details" className="btn big-circle-btn style2 gsap-magnetic">
                                            VIEW PROJECT
                                        </Link>
                                    </div>
                                    <div className="project-card-content">
                                        <h4 className="project-card-title"><Link href="/project-details">Rarturient</Link></h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-card-item2 shine-animate-item">
                                    <div className="project-card-thumb">
                                        <Link className="shine-animate" href="/project-details">
                                            <img src="/assets/img/project/project2-3.jpg" alt="img" />
                                        </Link><Link href="/project-details" className="btn big-circle-btn style2 gsap-magnetic">
                                            VIEW PROJECT
                                        </Link>
                                    </div>
                                    <div className="project-card-content">
                                        <h4 className="project-card-title"><Link href="/project-details">Wit amet</Link></h4>
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
