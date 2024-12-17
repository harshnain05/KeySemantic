import React, { useState } from 'react'
import SubHeading from '../common/SubHeading'
import Description from '../common/Description'
import CustomButton from '../common/CommonButton'

const FORM_LIST = {
    name: '',
    email: '',
    company: '',
    number: ''
}

const KeySemantic = () => {
    const [value, setValue] = useState(FORM_LIST)
    const [error, setError] = useState(false)

    const changeHandler = e => {
        e.preventDefault()
        setError(true)
        if (
            value.name !== '' &&
            value.email !== '' &&
            value.company !== '' &&
            value.number !== ''
        ) {
            setValue(FORM_LIST)
            setError(false)
            console.log(value)
        }
    }

    return (
        <div className=' bg-bootom bg-cover bg-center bg-no-repeat py-24 max-lg:py-[60px] '>
            <div className='max-w-[1232px] mx-auto px-4'>
                <SubHeading
                    text='How does KeySemantics work?'
                    myClass='text-center max-md:text-2xl max-[520px]:max-w-[320px] mx-auto text-white'
                />
                <Description
                    text='Request a demo for your team and let us show you how KeySemantics can help your company'
                    myClass='text-white text-center pt-2 pb-[64px] max-lg:pb-10 max-md:pb-8'
                />
                <form
                    onSubmit={changeHandler}
                    className='flex justify-center items-center flex-col'
                >
                    <input
                        value={value.name}
                        onChange={e => setValue({ ...value, name: e.target.value })}
                        type='text'
                        placeholder='Name'
                        className='placeholder:text-[#7C7EB9] text-[#7C7EB9] rounded-[48px] bg-[#24254B] mx-auto outline-none border-transparent py-4 w-[320px] pl-5'
                    />
                    <p className='text-red-700 font-bold text-left'>
                        {error && !value.name && 'Name is required'}
                    </p>
                    <input
                        value={value.email}
                        onChange={e => setValue({ ...value, email: e.target.value })}
                        type='email'
                        placeholder='Email'
                        className='placeholder:text-[#7C7EB9] text-[#7C7EB9] mt-2 outline-none border-transparent rounded-[48px] bg-[#24254B] mx-auto py-4 w-[320px] pl-5'
                    />
                    <p className='text-red-700 font-bold text-left'>
                        {error && !value.email && 'Email is required'}
                    </p>
                    <input
                        value={value.company}
                        onChange={e => setValue({ ...value, company: e.target.value })}
                        type='text'
                        placeholder='Company'
                        className='placeholder:text-[#7C7EB9] text-[#7C7EB9] mt-2 outline-none border-transparent rounded-[48px] bg-[#24254B] mx-auto py-4 w-[320px] pl-5'
                    />
                    <p className='text-red-700 font-bold text-left'>
                        {error && !value.company && 'Company is required'}
                    </p>
                    <input
                        value={value.number}
                        onChange={e => setValue({ ...value, number: e.target.value })}
                        type='number'
                        placeholder='Phone (optional)'
                        className='placeholder:text-[#7C7EB9] text-[#7C7EB9] mt-2 outline-none border-transparent rounded-[48px] bg-[#24254B] mx-auto py-4 w-[320px] pl-5'
                    />
                    <p className='text-red-700 font-bold text-left'>
                        {error && !value.number && 'Number is required'}
                    </p>
                    <p className='text-center text-[#7C7DB9] mt-4 mb-6 text-[10px]'>
                        By submitting my contact information I agree to the KeySemantics
                        Privacy Policy
                    </p>
                    <div>
                        <button className='py-4 px-8 hover:bg-white hover:text-black transition-all rounded-full font-medium text-sm leading-5 bg-[#48C3D7] text-white'>
                            Request a demo
                     </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default KeySemantic
