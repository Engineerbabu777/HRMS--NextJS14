'use client';
import React from 'react'
import JobsTableStatus from './JobsTableStatus'
import JobTableActions from './JobTableActions'
import { format, compareAsc } from 'date-fns'
import { filterJobsData } from '@/utils/filterJobsData'
import { useSearchParams } from 'next/navigation'

type Props = {
  data: any
}

export default function JobsTableBody ({ data }: Props) {

  const searchValue = useSearchParams().get('search');

  return (
    <>
      <tbody className='flex-1 overflow-auto'>
        {filterJobsData(data,searchValue as string).map((job: any, index: number) => (
          <>
            <tr className='bg-white hover:bg-gray-50 border-b border-gray-200'>
              <th className=''>
                <input type='checkbox' className='w-4 h-4 ' />
              </th>
              <td className=''>{job.jobName}</td>
              <td className=''>{job.jobLocation}</td>
              <td className=''>{job.headCount}</td>
              <td className=''>Rs {job.minimumSalary}</td>
              <td className=''>Rs {job.maximumSalary}</td>
              <td className='relative'>
                <JobsTableStatus isActive={job?.jobStatus === "active"} />
              </td>
              <td className='text-xs font-semibold '>
                {job.createdAt
                  ? format(new Date(job?.createdAt), 'dd-MM-yyyy/hh:mm')
                  : null}
              </td>
              <td className=''>Misha Sohail</td>
              <td className='flex gap-1 items-center mt-2'>
                <JobTableActions jobId={job._id} />
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </>
  )
}
