import React from 'react'
import { MdAdd, MdEdit } from 'react-icons/md'
import { GrAdd } from 'react-icons/gr'
import AdditionalInformation from './AdditionalInfo/AdditionalInformation'

type Props = {data:any}

export default function Main ({data}: Props) {
  return (
    <>
      <section className='flex-1 flex  flex-col gap-4 bg-white'>
        {/* SKILLS */}
        <div className=''>
          {/* HEADER! */}
          <header className='bg-gray-100 text-[#1273eb] font-bold p-2 text-xl border-2 '>
            Skills
          </header>
          {/* BODY! */}
          <section className='p-3 py-5 w-full border-2 border-t-0 flex justify-between items-center p-5 flex-col gap-2'>
            <p className='text-gray-500 text-lg'>No Skills added yet</p>
            <button
              className='flex gap-1 min-w-[100px] hover:opacity-50  rounded-md text-white  px-3 bg-[#1273eb] 
            h-[40px] items-center justify-center '
            >
              <MdAdd className='w-4 h-4 -mt-1' />
              <span className=''>Add</span>
            </button>
          </section>
        </div>

        {/* ADDITIONAL INFORMATION! */}
        <AdditionalInformation data={data}/>
        
        {/* JOBS! */}
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

        {/* ADDRESSES */}
        <div className='flex-1'>
          {/* HEADER! */}
          <header className='bg-gray-100 text-[#1273eb] font-bold p-2 text-xl border-2 '>
            Addresses
          </header>
          {/* BODY! */}
          <section className='p-3 py-5 w-full border-2 border-t-0 flex justify-between items-center p-5 flex-col gap-2'>
            <p className='text-gray-500 text-lg'>No Addresses added yet</p>
            <button
              className='flex gap-1 min-w-[100px] hover:opacity-50  rounded-md text-white  px-3 bg-[#1273eb] 
            h-[40px] items-center justify-center '
            >
              <MdAdd className='w-4 h-4 -mt-1' />
              <span className=''>Add</span>
            </button>
          </section>
        </div>
      </section>
    </>
  )
}
