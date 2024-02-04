'use client'

import React from 'react'
import Input from '../Input/Input'
import Header from './Header'
import { useParams } from 'next/navigation'
import { useRecoilState } from 'recoil'
import { ModalAtom } from '@/recoil/modalAtom'
import { MdAdd, MdClose, MdDelete } from 'react-icons/md'
import FormErrors from '../Input/FormErrors'
import useSkills from '@/hooks/useSkills'

type Props = {}

type Skills = {
  skillName: string,
  points: number
}
export default function SkillsBody ({}: Props) {
  const { candidateId } = useParams()
  const [modalState, setModalState] = useRecoilState(ModalAtom)

  const { addSkill, changeValue, error, onSubmit, removeSkill,skills } = useSkills()

  return (
    <>
      {/* HEADER! */}
      <Header headerName={'Skills'} />

      {/* BODY! */}
      <div className='flex flex-col gap-2 w-full mt-3'>
        {skills.map((s: Skills, i: number) => (
          <>
            <div className='flex items-center gap-2'>
              {/* INPUT! */}
              <Input
                label='Skill Name'
                name='skillName'
                placeholder='Enter Skill Name'
                required
                type='text'
                onChange={e => {
                  changeValue(e, i)
                }}
                error=''
                value={s.skillName}
              />

              {/* RANGE! */}
              <Input
                label='Points'
                name='points'
                placeholder='Give Your Skill Some Ratings'
                required
                type='range'
                onChange={e => {
                  changeValue(e, i)
                }}
                error=''
                value={s.points}
              />

              <MdDelete
                onClick={() => removeSkill(i)}
                className='text-red-600 hover:text-red-400 w-6 h-6'
              />
            </div>
          </>
        ))}

        {error && <FormErrors error={error} />}

        {/* ADD SKILLS BTN! */}
        <button
          onClick={addSkill}
          className='font-semibold text-[#1273eb] text-lg p-1 rounded-md w-fit flex gap-1 items-center'
        >
          <MdAdd className='w-5 h-5 -mt-1' />
          Add Skill
        </button>
      </div>

      {/* ACTIONS! */}
      <div className='flex items-center justify-end mt-3 gap-2'>
        <button className='text-gray-500 border text-lg p-1 rounded-md'>
          Cancel
        </button>
        <button
          onClick={onSubmit}
          className='bg-[#1273eb] text-white text-lg p-1 rounded-md'
        >
          Submit
        </button>
      </div>
    </>
  )
}
