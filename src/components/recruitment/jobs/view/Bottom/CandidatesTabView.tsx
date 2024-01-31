import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { CiClock2 } from 'react-icons/ci'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import SingleUser from './CandidatesTabView/SingleUser'

type Props = {}

export default function CandidatesTabView ({}: Props) {
  return (
    <>
      <section className='w-full flex h-full flex-1 overflow-auto scrollbar'>
        {/* NEW! */}
        <div className=' p-1 border-r-2 border-[#1273eb] flex-1 border-dotted h-full min-w-[200px] flex flex-col'>
          {/* HEADER! */}
          <header className='p-2 border-2 border-gray-200 text-[#1273eb] flex items-center bg-white'>
            <p className='font-semibold'>New Candidate</p>
            <BsThreeDotsVertical className=' w-4 h-4 ml-auto ' />
          </header>

          {/* CANDIDATES!! */}
          <div className='flex-1 overflow-auto scrollbar mt-3 flex flex-col gap-1'>
            <SingleUser name="Elon Musk" time="2h 20min" userId={"12"}  />
            <SingleUser name="Elon Musk" time="2h 20min" userId={"12"}  />
            <SingleUser name="Elon Musk" time="2h 20min" userId={"12"}  />
            <SingleUser name="Elon Musk" time="2h 20min" userId={"12"}  />
            <SingleUser name="Elon Musk" time="2h 20min" userId={"12"}  />
            <SingleUser name="Elon Musk" time="2h 20min" userId={"12"}  />

          </div>
        </div>

        {/* SCREENING! */}
        <div className=' p-1 border-r-2 border-[#1273eb] border-dotted h-full min-w-[200px]'>
          {/* HEADER! */}
          <header className='p-2 border-2 border-gray-200 text-[#1273eb] flex items-center'>
            <p className='font-semibold'>Screening</p>
            <BsThreeDotsVertical className=' w-4 h-4 ml-auto' />
          </header>
        </div>

        {/* SHORTLISTED! */}
        <div className=' p-1 border-r-2 border-[#1273eb] border-dotted h-full min-w-[200px]'>
          {/* HEADER! */}
          <header className='p-2 border-2 border-gray-200 text-[#1273eb] flex items-center'>
            <p className='font-semibold'>Shorlisted</p>
            <BsThreeDotsVertical className=' w-4 h-4 ml-auto' />
          </header>
        </div>

        {/* TECHNICAL INTERVIEW! */}
        <div className=' p-1 border-r-2 border-[#1273eb] border-dotted h-full min-w-[200px]'>
          {/* HEADER! */}
          <header className='p-2 border-2 border-gray-200 text-[#1273eb] flex items-center'>
            <p className='font-semibold'>Technical Interview</p>
            <BsThreeDotsVertical className=' w-4 h-4 ml-auto' />
          </header>
        </div>

        {/* CEO INTERVIEW! */}
        <div className=' p-1 border-r-2 border-[#1273eb] border-dotted h-full min-w-[200px]'>
          {/* HEADER! */}
          <header className='p-2 border-2 border-gray-200 text-[#1273eb] flex items-center'>
            <p className='font-semibold'>CEO Interview</p>
            <BsThreeDotsVertical className=' w-4 h-4 ml-auto' />
          </header>
        </div>

        {/* OFFERED! */}
        <div className=' p-1 border-r-2 border-[#1273eb] border-dotted h-full min-w-[200px]'>
          {/* HEADER! */}
          <header className='p-2 border-2 border-gray-200 text-[#1273eb] flex items-center'>
            <p className='font-semibold'>Offered</p>
            <BsThreeDotsVertical className=' w-4 h-4 ml-auto' />
          </header>
        </div>

        {/* HIRED! */}
        <div className=' p-1 border-r-2 border-[#1273eb] border-dotted h-full min-w-[200px]'>
          {/* HEADER! */}
          <header className='p-2 border-2 border-gray-200 text-[#1273eb] flex items-center'>
            <p className='font-semibold'>Hired</p>
            <BsThreeDotsVertical className=' w-4 h-4 ml-auto' />
          </header>
        </div>

        {/* JOINING! */}
        <div className=' p-1 border-r-2 border-[#1273eb] border-dotted h-full min-w-[200px]'>
          {/* HEADER! */}
          <header className='p-2 border-2 border-gray-200 text-[#1273eb] flex items-center'>
            <p className='font-semibold'>Joining</p>
            <BsThreeDotsVertical className=' w-4 h-4 ml-auto' />
          </header>
        </div>
        {/* CONFIRMATION! */}
        <div className=' p-1 border-r-2 border-[#1273eb] border-dotted h-full min-w-[200px]'>
          {/* HEADER! */}
          <header className='p-2 border-2 border-gray-200 text-[#1273eb] flex items-center'>
            <p className='font-semibold'>Confirmation</p>
            <BsThreeDotsVertical className=' w-4 h-4 ml-auto' />
          </header>
        </div>
      </section>
    </>
  )
}
