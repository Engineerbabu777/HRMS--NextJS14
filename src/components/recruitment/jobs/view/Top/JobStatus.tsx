'use client'

import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa6'
import { GoDotFill } from 'react-icons/go'
import toast from 'react-hot-toast'
import { updateDetailsField } from '@/actions/job/update-details-field'

type Props = {
  data: any
}

export default function JobStatus ({ data }: Props) {
  const [open, setOpen] = useState(false)

  const handleClick = async value => {
    const response = await updateDetailsField('jobStatus', value, data._id)

    if (response.status === 200) {
      setOpen(false)
      toast.success('updated!')
    }
  }

  return (
    <div className='relative'>
      {data.jobStatus === 'active' && (
        <div
          onClick={() => setOpen(!open)}
          className=' cursor-pointer p-1 rounded-md border border-[#1273eb] flex items-center gap-1 w-fit text-[#1273eb]'
        >
          <GoDotFill className=' w-6 h-6' />
          <p>Active</p>
          <FaCaretDown className=' w-5 h-5' />
        </div>
      )}

      {data.jobStatus === 'onhold' && (
        <div
          onClick={() => setOpen(!open)}
          className=' cursor-pointer p-1 rounded-md border border-red-500 flex items-center gap-1 w-fit text-red-500'
        >
          <GoDotFill className=' w-6 h-6' />
          <p>onHold</p>
          <FaCaretDown className=' w-5 h-5' />
        </div>
      )}

      {/* DROP DOWN! */}
      {open && (
        <div
          className={`absolute z-[9999] w-[200px] rounded-md border bg-white top-8 right-0 transition-all duration-500 `}
        >
          <p
            onClick={() => handleClick('active')}
            className='text-center border-b border-gray-100 py-2 hover:opacity-50 cursor-pointer'
          >
            Active
          </p>
          <p
            onClick={() => handleClick('onhold')}
            className='text-center py-2 hover:opacity-50 cursor-pointer'
          >
            onHold
          </p>
        </div>
      )}
    </div>
  )
}
