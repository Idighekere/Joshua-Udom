/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const Hero = ({ aosType, aosDuration }) => {
    return (
        <main className="h-screenz py-4">
            <div className="flex gap-3 items-center lg:flex-row flex-col lg:justify-normal justify-center" data-aos={aosType}
                data-aos-duration={aosDuration}>
                <div className="text-center md:text-start">
                    <h4 className="text-[1.25rem]">Hello there👋</h4>
                    <h2 className="md:text-[3.2rem] text-[2rem] font-[600]">
                        I'm, Joshua Udom
                    </h2>
                    <h3 className="text-[2rem] font-[400]">Graphic Designer</h3>
                    <p className="text-[1.125rem]">
                        I help brands to{" "}
                        <span className="font-[500]">visually communicate</span> products
                        and services with <span className="font-[500]">functional </span>
                        flyer designs to their{" "}
                        <span className="font-[500]">target audience.</span>
                    </p>
                    <button
                        type=""
                        className="bg-primary-400 hovver:bg-primary-500 duration-200 py-3 px-10 rounded-full mt-10 hover:bg-transparent  hover:border-primary-400 hover:border-2"
                    >
                        <Link to={"mailto:joshuaudom550@gmail.com"}>View Resume</Link>
                    </button>
                </div>
                <div className="p-10" data-aos="fade-right">
                    <LazyLoadImage
                        src="/Joshua Udom.png"
                        effect="opacity"
                        loading="lazy"
                        alt="joshua udom"
                        className="md:max-w-[400px] max-h-full max-w-[300px]"
                    />
                </div>
            </div>
        </main>
    );
};

export default Hero;
