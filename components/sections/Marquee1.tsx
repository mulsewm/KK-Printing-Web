import Link from "next/link"
import Marquee from 'react-fast-marquee'

export default function Marquee1() {
    return (
        <>
            <div className="container-fluid px-0 overflow-hidden pb-120">
                <div className="slider__marquee clearfix marquee-wrap">
                    <Marquee className="marquee_mode marquee__group">
                        <h6 className="item m-item text-stroke"><Link href="/#">Digital Solutions</Link></h6>
                        <h6 className="item m-item"><Link href="/#">Digital World</Link></h6>
                        <h6 className="item m-item text-stroke"><Link href="/#">Digital Solutions</Link></h6>
                        <h6 className="item m-item"><Link href="/#">Digital World</Link></h6>
                    </Marquee>
                </div>
            </div>
        </>
    )
}
