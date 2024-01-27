import React from 'react'
import { IoMdNotifications } from 'react-icons/io'
import { FaMessage } from 'react-icons/fa6'
import Logo from './Logo'
import SearchInput from './SearchInput'
import UserInfo from './UserInfo'

export default function Header () {
  return (
    <header className='h-[52px] w-full border-b-2 border-gray-200 flex lg:justify-between lg:items-stretch px-2 lg:px-0'>
      {/* LOGO HERE! */}

      <>
        <Logo />
      </>

      {/* RIGHT SECTION! */}
      <section className='flex-1 px-2 p-1 flex'>
        {/* INPUT WITH ICON! */}
        <SearchInput />

        {/* SOME ICONS! */}
        <div className='flex gap-3 items-center ml-auto'>
          {/* LINE! */}
          <Line />

          {/* NOTIFICATIONS! */}
          <div className='hidden md:block relative '>
            <IoMdNotifications className='w-8 h-8' />
            <div className='w-3 h-3 bg-red-600 right-1 top-1 border border-white absolute rounded-full' />
          </div>

          {/* LINE! */}
          <Line />

          {/* MESSAGES */}
          <div className='hidden md:block relative '>
            <FaMessage className='w-6 h-6' />
          </div>

          {/* LINE! */}
          <Line />
          {/* USER INFO! */}
          <UserInfo />
        </div>
      </section>
    </header>
  )
}

function Line () {
  return <div className='w-[2px] h-[52px] bg-gray-100 hidden md:block' />
}
