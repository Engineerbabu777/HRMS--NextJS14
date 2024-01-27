



import Image from 'next/image'
import React from 'react'

type Props = {}

export default function Custom404({}: Props) {
  return (
    <div className='flex items-center justify-center h-full flex-col '>
    <Image
      src={'/hrmslogo.png'}
      alt={'alternative-text'}
      className=''
      width={500}
      height={200}
    />
    <button className='font-semibold text-2xl '>
      😢 404 Ops! Page Not Created Yet!
    </button>
  </div>
  )
}