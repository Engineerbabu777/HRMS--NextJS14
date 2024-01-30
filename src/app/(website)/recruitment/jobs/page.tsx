import NothingInfo from '@/components/recruitment/shared/NothingInfo'
import React from 'react'
import Link from 'next/link';
import {MdAdd} from 'react-icons/md';

type Props = {}

export default function page ({}: Props) {
  return (
    <div className='flex flex-col gap-6 h-[calc(100vh-52px)] p-2 bg-gray-100 overflow-auto'>
      {/* IF NO JOBS EXISTS! */}
      {/* <NothingInfo jobs /> */}

      {/* IF JOBS EXISTS! */}
      <>
      {/* HEADER! */}
       <header className="flex items-center justify-between px-6">

        {/* BTN TO CREATE! */}
        <Link
            href={'/recruitment/jobs/create-job'}
            className='flex gap-1 min-w-[150px] hover:opacity-50  rounded-md text-white  px-3 bg-[#1273eb] 
            h-[40px] items-center justify-center '
          >
            <MdAdd className='w-4 h-4' />
            <span className=''>Create Job</span>
          </Link>


        {/* LEFT END! */}
        <div className="flex gap-2 items-center">
                  {/* BOARD! */}
        <Link
            href={'/recruitment/jobs/create-job'}
            className='flex gap-1 min-w-[150px] hover:opacity-50 rounded-md text-[#1273eb]  px-3 bg-white h-[40px] items-center justify-center border border-[#1273eb] '
          >
            <span className=''>Board</span>
          </Link>

                 {/* LIST! */}
        <Link
            href={'/recruitment/jobs/create-job'}
            className='flex gap-1 min-w-[150px] hover:opacity-50  rounded-md text-white  px-3 bg-[#1273eb] h-[40px] items-center justify-center '
          >
            <span className=''>List</span>
          </Link>
        </div>

       </header>
      
      </>
    </div>
  )
}
