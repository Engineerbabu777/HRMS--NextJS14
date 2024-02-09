import React from 'react'
import { BsArrowLeft, BsThreeDotsVertical } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { FaDollarSign } from 'react-icons/fa'
import { GoDotFill } from 'react-icons/go'
import { FaCaretDown } from 'react-icons/fa'
import JobStatus from './JobStatus'
import HiringSideStatus from './JobSourcing'

type Props = {
  data:any
}

export default function MiddlePart ({data}: Props) {
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
              {data.jobName}
            </h2>
            {data.jobStatus === 'onhold' && <p className='bg-[#F3B95F] text-white  text-sm font-semibold rounded-full px-4 py-1'>
              Unpublished
            </p>}
            {data.jobStatus === 'active' && <p className='bg-green-500 text-white  text-sm font-semibold rounded-full px-4 py-1'>
              Published
            </p>}
          </div>

          {/* LOCATION! */}
          <div className='flex items-center'>
            <MdLocationOn className='w-5 h-5' />
            <p className='text-xl font-semibold'>{data.jobLocation}</p>
          </div>

          {/* SALARY! */}
          <div className='flex items-center'>
            <FaDollarSign className='w-5 h-5' />
            <p className='text-xl font-semibold'>Rs {data.minimumSalary} - Rs {data.maximumSalary}</p>
          </div>

          {/* JOB STATUS */}
          <JobStatus data={data} />
        </div>

        {/* HIRING SIDE! */}
        <HiringSideStatus />
      </div>
    </>
  )
}
