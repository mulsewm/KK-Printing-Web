import Link from 'next/link'

export default function OffcanvasMenu({ isOffcanvasMenu, handleOffcanvasMenu }: any) {
    return (
        <>
            <div className={`offCanvas__info ${isOffcanvasMenu ? "active" : ""}`}>
                <div className="offCanvas__close-icon menu-close" onClick={handleOffcanvasMenu}>
                    <button><i className="fas fa-times" /></button>
                </div>
                <div className="offCanvas__logo mb-30">
                    <Link href="/"><img src="/assets/img/logo/logo-white.svg" alt="KK Printing and Stationery" /></Link>
                </div>
                <div className="offCanvas__side-info mb-30">
                    <div className="contact-list mb-30">
                        <h4>Office Address</h4>
                        <p>Addis Ababa, Ethiopia</p>
                    </div>
                    <div className="contact-list mb-30">
                        <h4>Phone Number</h4>
                        <p>+251 910 35 76 28</p>
                        <p>+251 984 71 64 54</p>
                    </div>
                    <div className="contact-list mb-30">
                        <h4>Email Address</h4>
                        <p>kkprint.st@gmail.com</p>
                        <p>sales@kktradinget.com</p>
                    </div>
                </div>
                <div className="offCanvas__social-icon mt-30">
                    <ul className="list-wrap">
                        <li><Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f" /></Link></li>
                        <li><Link href="https://twitter.com" target="_blank"><i className="fab fa-twitter" /></Link></li>
                        <li><Link href="https://www.whatsapp.com/" target="_blank"><i className="fab fa-whatsapp" /></Link></li>
                        <li><Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram" /></Link></li>
                        <li><Link href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube" /></Link></li>
                    </ul>
                </div>
            </div>
            <div className={`offCanvas__overly  ${isOffcanvasMenu ? "active" : ""}`} onClick={handleOffcanvasMenu} />
        </>
    )
}
