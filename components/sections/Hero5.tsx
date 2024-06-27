'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    effect: "fade",
    // Navigation arrows
    navigation: {
        nextEl: '.testimonial-button-next',
        prevEl: '.testimonial-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index: any, className: any) {
            return '<span class="' + className + '">' + (index + 1) + "</span>"
        },
    },
}



export default function Hero5() {
    return (
        <>
            <section className="hero-wrapper hero-5">
                <div className="swiper hero-slider1-active" id="heroSlider1">
                    <Swiper {...swiperOptions} className="swiper-wrapper">
                        <SwiperSlide data-background="assets/img/hero/hero-5-1.jpg">
                            <div className="container">
                                <div className="hero-style5">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <div className="tg-button-wrap">
                                                <Link href="/about" className="btn border-white" data-ani="slideinleft" data-ani-delay="0.1s">
                                                    <i className="icon-globe" />WORLD CLASS AGENCY
                                                </Link>
                                            </div>
                                            <h1 className="hero-title text-white" data-ani="slideinleft" data-ani-delay="0.3s">HIGH–END DIGITAL AGENCY
                                            </h1>
                                            <p className="hero-text text-white" data-ani="slideinleft" data-ani-delay="0.5s">We’re a strategic, creative growth agency with a love for branding.</p>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="tg-button-wrap mt-90 justify-content-center" data-ani="slideinright" data-ani-delay="0.5s">
                                                <Link href="/about" className="btn btn-six big-circle-btn style3 gsap-magnetic">
                                                    LET'S TALK WITH US
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide data-background="assets/img/hero/hero-5-2.jpg">
                            <div className="container">
                                <div className="hero-style5">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <div className="tg-button-wrap">
                                                <Link href="/about" className="btn border-white" data-ani="slideinleft" data-ani-delay="0.1s">
                                                    <i className="icon-globe" />WORLD CLASS AGENCY
                                                </Link>
                                            </div>
                                            <h1 className="hero-title text-white" data-ani="slideinleft" data-ani-delay="0.3s">HIGH–END DIGITAL AGENCY
                                            </h1>
                                            <p className="hero-text text-white" data-ani="slideinleft" data-ani-delay="0.5s">We’re a strategic, creative growth agency with a love for branding.</p>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="tg-button-wrap mt-90 justify-content-center" data-ani="slideinright" data-ani-delay="0.5s">
                                                <Link href="/about" className="btn btn-six big-circle-btn style3 gsap-magnetic">
                                                    LET'S TALK WITH US
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="slider-area btn-wrap">
                        <button className="slider-btn slider-prev testimonial-button-prev">Prev</button>
                        <button className="slider-btn slider-next testimonial-button-next">Next</button>
                    </div>
                    <div className="swiper-pagination" />
                </div>
            </section>
        </>
    )
}
