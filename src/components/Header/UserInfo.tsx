import React from 'react'
import { FaChevronDown } from 'react-icons/fa6'


export default function UserInfo () {
  return (
    <>
      <div className='flex gap-4 items-center lg:p-4 px-2 pr-0 py-4'>
        {/* IMG! */}
        <div className='relative min-w-8 max-w-8 min-h-8 max-h-8'>
          <img
            className='w-8 h-8 rounded-full object-cover'
            src={'/elon.jpg'}
            alt='alt-text'
          />
          <div className='w-4 h-4 bg-green-500 hidden lg:block -right-1 -bottom-1 border border-white absolute rounded-full' />
        </div>

        {/* NAME */}
        <span className='text-[#1273eb] hidden lg:block'>Elon</span>

        {/* DOWN */}
        <FaChevronDown className='w-5 h-5 text-[#1273eb] hidden lg:block' />
      </div>
    </>
  )
}
