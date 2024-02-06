'use client'

import React from 'react'
import Image from 'next/image'
import { MdAdd } from 'react-icons/md'
import Link from 'next/link'
import useUploadPdf from '@/hooks/useUploadPdf'
import { ClipLoader } from 'react-spinners'

type Props = {
  jobs?: boolean,
  candidates?: boolean
}

export default function NoAttachmentView ({
  jobs = false,
  candidates = false
}: Props) {
  const { uploadPdf, uploadingProgress } = useUploadPdf()

  const handleUploadFile = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event?.target?.files) return
    await uploadPdf(event?.target?.files[0], jobs ? 'jobs' : 'candidate')
  }

  return (
    <>
      {/* FOR JOBS! */}

      <section className=' flex h-full justify-center items-center flex-col gap-3  bg-white '>
        {/* IMAGE! */}

        {/* SMALL HEADING! */}
        <h2 className='font-bold text-xl -mt-2'>
          {jobs && 'No attachments yet!'}
          {candidates && 'No resume added yet'}
        </h2>

        {/* BTN TO CREATE! */}
        <label className='flex gap-1 min-w-[200px] hover:opacity-50 rounded-md text-white  px-3 bg-[#1273eb] h-[40px] items-center justify-center '>
          <input
            type='file'
            className='hidden'
            onChange={handleUploadFile}
            multiple={false}
            accept={'.pdf'}
          />
          {uploadingProgress ? (
            <>
              <ClipLoader size={12} color={'white'} />
            </>
          ) : (
            <MdAdd className='w-4 h-4' />
          )}
          <span className=''>
            {uploadingProgress
              ? `uploading...${uploadingProgress}`
              : 'Upload Files'}
          </span>
        </label>

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
