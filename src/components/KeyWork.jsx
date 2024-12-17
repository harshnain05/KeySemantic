import React from 'react'
import Heading from '../common/Heading'
import { SEMANTICS_LIST } from '../utils/Helper'
import Lottie from 'lottie-react'
import Description from '../common/Description'

const KeyWork = () => {
    return (
        <>
            <div className='bg-white'>
                <div className='container pb-6 pt-24 max-lg:pt-16 max-md:pt-10 max-sm:py-6'>
                    <div className='text-center'>
                        <Heading text="How does KeySemantics work?" />
                    </div>
                    <div className='flex pt-14 max-w-[1026px] mx-auto flex-wrap max-lg:gap-6 justify-center max-md:pt-7 max-sm:pt-3'>
                        {SEMANTICS_LIST.map((obj, i) => (
                            <div key={i} className='w-4/12 max-xl:w-1/2 max-lg:w-full'>
                                <div className='max-w-[278px] mx-auto'>
                                    <Lottie animationData={obj.lottie} />
                                    <div className='pt-6 max-md:pt-3'>
                                        <Description text={obj.description} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default KeyWork