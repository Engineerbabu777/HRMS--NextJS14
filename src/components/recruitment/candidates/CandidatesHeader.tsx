import React from 'react'
import Link from 'next/link'
import { MdAdd } from 'react-icons/md'

type Props = {}

export default function CandidatesHeader ({}: Props) {
  return (
    <>
      <header className='flex items-center justify-between px-6 mt-2 h-[52px]'>
        {/* BTN TO CREATE! */}
        <Link
          href={'/recruitment/candidates/create-candidate'}
          className='flex gap-1 min-w-[150px] hover:opacity-50  rounded-md text-white  px-3 bg-[#1273eb] 
            h-[40px] items-center justify-center '
        >
          <MdAdd className='w-4 h-4' />
          <span className=''>Create Candidates</span>
        </Link>
      </header>
    </>
  )
}
