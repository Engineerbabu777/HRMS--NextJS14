'use client'
import React from 'react'
import TypeHeader from '../TypeHeader'
import SingleUser from '../SingleUser'
import { useRecoilState } from 'recoil'
import { sharedAtom } from '@/recoil/sharedAtom'

type Props = {
  candidates: any
}

export default function ScreeningCandidates ({ candidates }: Props) {

  const [sharedState, setSharedState] = useRecoilState(sharedAtom);

  console.log(sharedState.candidates)

  return (
    <>
      <div className=' p-1 border-r-2 border-[#1273eb] flex-1 border-dotted h-full min-w-[200px] flex flex-col'>
        {/* HEADER! */}
        <TypeHeader type='Screening' />

        {/* CANDIDATES!! */}
        <div className='flex-1 overflow-auto scrollbar mt-3 flex flex-col gap-1'>
          {candidates?.length > 0 &&
            candidates.map((c, i) => (
              <SingleUser
                key={i}
                userId={c._id}
                name={c.candidateName}
                imageURL={c.imageURL}
                time={'2h 20min'}
                candidateType={c.candidateType || 'screening'}
              />
            ))}
        </div>
      </div>
    </>
  )
}
