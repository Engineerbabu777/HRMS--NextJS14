'use client'

import React from 'react'
import { IoCheckmarkOutline } from 'react-icons/io5'
import { MdBlockFlipped, MdEdit, MdOutlineRemoveRedEye } from 'react-icons/md'

type Props = {}

export default function JobTableActions ({}: Props) {
  return (
    <>
      {/* PUBLISHED! */}
      <IoCheckmarkOutline className='w-4 h-4 text-green-300 cursor-pointer' />

      {/* BLOCKED */}
      <MdBlockFlipped className='w-4 h-4 text-red-600 cursor-pointer' />

      {/* VIEW */}
      <MdOutlineRemoveRedEye className='w-4 h-4 text-[#1273eb] cursor-pointer' />

      {/* EDIT */}
      <MdEdit className='w-4 h-4 text-[#1273eb] cursor-pointer' />
    </>
  )
}
