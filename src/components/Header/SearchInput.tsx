'use client'
import React from 'react'
import { MdSearch } from 'react-icons/md'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'

type Props = {
  className?: string,
  placeholder: string,
  candidates?: boolean
}
export default function SearchInput ({
  className = '',
  placeholder = 'Search by Name, Job, Email...',
  candidates = false
}: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    // IF THE CHANGE WAS FOR CANDIDATES!
    if (candidates) {
      if (event.target.value.length > 0) {
        const currentParams = new URLSearchParams(searchParams.toString())
        currentParams.set('search', event.target.value)
        router.push(`${pathname}?${currentParams}`)
      } else {
        router.push(pathname)
      }
    }
  }
  return (
    <>
      <div
        className={`rounded-md bg-gray-100 flex gap-2 items-center  border-2 border-gray-100 p-2 hover:border-2 hover:border-blue-400  ${
          className ? className : 'md:w-[70%] w-full'
        }`}
      >
        {/* ICON! */}
        <MdSearch className='text-gray-500 w-6 h-6' />
        {/* INPUT! */}
        <input
          onChange={onChangeHandler}
          className='outline-none border-none bg-inherit placeholder:text-gray-400 grow'
          placeholder={placeholder}
        />
      </div>
    </>
  )
}
