import React from 'react'
import LeftMain from './Left/Main'
import RightMain from './Right/Main'

type Props = {}

export default function Main ({}: Props) {
  return (
    <>
      <section className='w-full flex h-full flex-1 overflow-auto scrollbar bg-white p-4 gap-4'>
        {/* LEFT!! */}
        <LeftMain />

        {/* RIGHT!! */}
        <RightMain />
      </section>
    </>
  )
}
