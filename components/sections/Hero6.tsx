'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/css/modal-video.css"

import Link from "next/link"

export default function Hero6() {
    const [isOpen, setOpen] = useState(false)

    const openModal = (event: any) => {
        event.preventDefault() // Prevent the default action of the click event
        setOpen(true)
    }
    return (
        <>
            <section className="hero-wrapper hero-6 black2-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="hero-style6">
                                <h1 className="hero-title text-white wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1s">THE BEST
                                </h1>
                                <h1 className="hero-title style2 text-white wow img-custom-anim-right text-end" data-wow-duration="1.5s" data-wow-delay="0.2s">DIGITAL
                                </h1>
                                <h1 className="hero-title text-white wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s">EXPERIENCE
                                </h1>
                                <p className="hero-text text-white wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.4s">We’re a strategic, creative growth agency with a love for branding.</p>
                                <div className="tg-button-wrap justify-content-lg-center" data-aos="fade-up" data-aos-delay={200}>
                                    <Link href="/about" className="btn big-circle-btn style3 gsap-magnetic">
                                        LET'S TALK WITH US
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-thumb6-1 video-thumb-box1 wow img-custom-anim-right">
                    <img src="/assets/img/hero/hero-6-1.jpg" alt="img" />
                    <div className="video-btn-wrap wow img-custom-anim-left">
                        <a onClick={openModal} className="play-btn popup-video" tabIndex={0}>PLAY VIDEO <div className="btn icon-btn"><i className="fas fa fa-play" /></div></a>
                    </div>
                </div>
            </section>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        </>
    )
}
