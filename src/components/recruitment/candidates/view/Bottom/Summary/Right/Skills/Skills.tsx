'use client';
import React from 'react'
import { MdAdd } from 'react-icons/md'
import { useRecoilState } from 'recoil'
import { ModalAtom } from '@/recoil/modalAtom'
import HeaderWithAdd from '../../Header'

type Props = {
  data: any
}

export default function Skills ({ data }: Props) {
  const [modalState, setModalState] = useRecoilState(ModalAtom)

  return (
    <>
      <div className=''>
        {/* HEADER! */}
        <HeaderWithAdd
          showAdd={!!data.candidateSkills.length}
          type='skills'
          headerName='Skills'
        />

        {/* IF SKILLS EXITS! */}
        <section className='p-3 py-5 w-full border-2 border-t-0 flex  p-2 items-center justify-center flex-wrap gap-2'>
          {data.candidateSkills.length > 0 &&
            data.candidateSkills.map((s: any, i: number) => (
              <EachSkill name={s.skillName} points={s.points} key={i} />
            ))}
        </section>
        {/* BODY! */}
        {data.candidateSkills.length === 0 && (
          <section className='p-3 py-5 w-full border-2 border-t-0 flex justify-between items-center p-5 flex-col gap-2'>
            <p className='text-gray-500 text-lg'>No Skills added yet</p>
            <button
              onClick={() => {
                setModalState({ isOpen: true, type: 'skills' })
              }}
              className='flex gap-1 min-w-[100px] hover:opacity-50  rounded-md text-white  px-3 bg-[#1273eb] 
            h-[40px] items-center justify-center '
            >
              <MdAdd className='w-4 h-4 -mt-1' />
              <span className=''>Add</span>
            </button>
          </section>
        )}
      </div>
    </>
  )
}

function EachSkill ({ name, points }: { name: string, points: number }) {
  return (
    <>
      <div
        className={` rounded-full p-2 w-fit flex gap-1 items-center text-lg bg-[#1273eb]`}
      >
        <p className='bg-white text-[#1273eb] font-bold rounded-full p-2 h-8 w-8 flex items-center justify-center'>
          {Math.ceil(points / 20)}
        </p>
        <p className='text-lg text-white font-semibold'>{name}</p>
      </div>
    </>
  )
}
