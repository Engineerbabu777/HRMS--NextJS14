



import React from 'react'
import LabelName from './LabelName'
import InfoDetail from './Info/InfoDetail'

type Props = {
  headingName: string
  editKey:string
  inEditView:any
  setInEditView:any
  type:string
  placeholder:string
  value:string|number,
  select?:boolean,
  options?:[string]|[],
  for?:string|null,
}

export default function FullContainer (
    { headingName,editKey,inEditView,placeholder,setInEditView,type,value,options,select }: Props) {
  return (
    <>
      <div className='flex justify-between items-center'>
        {/* LABEL NAME! */}
        <LabelName headingName={headingName} />

        {/* EDITABLE && VIEW CONTAINER! */}
        <InfoDetail 
        editKey={editKey}
        inEditView={inEditView}
        setInEditView={setInEditView}
        type={type}
        placeholder={placeholder}
        value={value}
        select={select?select:false}
        options={options?options:[]}
        />
      </div>
    </>
  )
}
