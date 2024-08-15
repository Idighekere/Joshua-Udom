/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import About from '../components/About'
import Works from '../components/Works'
import Contact from '../components/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: false, // Whether animation should happen only once
        });
    }, []);

    const aosType = "fade-up";
    const aosDuration = 1000;
    return (
        <div className="bg-black text-white px-10 sm:px-16 lg:px-32 flex flex-col justify-center overflow-x-hi">

            <Header />
            <div >
                <Hero aosType={aosType} aosDuration={aosDuration} />
                <Works />
                <About />
                <Contact />
            </div>
            <Footer />
        </div>
    )
}

export default Home
