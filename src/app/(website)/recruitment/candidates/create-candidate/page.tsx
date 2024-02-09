'use client'

import { FaArrowLeftLong } from 'react-icons/fa6'
import { FaRegEdit } from 'react-icons/fa'
import { useFormik } from 'formik'
import { validationSchemaForCandidate } from '@/utils/validateCandidate'
import Input from '@/components/recruitment/shared/Modals/Input/Input'
import useCreateForms from '@/hooks/useCreateForms'
type Props = {}

export default function Page ({}: Props) {
  const {
    handleImageChange,
    handleCreateCandidateFormSubmitted,
    initialCandidatesValues
  } = useCreateForms()
  
  // USING FORMIK HOOK TO HANDLE OUR FORM INPUT STATES!
  const formik = useFormik({
    initialValues: initialCandidatesValues, // INITIAL VALUES!
    onSubmit: handleCreateCandidateFormSubmitted, // FORM SUBMITTION FUNCTION!
    validationSchema: validationSchemaForCandidate // VALIDATION SCHEMA!
  })

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
                    onChange={(e:any) => handleImageChange(e,formik)}
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
              {/* CANDIDATE NAME INPUT! */}
              <Input
                label='CANDIDATE NAME'
                name='candidateName'
                placeholder='Enter Name for candidate'
                onChange={formik.handleChange}
                value={formik.values.candidateName}
                classNames='!max-w-[70%]'
                required
                error={formik?.errors?.candidateName || ''}
                type='text'
              />

              <Input
                label='LOCATION'
                name='candidateLocation'
                placeholder='Enter Candidate Location'
                onChange={formik.handleChange}
                value={formik.values.candidateLocation}
                classNames='!max-w-[70%]'
                required
                error={formik?.errors?.candidateLocation || ''}
                type='text'
              />
            </div>

            <div className='flex gap-2 justify-between items-center'>
              <Input
                label='PHONE NUMBER'
                name='phoneNumber'
                placeholder='Enter Candidate Phone Number +92...'
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
                classNames='!max-w-[70%]'
                required
                error={formik?.errors?.phoneNumber || ''}
                type='number'
              />

              <Input
                label='EMAIL'
                name='candidateEmail'
                placeholder='Enter Candidate Email Address'
                onChange={formik.handleChange}
                value={formik.values.candidateEmail}
                classNames='!max-w-[70%]'
                required
                error={formik?.errors?.candidateEmail || ''}
                type='email'
              />
            </div>

            <div className='flex gap-2 justify-between '>
              <Input
                label='Description'
                name='candidateDescription'
                placeholder='Enter about candidates information in details...'
                onChange={formik.handleChange}
                value={formik.values.candidateDescription}
                classNames='!max-w-[35%] flex-1'
                required
                error={formik?.errors?.candidateDescription || ''}
                type='text'
                textarea
                rows={5}
              />
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
