import React from 'react'
import { GoDotFill } from 'react-icons/go'

type Props = {}

export default function JobsTableStatus ({}: Props) {
  return (
    <>
      {/* BUTTON! */}
      <button className='rounded-md bg-green-200 text-green-500 p-1 px-2 justify-center flex items-center'>
        <GoDotFill className='text-green-500 w-4 h-4' />
        Active
      </button>
      {/* OPTIONS! */}
      {false && (
        <div className='flex flex-col absolute border rounded-md bg-white shadow-md '>
          <p className='px-3 text-green-500 hover:text-opacity-50 cursor-pointer border-b border-gray-200 py-1 hover:bg-gray-100'>
            Active
          </p>
          <p className='px-3 text-blue-500 hover:text-opacity-50 cursor-pointer border-b border-gray-200 py-1 hover:bg-gray-100'>
            onHold
          </p>
          <p className='px-3 text-red-500 hover:text-opacity-50 cursor-pointer border-b border-gray-200 py-1 hover:bg-gray-100'>
            Lost
          </p>
        </div>
      )}
    </>
  )
}
