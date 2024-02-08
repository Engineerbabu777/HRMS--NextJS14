'use client';
import React from 'react'
import CandidatesTableActions from './CandidatesTableActions'
import { differenceInDays, format } from 'date-fns'
import {useSearchParams} from 'next/navigation';
import { filterCandidatesData } from '@/utils/filterCandidatesData';

type Props = {
  data: any
}

export default function CandidatesTableBody ({ data }: Props) {

  const searchValue = useSearchParams().get('search');

  return (
    <>
      <tbody className='flex-1 overflow-auto'>
        {filterCandidatesData(data,searchValue).map((candidate: any, index: number) => (
          <>
            <tr className='bg-white hover:bg-gray-50 border-b border-gray-200'>
              <th className=''>
                <input type='checkbox' className='w-4 h-4 ' />
              </th>
              <td className='text-sm'>
                {candidate.candidateName || 'John Doe'}
              </td>
              <td className='text-sm'>
                {candidate.candidateReference || 'JA1278'}
              </td>
              <td className='text-sm'>{candidate.candidateLocation}</td>
              <td className='text-sm'>
                {candidate.currentPosition || 'Software Engineer'}
              </td>
              <td className='text-sm'>
                {candidate?.noticePeriod
                  ? differenceInDays(
                      new Date(candidate?.noticePeriod),
                      new Date(Date.now())
                    ) + ' days remaining'
                  : '26 days'}
              </td>
              <td className='text-sm'>
                Rs {candidate.currentSalary || '60,000'}
              </td>
              <td className='text-sm'>
                Rs {candidate.expectedSalary || '75,000'}
              </td>

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
