import React from 'react'
import { BsArrowLeft, BsThreeDotsVertical } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { FaDollarSign, FaRegEdit } from 'react-icons/fa'
import { GoDotFill } from 'react-icons/go'
import { FaCaretDown } from 'react-icons/fa'
import { uploadImageToCloudinary } from '@/utils/uploadImageToCloudinary'
import { BiEdit } from "react-icons/bi";
type Props = {}

export default function MiddlePart ({}: Props) {

    
  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const response = await uploadImageToCloudinary(event)
    // formik.setFieldValue('imageURL', response?.secure_url)
  }
  return (
    <>
      <div className='flex gap-4 items-center flex-grow'>
        {/* IMAGE! */}
        <div className='h-48 relative w-48 rounded-full bg-blue-400 text-6xl flex items-center justify-center font-bold text-white'>
          <img
            src={'/elon.jpg'}
            className='w-full h-full overflow-hidden rounded-full object-cover'
            alt='alter-text'
          />
          <label className='w-8 h-8 absolute right-3 bottom-3 bg-[#1273eb] flex items-center justify-center rounded-full cusror-pointer'>
            <input
              onChange={handleImageChange}
              className='hidden'
              name='imageURL'
              type='file'
              accept={
                '.jpg, .jpeg, .png, image/jpg, image/jpeg, image/png, .webp'
              }
            />
            <BiEdit className='w-5 h-5 text-white ' />
          </label>
        </div>

        {/* DETAILS! */}
        <div className='flex flex-col gap-2'>
          {/* NAME! */}
          <div className='flex gap-2 items-center'>
            <h2 className='text-[#1273eb] font-bold text-3xl'>Elon Musk</h2>
          </div>

          {/* LOCATION! */}
          <div className='flex items-center'>
            <MdLocationOn className='w-5 h-5' />
            <p className='text-xl font-semibold'>Boca Chica, Texas</p>
          </div>
        </div>
      </div>
    </>
  )
}
