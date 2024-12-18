import React from 'react'
import CommonSections from '../common/CommonSection'
import { HEADLESS_LIST } from '../utils/Helper'
const Headless = () => {
    return (
        <section className='bg-white px-5'>
            <div className='container mx-auto py-[148px] max-xl:py-32 max-lg:py-24 max-md:py-16 max-sm:py-10'>
                <CommonSections CommonText="Headless federated search" SectionList={HEADLESS_LIST} PeopleImg='./assets/image/png/headless.png' />
            </div>
        </section>
    )
}

export default Headless