'use client'
import Link from "next/link"
import { useEffect } from 'react'

export default function Service1() {
    useEffect(() => {
        const tabs = document.querySelectorAll<HTMLElement>('.service1-tab-wrap li')

        tabs.forEach(tab => {
            tab.addEventListener('mouseenter', handleTabMouseEnter)
        })

        return () => {
            tabs.forEach(tab => {
                tab.removeEventListener('mouseenter', handleTabMouseEnter)
            })
        }
    }, [])

    const handleTabMouseEnter = (event: MouseEvent) => {
        const tab = event.currentTarget as HTMLElement
        const targetContentId = tab.querySelector('.service1-tab-item')?.getAttribute('data-bs-target')
        const targetContent = document.querySelector<HTMLElement>(targetContentId!)

        if (targetContent) {
            document.querySelectorAll('.service1-tab-wrap li').forEach(tab => tab.classList.remove('active'))
            tab.classList.add('active')

            document.querySelectorAll<HTMLElement>('.service1-tab-content').forEach(content => content.style.display = 'none')
            targetContent.style.display = 'block'
        }
    }
    return (
        <>
            <section className="service-area pt-110 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section__title mb-50">
                                <h2 className="title wow img-custom-anim-left">WHAT WE CAN DO FOR OUR CLIENTS</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-40">
                        <div className="col-lg-5 wow img-custom-anim-left">
                            <div id="tabs-content">
                                <div id="tab1" className="service1-tab-content">
                                    <div className="service-thumb">
                                        <img src="/assets/img/service/1-1.jpg" alt="img" />
                                    </div>
                                </div>
                                <div id="tab2" className="service1-tab-content" style={{ display: 'none' }}>
                                    <div className="service-thumb">
                                        <img src="/assets/img/service/1-2.jpg" alt="img" />
                                    </div>
                                </div>
                                <div id="tab3" className="service1-tab-content" style={{ display: 'none' }}>
                                    <div className="service-thumb">
                                        <img src="/assets/img/service/1-1.jpg" alt="img" />
                                    </div>
                                </div>
                                <div id="tab4" className="service1-tab-content" style={{ display: 'none' }}>
                                    <div className="service-thumb">
                                        <img src="/assets/img/service/1-2.jpg" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <ul className="service1-tab-wrap" id="tabs-nav">
                                <li>
                                    <div className="service1-tab-item" data-bs-toggle="tab" data-bs-target="#tab1">
                                        <Link className="service1-tab-single" href="/service-details">UI/UX Design <i className="icon-arrow-top-left" /></Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="service1-tab-item" data-bs-toggle="tab" data-bs-target="#tab2">
                                        <Link className="service1-tab-single" href="/service-details">Web Design <i className="icon-arrow-top-left" /></Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="service1-tab-item" data-bs-toggle="tab" data-bs-target="#tab3">
                                        <Link className="service1-tab-single" href="/service-details">Brand Design <i className="icon-arrow-top-left" /></Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="service1-tab-item" data-bs-toggle="tab" data-bs-target="#tab4">
                                        <Link className="service1-tab-single" href="/service-details">Graphic Design <i className="icon-arrow-top-left" /></Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}