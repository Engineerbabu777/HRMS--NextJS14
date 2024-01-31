import React from 'react'
import TopPortion from './Top/TopPortion'
import BottomPortion from './Bottom/BottomPortion'

type Props = {}

export default function Main ({}: Props) {
  return (
    <>
      <section className='flex flex-col gap-6 h-[calc(100vh-52px)]  lg:max-w-[85vw] p-4 pt-8 bg-gray-100 overflow-auto'>
        {/* TOP PORTION VIEW JOB!! */}
        <TopPortion />
        {/* BOTTOM PORTION DETAILS OF JOB! */}
        <BottomPortion />
      </section>
    </>
  )
}
