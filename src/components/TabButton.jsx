/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const TabButton = ({ selectedCategory, handleCategory, name, category }) => {
    return (
        <> <button className={`px-5 py-2 //bg-primary-400/30 hover:border-primary-500/20 hover:border-b-4 hover:bg-primary-400/20 inline-block ${selectedCategory == category ? "border border-b-4 border- border-primary-500 border-x-0 border-t-0 bg-primary-400/30" : ""}`} onClick={() => handleCategory(category)}>{name}</button></>
    )
}

export default TabButton