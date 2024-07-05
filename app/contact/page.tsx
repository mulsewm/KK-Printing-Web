"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { metadata } from '@/app/metadata';
export default function Contact() {
    const { data: session, status } = useSession();
    const [formData, setFormData] = useState({
        name: "",
        organisation: "",
        email: "",
        phoneNumber: "",
        message: "",
        file: null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData({
            ...formData,
            file: file,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            formDataToSend.append("name", formData.name);
            formDataToSend.append("organisation", formData.organisation);
            formDataToSend.append("email", formData.email);
            formDataToSend.append("phoneNumber", formData.phoneNumber);
            formDataToSend.append("message", formData.message);
            if (formData.file) {
                formDataToSend.append("file", formData.file);
            }

            await axios.post("/api/sendEmail", formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            toast.success("Request sent successfully!");
            setFormData({
                name: "",
                organisation: "",
                email: "",
                phoneNumber: "",
                message: "",
                file: null,
            });
        } catch (error) {
            toast.error("Failed to send request. Please try again.");
        }
    };

    return (
       
            <section id="contact" className="contact-area-1 pt-120 pb-120 overflow-hidden">
                <div className="container">
                    <div className="section__title mb-60">
                        <h2 className="title">LET'S GET IN TOUCH</h2>
                    </div>
                    <div className="row gy-60">
                        <div className="col-lg-6">
                            <div className="contact__info-wrap">
                                <ul className="list-wrap">
                                    <li>
                                        <h6 className="title">Phone</h6>
                                        <Link href="tel:+251910357628">+251 910 35 76 28</Link><br />
                                        <Link href="tel:+251984716454">+251 984 71 64 54</Link>
                                    </li>
                                    <li>
                                        <h6 className="title">Email</h6>
                                        <Link href="mailto:kkprint.st@gmail.com">kkprint.st@gmail.com</Link> <br />
                                        <Link href="mailto:sales@kktradinget.com">sales@kktradinget.com</Link>
                                    </li>
                                    <li>
                                        <h6 className="title">Headquarters</h6>
                                        Addis Ababa, Ethiopia
                                    </li>
                                    <li>
                                        <Link href="https://www.google.com/maps" className="link-btn">
                                            See on Google Map
                                            <i className="icon-arrow-top-left" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-form-wrap">
                                <div className="section__title mb-60">
                                    <h4 className="subtitle">Request a proforma for your stationery supplies needs</h4>
                                </div>
                                <form onSubmit={handleSubmit} className="contact__form">
                                    <div className="row gy-35">
                                        <div className="col-12 form-group">
                                            <label className="form-icon-left"><img src="/assets/img/icon/svg-img/user.svg" alt="icon" /></label>
                                            <input type="text" className="form-control style-border" name="name" id="name" placeholder="Name*" value={formData.name} onChange={handleChange} />
                                        </div>
                                        <div className="col-12 form-group">
                                            <label className="form-icon-left"><img src="/assets/img/icon/svg-img/brifcase.svg" alt="icon" /></label>
                                            <input type="text" className="form-control style-border" name="organisation" id="organisation" placeholder="Organisation*" value={formData.organisation} onChange={handleChange} />
                                        </div>
                                        <div className="col-12 form-group">
                                            <label className="form-icon-left"><img src="/assets/img/icon/svg-img/envelope.svg" alt="icon" /></label>
                                            <input type="email" className="form-control style-border" name="email" id="email" placeholder="Email*" value={formData.email} onChange={handleChange} />
                                        </div>
                                        <div className="col-12 form-group">
                                            <label className="form-icon-left"><img src="/assets/img/icon/svg-img/envelope.svg" alt="icon" /></label>
                                            <input type="text" className="form-control style-border" name="phoneNumber" id="phoneNumber" placeholder="Phone Number*" value={formData.phoneNumber} onChange={handleChange} />
                                        </div>
                                        <div className="col-12 form-group">
                                            <label className="form-icon-left"><img src="/assets/img/icon/svg-img/brush.svg" alt="icon" /></label>
                                            <textarea name="message" placeholder="Message*" id="contactForm" className="form-control style-border" value={formData.message} onChange={handleChange} />
                                        </div>
                                        <div className="col-12 form-group">
                                            <label className="form-icon-left"><img src="/assets/img/icon/svg-img/envelope.svg" alt="icon" /></label>
                                            <input type="file" className="form-control style-border" name="file" id="file" onChange={handleFileChange} />
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
                <div className="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.551327721153!2d38.734885574694964!3d9.010793000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850ed86a9a01%3A0xf7be68cb14deab9!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sbd!4v1684309529719!5m2!1sen!2sbd" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <ToastContainer />
            </section>
            
    
    );
}
