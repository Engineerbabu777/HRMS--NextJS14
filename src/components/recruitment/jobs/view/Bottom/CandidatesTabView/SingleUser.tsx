/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { CiClock2 } from 'react-icons/ci'
import { MdOutlineRemoveRedEye } from 'react-icons/md'


type Props = {
    name:string
    imageURL?: string
    time:string,
    userId:string,
}

export default function SingleUser({imageURL,name,userId,time}: Props) {

    const [open, setOpen] = React.useState(false);
  return (
    <>
    <div className='flex border bg-white p-2'>
              {/* PART LEFT! */}
              <div className='flex gap-2 flex-1'>
                <img
                  src={imageURL || '/elon.jpg'}
                  className='w-8 h-8 rounded-full object-cover'
                  alt='alter-text'
                />
                <div className='flex flex-col gap-2'>
                  <p className='font-bold'>{name}</p>
                  <p className='text-gray-400 flex  items-center text-xs'>
                    <CiClock2 className='w-4 h-4 ' />
                    {time}
                  </p>
                </div>
              </div>

              {/* PART RIGHT! */}
              <div className='flex flex-col items-center justify-between relative'>
                <BsThreeDotsVertical onClick={() => setOpen(!open)} className='cursor-pointer w-4 h-4 ml-auto text-[#1273eb]' />
                <MdOutlineRemoveRedEye className=' w-4 h-4 ml-auto text-[#1273eb]' />
                {open && (
          <div
            className={`absolute rounded-md border bg-white top-0 right-6 transition-all duration-500 ${
              open ? 'opacity-1' : 'opacity-0'
            } `}
          >
            <p className=' py-1 text-xs font-bold text-black px-4  cursor-pointer'>
              MOVE TO
            </p>
            <p className='text-center py-2 px-4 border-b border-gray-300  hover:opacity-50 cursor-pointer'>Screening</p>
            <p className='text-center py-2 px-4 border-b border-gray-300 hover:opacity-50 cursor-pointer'>Shortlisted</p>
            <p className='text-center py-2 px-4 border-b border-gray-300 hover:opacity-50 cursor-pointer'>Technical&nbsp;Inteview</p>
            <p className='text-center py-2 px-4 border-b border-gray-300 hover:opacity-50 cursor-pointer'>CEO Interview</p>
            <p className='text-center py-2 px-4 border-b border-gray-300 hover:opacity-50 cursor-pointer'>Offered</p>
            <p className='text-center py-2 px-4 border-b border-gray-300 hover:opacity-50 cursor-pointer'>Hired</p>
            <p className='text-center py-2 px-4 border-b border-gray-300 hover:opacity-50 cursor-pointer'>Joining</p>
            <p className='text-center py-2 px-4  hover:opacity-50 cursor-pointer'>Confirmation</p>



          </div>
        )}
              </div>
            </div>
    </>
  )
}