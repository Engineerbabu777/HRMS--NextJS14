'use client'

import { FaArrowLeftLong } from 'react-icons/fa6'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import FormErrors from '@/components/recruitment/shared/FormErrors'
import { validationSchemaForJob } from '@/utils/validateJob'
import useCreateForms from '@/hooks/useCreateForms'
import Input from '@/components/recruitment/shared/Modals/Input/Input'

type Props = {}

export default function Page ({}: Props) {
  const { handleCreateJobFormSubmitted, initialJobValues } = useCreateForms()

  // USING FORMIK HOOK TO HANDLE OUR FORM INPUT STATES!
  const formik = useFormik({
    initialValues: initialJobValues, // INITIAL VALUES!
    onSubmit: handleCreateJobFormSubmitted, // FORM SUBMITTION FUNCTION!
    validationSchema: validationSchemaForJob // VALIDATION SCHEMA!
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
            <span className='text-xl'>Create Job</span>
          </header>

          {/* FORM! */}
          <form
            className='mt-4 flex flex-col gap-6 px-10 '
            onSubmit={(event: any) => {
              event.preventDefault()
              formik.handleSubmit()
            }}
          >
            <div className='flex gap-2 justify-between items-center'>
              <Input
                label='JOB NAME'
                name='jobName'
                placeholder='Enter Name for Job'
                onChange={formik.handleChange}
                value={formik.values.jobName}
                classNames='!max-w-[70%]'
                required
                error={formik?.errors?.jobName || ''}
                type='text'
              />

              <Input
                label='JOB LOCATION'
                name='jobLocation'
                placeholder='Enter Job Location'
                onChange={formik.handleChange}
                value={formik.values.jobLocation}
                classNames='!max-w-[70%]'
                required
                error={formik?.errors?.jobLocation || ''}
                type='text'
              />
            </div>

            <div className='flex gap-2 justify-between items-center '>
              <Input
                label='HeadCount'
                name='headCount'
                placeholder='Enter Number of positions Available for Job'
                onChange={formik.handleChange}
                value={formik.values.headCount}
                classNames='!max-w-[70%]'
                required
                error={formik?.errors?.headCount || ''}
                type='text'
              />

              <label className='flex flex-col gap-1 flex-1'>
                <p className='flex gap-1 '>
                  <span className='font-bold '>CONTRACT DETAILS</span>
                  <span className='text-red-500'>*</span>
                </p>
                <select
                  name='contractDetails'
                  value={formik.values.contractDetails}
                  onChange={formik.handleChange}
                  className=' max-w-[70%] cursor-pointer p-2 rounded-md border border-gray-200 outline-[#1273eb] hover:outline-[#1273eb]'
                >
                  <option value={'full-time'}>Full Time</option>
                  <option value={'internship'}>Internship</option>
                  <option value={'freelance'}>Freelance</option>
                </select>
                {formik?.errors?.contractDetails && (
                  <FormErrors error={formik?.errors?.contractDetails} />
                )}
              </label>
            </div>

            <div className='flex gap-2 justify-between  '>
              <Input
                label='Job Description'
                name='jobDescription'
                placeholder='Enter Details about the job!'
                onChange={formik.handleChange}
                value={formik.values.jobDescription}
                classNames='!max-w-[70%]'
                required
                error={formik?.errors?.jobDescription || ''}
                type='text'
                textarea
              />

              <label className='flex flex-col gap-1 flex-1'>
                <p className='flex gap-1 '>
                  <span className='font-bold '>SALARY RANGE</span>
                  <span className='text-red-500'>*</span>
                </p>
                <div className='max-w-[70%]  flex justify-between items-center'>
                  <input
                    value={formik.values.minimumSalary}
                    onChange={formik.handleChange}
                    className='w-[45%] p-2 rounded-md border border-gray-200 outline-[#1273eb] hover:outline-[#1273eb] '
                    placeholder={'PKR From'}
                    type='number'
                    name='minimumSalary'
                  />
                  <input
                    value={formik.values.maximumSalary}
                    onChange={formik.handleChange}
                    className='w-[45%] p-2 rounded-md border border-gray-200 outline-[#1273eb] hover:outline-[#1273eb] '
                    placeholder={'PKR To'}
                    type='number'
                    name='maximumSalary'
                  />
                </div>
                {formik?.errors?.maximumSalary && (
                  <FormErrors error={formik?.errors?.maximumSalary} />
                )}
                {formik?.errors?.minimumSalary && (
                  <FormErrors error={formik?.errors?.minimumSalary} />
                )}
              </label>
            </div>
            <div className='flex items-center justify-end  w-[75%]'>
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
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
