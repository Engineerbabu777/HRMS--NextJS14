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
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
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
  onChange
}: Props) {
  return (
    <>
      <label className='flex flex-col gap-1 flex-1'>
        <p className='flex gap-1 w-fit cursor-pointer'>
          <span className='font-bold'>{label}</span>
          {required && <span className='text-red-500'>*</span>}
        </p>
        {!textarea && (
          <input
            value={value}
            onChange={onChange}
            name={name}
            type={type}
            className='p-2 rounded-md border w-full border-gray-200 outline-[#1273eb] hover:outline-[#1273eb] '
            placeholder={placeholder}
          />
        )}
        {textarea && (
          <>
            <textarea
            onChange={onChange}
              name={name}
              rows={5}
              className='resize-none w-full p-2 rounded-md border border-gray-200 outline-[#1273eb] hover:outline-[#1273eb] '
              placeholder={placeholder}
            />
          </>
        )}
        {error && <FormErrors error={error} />}
      </label>
    </>
  )
}
