import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

type Props = {
  index: number,
  option: any
}

export default function SingleJob ({ index, option }: Props) {
  const [open, setOpen] = React.useState(false)

  return (
    <>
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
              <p className='text-center py-2 hover:opacity-50'>Remove</p>
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
    </>
  )
}
