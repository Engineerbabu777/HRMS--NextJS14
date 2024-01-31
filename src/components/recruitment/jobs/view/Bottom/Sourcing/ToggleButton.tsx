import React from 'react'

type Props = {}

export default function ToggleButton ({}: Props) {
  const [isChecked, setIsChecked] = React.useState(false)

  const handleToggle = () => {
    setIsChecked(!isChecked)
  }
  
  return (
    <>
      <label htmlFor='toggle' className='flex items-center cursor-pointer'>
        <div className='relative'>
          <input
            type='checkbox'
            id='toggle'
            checked={isChecked}
            onChange={handleToggle}
            className='hidden'
          />
          <div className='w-8 h-5 border-2 border-gray-400 rounded-full shadow-inner'></div>
          <div
            className={`absolute left-1 top-1 w-3 h-3 bg-gray-400 rounded-full transition ${
              isChecked ? 'translate-x-full border-green-400' : ''
            }`}
          ></div>
        </div>
      </label>
    </>
  )
}
