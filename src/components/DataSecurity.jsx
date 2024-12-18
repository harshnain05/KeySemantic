import React from 'react'
import { DATA_LIST } from '../utils/Helper'
import CommonSections from '../common/CommonSection'

const DataSecurity = () => {
    return (
        <section className='max-w-[1440px] px-5 mx-auto'>
            <div className='container pb-[164px] px-1 max-xl:pb-32 max-lg:pb-24 max-md:pb-16 max-sm:pb-10'>
                <CommonSections
                    CommonText="Data Security and Hosting"
                    SectionList={DATA_LIST}
                    PeopleImg='./assets/image/png/security.png'
                    myClass='flex-row-reverse'
                />
              
            </div>
        </section>
    )
}

export default DataSecurity