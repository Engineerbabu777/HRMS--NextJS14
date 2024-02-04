'use client'

import { FaArrowLeftLong } from 'react-icons/fa6'
import { Input } from '@nextui-org/react'
import { FaRegEdit } from 'react-icons/fa'
import { useState } from 'react'
import { useFormik, useFormikContext } from 'formik'
import { validationSchemaForCandidate } from '@/utils/validateCandidate'
import FormErrors from '@/components/recruitment/shared/FormErrors'
import { uploadImageToCloudinary } from '@/utils/uploadImageToCloudinary'
import { CandidateTypes } from '@/types'
import { createCandidate } from '@/actions/candidate/create-candidate'
import { revalidatePath } from "next/cache";
import toast from 'react-hot-toast'
type Props = {}

export default function Page ({}: Props) {
  const formik = useFormik({
    initialValues: {
      candidateName: '',
      candidateEmail: '',
      imageURL: '',
      candidateLocation: '',
      candidateDescription: '',
      phoneNumber: 0
    },
    onSubmit: async (values, actions) => {
      // WILL SUBMIT THIS FORM AND SAVE DATA TO BACKEND!
toast.success('1')
      const response = await createCandidate(values)
      // IF THE USER WAS SUCCESSFULLY SUBMITTED!
      if (response.status === 200) {
        formik.resetForm() // Reset the form after successful submission.
        revalidatePath('/recruitment/candidates')
      }
    },
    validationSchema: validationSchemaForCandidate
  })

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const response = await uploadImageToCloudinary(event)
    formik.setFieldValue('imageURL', response?.secure_url)
  }

  console.log(formik.errors)
  return (
    <>
      <section className='flex flex-col gap-6 h-[calc(100vh-52px)] p-2 bg-gray-100 overflow-auto'>
        <div className='mt-4'>
          {/* BACK HEADER! */}
          <header className='text-[#1273eb] font-semibold flex gap-4'>
            {/* ARROW BACK! */}
            <FaArrowLeftLong className='w-6 h-6 cursor-pointer' />

            {/* TEXT! */}
            <span className='text-xl'>Create Candidate</span>
          </header>

          {/* FORM! */}
          <form
            className='mt-4 flex flex-col gap-6 px-10'
            onSubmit={(event: any) => {
              event.preventDefault()
              formik.handleSubmit()
            }}
          >
            <div className='flex gap-2 justify-between items-center'>
              {/* IMAGE! */}
              <div className='rounded-full w-[100px] h-[100px] relative'>
                <img
                  src={formik.values.imageURL || '/elon.jpg'}
                  alt='alt-text'
                  className='overflow-hidden w-full h-full rounded-full object-cover'
                />
                <label className='w-6 h-6 absolute right-2 bottom-0 bg-[#1273eb] flex items-center justify-center rounded-full cusror-pointer'>
                  <input
                    onChange={handleImageChange}
                    className='hidden'
                    name='imageURL'
                    type='file'
                    accept={
                      '.jpg, .jpeg, .png, image/jpg, image/jpeg, image/png, .webp'
                    }
                  />
                  <FaRegEdit className='w-3 h-3 text-white ' />
                </label>
              </div>
            </div>

            <div className='flex gap-2 justify-between items-center'>
              <label className='flex flex-col gap-1 flex-1'>
                <p className='flex gap-1 '>
                  <span className='font-bold'>CANDIDATE NAME</span>
                  <span className='text-red-500'>*</span>
                </p>
                <input
                  value={formik.values.candidateName}
                  onChange={formik.handleChange}
                  className='p-2 rounded-md border max-w-[70%] border-gray-200 outline-[#1273eb] hover:outline-[#1273eb] '
                  placeholder={'Elon Musk'}
                  name='candidateName'
                />
                {formik?.errors?.candidateName && (
                  <FormErrors error={formik?.errors?.candidateName} />
                )}
              </label>

              <label className='flex flex-col gap-1 flex-1'>
                <p className='flex gap-1 '>
                  <span className='font-bold'>LOCATION</span>
                  <span className='text-red-500'>*</span>
                </p>
                <select
                  value={formik.values.candidateLocation}
                  onChange={formik.handleChange}
                  className='max-w-[70%] cursor-pointer p-2 rounded-md border border-gray-200 outline-[#1273eb] hover:outline-[#1273eb]'
                  name='candidateLocation'
                >
                  <option value={'berlin'}>Berlin</option>
                  <option value={'tokoyo'}>Tokoyo</option>
                  <option value={'taskim'}>Taskim</option>
                </select>
                {formik?.errors?.candidateLocation && (
                  <FormErrors error={formik?.errors?.candidateLocation} />
                )}
              </label>
            </div>

            <div className='flex gap-2 justify-between items-center'>
              <label className='flex flex-col gap-1 flex-1'>
                <p className='flex gap-1 '>
                  <span className='font-bold'>PHONE NUMBER</span>
                  <span className='text-red-500'>*</span>
                </p>
                <input
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  name='phoneNumber'
                  className='p-2 rounded-md border max-w-[70%] border-gray-200 outline-[#1273eb] hover:outline-[#1273eb] '
                  placeholder={'+91 671 891 771'}
                  type='number'
                />
                {formik?.errors?.phoneNumber && (
                  <FormErrors error={formik?.errors?.phoneNumber} />
                )}
              </label>

              <label className='flex flex-col gap-1 flex-1'>
                <p className='flex gap-1 '>
                  <span className='font-bold'>EMAIL</span>
                  <span className='text-red-500'>*</span>
                </p>
                <input
                  value={formik.values.candidateEmail}
                  onChange={formik.handleChange}
                  name='candidateEmail'
                  type='email'
                  className='p-2 rounded-md border max-w-[70%] border-gray-200 outline-[#1273eb] hover:outline-[#1273eb] '
                  placeholder={'software@engineer.dev'}
                />

                {formik?.errors?.candidateEmail && (
                  <FormErrors error={formik?.errors?.candidateEmail} />
                )}
              </label>
            </div>

            <div className='flex gap-2 justify-between '>
              <label className='flex flex-col gap-1 flex-1'>
                <p className='flex gap-1 '>
                  <span className='font-bold'>DESCRIPTION</span>
                  <span className='text-red-500'>*</span>
                </p>
                <textarea
                  name='candidateDescription'
                  value={formik.values.candidateDescription}
                  onChange={formik.handleChange}
                  rows={8}
                  className='resize-none max-w-[35%] p-2 rounded-md border border-gray-200 outline-[#1273eb] hover:outline-[#1273eb] '
                  placeholder={'Description About Candidate'}
                />
                {formik?.errors?.candidateDescription && (
                  <FormErrors error={formik?.errors?.candidateDescription} />
                )}
              </label>
            </div>
            <div className='flex justify-end items-center gap-4 max-w-[75%]'>
              <button
                className='text-[#1273eb] font-semibold underline w-[100px] rounded-full h-[32px] hover:text-black hover:underline-none hover:bg-white'
                type='reset'
              >
                Reset
              </button>
              <button
                className='bg-[#1273eb] text-white hover:opacity-50 rounded-full w-[100px] h-[32px]'
                type='submit'
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
