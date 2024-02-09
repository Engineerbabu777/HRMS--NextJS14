'use client'

import React from 'react'
import Header from './Header'
import { useParams } from 'next/navigation'
import { useRecoilState } from 'recoil'
import { ModalAtom } from '@/recoil/modalAtom'
import { MdAdd } from 'react-icons/md'
import { sharedAtom } from '@/recoil/sharedAtom'
import { updateCandidateType } from '@/actions/candidate/update-candidate-type'
import { ViewJobParamsType } from '@/types'

type Props = {}

export default function MoveToBody ({}: Props) {
  const { jobId }: ViewJobParamsType = useParams()
  const [modalState, setModalState] = useRecoilState(ModalAtom)
  const [sharedState, setSharedState] = useRecoilState(sharedAtom)

  return (
    <>
      {/* HEADER! */}
      <Header headerName={'Move To'} />

      {/* BODY! */}
      <div className='flex flex-col gap-2 w-full mt-5'>
        <SingleOption
          moveTo={'New Candidate'}
          type='new'
          jobId={jobId}
        />
        <SingleOption
          moveTo={'Screening'}
          type='screening'
          jobId={jobId}
        />
        <SingleOption
          moveTo={'Shortlisted'}
          type='shortlisted'
          jobId={jobId}
        />
        <SingleOption
          moveTo={'Technical Interview'}
          type='interview'
          jobId={jobId}
        />
        <SingleOption
          moveTo={'CEO Interview'}
          type='ceo'
          jobId={jobId}
        />
        <SingleOption
          moveTo={'Offered'}
          type='offered'
          jobId={jobId}
        />
        <SingleOption
          moveTo={'Hired'}
          type='hired'
          jobId={jobId}
        />
        <SingleOption
          moveTo={'Joining'}
          type='joining'
          jobId={jobId}
        />
        <SingleOption
          moveTo={'Confirmation'}
          type='confirmation'
          jobId={jobId}
        />
      </div>
    </>
  )
}

function SingleOption ({
  moveTo,
  type,
  jobId,
}: {
  moveTo: string,
  type: string,
  jobId: string,
}) {

  const [sharedState, setSharedState] = useRecoilState(sharedAtom)

  const handleUpdate = async()=>{

    console.log({type,jobId,some:sharedState.selectedCandidateID})
// UPDATE CANDIDATE!
const response = await updateCandidateType(
  type,
  sharedState?.selectedCandidateID as string,
  jobId
)

console.log({response})

if (response.status === 200) {
  setSharedState({
    ...sharedState,
    candidates: sharedState?.candidates?.map(
      (c: any) => {
        if (c._id === sharedState.selectedCandidateID && c.candidateJobs[0].jobId.toString() === jobId) {
          return {...c,candidateJobs:[...c.candidateJobs.map((j:any) => {
            if(j.jobId === jobId){
             return {...j,candidateType:type}
            }
          })]}
        } else {
          return c;
        }
      }
    )
  })
}
  }


  return (
    <>
      <p className='flex items-center justify-between'>
        <h2 className=' text-lg font-semibold'>{moveTo}</h2>
        <MdAdd
          className='text-[#1273eb] w-6 h-6 cursor-pointer'
          onClick={handleUpdate}
        />
      </p>
    </>
  )
}
