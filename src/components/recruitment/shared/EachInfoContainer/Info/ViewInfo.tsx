

import React from 'react'
import { MdEdit } from 'react-icons/md'

type Props = {
  setInEditView: React.Dispatch<React.SetStateAction<any>>,
  // inEditView?: any,
  editKey: string,
  value: string|number,
}

export default function ViewInfo ({ setInEditView, editKey, value }: Props) {


  return (
    <>
      <p className="text-lg font-semibold">{value}</p>
      <MdEdit
        className='text-[#1273eb] w-4 h-4 cursor-pointer'
        onClick={() => setInEditView({ [editKey]: value })}
      />
    </>
  )
}
