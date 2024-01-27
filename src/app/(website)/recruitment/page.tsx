import BottomLeftSection from '@/components/recruitment/components/BottomLeftSection'
import TopLeftHeader from '@/components/recruitment/components/TopLeftHeader'
import React from 'react'

type Props = {}

export default function page ({}: Props) {
  return (
    <>
      <section className='border-2 border-red-500 flex h-full p-2'>
        {/* SIDE LEFT! */}
        <div className='border-blue-500 border-2 h-full w-[75%] p-1'>
          {/* TOP! */}
          <TopLeftHeader />

          {/* BOTTOM! */}
          <BottomLeftSection />
        </div>

        {/* SIDE RIGHT! */}
        <div className='border-2 border-green-500 h-full w-[25%]'>
          {/* TOP! */}

          {/* MIDDLE! */}

          {/* BOTTOM! */}
        </div>
      </section>
    </>
  )
}
