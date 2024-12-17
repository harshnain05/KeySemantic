import React from 'react'
import { NavLogo } from '../utils/Icon'
const NavBar = () => {
  return (
      <div className='flex md:px-[120px] px-[10px] pt-[50px] justify-between'>
          <NavLogo />
          <button className=' border-2 border-black py-[12px] text-black text-sm leading-5 font-normal px-[16px] rounded-[48px]'> 
              Request to demo 
          </button>
    </div>
  )
}

export default NavBar