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
    return (
        <div>
            <div className="flex grid-gap- max-h-[500px]">
                <LazyLoadImage
                    src={design.src}
                    alt={design.name}
                    className="max-w-auto max-h-auto h-auto rounded-lg hover:drop-shadow-md cursor-pointer"
                    effect="black-and-white"
                    loading="lazy"

                    // height={260}
                    onClick={() => handleOpen(design.id)}
                />
            </div>

        </div >
    );
};

export default Design;
