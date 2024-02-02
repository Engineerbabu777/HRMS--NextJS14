import React from 'react'
import SearchInput from '@/components/Header/SearchInput'
import Link from 'next/link'
import { MdAdd } from 'react-icons/md'
import { FaFilePdf } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { useState } from 'react'
import { uploadImageToCloudinary } from '@/utils/uploadImageToCloudinary'

type Props = {}

export default function AttachmentsView ({}: Props) {
  const [open, setOpen] = useState(false)

  const handleUploadFile = async (event:React.ChangeEvent<HTMLInputElement>) => {
    if(event?.target?.files?.[0]){
        const response = await uploadImageToCloudinary(event);
        console.log({response});
    }
  }
  return (
    <>
      {/* NO ATTACHMENTS VIEW! */}
      {/* <NoAttachmentView /> */}

      {/* IF NAY ATTACHMENTS THE VIEW WILL BE DIFFERENT! */}
      <section className='w-full flex h-full flex-1 overflow-auto scrollbar bg-white flex-col p-4 gap-4'>
        {/* HEADER! */}
        <header className='flex items-center justify-between '>
          <div className='w-full'>
            <SearchInput placeholder={"Search..."}/>
          </div>
          {/* BTN TO UPLOAD FILES! */}
          <label
            className='flex gap-1 min-w-[200px] hover:opacity-50 rounded-md text-white  px-3 bg-[#1273eb] h-[40px] items-center justify-center '
          >
            <input type="file" className="hidden" onChange={handleUploadFile} multiple={false}/>
            <MdAdd className='w-4 h-4' />
            <span className=''>Upload Files</span>
          </label>
        </header>

        {/* FILES! */}
        <div className='flex-1 flex flex-col'>
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
                      setOpen(!open)
                    }}
                  />
                  {open && (
                    <div
                      className={`absolute w-[200px] rounded-md border bg-white top-0 right-6 transition-all duration-500 ${
                        open ? 'opacity-1' : 'opacity-0'
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
      </section>
    </>
  )
}
