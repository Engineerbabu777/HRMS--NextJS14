import React from 'react'
import LeftSide from './Left/LeftSide'
import RightSide from './Right/RightSide'

type Props = {}

export default function Main ({}: Props) {
  return (
    <>
      <section className='w-full flex h-full flex-1 overflow-auto scrollbar bg-white p-4 gap-4'>
        {/* LEFT! */}
        <LeftSide />
        {/* RIGHT! */}
        <RightSide />
      </section>
    </>
  )
}
