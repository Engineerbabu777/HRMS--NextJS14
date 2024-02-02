import React from 'react'
import LabelName from './LabelName'
import ViewEditContainer from './ViewEditContainer'

type Props = {
  headingName: string
  editKey:string
  inEditView:any
  setInEditView:any
  type:string
  placeholder:string
  value:string
}

export default function FullContainer (
    { headingName,editKey,inEditView,placeholder,setInEditView,type,value }: Props) {
  return (
    <>
      <div className='flex justify-between items-center'>
        {/* LABEL NAME! */}
        <LabelName headingName={headingName} />

        {/* EDITABLE && VIEW CONTAINER! */}
        <ViewEditContainer 
        editKey={editKey}
        inEditView={inEditView}
        setInEditView={setInEditView}
        type={type}
        placeholder={placeholder}
        value={value}
        />
      </div>
    </>
  )
}
