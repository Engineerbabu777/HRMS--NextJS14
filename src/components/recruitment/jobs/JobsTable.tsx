
import React from 'react'
import JobsTableBody from './JobsTableBody'
import JobsTableHeader from './JobsTableHeader'

type Props = {
  data: any
}

export default function JobsTable ({ data }: Props) {
  return (
    <>
      <table className='flex-1 w-full mt-4'>
        {/* TABLE HEADER! */}
        <JobsTableHeader />

        {/* TABLE BODY! */}
        <JobsTableBody data={data} />
      </table>
    </>
  )
}
