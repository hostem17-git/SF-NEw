import React, { useRef } from 'react'
import './Form.css'
import NavBar from './NavBar/NavBar'
import emailjs from '@emailjs/browser';
import Contact_Us from '../assets/ContactUs.png'
const ServiceID = import.meta.env.VITE_SERVICE_ID
const templateID = import.meta.env.VITE_TEMPLATE_ID
const publicKey = import.meta.env.VITE_PUBLIC_KEY
const ContactUs = () => {
    const btn_connect = (
        <button style={{ display: 'none' }}>
            CONNECT WALLET
        </button>
    );

    const form = useRef()

    const handleMailClick = (e) => {
        e.preventDefault();
        emailjs.sendForm(ServiceID, templateID, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                console.log(result + form.current);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <>
            <NavBar button={btn_connect} />
            <div className="conctact_us-container">
                <div className="super_foodz-img whitepaper-img" >
                    <img src={Contact_Us} alt="Contact_Us" width="100%" srcSet={Contact_Us} />
                </div>
                <div className="conctact_us-description">Let the SuperFoodz SuperHeroes know if you have any questions about the presale event.</div>
                <form ref={form} onSubmit={handleMailClick}>
                    <input type="name" name="name" required id="name" placeholder='Full Name' />
                    <input type="email" name="email" required id="email" placeholder='Email Address' />
                    <textarea name="message" id="message" required rows={8} minHeight="200px" placeholder="Message" />
                    <button type='submit' className="btn-download" style={{ margin: 0, padding: '5px 15px', fontSize: "24px" }}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default ContactUs