import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

type Props = {
  type:string
}

export default function TypeHeader ({
  type
}: Props) {
  return (
    <>
      <header className='p-2 border-2 border-gray-200 text-[#1273eb] flex items-center bg-white'>
        <p className='font-semibold'>{type}</p>
        <BsThreeDotsVertical className=' w-4 h-4 ml-auto ' />
      </header>
    </>
  )
}
