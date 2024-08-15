/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Design = ({ design, index, open, handleOpen }) => {

    // const [open, setOpen] = useState(false)
    // const [index, setIndex] = useState(0)

    // const handleOpen = (i) => {
    //     setIndex(i);
    //     setOpen(true);
    // }
    console.log(index)
    console.log(design.id)
    return (
        <div >
            <div className="flex grid-gap- max-h-[500px]">
                <LazyLoadImage
                    key={design.id}
                    index={design.id}
                    src={design.src}
                    alt={design.name}
                    className="max-w-auto max-h-auto h-auto rounded-lg hover:drop-shadow-md cursor-pointer border-bg-primary-500/50 border-2"
                    effect="opacity"
                    loading="lazy"
                    data-aos="zoom-in"
                    // height={260}
                    onClick={() => handleOpen(design.id)}

                />
            </div>

        </div >
    );
};

export default Design;
