import React from 'react'
import TypeHeader from '../TypeHeader';
import SingleUser from '../SingleUser';

type Props = {
  candidates: any
}

export default function OfferedCandidates ({ candidates }: Props) {
  return (
    <>
      <div className=' p-1 border-r-2 border-[#1273eb] flex-1 border-dotted h-full min-w-[200px] flex flex-col'>
        {/* HEADER! */}
        <TypeHeader type='Offered' />

        {/* CANDIDATES!! */}
        <div className='flex-1 overflow-auto scrollbar mt-3 flex flex-col gap-1'>
          {candidates?.length > 0 &&
            candidates.map((c:any, i:number) => (
              <SingleUser
                key={i}
                userId={c._id}
                name={c.candidateName}
                imageURL={c.imageURL}
                time={'2h 20min'}
                candidateType={c.candidateType || 'offered'}
              />
            ))}
        </div>
      </div>
    </>
  )
}
