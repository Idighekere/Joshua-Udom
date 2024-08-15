/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const Hero = ({ aosType, aosDuration }) => {
    return (
        <main className="h-screenz py-4">
            <div className="flex gap-3 items-center lg:flex-row flex-col lg:justify-normal justify-center" >
                <div className="text-center md:text-start" data-aos={aosType}
                    data-aos-duration={aosDuration}>
                    <h4 className="text-[1.25rem]">Hello there👋</h4>
                    <h2 className="md:text-[3.2rem] text-[2rem] font-[600]">
                        I'm, Joshua Udom
                    </h2>
                    <h3 className="text-[2rem] font-[400]">Graphic Designer</h3>
                    <p className="text-[1.125rem] font-[300]">
                        I help brands to{" "}
                        <span className="font-[500] hover:bg-primary-500 px-1 cursor-pointer">visually communicate</span> products
                        and services with <span className="font-[500] hover:bg-primary-500 px-1 cursor-pointer">functional</span> flyer designs to help reach their <span className="font-[500] hover:bg-primary-500 px-1 cursor-pointer">target audience.</span>
                    </p>
                    <button
                        type=""
                        className="bg-primary-400 hovver:bg-primary-500 duration-200 py-3 px-10 rounded-full mt-10 hover:bg-transparent  hover:border-primary-400 hover:border-2"
                    >
                        <Link to={"mailto:joshuaudom550@gmail.com"}>My Works</Link>
                    </button>
                </div>
                <div className="px-16 py-8 " >
                    <div className="rounded-full  p-2" data-aos="fade-left"><LazyLoadImage
                        src="https://ik.imagekit.io/idighekere/Photoroom-20240414_134760.png?q-80"
                        effect="opacity"
                        loading="lazy"
                        alt="joshua udom"
                        className="md:max-w-[400px] xmax-h-[300px] md:xmax-h-[400px] max-w-[270px] rounded-full border-primary-500 border-2 p-2 hover:shadow-lg hover:shadow-primary-500 duration-150"
                    /></div>
                </div>
            </div>
        </main>
    );
};

export default Hero;
