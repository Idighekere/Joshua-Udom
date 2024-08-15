/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { designLists } from "../utils/designs"
import Design from './Design'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"
import TabButton from './TabButton';


const tabButtons = [
    {

        name: "Church Designs",
        category: "church"
    },
    {

        name: "Flier Designs",
        category: "flier"

    },
    {

        name: "Social Media Designs",
        category: "social"

    },
]

const Works = () => {
    const [selectedCategory, setSelectedCategory] = useState("church")
    const [activeTab, setactiveTab] = useState(0)
    const [designs, setDesigns] = useState([])
    const [loading, setLoading] = useState(false)
    // console.log(designs.map(d => d.name))
    // console.log(designs.category[0].name)
    const handleCategory = (cat) => {
        setSelectedCategory(cat)
    }
    // var filteredDesigns
    // useEffect(() => {
    //     fetch("..utils/designs.js")
    //         .then(res => res.json)
    //         .then(data => setDesigns(data))
    //     setLoading(false)

    // }, [designs, selectedCategory])

    const filteredDesigns = designLists.filter(d => d.category === selectedCategory)
    // const filteredDesigns = selectedCategory === "" ? designs : designs.filter(d => d.category === selectedCategory)
    // const filteredDesigns = desi.filter(des => des.category === designs.category)

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(0)

    const handleOpen = (i) => {
        setIndex(i);
        setOpen(true);
    }
    return (
        <section id="works" className='max-h-auto pt-24'>
            <h2 className='text-3xl font-[500] mb-4c text-uppercase mb-10 border-b-4 inline-block border-primary-500'>MY WORKS</h2>

            <div className="flex /gap-3 justify-center overflow-x-auto whitespace-nowrap w-full ">
                <div className="rounded-s-full rounded-e-full //bg-primary-400/30 whitespace-nowrap">{tabButtons.map(button => (<TabButton key={button.name} selectedCategory={selectedCategory} handleCategory={handleCategory} name={button.name} category={button.category} />))}

                </div>
            </div>
            <div className='grid //gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4c w-full justify-center items-center //gap-x-10 grid-rows-[auto] mt-4' style={{ gridGap: "20px" }}>
                {loading ? (<p>Loading...</p>) : (
                    filteredDesigns.map(design => {
                        return <Design design={design} key={design.id} open={open} index={index} handleOpen={handleOpen} />
                    })
                )}
                {open && (<Lightbox open={open} close={() => setOpen(false)} slides={filteredDesigns} index={index} />)}
            </div>

        </section >
    )
}

export default Works