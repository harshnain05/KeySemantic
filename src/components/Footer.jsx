import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <div className='bg-[#111235] py-6 max-lg:px-4'>
            <div className='max-w-[1232px] mx-auto px-4'>
                <div className='justify-between flex items-center flex-wrap'>
                    <p className='text-xs text-[#7C7DB9] leading-7 max-sm:w-full max-sm:text-center max-sm:leading-5'>
                        ©{currentYear} KeySemantics GmbH | Ramsenburgweg 24, 9100 Herisau,
                        Switzerland
                    </p>
                    <a
                        className='text-[#7C7DB9] text-xs underline leading-7 max-sm:w-full max-sm:text-center'
                        href='mailto:info@keysemantics.ch'
                    >
                        info@keysemantics.ch
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
