'use client'

import React, { useState } from 'react'
import { GoDotFill } from 'react-icons/go'

type Props = {
  jobId: string
}

export default function JobsTableStatus ({ jobId }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* BUTTON! */}
      <button
        onClick={() => setOpen(!open)}
        className='rounded-md bg-green-200 text-green-500 p-1 px-2 justify-center flex items-center'
      >
        <GoDotFill className='text-green-500 w-4 h-4' />
        Active
      </button>
      {/* OPTIONS! */}
      {/* WILL ADD OPTIONS LATER! */}
    </>
  )
}
