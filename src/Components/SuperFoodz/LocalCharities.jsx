import React, { useRef } from 'react'
import '../Form.css'
import '../SuperFoodz.css'
import emailjs from '@emailjs/browser';
const ServiceID = import.meta.env.VITE_SERVICE_ID
const templateID = import.meta.env.VITE_TEMPLATE_ID
const publicKey = import.meta.env.VITE_PUBLIC_KEY

const LocalCharities = () => {

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
            <div className="super_foodz local-charties" >
                <h1 className="super_foodz-heading">
                    Partnering With Local Charities
                    <br />
                    To Make A Difference Where It Matters
                </h1>
                <p className="super_foodz-para">
                    Let’s Knockout Hunger Together.  SuperFoodz starts with giving, and the understanding that as SuperFoodz grows in size, scope, and utility, we are actively looking for other food based charitable organizations to partner with, to serve different but complementary communities to our growing list of organizations.
                </p>
                <h1 className="super_foodz-heading">
                    To Fight For Justice With SuperFoodz:
                </h1>
                <form ref={form} onSubmit={handleMailClick}>
                    <input type="email" name="email" required id="email" placeholder='Email Address' />
                    <textarea name="message" id="message" required rows={8} minHeight="200px" placeholder="Message" />
                    <button className="btn-download" type='submit' style={{ margin: 0, padding: '5px 15px' }}>Submit</button>
                </form>
            </div>

        </>
    )
}

export default LocalCharities