import Main from '@/components/recruitment/jobs/view/Main'
import { ViewJobParamsType } from '@/types'
import React from 'react'

type Props = {
  params: ViewJobParamsType
}

export default async function page ({ params }: Props) {
  return (
    <>
      {/* INSIDE COMPONENTS(recruitment/jobs/view/) */}
      <Main />
    </>
  )
}
