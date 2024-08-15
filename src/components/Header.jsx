/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


const Links = [
    {
        "name": "Works",
        "href": "/#works",
    },
    {
        "name": "About Me",
        "href": "/#about-me",
    },
    {
        "name": "Contact Me",
        "href": "/#contact-me",
    },
]
const Header = () => {
    const [isOpen, setisOpen] = useState(false)

    const ToggleMenu = () => {
        setisOpen(i => (!i))
    }
    return (
        <header className="sticky top-5 md:top-3 ">
            <div className='relative'></div>
            <nav className='flex gap-6 justify-between  px-3 py-3 md:px-6 md:py-4 my-3 items-center backdrop-blur-md  rounded-full bg-black/30 w-fulvl md:max-w-7xl border border-white/20'>
                <div className='flex gap-8 justify-between items-center '>
                    <div className='z-50'><p className="font-[600] whitespace-nowrap">Joshua Udom✨</p></div>
                    <div className='md:flex  text-white text-[.9rem] items-center hidden'>{Links.map(link => (<a href={link.href} key={link.name} className="hover:bg-neutral-500/10 duration-200 py-[6px] px-8 rounded-full ">{link.name}</a>))}</div>

                </div>
                <div>
                    <button type="" className="bg-primary-400 hover:bg-primary-500 duration-200 py-2 px-10 rounded-full items-center md:flex hidden"><Link to={""}>Book a Call</Link></button>
                </div>
                <div className='flex md:hidden z-50'>
                    {isOpen ? (<span onClick={ToggleMenu}> <img src="/closeMenu.svg" alt="hamburger menu" width="40px" /></span>) : (<span onClick={ToggleMenu}> <img src="/hamburger.svg" alt="hamburger menu" width="40px" /></span>)}
                </div>
                {isOpen && (<div className='absolute top-[0px] bg-black/90 backdrop-blur-md h-[350px] w-full right-0 border border-white/20 rounded-lg z-40' >

                    <div className='flex flex-col mt-20 justify- center text-right text-white text-[1.5rem] items-center h-screen'>{Links.map(link => (<a href={link.href} key={link} className="hover:bg-neutral-500/10  duration-200 py-[6px] px-8 rounded-full ">{link.name}</a>))}</div>
                </div>)}
            </nav>
        </header>
    )
}

export default Header