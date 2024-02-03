import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaFilePdf } from 'react-icons/fa6'
import Link from 'next/link';
import { format, compareAsc } from 'date-fns'

type Props = {
    index: number
    eachFile:any // CHANGE TO ITS TYPE LATER
}

export default function EachFile ({index,eachFile}: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        key={index}
        className='flex items-center justify-between border-2 p-2 rounded-md hover:bg-gray-50'
      >
        {/* LEFT! */}
        <div className='flex gap-2 items-center '>
          <FaFilePdf className='w-4 h-4 text-red-500' />
          <p className='text-[#1273eb] font-semibold text-md'>
            {eachFile?.file_Name}
          </p>
        </div>

        {/* RIGHT! */}
        <div className='flex gap-2 items-center'>
          <p className='text-sm font-bold'>
            {eachFile.createdAt
              ? format(new Date(eachFile?.createdAt), 'dd-MM-yyyy/hh:mm')
              : null}
          </p>
          <div className='relative'>
            <BsThreeDotsVertical
              className='w-6 h-6 text-[#1273eb] cursor-pointer'
              onClick={() => {
                setOpen(!open)
              }}
            />
            {open && (
              <div
                className={`absolute w-[200px] rounded-md border bg-white top-0 right-6 transition-all duration-500 flex flex-col ${
                  open ? 'opacity-1' : 'opacity-0'
                } `}
              >
                <Link
                  download={eachFile?.file_Url}
                  target={'_blank'}
                  href={eachFile?.file_Url || 'abd'}
                  className='px-2 border-b border-gray-100 py-2 hover:opacity-50 cursor-pointer flex-1 '
                >
                  Download
                </Link>
                <p className='px-2 py-2 hover:opacity-50 flex-1 cursor-pointer'>
                  Delete
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
