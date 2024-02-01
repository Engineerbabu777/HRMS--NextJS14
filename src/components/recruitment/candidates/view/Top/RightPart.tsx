'use client'

import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

type Props = {}

export default function RightPart ({}: Props) {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <div className='cursor-pointer relative'>
        <BsThreeDotsVertical
          onClick={() => {
            setOpen(!open)
          }}
          className='text-[#1273eb]  w-6 h-6'
        />
        {/* OPTION! */}
        {open && (
          <div
            className={`absolute w-[200px] rounded-md border bg-white top-0 right-6 transition-all duration-500 ${
              open ? 'opacity-1' : 'opacity-0'
            } `}
          >
            <p className='text-center border-b border-gray-100 py-2 hover:opacity-50'>
              Convert To Job
            </p>
            <p className='text-center border-b border-gray-100 py-2 hover:opacity-50'>
              Add to Job
            </p>
            <p className='text-center py-2 hover:opacity-50'>Edit</p>
          </div>
        )}
      </div>
    </>
  )
}
