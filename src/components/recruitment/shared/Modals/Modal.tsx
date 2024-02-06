'use client'
import ExperienceBody from './Body/ExperienceBody'
import EducationBody from './Body/EducationBody'
import AddressBody from './Body/AddressBody'
import ReferenceBody from './Body/ReferenceBody'
import { useRecoilState } from 'recoil'
import { ModalAtom } from '@/recoil/modalAtom'
import SkillsBody from './Body/SkillsBody'
import MoveToBody from './Body/MoveToBody'

export default function Modal () {
  const [modalState, setModalState] = useRecoilState(ModalAtom)

  return (
    <>
      {modalState.isOpen && (
        <div className='fixed top-0 left-0 bottom-0 right-0 bg-black/50  flex items-center justify-center z-[9999]'>
          <div className='z-[99999] bg-white rounded-md p-5 w-[500px] max-h-[90vh] overflow-auto scrollbar'>
            {modalState.type === 'emergency' && (
              <>
                <ReferenceBody />
              </>
            )}
            {modalState.type === 'address' && (
              <>
                <AddressBody />
              </>
            )}
            {modalState.type === 'education' && (
              <>
                <EducationBody />
              </>
            )}
            {modalState.type === 'experience' && <ExperienceBody />}
            {modalState.type === 'skills' && <SkillsBody />}
            {modalState.type === 'moveTo' && <MoveToBody />}
          </div>
        </div>
      )}
    </>
  )
}
