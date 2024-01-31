'use client'

import React from 'react'
import Image from 'next/image'
import { MdAdd } from 'react-icons/md'
import Link from 'next/link'

type Props = {
  jobs?: boolean,
  candidates?: boolean
}

export default function NoAttachmentView ({ jobs, candidates }: Props) {
  return (
    <>
      {/* FOR JOBS! */}

      <section className=' flex h-full justify-center items-center flex-col gap-3  bg-white '>
        {/* IMAGE! */}

        {/* SMALL HEADING! */}
        <h2 className='font-bold text-xl -mt-2'>No attachments yet!</h2>

        {/* BTN TO CREATE! */}
        <Link
          href={'/recruitment/jobs/create-job'}
          className='flex gap-1 min-w-[200px] hover:opacity-50 rounded-md text-white  px-3 bg-[#1273eb] h-[32px] items-center justify-center '
        >
          <MdAdd className='w-4 h-4' />
          <span className=''>Upload Files</span>
        </Link>

        {/* DESCRIPTION! */}
        <p className='text-[#8e8e8e] lg:max-w-[700px] text-sm text-center flex flex-col'>
          <p className='text-black text-md font-semibold'>
            Supported file types (max 20MB):
          </p>
          doc, .docx, .gif, .jpeg, .jpg, .odt, .pdf, .png, .rar, .svg, .xls,
          .xlsx, .zip, .mov, .mp4, .avi, .pptx
        </p>
      </section>
    </>
  )
}
