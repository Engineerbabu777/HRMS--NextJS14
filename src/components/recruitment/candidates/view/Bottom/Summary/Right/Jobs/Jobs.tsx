import React from 'react'
import { GrAdd } from 'react-icons/gr'

type Props = {}

export default function Jobs ({}: Props) {
  return (
    <>
      <div className=''>
        {/* HEADER! */}
        <header className='bg-gray-100 text-[#1273eb] font-bold p-2 text-xl border-2 flex items-center justify-between '>
          Jobs
          <div className='bg-[#1273eb] rounded-full w-6 h-6 flex items-center justify-center'>
            <GrAdd className='w-4 h-4 text-white' />
          </div>
        </header>
        {/* BODY! */}
        <section className='p-3 py-5 w-full border-2 border-t-0 flex justify-between items-center p-5 flex-col gap-2'>
          <div className='flex items-center w-full'>
            <div className='flex-1 items-center flex gap-2'>
              <div className='w-16 h-16 rounded-full bg-opacity-60 bg-[#1273eb] text-white flex items-center justify-center text-2xl'>
                U
              </div>
              <div className='flex  flex-col'>
                <p className='text-xl font-bold'>UI UX Designer</p>
                <p className='text-gray-400 font-semibold'>Misha Sohail</p>
              </div>
            </div>

            <div className=''>
              <button className='text-white bg-[#1273eb] px-3 py-1 rounded-full'>
                New Candidate
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
