import React from 'react'

type Props = {
  headingName: string
}

export default function SideHeadingBox ({ headingName }: Props) {
  return (
    <>
      <header className='bg-gray-100 text-[#1273eb] font-bold p-2 text-xl border-2'>
        {headingName}
      </header>
    </>
  )
}
