import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdAdd } from 'react-icons/md'

type Props = {}

const options = [
  'Position Name',
  'Match Stage',
  'Dropped',
  'Drop Reason',
  'Owner',
  'Created Date'
]

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
  const [open, setOpen] = React.useState(false)

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
            {objectWise.map((option: any, index: number) => {
              return (
                <div className='border rounded-md flex' key={index}>
                  <p className={` p-2 relative`}>
                    <BsThreeDotsVertical
                      onClick={() => {
                        setOpen(!open)
                      }}
                      className='w-5 h-5 text-[#1273eb] cursor-pointer'
                    />
                    {/* OPTION! */}
                    {open && (
                      <div
                        className={`absolute w-[200px] rounded-md border bg-white top-0 left-2 transition-all duration-500 ${
                          open ? 'opacity-1' : 'opacity-0'
                        } `}
                      >
                        <p className='text-center border-b border-gray-100 py-2 hover:opacity-50'>
                          Move
                        </p>
                        <p className='text-center border-b border-gray-100 py-2 hover:opacity-50'>
                          Drop
                        </p>
                        <p className='text-center py-2 hover:opacity-50'>
                          Remove
                        </p>
                      </div>
                    )}
                  </p>
                  <p className={`p-2 flex-1 `}>{option.positionName}</p>
                  <p className={` p-2 flex-1`}>{option.matchStage}</p>
                  <p className={` p-2 flex-1`}>{'-'}</p>
                  <p className={` p-2 flex-1`}>{'-'}</p>
                  <p className={` p-2 flex-1`}>{option.owner}</p>
                  <p className={` p-2 flex-1`}>{option.createdDate}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
