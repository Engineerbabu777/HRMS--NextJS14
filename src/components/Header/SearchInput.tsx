

import React from 'react'
import { MdSearch } from 'react-icons/md'


export default function SearchInput() {
  return (
    <>
    <div className='rounded-md bg-gray-100 flex gap-2 items-center  border-2 border-gray-100 p-2 hover:border-2 hover:border-blue-400 md:w-[70%] w-full'>
          {/* ICON! */}
          <MdSearch className='text-gray-500 w-6 h-6' />
          {/* INPUT! */}
          <input
            className='outline-none border-none bg-inherit placeholder:text-gray-400 grow'
            placeholder='Search by Name, Job, Email...'
          />
        </div>
    </>
  )
}