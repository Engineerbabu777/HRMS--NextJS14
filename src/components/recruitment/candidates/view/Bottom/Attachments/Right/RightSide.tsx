import NoAttachmentView from '@/components/recruitment/shared/jobs/NoAttachmentsView'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaFilePdf } from 'react-icons/fa6'

type Props = {}

export default function RightSide ({}: Props) {
  return (
    <>
      <section className='w-full  flex h-full flex-1 overflow-auto scrollbar bg-white flex-col  gap-4'>
        {/* IF WE HAVE FILES! */}
        <div className=' flex flex-col'>
          <h2 className='text-lg font-bold'>Uploaded files</h2>

          <section className='flex flex-col gap-2'>
            <div className='flex items-center justify-between border-2 p-2 rounded-md hover:bg-gray-50'>
              {/* LEFT! */}
              <div className='flex gap-2 items-center '>
                <FaFilePdf className='w-4 h-4 text-red-500' />
                <p className='text-[#1273eb] font-semibold text-md'>
                  Elon Musk.pdf
                </p>
              </div>

              {/* RIGHT! */}
              <div className='flex gap-2 items-center'>
                <p className='text-sm font-bold'>01-01-2024 / 15:20</p>
                <div className='relative'>
                  <BsThreeDotsVertical
                    className='w-6 h-6 text-[#1273eb] cursor-pointer'
                    onClick={() => {
                      // setOpen(!open)
                    }}
                  />
                  {false && (
                    <div
                      className={`absolute w-[200px] rounded-md border bg-white top-0 right-6 transition-all duration-500 ${
                        false ? 'opacity-1' : 'opacity-0'
                      } `}
                    >
                      <p className='px-2 border-b border-gray-100 py-2 hover:opacity-50 cursor-pointer'>
                        Download
                      </p>
                      <p className='px-2 py-2 hover:opacity-50 cursor-pointer'>
                        Delete
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* WILL SHOW! */}
        <div className='flex-1'>
          <NoAttachmentView />
        </div>
      </section>
    </>
  )
}
