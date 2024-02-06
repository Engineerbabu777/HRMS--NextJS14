import React from 'react'
import { FaPersonRunning } from 'react-icons/fa6'
import { FaCheck } from 'react-icons/fa6'
import { RxCross2 } from 'react-icons/rx'

type Props = {}

export default function ReportsView ({}: Props) {
  return (
    <>
      <section className='w-full flex h-full flex-1 overflow-auto scrollbar bg-white flex-col p-4 gap-4'>
        <div className='flex items-center gap-4'>
          {/* CANDIDATES PIPELINES! */}
          <div className='flex-1'>
            {/* HEADER! */}
            <header className='bg-gray-100 text-[#1273eb] font-bold p-2 text-xl border-2 '>
              Candidate In Pipeline
            </header>
            {/* BODY! */}
            <section className='p-3 w-full border-2 border-t-0 flex justify-between p-5'>
              <FaPersonRunning className='text-[#1273eb] w-10 h-10' />
              <span className='text-lg'>0</span>
            </section>
          </div>

          {/* CANDIDATES HIRING! */}
          <div className='flex-1'>
            {/* HEADER! */}
            <header className='bg-gray-100 text-[#1273eb] font-bold p-2 text-xl border-2 '>
              Candidate Hired
            </header>
            {/* BODY! */}
            <section className='p-3 w-full border-2 border-t-0 flex justify-between p-5'>
              <FaCheck className='text-[#1273eb] w-10 h-10' />
              <span className='text-lg'>0</span>
            </section>
          </div>

          {/* CANDIDATES DROPPED! */}
          <div className='flex-1'>
            {/* HEADER! */}
            <header className='bg-gray-100 text-[#1273eb] font-bold p-2 text-xl border-2 '>
              Candidate Dropped
            </header>
            {/* BODY! */}
            <section className='p-3 w-full border-2 border-t-0 flex justify-between p-5'>
              <RxCross2 className='text-[#1273eb] w-10 h-10' />
              <span className='text-lg'>0</span>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
