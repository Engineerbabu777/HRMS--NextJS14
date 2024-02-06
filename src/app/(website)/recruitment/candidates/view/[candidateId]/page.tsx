import { getCandidateById } from '@/actions/candidate/get-candidate-by-id';
import Main from '@/components/recruitment/candidates/view/Main'
import { ViewCandidateParamsType } from '@/types';
import React from 'react'

type Props = {
  params:ViewCandidateParamsType
}

export default async function page ({params}: Props) {


  const data = await getCandidateById(params.candidateId);

  console.log({data})

  return (
    <>
      {/* MAIN VIEW IN CANDIDATES COMPONENTS /view */}
      <Main data={data.candidate}/>
    </>
  )
}
