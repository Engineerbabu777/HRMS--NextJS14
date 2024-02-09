import React from 'react'
import TopCandidatesPage from '@/components/recruitment/candidates/MainPage/Top/Top'
import Bottom from './Bottom/Bottom'

type Props = {
    data:any
}

export default function MainPage ({data}: Props) {
  return (
    <>
      {/* TOP! */}
      <TopCandidatesPage />

      {/* BOTTOM! */}
      <Bottom data={data}/>
    </>
  )
}
