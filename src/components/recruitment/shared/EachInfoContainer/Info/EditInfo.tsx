import { MdDone, MdOutlineClose } from 'react-icons/md'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import { ViewCandidateParamsType } from '@/types'
import { ClipLoader } from 'react-spinners'
import useUpdateCandidateDetail from '@/hooks/useUpdateCandidateDetail'

type Props = {
  setInEditView: React.Dispatch<React.SetStateAction<any>>,
  inEditView?: any,
  value: string|number,
  type?: string,
  placeholder?: string,
  editKey: string
}
export default function EditInfo ({
  setInEditView,
  inEditView,
  value,
  type = 'text',
  placeholder,
  editKey
}: Props) {

  const [inputValue, setInputValue] = useState<string|number>(value);
  const {updateEditedField,updating} = useUpdateCandidateDetail();
  const {candidateId}:ViewCandidateParamsType = useParams();

  return (
    <>
      <input
        className='flex-1 p-1 rounded-md outline-none ring-1 ring-gray-300 border-none'
        placeholder={placeholder}
        type={type}
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(e.target.value)
        }}
      />
      {updating ? (
        <>
          <ClipLoader size={18} color={'green'} />
        </>
      ) : (
        <div className='flex gap-1 items-center'>
          {/* THIS WILL SAVE THE NEWER VALUE TO DATABASE!! */}
          <MdDone
            className='text-green-500 w-5 h-5 cursor-pointer'
            // THIS WILL SAVE THE DATA TO DATA BASE USING SERVER ACTION!
            onClick={() => {
              updateEditedField(inputValue, editKey, candidateId)
            }}
          />
          {/* THIS WILL BACK TO PREVIOUS STATE! */}
          <MdOutlineClose
            className='text-red-500 w-4 h-4 cursor-pointer'
            // THIS WILL CLOSE THAT!
            onClick={() => {
              setInEditView({})
            }}
          />
        </div>
      )}
    </>
  )
}
