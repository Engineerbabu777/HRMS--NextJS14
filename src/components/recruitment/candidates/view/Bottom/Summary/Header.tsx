import { ModalAtom } from '@/recoil/modalAtom'
import React from 'react'
import { MdAdd } from 'react-icons/md'
import { useRecoilState } from 'recoil'

type Props = {
  showAdd: boolean,
  type: string,
  headerName: string,
}

export default function HeaderWithAdd ({ showAdd, type, headerName }: Props) {
  const [modalState, setModalState] = useRecoilState(ModalAtom)

  return (
    <>
      <header className='bg-gray-100 text-[#1273eb] font-bold p-2 text-xl border-2 flex items-center justify-between'>
        <h2>{headerName}</h2>
        {showAdd && (
          <p
            onClick={() => {
              setModalState({ isOpen: true, type })
            }}
            className='cursor-pointer text-white bg-[#1273eb] flex items-center justify-center rounded-full p-1'
          >
            <MdAdd className='w-4 h-4' />
          </p>
        )}
      </header>
    </>
  )
}
