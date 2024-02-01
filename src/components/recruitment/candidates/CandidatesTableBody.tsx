import React from 'react'
import CandidatesTableActions from './CandidatesTableActions'
import {format} from 'date-fns';

type Props = {
  data: any
}

export default function CandidatesTableBody ({ data }: Props) {

  return (
    <>
      <tbody className='flex-1 overflow-auto'>
        {data?.map((candidate: any, index: number) => (
          <>
            <tr className='bg-white hover:bg-gray-50 border-b border-gray-200'>
              <th className=''>
                <input type='checkbox' className='w-4 h-4 ' />
              </th>
              <td className=''>{candidate.name || 'John Doe'}</td>
              <td className=''>{candidate.reference || 'JA1278'}</td>
              <td className=''>{candidate.location}</td>
              <td className=''>
                {candidate.currentPosition || 'Software Engineer'}
              </td>
              <td className=''>{candidate.noticePeriod || '26 days'}</td>
              <td className=''>Rs {candidate.currentSalary || '60,000'}</td>
              <td className=''>Rs {candidate.expectedSalary || '75,000'}</td>

              <td className='text-xs font-bold'>
              {candidate.createdAt
                  ? format(new Date(candidate?.createdAt), 'dd-MM-yyyy/hh:mm')
                  : null}
              </td>
              <td className='flex gap-1 items-center mt-2'>
                <CandidatesTableActions candidateId={candidate._id} />
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </>
  )
}