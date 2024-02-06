import React from 'react'
import AdditionalInformation from './AdditionalInfo/AdditionalInformation'
import Addresses from './Addressed/Addresses'
import Skills from './Skills/Skills'
import Jobs from './Jobs/Jobs'

type Props = { data: any }

export default function Main ({ data }: Props) {
  return (
    <>
      <section className='flex-1 flex  flex-col gap-4 bg-white'>
        {/* SKILLS */}
        <Skills data={data}/>

        {/* ADDITIONAL INFORMATION! */}
        <AdditionalInformation data={data} />

        {/* JOBS! */}
        <Jobs data={data}/>

        {/* ADDRESSES */}
        <Addresses data={data}/>
      </section>
    </>
  )
}
