import React from 'react'
import ToggleButton from './ToggleButton'

type Props = {}

export default function SourcingView ({}: Props) {
  return (
    <>
      <section className='w-full flex h-full flex-1 overflow-auto scrollbar bg-white flex-col p-4 gap-4'>
        <div className='flex items-center gap-4'>
          {/* CANDIDATES PIPELINES! */}
          <div className='flex-1'>
            {/* HEADER! */}
            <header className='bg-gray-100 text-[#1273eb] font-bold p-2 text-xl border-2 '>
              Publish Job On Career Page
            </header>
            {/* BODY! */}
            <section className='p-3 w-full border-2 border-t-0 flex gap-2 p-2 flex-col items-center'>
              <div className='border flex-1 flex w-full p-2 rounded-md font-semibold'>
                <p className='flex-1 text-black'>Publish Job</p>
                <p className='flex-1 text-gray-500 flex justify-between items-center'>
                  Not published
                  <ToggleButton />
                </p>
              </div>

              <div className='border flex-1 w-full flex p-2 rounded-md font-semibold'>
                <p className='flex-1 text-black'>First Publish At</p>
                <p className='flex-1 text-gray-500'>08-01-2024 / 3:00pm</p>
              </div>

              <div className='border flex-1 w-full flex p-2 rounded-md font-semibold'>
                <p className='flex-1 text-black'>Last Publish At</p>
                <p className='flex-1 text-gray-500'>09-01-2024 / 4:00pm</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
