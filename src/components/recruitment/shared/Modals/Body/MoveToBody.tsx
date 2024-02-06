'use client'

import React from 'react'
import Header from './Header'
import { useParams } from 'next/navigation'
import { useRecoilState } from 'recoil'
import { ModalAtom } from '@/recoil/modalAtom'
import { MdAdd } from 'react-icons/md'

type Props = {}

export default function MoveToBody ({}: Props) {
  const { candidateId } = useParams()
  const [modalState, setModalState] = useRecoilState(ModalAtom)

  return (
    <>
      {/* HEADER! */}
      <Header headerName={'Move To'} />

      {/* BODY! */}
      <div className='flex flex-col gap-2 w-full mt-5'>
        <SingleOption moveTo={'New Candidate'} />
        <SingleOption moveTo={'Screening'} />
        <SingleOption moveTo={'Shortlisted'} />
        <SingleOption moveTo={'Technical Interview'} />
        <SingleOption moveTo={'CEO Interview'} />
        <SingleOption moveTo={'Offered'} />
        <SingleOption moveTo={'Hired'} />
        <SingleOption moveTo={'Joining'} />
        <SingleOption moveTo={'Confirmation'} />
      </div>

     
    </>
  )
}

function SingleOption ({
  moveTo,
  onClick
}: {
  moveTo: string,
  onClick: (to: string, candidateID: string) => void
}) {
  return (
    <>
      <p className='flex items-center justify-between'>
        <h2 className=' text-lg font-semibold'>{moveTo}</h2>
        <MdAdd className='text-[#1273eb] w-6 h-6 cursor-pointer' onClick={() => {}} />
      </p>
    </>
  )
}
