import React from 'react'
import EditInfo from './EditInfo'
import ViewInfo from './ViewInfo'
import { useParams } from 'next/navigation'
import { ViewCandidateParamsType } from '@/types'
import useUpdateCandidateDetail from '@/hooks/useUpdateCandidateDetail'

type Props = {
  type: string,
  placeholder: string,
  inEditView: any,
  setInEditView: any,
  editKey: string,
  value: string|number,
  select: boolean,
  options: [string] | []
}

export default function InfoDetail ({
  inEditView,
  setInEditView,
  editKey,
  value,
  placeholder,
  type,
  select = false,
  options
}: Props) {

  const {updateEditedField,updating} = useUpdateCandidateDetail();
  const {candidateId}:ViewCandidateParamsType = useParams();

  return (
    <>
      <div className='flex gap-2 items-center flex-1 justify-between'>
        {!select && inEditView?.[editKey] ? (
          <>
            <EditInfo
              setInEditView={setInEditView}
              placeholder={placeholder}
              type={type}
              value={value}
              editKey={editKey}
            />
          </>
        ) : (
          <>
            {!select && (
              <ViewInfo
                setInEditView={setInEditView}
                value={value}
                editKey={editKey}
              />
            )}
          </>
        )}
        {select && (
          <div className='flex gap-2 items-center  flex-1 text-lg justify-between font-semibold'>
            <select className='flex-1 border border-[#1273eb] rounded-md'
             onChange={(e:any) => {
              console.log(e.target.value)
              // CALL THE USE-HOOK-DETAILS!
              updateEditedField(
                e.target.value,
                editKey,
                candidateId
              )
            }}
            >
              <option
                selected={options.includes(value as any) ? false : true}
                disabled
               
              >
                {placeholder}
              </option>
              {options.map((o, i) => (
                <option value={o} key={i} 
                selected={options.includes(value as any) ? true : false}
                
                >
                  {o}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </>
  )
}
