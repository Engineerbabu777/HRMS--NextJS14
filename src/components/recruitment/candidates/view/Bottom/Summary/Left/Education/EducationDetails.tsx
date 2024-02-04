import React from 'react'
import { MdAdd } from 'react-icons/md'
import { useRecoilState } from 'recoil';
import { ModalAtom } from '@/recoil/modalAtom';

type Props = {}

export default function EducationDetails ({}: Props) {

  const [modalState, setModalState] = useRecoilState(ModalAtom)

  return (
    <>
      <div className='flex-1'>
        {/* HEADER! */}
        <header className='bg-gray-100 text-[#1273eb] font-bold p-2 text-xl border-2 '>
          Education
        </header>
        {/* BODY! */}
        <section className='p-3 py-5 w-full border-2 border-t-0 flex justify-between items-center p-5 flex-col gap-2'>
          <p className='text-gray-500 text-lg'>No Education added yet</p>
          <button
             onClick={() => {setModalState({isOpen:true,type:"education"})}}
            className='flex gap-1 min-w-[100px] hover:opacity-50  rounded-md text-white  px-3 bg-[#1273eb] 
            h-[40px] items-center justify-center '
          >
            <MdAdd className='w-4 h-4 -mt-1' />
            <span className=''>Add</span>
          </button>
        </section>
      </div>
    </>
  )
}
