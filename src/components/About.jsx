/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import React from 'react'

const Tools = ["Photoshop", "CorelDraw"]
const About = () => {
    return (
        <section id="about-me" className='max-h-auto pt-24'>

            <div>
                <h2 className='text-3xl font-[500] mb-10 border-b-4 inline-block border-primary-500'>ABOUT ME</h2>
                <p className='text-xl text-justivfy' data-aos="fade-up-left">I'm Joshua, a graphic designer in Nigeria with 1+ year of experience. I specialize in creating functional designs that will help communicate a brand's service or product to it's target audience</p>
                <p className="text-xl" data-aos="fade-down-right">Having a keen eye for aesthetics, I make sure that every Design I create is not only aesthetically pleasing but is also a functionaldesign.</p>
                <h3 className='text-2xl mt-4 mb-2'>🛠️Tools:</h3>
                <p className=''>{Tools.map(t => <span className='border border-white/30 rounded-full mr-3  px-4 py-2 hover:bg-white/80 hover:text-black drop-shadow-lg cursor-pointer' key={t}>{t}</span>)}</p>
            </div>
        </section>
    )
}

export default About