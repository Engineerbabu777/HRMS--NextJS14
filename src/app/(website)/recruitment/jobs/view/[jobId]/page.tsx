import { getJobById } from '@/actions/job/get-job-by-id'
import Main from '@/components/recruitment/jobs/view/Main'
import { ViewJobParamsType } from '@/types'
import React from 'react'

type Props = {
  params: ViewJobParamsType
}

export default async function page ({ params }: Props) {

  const data = await getJobById(params.jobId);

  console.log({data});

  return (
    <>
      {/* INSIDE COMPONENTS(recruitment/jobs/view/) */}
      <Main data={data.job}/>
    </>
  )
}
