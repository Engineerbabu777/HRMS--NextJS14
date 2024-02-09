import { sharedAtom } from '@/recoil/sharedAtom'
import React from 'react'
import {useRecoilState} from 'recoil';

type Props = {}

export default function HiringSideStatus ({}: Props) {
  const [sharedStates, setSharedStates] = useRecoilState(sharedAtom)

  const inPipeLines =
    sharedStates?.candidates?.filter(
      c =>
        c.candidateJobs[0].candidateType === 'new' ||
        c.candidateJobs[0].candidateType === 'shorlisted' ||
        c.candidateJobs[0].candidateType === 'screening' ||
        c.candidateJobs[0].candidateType === 'interview' ||
        c.candidateJobs[0].candidateType === 'offered' ||
        c.candidateJobs[0].candidateType === 'ceo'
    )?.length || 0
  const hired =
    sharedStates?.candidates?.filter(
      c =>
        c.candidateJobs[0].candidateType === 'hired' ||
        c.candidateJobs[0].candidateType === 'joining' ||
        c.candidateJobs[0].candidateType === 'confirmation'
    )?.length || 0


  return (
    <>
      <section className='flex gap-2 items-center ml-auto'>
        <div className='min-w-[100px] min-h-[80px] flex flex-col border'>
          {/* TOP ! */}
          <div className='text-white font-semibold text-center bg-green-500 py-1'>
            Hired
          </div>
          {/* BOTTOM! */}
          <div className='text-green-500 font-semibold text-center bg-white flex-grow flex items-center justify-center'>
            {hired}
          </div>
        </div>

        <div className='min-w-[100px] min-h-[80px] flex flex-col border'>
          {/* TOP ! */}
          <div className='text-white font-semibold text-center bg-[#FF9843] py-1'>
            In Pipeline
          </div>
          {/* BOTTOM! */}
          <div className='text-[#FF9843] font-semibold text-center bg-white flex-grow flex items-center justify-center'>
            {inPipeLines}
          </div>
        </div>
        <div className='min-w-[100px] min-h-[80px] flex flex-col border'>
          {/* TOP ! */}
          <div className='text-white font-semibold text-center bg-red-500 py-1'>
            Dropped
          </div>
          {/* BOTTOM! */}
          <div className='text-red-500 font-semibold text-center bg-white flex-grow flex items-center justify-center'>
            0
          </div>
        </div>
      </section>
    </>
  )
}
