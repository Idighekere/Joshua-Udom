/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import React from 'react'
import { Link } from 'react-router-dom'

const socialLinks = [
    {
        name: "Facebook",
        link: "https://facebook.com/",
        color: "#1877F2",
        icon: "/facebook.svg"
    },
    {
        name: "Whatsapp",
        link: "https://wa.me/+234",
        color: "#25D366", icon: "/whatsapp.svg"
    },
    {
        name: "Behance",
        link: "/",
        color: "#053eff",
        icon: "/behance.svg"
    },
    {
        name: "Send Mail",
        link: "mailto:",
        color: "#d44638", icon: "/mail.svg"
    },
]
const Contact = () => {
    return (
        <section id="contact-me" className='max-h-auto pt-20'>
            <h2 className='text-3xl font-[500] mb-4 text-uppercase mb-10 border-b-4 inline-block border-primary-500'>CONTACT ME</h2>
            <p className='text-xl text-center' data-aos="fade-left">Get in touch with me for full-time job opportunities, freelance, design advice, or simply say to hello 😃
                .</p>

            <div className='grid grid-rowsx-4 grid-cols-3 md:grid-cols-4 gap-3 fjustify-center py-7' >
                {
                    socialLinks.map(link => (<span key={link.name} className=''><Link to={link.link} className='flex gap-3 justify-center items-center border border-white/30 rounded-full mr-3 w-auto p-4 md:px-4 md:py-1 hover:bg-white/80  drop-shadow-lg ' style={{ backgroundColor: link.color, }}>
                        <img src={link.icon} alt={link.name} width="10px" className='w-10' /> <p className='hidden md:block'>{link.name}</p></Link>
                    </span>))
                }
            </div>


        </section>
    )
}

export default Contact