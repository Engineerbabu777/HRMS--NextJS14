import SearchInput from '@/components/Header/SearchInput'
import React from 'react'

type Props = {}

const options = ['General', 'Criminal Background', 'Background Reference Check']

export default function LeftSide ({}: Props) {
  const [active, setActive] = React.useState(0)

  return (
    <>
      <div className=' border flex flex-col gap-4 p-2'>
        {/* INPUT! */}
        <SearchInput className='w-full' placeholder={'Search'} />

        {/* OPTIONS */}
        <div className='flex flex-col gap-1 '>
          {options.map((o: string, i: number) => (
            <p
              key={i}
              className={`hover:bg-[#1273eb] hover:text-white font-bold text-black p-2 rounded-md cursor-pointer
              ${i === active ? 'bg-[#1273eb] text-white' : 'bg-inherit'}
            `}
            >
              {o}
            </p>
          ))}
        </div>
      </div>
    </>
  )
}
