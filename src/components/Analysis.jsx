import Lottie from 'lottie-react'
import React from 'react'
import bigLottie from '../lottie/big.json'
import mobileLottie from '../lottie/mobile.json'

const Analysis = () => {
  return (
    <div className='api-section w-full bg-cover bg-no-repeat bg-center pb-[74px] max-lg:pb-14 max-md:pb-9 max-sm:pb-6'>
      <div className='container mx-auto'>
        <Lottie className='max-lg:hidden' animationData={bigLottie} />
        <Lottie className='lg:hidden max-w-[400px] mx-auto' animationData={mobileLottie} />
      </div>
    </div>
  )
}

export default Analysis