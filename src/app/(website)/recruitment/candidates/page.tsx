
import NothingInfo from '@/components/recruitment/shared/NothingInfo'
import React from 'react'

type Props = {}

export default function page ({}: Props) {
  return (
    <>
      <section className='flex flex-col gap-6 h-[calc(100vh-52px)] p-2 bg-gray-100 overflow-auto'>
        {/* IF NO CANDIDATES EXISTS! */}
        <NothingInfo candidates />
      </section>

      {/* IF CANDIDATES EXISTS! */}
    </>
  )
}
