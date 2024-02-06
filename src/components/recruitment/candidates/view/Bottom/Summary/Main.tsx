import React from 'react'
import LeftMain from './Left/Main'
import RightMain from './Right/Main'

type Props = {
  data:any
}

export default function Main ({data}: Props) {
  return (
    <>
      <section className='w-full flex h-full flex-1 overflow-auto scrollbar bg-white p-4 gap-4'>
        {/* LEFT!! */}
        <LeftMain data={data} />

        {/* RIGHT!! */}
        <RightMain data={data}/>
      </section>
    </>
  )
}
