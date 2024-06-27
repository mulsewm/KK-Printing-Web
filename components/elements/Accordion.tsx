'use client'
import { useState } from 'react'
interface ActiveState {
    status: boolean
    key: number
}
export default function Accordion() {
    const [isActive, setIsActive] = useState<ActiveState>({
        status: false,
        key: 1,
    })

    const handleClick = (key: number) => {
        if (isActive.key === key) {
            setIsActive({
                ...isActive,
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="accordion-area accordion" id="faqAccordion">
                <div className="accordion-card style2 active">
                    <div className="accordion-header" id="collapse-item-1" onClick={() => handleClick(1)}>
                        <button className={isActive.key == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">What will my Project cost?</button>
                    </div>
                    <div id="collapse-1" className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            <p className="faq-text">We design high quality websites that make users come back for more. A good website tells a story that will make users fully immerse themselves operating</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-card style2">
                    <div className="accordion-header" id="collapse-item-2" onClick={() => handleClick(2)}>
                        <button className={isActive.key == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">What happens to my data if I cancel?</button>
                    </div>
                    <div id="collapse-2" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            <p className="faq-text">We design high quality websites that make users come back for more. A good website tells a story that will make users fully immerse themselves operating</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-card style2">
                    <div className="accordion-header" id="collapse-item-3" onClick={() => handleClick(3)}>
                        <button className={isActive.key == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">How I can optimize voice search?</button>
                    </div>
                    <div id="collapse-3" className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="collapse-item-3" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            <p className="faq-text">We design high quality websites that make users come back for more. A good website tells a story that will make users fully immerse themselves operating</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-card style2">
                    <div className="accordion-header" id="collapse-item-4" onClick={() => handleClick(4)}>
                        <button className={isActive.key == 4 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">What happens to my data if I cancel?</button>
                    </div>
                    <div id="collapse-4" className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="collapse-item-4" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            <p className="faq-text">We design high quality websites that make users come back for more. A good website tells a story that will make users fully immerse themselves operating</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-card style2">
                    <div className="accordion-header" id="collapse-item-5" onClick={() => handleClick(5)}>
                        <button className={isActive.key == 5 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5">Can I change my plan later?</button>
                    </div>
                    <div id="collapse-5" className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="collapse-item-5" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            <p className="faq-text">We design high quality websites that make users come back for more. A good website tells a story that will make users fully immerse themselves operating</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
