'use client'

import React, { useState } from 'react'
import { GoDotFill } from 'react-icons/go'

type Props = {
  isActive:boolean
}

export default function JobsTableStatus ({ isActive,onhold }: Props) {

  return (
    <>
     {isActive && (
        <div
          className=' text-xs cursor-pointer p-1 rounded-md border border-[#1273eb] flex items-center w-fit text-[#1273eb]'
        >
          <GoDotFill className=' w-4 h-4' />
          <p>Active</p>
        </div>
      )}

      {!isActive && (
        <div
          className=' text-xs cursor-pointer p-1 rounded-md border border-red-500 flex items-center w-fit text-red-500'
        >
          <GoDotFill className=' w-4 h-4' />
          <p>onHold</p>
        </div>
      )}
    </>
  )
}
