import React from 'react'
import EditView from './DetailsEditView'
import MakeValueEdit from './DetailsMakeEditableView'

type Props = {
  type: string,
  placeholder: string,
  inEditView: any,
  setInEditView: any,
  editKey: string,
  value: string
}

export default function ViewEditContainer ({
  inEditView,
  setInEditView,
  editKey,
  value,
  placeholder,
  type
}: Props) {
  return (
    <>
      <div className='flex gap-2 items-center flex-1 justify-between'>
        {inEditView?.[editKey] ? (
          <>
            <EditView
              setInEditView={setInEditView}
              placeholder={placeholder}
              type={type}
              value={value}
              editKey={editKey}
            />
          </>
        ) : (
          <>
            <MakeValueEdit
              setInEditView={setInEditView}
              value={value}
              editKey={editKey}
            />
          </>
        )}
      </div>
    </>
  )
}
