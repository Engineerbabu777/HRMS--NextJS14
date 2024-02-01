import React from 'react'

type Props = {}

// MOVE TO UTILS!
const tableHeadersName = [
  'Candidate Name',
  'Candidate Referance',
  'Location',
  'Current Position',
  'Notice Period',
  'Current Salary',
  'Expected Salary',
  'Date',
  'Actions'
]

export default function CandidatesTableHeader ({}: Props) {
  return (
    <>
      <thead className='bg-gray-100 '>
        <th className=''>
          <input type='checkbox' className='w-4 h-4 -mt-1' />
        </th>
        {tableHeadersName.map(name => (
            <th className='' key={name}>
              {name}
            </th>
        ))}
      </thead>
    </>
  )
}
