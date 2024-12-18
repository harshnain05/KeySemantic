import React from 'react';
import Heading from './Heading';
import CommonButton from './CommonButton';

const CommonSection = ({ CommonText, SectionList, PeopleImg, myClass }) => {
    return (
        <div className={`${myClass} flex items-center gap-12 max-lg:flex-wrap max-lg:justify-center`}>
            <div className='w-6/12 px-2 max-lg:w-full'>
                <Heading text={CommonText} />
                <ul className=' list-disc translate-x-6'>
                    {SectionList.map((obj, i) => (
                        <li className='text-base font-normal leading-[28px] text-[#191A42] max-w-[552px] max-xl:max-w-none' key={i}>{obj}</li>
                    ))}
                </ul>
                <div className='mt-6'>
                    <CommonButton text={'Get a demo'} />
                </div>
            </div>
            <div className='w-6/12 max-lg:w-full'>
                <img src={PeopleImg} alt="keySemantics" className='w-full max-w-[600px] max-lg:mx-auto max-lg:max-w-none' />
            </div>
        </div>

    );
};

export default CommonSection;
