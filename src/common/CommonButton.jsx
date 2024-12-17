import React from 'react'

const CommonButton = ({ text }) => {
    return (
        <button className='pt-3 pb-[11px] px-4 border border-[#191A42] rounded-full text-sm font-normal tracking-tight leading-custom-3xl text-[#191A42] duration-700 ease-linear hover:bg-blue-300 '>{text}</button>
    )
}

export default CommonButton