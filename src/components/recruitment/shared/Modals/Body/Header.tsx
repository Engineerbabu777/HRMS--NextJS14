import React from 'react'
import { MdClose } from 'react-icons/md'
import { useRecoilState } from 'recoil'
import { ModalAtom } from '@/recoil/modalAtom'

type Props = {
  headerName: string
}

export default function Header ({ headerName }: Props) {

    const [modalState, setModalState] = useRecoilState(ModalAtom)

  return (
    <>
      <header className='flex items-center justify-between'>
        <h2 className='text-[#1273eb] text-xl font-semibold'>{headerName}</h2>
        <MdClose
          className='text-[#1273eb] w-6 h-6 cursor-pointer'
          onClick={() => setModalState({isOpen:false,type:""})}
        />
      </header>
    </>
  )
}
