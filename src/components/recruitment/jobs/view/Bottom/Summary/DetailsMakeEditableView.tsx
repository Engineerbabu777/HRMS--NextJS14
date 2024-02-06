import React from 'react'
import { MdEdit } from 'react-icons/md'

type Props = {
  setInEditView: React.Dispatch<React.SetStateAction<any>>,
  // inEditView?: any,
  editKey: string,
  value: string
}

export default function MakeValueEdit ({ setInEditView, editKey, value }: Props) {


  return (
    <>
      <p>{value}</p>
      <MdEdit
        className='text-[#1273eb] w-4 h-4 cursor-pointer'
        onClick={() => setInEditView({ [editKey]: value })}
      />
    </>
  )
}
