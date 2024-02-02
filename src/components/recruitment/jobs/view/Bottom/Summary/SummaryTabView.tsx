import React from 'react'
import JobDescription from './JobDescription'
import JobDetailsSide from './JobDetailsSide'

type Props = {
  data:any
}

export default function SummaryTabView ({data}: Props) {
  return (
    <>
      <div className='w-full flex h-full flex-1 gap-2 p-4 overflow-auto scrollbar bg-white'>
        {/* JOB DESCRIPTION SIDE! */}
        <JobDescription data={data}/>

        {/* JOB DETAILS SIDE! */}
        <JobDetailsSide data={data}/>
      </div>
    </>
  )
}
