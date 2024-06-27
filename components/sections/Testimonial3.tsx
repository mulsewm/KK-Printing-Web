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



export default function Testimonial3() {
    return (
        <>
            <section className="testimonial-area-3 pb-120 black2-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="swiper testimonial-active-3" id="testimonialSlider3">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="testimonial__item style3">
                                            <div className="testimonial__author">
                                                <div className="thumb">
                                                    <img src="/assets/img/others/testimonial8-1.jpg" alt="img" />
                                                </div>
                                                <div className="testimonial__author-content">
                                                    <h4 className="testimonial__title">MARK FRIDMAN</h4>
                                                    <span className="testimonial__desig">CEO, GOOGLE</span>
                                                </div>
                                            </div>
                                            <div className="testimonial__content">
                                                <p className="testimonial__text">“I've had the pleasure of working with Dwayne for many years on many projects. He is always willing to take on any challenge and will stop at nothing until he meets your expectations. He has a keen eye for detail and is someone I would recommend to anyone looking for design and development services.”</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial__item style3">
                                            <div className="testimonial__author">
                                                <div className="thumb">
                                                    <img src="/assets/img/others/testimonial5-1.jpg" alt="img" />
                                                </div>
                                                <div className="testimonial__author-content">
                                                    <h4 className="testimonial__title">MARK FRIDMAN</h4>
                                                    <span className="testimonial__desig">CEO, GOOGLE</span>
                                                </div>
                                            </div>
                                            <div className="testimonial__content">
                                                <p className="testimonial__text">“I've had the pleasure of working with Dwayne for many years on many projects. He is always willing to take on any challenge and will stop at nothing until he meets your expectations. He has a keen eye for detail and is someone I would recommend to anyone looking for design and development services.”</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial__item style3">
                                            <div className="testimonial__author">
                                                <div className="thumb">
                                                    <img src="/assets/img/others/group-img-1-3.jpg" alt="img" />
                                                </div>
                                                <div className="testimonial__author-content">
                                                    <h4 className="testimonial__title">MARK FRIDMAN</h4>
                                                    <span className="testimonial__desig">CEO, GOOGLE</span>
                                                </div>
                                            </div>
                                            <div className="testimonial__content">
                                                <p className="testimonial__text">“I've had the pleasure of working with Dwayne for many years on many projects. He is always willing to take on any challenge and will stop at nothing until he meets your expectations. He has a keen eye for detail and is someone I would recommend to anyone looking for design and development services.”</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="swiper-pagination" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
