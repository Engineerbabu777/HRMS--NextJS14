import React from 'react'
import FormErrors from './FormErrors'

type Props = {
  label: string,
  required?: boolean,
  value: string | number,
  error?: string,
  name: string,
  type?: string,
  placeholder: string,
  classNames?: string,
  textarea?: boolean,
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void,
  rows?: number;
}

export default function Input ({
  label,
  name,
  placeholder,
  required = false,
  type = 'text',
  value,
  error,
  textarea = false,
  onChange,
  classNames,
  rows,
}: Props) {
  return (
    <>
      <label className='flex flex-col gap-1 flex-1'>
        <p className='flex gap-1 w-fit cursor-pointer'>
          {/* LABEL NAME! */}
          <span className='font-bold'>{label}</span>
          {/* START FOR THE REQUIRED INPUTS! */}
          {required && <span className='text-red-500'>*</span>}
        </p>
        {/* FOR INPUTS! */}
        {!textarea && (
          <input
            value={value}
            onChange={onChange}
            name={name}
            type={type}
            className={`${classNames} p-2 rounded-md border w-full border-gray-200 outline-[#1273eb] hover:outline-[#1273eb] `}
            placeholder={placeholder}
          />
        )}
        {/* FOR TEXTAREA! */}
        {textarea && (
          <>
            <textarea
              onChange={onChange}
              name={name}
              rows={rows || 5}
              className={` ${classNames} resize-none w-full p-2 rounded-md border border-gray-200 
              outline-[#1273eb] hover:outline-[#1273eb] `}
              placeholder={placeholder}
            />
          </>
        )}
        {/* IF SOME ERRORS OCCUR! */}
        {error && <FormErrors error={error} />}
      </label>
    </>
  )
}
