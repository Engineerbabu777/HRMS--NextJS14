



'use client'

import React from 'react'
import { MdEdit, MdOutlineRemoveRedEye } from 'react-icons/md'
import Link from 'next/link'

type Props = {
  candidateId: string
}

export default function CandidatesTableActions ({ candidateId }: Props) {
  return (
    <>
      {/* VIEW */}
      <Link href={'/recruitment/candidates/view/' + candidateId}>
        <MdOutlineRemoveRedEye className='w-6 h-6 text-[#1273eb] cursor-pointer' />
      </Link>

      {/* EDIT */}
      <MdEdit className='w-6 h-6 text-[#1273eb] cursor-pointer' />
    </>
  )
}
