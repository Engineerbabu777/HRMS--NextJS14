/* eslint-disable @next/next/no-img-element */
'use client'
import { useRecoilState } from 'recoil'
import { ModalAtom } from '@/recoil/modalAtom'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { CiClock2 } from 'react-icons/ci'
import { MdOutlineRemoveRedEye } from 'react-icons/md'


type Props = {
    name:string
    imageURL?: string
    time:string,
    userId:string,
}

export default function SingleUser({imageURL,name,userId,time}: Props) {

  const [modalState, setModalState] = useRecoilState(ModalAtom)

  return (
    <>
    <div className='flex border bg-white p-2'>
              {/* PART LEFT! */}
              <div className='flex gap-2 flex-1'>
                <img
                  src={imageURL || '/elon.jpg'}
                  className='w-8 h-8 rounded-full object-cover'
                  alt='alter-text'
                />
                <div className='flex flex-col gap-2'>
                  <p className='font-bold'>{name}</p>
                  <p className='text-gray-400 flex  items-center text-xs'>
                    <CiClock2 className='w-4 h-4 ' />
                    {time}
                  </p>
                </div>
              </div>

              {/* PART RIGHT! */}
              <div className='flex flex-col items-center justify-between relative'>
                <BsThreeDotsVertical onClick={() => setModalState({isOpen:true,type:"moveTo"})} className='cursor-pointer w-4 h-4 ml-auto text-[#1273eb]' />
                <MdOutlineRemoveRedEye className=' w-4 h-4 ml-auto text-[#1273eb]' />
              </div>
            </div>
    </>
  )
}