import React, { useState } from 'react'
import { MdDone, MdEdit, MdOutlineClose } from 'react-icons/md'
import useUpdateJobDetail from '@/hooks/useUpdateJobDetails'
import { useParams } from 'next/navigation'
import { ViewJobParamsType } from '@/types'

type Props = {
  data?: any
}

export default function JobDescription ({ data }: Props) {

  const [descriptionValue, setDescriptionValue] = useState<string|number>(data.jobDescription);
  const { updateEditedField, updating } = useUpdateJobDetail()
  const { jobId }: ViewJobParamsType = useParams()
  const [editMode, setEditMode] = useState(false)

  return (
    <>
      <div className='flex-1'>
        {/* TOP HEADER PART! */}
        <header className='bg-gray-100 text-[#1273eb] font-bold p-2 text-xl border-2 '>
          Job Description
        </header>
        {/* BOTTOM HEADER PART! */}
        <section className='p-3 w-full border-2 border-t-0'>
          <header className='flex justify-between items-center '>
            <h2 className='text-md font-bold'>Job Description</h2>
            {editMode ? (
              <>
              <div className="flex flex-end items-center">
                {/* THIS WILL SAVE THE NEWER VALUE TO DATABASE!! */}
                <MdDone
                  className='text-green-500 w-5 h-5 cursor-pointer'
                  // THIS WILL SAVE THE DATA TO DATA BASE USING SERVER ACTION!
                  onClick={() => {
                    updateEditedField(descriptionValue, 'jobDescription', jobId)
                    setEditMode(false)
                  }}
                />
                {/* THIS WILL BACK TO PREVIOUS STATE! */}
                <MdOutlineClose
                  className='text-red-500 w-4 h-4 cursor-pointer'
                  // THIS WILL CLOSE THAT!
                  onClick={() => {
                    setEditMode(false)
                  }}
                />
                </div>
              </>
            ) : (
              <MdEdit
                onClick={() => {
                  setEditMode(!editMode)
                }}
                className='text-[#1273eb] w-4 h-4 cursor-pointer'
              />
            )}
          </header>
          <div className='w-full border p-3 font-semibold'>
            {/* CONDITIONAL RENDERING! */}
            {editMode ? (
              <>
                <textarea
                  className='p-2 rounded-md resize-none w-full outline-none '
                  rows={12}
                  value={descriptionValue}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setDescriptionValue(e.target.value)
                  }
                />
              </>
            ) : (
              <>{data.jobDescription || 'test description all'}</>
            )}
          </div>
        </section>
      </div>
    </>
  )
}
