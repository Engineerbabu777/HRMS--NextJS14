import React from 'react'
import { MdEdit } from 'react-icons/md'

type Props = {}

export default function SummaryTabView ({}: Props) {
  return (
    <>
      <div className='w-full flex h-full flex-1 gap-2 p-4 overflow-auto scrollbar bg-white'>
        <div className='flex-1'>
          {/* HEADER! */}
          <header className='bg-gray-100 text-[#1273eb] font-bold p-2 text-xl border-2 '>
            Job Description
          </header>
          <section className='p-3 w-full border-2 border-t-0'>
            <header className='flex justify-between items-center '>
              <h2 className='text-md font-bold'>Job Description</h2>
              <MdEdit className='text-[#1273eb] w-4 h-4 cursor-pointer' />
            </header>
            <div className='w-full border p-3 font-semibold'>
              UI UX DESIGNER && 1 year of experience
            </div>
          </section>
        </div>

        <div className='flex-1'>
          {/* HEADER! */}
          <header className='bg-gray-100 text-[#1273eb] font-bold p-2 text-xl border-2'>
            Job Description
          </header>

          <div className='flex flex-col p-3 border-2 border-t-0 gap-2'>
            <header className='flex justify-between items-center '>
              <h2 className='text-md font-bold'>Job Reference</h2>
              <div className='flex gap-2 items-center'>
                <p>AJKASNJ345</p>
                <MdEdit className='text-[#1273eb] w-4 h-4 cursor-pointer' />
              </div>
            </header>

            <header className='flex justify-between items-center '>
              <h2 className='text-md font-bold'>Position Name</h2>
              <div className='flex gap-2 items-center'>
                <p>UI UX DESIGNER</p>
                <MdEdit className='text-[#1273eb] w-4 h-4 cursor-pointer' />
              </div>
            </header>

            <header className='flex justify-between items-center '>
              <h2 className='text-md font-bold'>Job Location</h2>
              <div className='flex gap-2 items-center'>
                <p>Lahore, Pakistan</p>
                <MdEdit className='text-[#1273eb] w-4 h-4 cursor-pointer' />
              </div>
            </header>

            <header className='flex justify-between items-center '>
              <h2 className='text-md font-bold'>Remote</h2>
              <div className='flex gap-2 items-center'>
                <p>No</p>
                <MdEdit className='text-[#1273eb] w-4 h-4 cursor-pointer' />
              </div>
            </header>

            <header className='flex justify-between items-center '>
              <h2 className='text-md font-bold'>Office Address</h2>
              <div className='flex gap-2 items-center'>
                <p>Add</p>
                <MdEdit className='text-[#1273eb] w-4 h-4 cursor-pointer' />
              </div>
            </header>

            <header className='flex justify-between items-center '>
              <h2 className='text-md font-bold'>Experience Level</h2>
              <div className='flex gap-2 items-center'>
                <p>Add</p>
                <MdEdit className='text-[#1273eb] w-4 h-4 cursor-pointer' />
              </div>
            </header>

            <header className='flex justify-between items-center '>
              <h2 className='text-md font-bold'>HeadCount</h2>
              <div className='flex gap-2 items-center'>
                <p>2</p>
                <MdEdit className='text-[#1273eb] w-4 h-4 cursor-pointer' />
              </div>
            </header>

            <header className='flex justify-between items-center '>
              <h2 className='text-md font-bold'>Minimum Salary</h2>
              <div className='flex gap-2 items-center'>
                <p>50000 PKR</p>
                <MdEdit className='text-[#1273eb] w-4 h-4 cursor-pointer' />
              </div>
            </header>

            <header className='flex justify-between items-center '>
              <h2 className='text-md font-bold'>Maximum Salary</h2>
              <div className='flex gap-2 items-center'>
                <p>100000 PKR</p>
                <MdEdit className='text-[#1273eb] w-4 h-4 cursor-pointer' />
              </div>
            </header>

            <header className='flex justify-between items-center '>
              <h2 className='text-md font-bold'>Frequency</h2>
              <div className='flex gap-2 items-center'>
                <p>Monthly</p>
                <MdEdit className='text-[#1273eb] w-4 h-4 cursor-pointer' />
              </div>
            </header>

            <header className='flex justify-between items-center '>
              <h2 className='text-md font-bold'>Contract Details</h2>
              <div className='flex gap-2 items-center'>
                <p>Full Time</p>
                <MdEdit className='text-[#1273eb] w-4 h-4 cursor-pointer' />
              </div>
            </header>

            <header className='flex justify-between items-center '>
              <h2 className='text-md font-bold'>Open Date</h2>
              <div className='flex gap-2 items-center'>
                <p>01-01-2025</p>
                <MdEdit className='text-[#1273eb] w-4 h-4 cursor-pointer' />
              </div>
            </header>

            <header className='flex justify-between items-center '>
              <h2 className='text-md font-bold'>Close Date</h2>
              <div className='flex gap-2 items-center'>
                <p>Add</p>
                <MdEdit className='text-[#1273eb] w-4 h-4 cursor-pointer' />
              </div>
            </header>
          </div>
        </div>
      </div>
    </>
  )
}
