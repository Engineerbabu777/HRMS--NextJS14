import React from 'react'
import { FaSortDown } from 'react-icons/fa6'
import SearchInput from '@/components/Header/SearchInput'

type Props = {}

export default function BottomHeader ({}: Props) {
  return (
    <>
      <>
        <header className='flex items-center justify-between'>
          {/* SEARCH! */}
          <div className='flex-1 flex gap-2 items-center'>
            <h2 className='font-semibold '>Candidates List</h2>
            <SearchInput
              placeholder='Search for candidates Names... Location... Current Position...'
              candidates
            />
          </div>

          {/* ACTIONS! */}
          <div className='flex items-center gap-2 justify-center '>
            <button className='text-[#1273eb] font-semibold p-2 rounded-md flex gap-2 items-center border border-[#1273eb]'>
              <span>Bulk Actions</span>
              <FaSortDown className='w-4 h-4 -mt-1' />
            </button>
          </div>
        </header>
      </>
    </>
  )
}
