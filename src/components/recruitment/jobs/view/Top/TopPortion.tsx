'use client'

import React from 'react'
import { BsArrowLeft, BsThreeDotsVertical } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { FaDollarSign } from 'react-icons/fa'
import { GoDotFill } from 'react-icons/go'
import { FaCaretDown } from 'react-icons/fa'
import RightPart from './RightPart'
import MiddlePart from './MiddlePart'

type Props = {
  data:any
}

export default function TopPortion ({data}: Props) {
  return (
    <>
      <div className='flex gap-2 '>
        {/* LEFT SIDE! */}
        <BsArrowLeft className='text-[#1273eb]  w-6 h-6' />

        {/* MIDDLE SIDE! */}
        <MiddlePart data={data}/>

        {/* RIGHT SIDE! */}
         <RightPart />
      </div>
    </>
  )
}
