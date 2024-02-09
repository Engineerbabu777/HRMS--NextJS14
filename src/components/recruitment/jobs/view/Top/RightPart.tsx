'use client'

import { removeJobById } from '@/actions/job/remove-job'
import { ViewJobParamsType } from '@/types'
import { useRouter, useParams } from 'next/navigation'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import toast from 'react-hot-toast';

type Props = {}

export default function RightPart ({}: Props) {
  const [open, setOpen] = React.useState(false)
  const {jobId}:ViewJobParamsType = useParams();
  const router = useRouter();

  
  const handleClick = async() => {
    const response = await removeJobById(jobId)

    if (response.status === 200) {
      setOpen(false)
      toast.success('Deleted!')
      router.push('/recruitment/jobs');
    }
  }

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
            <p className='text-center py-2 hover:opacity-50' onClick={handleClick}>Remove</p>
          </div>
        )}
      </div>
    </>
  )
}
