import React from 'react'
import CandidatesTableBody from './CandidatesTableBody'
import CandidatesTableHeader from './CandidatesTableHeader'

type Props = {
  data: any
}

export default function CandidatesTable ({ data }: Props) {
  return (
    <>
      <table className='flex-1 w-full mt-4'>
        {/* TABLE HEADER! */}
        <CandidatesTableHeader />

        {/* TABLE BODY! */}
        <CandidatesTableBody data={data} />
      </table>
    </>
  )
}
