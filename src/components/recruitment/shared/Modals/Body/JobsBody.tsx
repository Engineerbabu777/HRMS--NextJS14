import React from 'react'
import Header from './Header'
import useJobs from '@/hooks/useJobs'

type Props = {}

export default function JobsBody ({}: Props) {
  const { handleChange, jobs, handleSubmit } = useJobs()

  return (
    <>
      {/* HEADER! */}
      <Header headerName='Add Jobs' />

      {/* BODY! */}
      <div className='flex flex-col gap-2 w-full mt-3'>
        <select
          onChange={handleChange}
          className='border text-[#1273eb] p-2 border-[#1273eb]'
        >
          <option disabled selected>Select any Jobs</option>
          {jobs.map((j: any, i: number) => (
            <>
              <option value={j._id}>{j.jobName}</option>
            </>
          ))}
        </select>
      </div>

      {/* ACTIONS! */}
      <div className='flex items-center justify-end mt-3 gap-2'>
        <button className='text-gray-500 border text-lg p-1 rounded-md'>
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className='bg-[#1273eb] text-white text-lg p-1 rounded-md'
        >
          Submit
        </button>
      </div>
    </>
  )
}
