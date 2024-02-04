import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdAdd } from 'react-icons/md'
import SingleJob from './SingleJob'
import { options } from '@/utils/data'

type Props = {}

const objectWise = [
  {
    icon: 'i',
    positionName: 'Position Name',
    matchStage: 'Match Stage',
    isDropped: 'Dropped',
    reasonDrop: 'Drop Reason',
    owner: 'Owner',
    createdDate: 'Created Date'
  },
  {
    icon: 'i',
    positionName: 'Position Name',
    matchStage: 'Match Stage',
    isDropped: 'Dropped',
    reasonDrop: 'Drop Reason',
    owner: 'Owner',
    createdDate: 'Created Date'
  }
]
export default function Main ({}: Props) {

  return (
    <>
      <section className='w-full flex h-full flex-1 overflow-auto scrollbar bg-white flex-col p-4 gap-4'>
        {/* TOP! */}
        <div className=''>
          <button className='flex gap-1 min-w-[200px] hover:opacity-50 rounded-md text-white  px-3 bg-[#1273eb] h-[40px] items-center justify-center '>
            <MdAdd className='w-4 h-4' />
            <span className=''>Add to Job</span>
          </button>
        </div>
        {/* TABLE TYPE! */}

        <div className='flex gap-2 flex-col'>
          <div className='flex gap-1 bg-gray-100 rounded-md'>
            <p className={` p-2 `}>
              <BsThreeDotsVertical className='w-5 h-5 text-gray-100' />
            </p>
            {options.map((option: string, index: number) => (
              <p className={` p-1 font-semibold text-lg flex-1 `} key={index}>
                {option}
              </p>
            ))}
          </div>
          <div className='flex gap-1 flex-col rounded-md'>
            {objectWise.map((option: any, index: number) => (
              <SingleJob option={option} index={index} key={index}/>
            )
            )}
          </div>
        </div>
      </section>
    </>
  )
}
