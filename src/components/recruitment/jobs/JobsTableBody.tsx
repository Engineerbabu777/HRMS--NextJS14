import React from 'react'
import JobsTableStatus from './JobsTableStatus'
import JobTableActions from './JobTableActions'

type Props = {
  data:any;
}

export default function JobsTableBody ({ data }: Props) {
  return (
    <>
      <tbody className='flex-1 overflow-auto'>
        {data.map((job: any, index: number) => (
          <>
            <tr className='bg-white hover:bg-gray-50 border-b border-gray-200'>
              <th className=''>
                <input type='checkbox' className='w-4 h-4 ' />
              </th>
              <td className=''>{job.name}</td>
              <td className=''>{job.location}</td>
              <td className=''>{job.headCount}</td>
              <td className=''>Rs {job.minSalary}</td>
              <td className=''>Rs {job.maxSalary}</td>
              <td className='relative'>
                <JobsTableStatus />
              </td>
              <td className=''>{job?.createdAt || 'Today'}</td>
              <td className=''>Misha Sohail</td>
              <td className='flex gap-1 items-center mt-2'>
                <JobTableActions />
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </>
  )
}
