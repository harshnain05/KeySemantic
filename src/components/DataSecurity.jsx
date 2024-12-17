import React from 'react'
import { Data_List } from '../utils/Helper'

import CommonSections from '../common/CommonSection'
const DataSecurity = () => {
    return (
        <section className='max-w-[1440px]'>
            <div className='container mx-auto pb-[164px] max-xl:pb-32 max-lg:pb-24 max-md:pb-16 max-sm:pb-10'>
                <CommonSections
                    CommonText="Data Security and Hosting"
                    SectionList={Data_List}
                    btnText="Get a Demo"
                    PeopleImg='./assets/image/png/security.png'
                    myClass='flex-row-reverse'
                />
            </div>
        </section>
    )
}

export default DataSecurity