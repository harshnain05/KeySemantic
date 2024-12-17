import React from 'react'

const SubHeading = ({ text, myClass, }) => {
    return (
        <h2 className={`${myClass} font-bold text-[32px] leading-[72px] tracking-[-1%]`}>
            {text}
        </h2>
    )
}

export default SubHeading
