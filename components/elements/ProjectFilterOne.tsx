'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
interface IsotopeInstance {
    arrange(options: { filter: string }): void
}
export default function ProjectFilterOne() {
    const isotope = useRef<IsotopeInstance | null>(null) // Define the type for isotope ref
    const [filterKey, setFilterKey] = useState<string>("*")

    useEffect(() => {
        setTimeout(() => {
            if (isotope.current === null) {
                isotope.current = new Isotope(".masonary-active", {
                    itemSelector: ".filter-item",
                    // layoutMode: "fitRows",
                    percentPosition: true,
                    masonry: {
                        columnWidth: ".filter-item",
                    }
                })
            }
        }, 1000)
    }, [])

    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])

    const handleFilterKeyChange = useCallback((key: string) => () => {
        setFilterKey(key)
    }, [])

    const activeBtn = (value: string) => (value === filterKey ? "active" : "")

    return (
        <>
            <section className="project-area-3 pt-110 pb-120 overflow-hidden">
                <div className="container">
                    <div className="section__title mb-50 text-center">
                        <div className="portfolio-tab-menu filter-menu-active">
                            <span className="portfolio-tab-menu-title">FILTER BY :</span>
                            <button className={`filter-btn ${activeBtn("*")}`} onClick={handleFilterKeyChange("*")}>Show All</button>
                            <button className="filter-btn" onClick={handleFilterKeyChange("cat1")}>Art</button>
                            <button className="filter-btn" onClick={handleFilterKeyChange("cat2")}>Branding</button>
                            <button className="filter-btn" onClick={handleFilterKeyChange("cat3")}>Design</button>
                            <button className="filter-btn" onClick={handleFilterKeyChange("cat4")}>Marketing</button>
                        </div>
                    </div>
                    <div className="row gy-60 gx-60 justify-content-between masonary-active">
                        <div className="col-lg-6 filter-item cat1 cat3">
                            <div className="project-card-item8 shine-animate-item">
                                <div className="project-card-thumb">
                                    <Link className="shine-animate" href="/project-details">
                                        <img className="w-100" src="/assets/img/project/project9-3.jpg" alt="img" />
                                    </Link>
                                </div>
                                <div className="project-card-content mt-30">
                                    <h3><Link href="/project-details">PLAYFUL CARTOONS</Link></h3>
                                    <p className="project-card-text">Art</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 filter-item cat4">
                            <div className="project-card-item8 mt-lg-200 shine-animate-item">
                                <div className="project-card-thumb">
                                    <Link className="shine-animate" href="/project-details">
                                        <img className="w-100" src="/assets/img/project/project9-4.jpg" alt="img" />
                                    </Link>
                                </div>
                                <div className="project-card-content mt-30">
                                    <h3><Link href="/project-details">PACKAGE DESIGNS</Link></h3>
                                    <p className="project-card-text">Marketing</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 filter-item cat2 cat4">
                            <div className="project-card-item8 shine-animate-item">
                                <div className="project-card-thumb">
                                    <Link className="shine-animate" href="/project-details">
                                        <img className="w-100" src="/assets/img/project/project9-5.jpg" alt="img" />
                                    </Link>
                                </div>
                                <div className="project-card-content mt-30">
                                    <h3><Link href="/project-details">STORYBOOK ILLUSTRATIONS</Link></h3>
                                    <p className="project-card-text">Branding</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 filter-item cat2 cat1 cat3">
                            <div className="project-card-item8 shine-animate-item">
                                <div className="project-card-thumb">
                                    <Link className="shine-animate" href="/project-details">
                                        <img className="w-100" src="/assets/img/project/project9-6.jpg" alt="img" />
                                    </Link>
                                </div>
                                <div className="project-card-content mt-30">
                                    <h3><Link href="/project-details">MAGAZINE COVER ART</Link></h3>
                                    <p className="project-card-text">Branding</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}