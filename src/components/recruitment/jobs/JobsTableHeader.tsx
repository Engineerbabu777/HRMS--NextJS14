import React from 'react'

type Props = {}

// MOVE TO UTILS!
const tableHeadersName = [
  'Job Position',
  'Job Location',
  'Headcount',
  'Minimum Salary',
  'Maximum Salary',
  'Job Status',
  'Job Created',
  'HR',
  'Actions'
]

export default function JobsTableHeader ({}: Props) {
  return (
    <>
      <thead className='bg-gray-100 '>
        <th className=''>
          <input type='checkbox' className='w-4 h-4 -mt-1' />
        </th>
        {tableHeadersName.map(name => (
          <>
            <th className='' key={name}>
              {name}
            </th>
          </>
        ))}
      </thead>
    </>
  )
}
