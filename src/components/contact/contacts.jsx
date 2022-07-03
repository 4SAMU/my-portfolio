import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contacts.css';
import { MdEmail } from 'react-icons/md';
import { RiMessage2Fill } from 'react-icons/ri';
import { RiWhatsappFill } from 'react-icons/ri';


function Contacts() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uy6pvq9', 'template_aymz582', form.current, 'iYxtSgFQqkeObCtRa')
        e.target.reset()
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='Contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>samuelnzomo4@gmail.com</h5>
                        <a href="mailto:samuelnzomo4@gmail">send a message</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessage2Fill className='contact__option-icon' />
                        <h4>Messeger</h4>
                        <h5>SA MU</h5>
                        <a href="https://m.me/sa.mu.3705157">send a message</a>
                    </article>
                    <article className='contact__option'>
                        <RiWhatsappFill className='contact__option-icon' />
                        <h4>Whatsapp Me</h4>
                        <a href="https://wa.me/+25413563798">send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="10" placeholder="Your Message" required />
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contacts

