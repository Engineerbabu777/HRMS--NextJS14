import React from 'react'
import { MdAdd, MdEdit } from 'react-icons/md'
import CandidatesDetails from './CandidatesDetails'

type Props = {}

// WILL MAKE IT MORE CLEANER LATER!
export default function Main ({}: Props) {
  return (
    <>
      <section className='flex-1 flex flex-col gap-4'>
        {/* CANDIDATES DETAILS! */}
        <CandidatesDetails />

        {/* EXPERIENCE */}
        <div className='flex-1'>
          {/* HEADER! */}
          <header className='bg-gray-100 text-[#1273eb] font-bold p-2 text-xl border-2 '>
            Experience
          </header>
          {/* BODY! */}
          <section className='p-3 py-5 w-full border-2 border-t-0 flex justify-between items-center p-5 flex-col gap-2'>
            <p className='text-gray-500 text-lg'>No Experience added yet</p>
            <button
              className='flex gap-1 min-w-[100px] hover:opacity-50  rounded-md text-white  px-3 bg-[#1273eb] 
            h-[40px] items-center justify-center '
            >
              <MdAdd className='w-4 h-4 -mt-1' />
              <span className=''>Add</span>
            </button>
          </section>
        </div>

        {/* EDUCATION! */}
        <div className='flex-1'>
          {/* HEADER! */}
          <header className='bg-gray-100 text-[#1273eb] font-bold p-2 text-xl border-2 '>
            Education
          </header>
          {/* BODY! */}
          <section className='p-3 py-5 w-full border-2 border-t-0 flex justify-between items-center p-5 flex-col gap-2'>
            <p className='text-gray-500 text-lg'>No Education added yet</p>
            <button
              className='flex gap-1 min-w-[100px] hover:opacity-50  rounded-md text-white  px-3 bg-[#1273eb] 
            h-[40px] items-center justify-center '
            >
              <MdAdd className='w-4 h-4 -mt-1' />
              <span className=''>Add</span>
            </button>
          </section>
        </div>

        {/* EMERGENCY CONTACT! */}
        <div className='flex-1'>
          {/* HEADER! */}
          <header className='bg-gray-100 text-[#1273eb] font-bold p-2 text-xl border-2 '>
            Emergency Contact
          </header>
          {/* BODY! */}
          <section className='p-3 py-5 w-full border-2 border-t-0 flex justify-between items-center p-5 flex-col gap-2'>
            <p className='text-gray-500 text-lg'>
              No Emergency Contacts added yet
            </p>
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
