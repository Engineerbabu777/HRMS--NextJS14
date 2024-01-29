'use client';

import React from 'react'
import Image from 'next/image'
import { MdAdd } from 'react-icons/md'
import Link  from 'next/link'

type Props = {
  jobs?: boolean,
  candidates?: boolean
}

export default function NothingInfo ({ jobs, candidates }: Props) {
  return (
    <>
      {/* FOR JOBS! */}
      {jobs && (
        <section className=' flex h-full justify-center items-center flex-col gap-3  '>
          {/* IMAGE! */}
          <Image
            src={'/no-jobs-png.png'}
            width={250}
            height={250}
            alt={'alternative-text'}
          />

          {/* SMALL HEADING! */}
          <h2 className='font-bold text-xl -mt-2'>Create a Job</h2>

          {/* DESCRIPTION! */}
          <p className='text-[#8e8e8e] lg:max-w-[700px] text-sm text-center'>
            A Job represents a new job opening, an open position or vacancy
            listing. Creating a job will allow you to start adding candidates to
            that job, publish the job onto your career page, post the job to job
            boards and much more.
          </p>

          {/* BTN TO CREATE! */}
          <Link
            href={'/recruitment/jobs/create-job'}
            className='flex gap-1 min-w-[200px] hover:opacity-50 rounded-md text-white  px-3 bg-[#1273eb] h-[32px] items-center justify-center '
          >
            <MdAdd className='w-4 h-4' />
            <span className=''>Create Job</span>
          </Link>
        </section>
      )}

      {/* FOR CANDIDATES */}
      {candidates && (
        <div className='flex items-center justify-center h-full flex-col gap-3 '>
          {/* IMAGE! */}
          <Image
            src={'/no-candidate.png'}
            width={250}
            height={250}
            alt={'alternative-text'}
          />

          {/* SMALL HEADING! */}
          <h2 className='font-bold text-xl -mt-2'>
            You have not created any candidates yet
          </h2>

          {/* DESCRIPTION! */}
          <p className='text-[#8e8e8e] lg:max-w-[700px] text-sm text-center'>
            Creating candidates will allow you to add their details, resumes,
            add them to a job and much more.
          </p>

          {/* BTN TO CREATE! */}
          <Link
            href={'/recruitment/jobs/create-job'}
            className='flex gap-1 min-w-[200px] hover:opacity-50 rounded-md text-white  px-3 bg-[#1273eb] h-[32px] items-center justify-center '
          >
            <MdAdd className='w-4 h-4' />
            <span className=''>Create Candidate</span>
          </Link>
        </div>
      )}
    </>
  )
}
