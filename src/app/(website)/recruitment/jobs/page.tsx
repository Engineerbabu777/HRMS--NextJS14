import NothingInfo from '@/components/recruitment/shared/NothingInfo'
import React from 'react'

type Props = {}

export default function page ({}: Props) {
  return (
    <div className='flex flex-col gap-6 h-[calc(100vh-52px)] p-2 bg-gray-100 overflow-auto'>
      {/* IF NO JOBS EXISTS! */}
      <NothingInfo jobs />

      {/* IF JOBS EXISTS! */}
    </div>
  )
}
