



'use client'

import React from 'react'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import Link from 'next/link'

type Props = {
  candidateId: string
}

export default function CandidatesTableActions ({ candidateId }: Props) {
  return (
    <>
      {/* VIEW */}
      <Link href={'/recruitment/candidates/view/' + candidateId}>
        <MdOutlineRemoveRedEye className='w-4 h-4 text-[#1273eb] cursor-pointer' />
      </Link>

    </>
  )
}
