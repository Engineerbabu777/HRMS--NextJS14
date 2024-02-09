import React from 'react'
import BottomHeader from './BottomHeader'
import Table from './Table/Table';

type Props = {
    data:any
}

export default function Bottom ({
    data
}: Props) {
  return (
    <section className='flex-1 bg-white p-3 rounded-md border w-full '>
      {/* HEADER! */}
      <BottomHeader />

      {/* TABLE! */}
      <Table data={data.candidates} />
    </section>
  )
}
