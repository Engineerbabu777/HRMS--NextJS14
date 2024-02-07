'use client'

import Modal from '@/components/recruitment/shared/Modals/Modal'
import React from 'react'
import { MdAdd } from 'react-icons/md'
import { useRecoilState } from 'recoil'
import { ModalAtom } from '@/recoil/modalAtom'
import { BsThreeDotsVertical } from 'react-icons/bs'
import HeaderWithAdd from '../../Header'

type Props = {
  data: any
}

export default function ExperienceDetails ({ data }: Props) {
  const [modalState, setModalState] = useRecoilState(ModalAtom)

  return (
    <>
      <Modal />
      <div className='flex-1'>
        {/* HEADER! */}
        <HeaderWithAdd
          showAdd={!!data.candidateExperiences.length}
          headerName={'Experiences'}
          type='experience'
        />
        {/* BODY! */}
        {/* IF EXPERIENCE EXISTS FOR THE CANDIDATE! */}
        <section className='p-3 py-5 w-full border-2 border-t-0 flex  p-2 flex-col gap-2'>
          {data.candidateExperiences.length > 0 &&
            data.candidateExperiences.map((e: any, i: number) => (
              <div className='border relative p-1' key={i}>
                <BsThreeDotsVertical className='absolute right-2 top-1 text-[#1273eb] w-5 h-5' />
                <EachExperience name={'Position Name'} value={e.positionName} />
                <EachExperience name={'Company Name'} value={e.companyName} />
                <EachExperience name={'Salary'} value={e.salary} />
                <EachExperience name={'Description'} value={e.jobDescription} />
              </div>
            ))}
        </section>

        {/* IF NO EXPERIENCE EXISTS FOR THE CANDIDATE */}
        {data.candidateExperiences.length === 0 && (
          <section className='p-3 py-5 w-full border-2 border-t-0 flex justify-between items-center p-5 flex-col gap-2'>
              <>
                {' '}
                <p className='text-gray-500 text-lg'>No Experience added yet</p>
                <button
                  onClick={() => {
                    setModalState({ isOpen: true, type: 'experience' })
                  }}
                  className='flex gap-1 min-w-[100px] hover:opacity-50  rounded-md text-white  px-3 bg-[#1273eb] 
            h-[40px] items-center justify-center '
                >
                  <MdAdd className='w-4 h-4 -mt-1' />
                  <span className=''>Add</span>
                </button>
              </>
          </section>
        )}
      </div>
    </>
  )
}

function EachExperience ({
  name,
  value
}: {
  name: string,
  value: string | number
}) {
  return (
    <>
      <div className=' flex flex-col gap-1 w-full text-lg'>
        <div className='flex items-center justify-between'>
          {/* NAME! */}
          <p className='w-[150px] font-semibold'>{name}:</p>

          {/* VALUE! */}
          <p className='flex-1 text-gray-500'>{value}</p>
        </div>
      </div>
    </>
  )
}
