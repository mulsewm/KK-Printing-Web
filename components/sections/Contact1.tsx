export default function Contact1() {
    return (
        <>
            <section className="contact-area-1 pt-120 pb-120 position-relative overflow-hidden">
                <div className="contact-area-bg-shape1 square-shape-wrap d-lg-inline-flex d-none">
                    <div className="square-shape1" />
                    <div className="square-shape2" />
                    <div className="square-shape3" />
                    <div className="square-shape4" />
                </div>
                <div className="contact-thumb1 wow img-custom-anim-left">
                    <img src="/assets/img/others/contact1-1.jpg" alt="img" />
                </div>
                <div className="container">
                    <div className="row align-items-center justify-content-end">
                        <div className="col-lg-6">
                            <div className="contact-form-wrap">
                                <div className="section__title mb-60 wow img-custom-anim-left">
                                    <h2 className="title">GET IN TOUCH</h2>
                                    <p className="sec-text mt-3">Got a project you want to collaborate on? <br />
                                        Or just fancy a chat?
                                    </p>
                                </div>
                                <form action="mail.php" method="POST" className="contact__form ajax-contact">
                                    <div className="row gy-35">
                                        <div className="col-12 form-group">
                                            <label className="form-icon-left"><img src="/assets/img/icon/svg-img/user.svg" alt="icon" /></label>
                                            <input type="text" className="form-control style-border" name="name" id="name" placeholder="Name*" />
                                        </div>
                                        <div className="col-12 form-group">
                                            <label className="form-icon-left"><img src="/assets/img/icon/svg-img/brifcase.svg" alt="icon" /></label>
                                            <input type="text" className="form-control style-border" name="website" id="website" placeholder="Organisation*" />
                                        </div>
                                        <div className="col-12 form-group">
                                            <label className="form-icon-left"><img src="/assets/img/icon/svg-img/envelope.svg" alt="icon" /></label>
                                            <input type="text" className="form-control style-border" name="email" id="email" placeholder="Email*" />
                                        </div>
                                        <div className="col-12 form-group">
                                            <label className="form-icon-left"><img src="/assets/img/icon/svg-img/brush.svg" alt="icon" /></label>
                                            <textarea name="message" placeholder="Message*" id="contactForm" className="form-control style-border" />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-three square-btn mt-60">
                                        SEND MESSAGE
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
