


import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

type Props = {
    data:any
}

export default function Table({
    data
}: Props) {
  return (
    <>
    
    <table className='flex-1 w-full mt-4'>
        {/* TABLE HEADER! */}
        <TableHeader />

        {/* TABLE BODY! */}
        <TableBody data={data} />
      </table>
    </>
  )
}