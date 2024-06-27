'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        '1200': {
            slidesPerView: 1,
        },
        '992': {
            slidesPerView: 1,
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
    // Navigation arrows
    navigation: {
        nextEl: '.testimonial-button-next',
        prevEl: '.testimonial-button-prev',
    },
}


export default function Testimonial2() {
    return (
        <>
            <section className="testimonial-area-2 pt-120 black2-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="section__title pb-55">
                                <h2 className="shadow-title">TESTIMONIAL</h2>
                                <h2 className="title title2 text-white wow img-custom-anim-left">FEEDBACK FROM OUR CLIENTS</h2>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial__item-wrap2">
                        <div className="swiper testimonial-active" id="testimonialSlider1">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="row gy-30 align-items-center">
                                        <div className="col-xl-5">
                                            <div className="testimonial__author">
                                                <div className="thumb">
                                                    <img src="/assets/img/others/testimonial5-1.jpg" alt="img" />
                                                </div>
                                                <div className="testimonial__author-content">
                                                    <h4 className="testimonial__title">MARK FRIDMAN</h4>
                                                    <span className="testimonial__desig">CEO, GOOGLE</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-7">
                                            <div className="testimonial__item style2">
                                                <div className="testimonial__icon">
                                                    <img src="/assets/img/icon/svg-img/quote-left2.svg" alt="img" />
                                                </div>
                                                <div className="testimonial__content">
                                                    <p className="testimonial__text">Vexa has been an invaluable partner to us. Any talent we've worked with has shown a deep
                                                        understanding of digital experiences. They're able to seamlessly integrate with our team and meet the level of craft that we hold ourselves accountable to. We're set up to meet our budgets and timelines while exceeding expectations.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="row gy-30 align-items-center">
                                        <div className="col-xl-5">
                                            <div className="testimonial__author">
                                                <div className="thumb">
                                                    <img src="/assets/img/others/group-img-1-3.jpg" alt="img" />
                                                </div>
                                                <div className="testimonial__author-content">
                                                    <h4 className="testimonial__title">MARK FRIDMAN</h4>
                                                    <span className="testimonial__desig">CEO, GOOGLE</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-7">
                                            <div className="testimonial__item style2">
                                                <div className="testimonial__icon">
                                                    <img src="/assets/img/icon/svg-img/quote-left2.svg" alt="img" />
                                                </div>
                                                <div className="testimonial__content">
                                                    <p className="testimonial__text">Vexa has been an invaluable partner to us. Any talent we've worked with has shown a deep
                                                        understanding of digital experiences. They're able to seamlessly integrate with our team and meet the level of craft that we hold ourselves accountable to. We're set up to meet our budgets and timelines while exceeding expectations.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="row justify-content-end">
                            <div className="col-xl-7">
                                <div className="btn-wrap">
                                    <button className="testimonial-button-next btn border-btn icon-btn slider-prev default"><i className="fas fa-angle-left" /></button>
                                    <button className="testimonial-button-next btn border-btn icon-btn slider-next default"><i className="fas fa-angle-right" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
