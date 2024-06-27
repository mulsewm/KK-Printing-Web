import Link from "next/link"
import Marquee from 'react-fast-marquee'

export default function Marquee4() {
    return (
        <>
            <div className="container-fluid px-0 overflow-hidden pb-40 pt-40 theme-bg">
                <div className="slider__marquee clearfix marquee-wrap style2">
                    <Marquee className="marquee_mode marquee__group">
                        <h6 className="item m-item"><Link href="/#"><img src="/assets/img/icon/svg-img/star.svg" alt="img" /> Digital Solutions</Link></h6>
                        <h6 className="item m-item"><Link href="/#"><img src="/assets/img/icon/svg-img/star.svg" alt="img" /> Digital World</Link></h6>
                        <h6 className="item m-item"><Link href="/#"><img src="/assets/img/icon/svg-img/star.svg" alt="img" /> Digital Solutions</Link></h6>
                        <h6 className="item m-item"><Link href="/#"><img src="/assets/img/icon/svg-img/star.svg" alt="img" /> Digital World</Link></h6>
                    </Marquee>
                </div>
            </div>
        </>
    )
}
