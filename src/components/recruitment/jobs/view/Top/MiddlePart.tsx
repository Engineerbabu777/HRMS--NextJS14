import React from 'react'
import { BsArrowLeft, BsThreeDotsVertical } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { FaDollarSign } from 'react-icons/fa'
import { GoDotFill } from 'react-icons/go'
import { FaCaretDown } from 'react-icons/fa'

type Props = {}

export default function MiddlePart ({}: Props) {
  return (
    <>
      <div className='flex gap-4 items-center flex-grow'>
        {/* IMAGE! */}
        <div className='h-48 w-48 rounded-full bg-blue-400 text-6xl flex items-center justify-center font-bold text-white'>
          DEV
        </div>

        {/* DETAILS! */}
        <div className='flex flex-col gap-2'>
          {/* NAME+PUBLISHED OR NOT YET! */}
          <div className='flex gap-2 items-center'>
            <h2 className='text-[#1273eb] font-bold text-3xl'>
              UI UX Designer
            </h2>
            <p className='bg-[#F3B95F] text-white  text-sm font-semibold rounded-full px-4 py-1'>
              Unpublished
            </p>
          </div>

          {/* LOCATION! */}
          <div className='flex items-center'>
            <MdLocationOn className='w-5 h-5' />
            <p className='text-xl font-semibold'>Lahore</p>
          </div>

          {/* SALARY! */}
          <div className='flex items-center'>
            <FaDollarSign className='w-5 h-5' />
            <p className='text-xl font-semibold'>Rs 50000 - Rs 75000</p>
          </div>

          {/* JOB STATUS */}
          <div className='p-1 rounded-md border border-[#1273eb] flex items-center gap-1 w-fit text-[#1273eb]'>
            <GoDotFill className=' w-6 h-6' />
            <p>Active</p>
            <FaCaretDown className=' w-5 h-5' />
          </div>
        </div>

        {/* HIRING SIDE! */}
        <section className='flex gap-2 items-center ml-auto'>
          <div className='min-w-[100px] min-h-[80px] flex flex-col border'>
            {/* TOP ! */}
            <div className='text-white font-semibold text-center bg-green-500 py-1'>
              Hired
            </div>
            {/* BOTTOM! */}
            <div className='text-green-500 font-semibold text-center bg-white flex-grow flex items-center justify-center'>
              0
            </div>
          </div>

          <div className='min-w-[100px] min-h-[80px] flex flex-col border'>
            {/* TOP ! */}
            <div className='text-white font-semibold text-center bg-[#FF9843] py-1'>
              In Pipeline
            </div>
            {/* BOTTOM! */}
            <div className='text-[#FF9843] font-semibold text-center bg-white flex-grow flex items-center justify-center'>
              0
            </div>
          </div>
          <div className='min-w-[100px] min-h-[80px] flex flex-col border'>
            {/* TOP ! */}
            <div className='text-white font-semibold text-center bg-red-500 py-1'>
              Dropped
            </div>
            {/* BOTTOM! */}
            <div className='text-red-500 font-semibold text-center bg-white flex-grow flex items-center justify-center'>
              0
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
