import React from 'react'

const SubHeading = ({ text, myClass, }) => {
    return (
        <h2 className={`${myClass} font-bold text-custom-32 leading-[72px] tracking-[-1%]`}>
            {text}
        </h2>
    )
}

export default SubHeading
