/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import React from 'react'

const Tools = ["CorelDraw"]
const About = () => {
    return (
        <section id="about-me" className='max-h-auto pt-24'>

            <div>
                <h2 className='text-3xl font-[500] mb-10 border-b-4 inline-block border-primary-500'>ABOUT ME</h2>
                <div className="flex flex-col md:flex-row gap-4 w-full">
                    <div className="rounded-md dshadow-md border-2 hover:bg-primary-500 border-primary-400/40 p-5 duration-150 cursor-pointer" data-aos="fade-right">
                        <p className='text-xl text-justivfy' >I'm Joshua, a graphic designer in Nigeria with 1+ year of experience. I specialize in creating functional designs that will help communicate a brand's service or product to it's target audience</p>
                    </div>
                    <div className="rounded-md dshadow-md border-2 border-primary-400/40 p-5 w-a1/2 hover:bg-primary-500 duration-150 cursor-pointer" data-aos="fade-left">

                        <p className="text-xl" >Having a keen eye for aesthetics, I make sure that every Design I create is not only aesthetically pleasing but is also a functional design.</p></div></div>
                <h3 className='text-2xl mt-4 mb-2'>🛠️Tools:</h3>
                <div className="p-2"><p className=''>{Tools.map(t => <span className='border border-primary-500/30 rounded-full mr-3  px-4 py-2 hover:bg-primary-400/80 hover:text-white duration-150 drop-shadow-lg cursor-pointer' key={t}>{t}</span>)}</p></div>
            </div>
        </section >
    )
}

export default About