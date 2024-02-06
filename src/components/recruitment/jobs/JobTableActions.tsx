'use client'

import React from 'react'
import { IoCheckmarkOutline } from 'react-icons/io5'
import { MdBlockFlipped, MdEdit, MdOutlineRemoveRedEye } from 'react-icons/md'
import Link from 'next/link'

type Props = {
  jobId: string
}

export default function JobTableActions ({ jobId }: Props) {
  return (
    <>
      {/* PUBLISHED! */}
      <IoCheckmarkOutline className='w-4 h-4 text-green-300 cursor-pointer' />

      {/* BLOCKED */}
      <MdBlockFlipped className='w-4 h-4 text-red-600 cursor-pointer' />

      {/* VIEW */}
      <Link href={'/recruitment/jobs/view/' + jobId}>
        <MdOutlineRemoveRedEye className='w-4 h-4 text-[#1273eb] cursor-pointer' />
      </Link>

      {/* EDIT */}
      <MdEdit className='w-4 h-4 text-[#1273eb] cursor-pointer' />
    </>
  )
}
