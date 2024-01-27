import React from 'react'
import { SiAlfaromeo } from 'react-icons/si'

type Props = {}

export default function Logo ({}: Props) {
  return (
    <>
      {/* BIGGER SIZE LOGO! */}
      <img
        src={'/hrmslogo.png'}
        className='hidden lg:inline-flex lg:w-[15vw] border-r-2 border-gray-200'
        alt='img-alter'
      />
      
      {/* SMALLER SIZE LOGO! */}
      <div className='lg:hidden w-[7vw] h-[52px] flex items-center justify-center'>
        <SiAlfaromeo className='w-8 h-8 text-[#FE7A36]' />
      </div>
    </>
  )
}
