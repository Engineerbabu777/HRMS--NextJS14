'use client'

import { FaArrowLeftLong } from 'react-icons/fa6'
import { Input } from '@nextui-org/react'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import FormErrors from '@/components/recruitment/shared/FormErrors'
import { validationSchemaForJob } from '@/utils/validateJob'
import {createJob} from '@/actions/job/create-job';

type Props = {}

export default function Page ({}: Props) {
  const formik = useFormik({
    initialValues: {
      name: '',
      location: '',
      minSalary: 0,
      maxSalary: 0,
      headCount: 0,
      description: '',
      contractDetails: ''
    },
    onSubmit: async(values,actions) => {
      // WILL SUBMIT THIS FORM AND SAVE DATA TO BACKEND!
        // WILL SUBMIT THIS FORM AND SAVE DATA TO BACKEND!
        const response = await createJob(values);
        // IF THE USER WAS SUCCESSFULLY SUBMITTED!
        if(response.status === 200){
          formik.resetForm(); // Reset the form after successful submission.
        }
    },
    validationSchema: validationSchemaForJob
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
            onSubmit={formik.handleSubmit}
          >
            <div className='flex gap-2 justify-between items-center'>
              <label className='flex flex-col gap-1 flex-1'>
                <p className='flex gap-1 '>
                  <span className='font-bold'>POSITION NAME</span>
                  <span className='text-red-500'>*</span>
                </p>
                <input
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  name='name'
                  className='p-2 rounded-md border max-w-[70%] border-gray-200 outline-[#1273eb] hover:outline-[#1273eb] '
                  placeholder={'Software Engineer'}
                />
                {formik?.errors?.name && (
                  <FormErrors error={formik?.errors?.name} />
                )}
              </label>

              <label className='flex flex-col gap-1 flex-1'>
                <p className='flex gap-1 '>
                  <span className='font-bold'>LOCATION</span>
                  <span className='text-red-500'>*</span>
                </p>
                <select
                  name='location'
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  className=' max-w-[70%] cursor-pointer p-2 rounded-md border border-gray-200 outline-[#1273eb] hover:outline-[#1273eb]'
                >
                  <option value={'lahore'}>Lahore</option>
                  <option value={'karachi'}>Karachi</option>
                  <option value={'istanbul'}>Istanbul</option>
                </select>
                {formik?.errors?.location && (
                  <FormErrors error={formik?.errors?.location} />
                )}
              </label>
            </div>

            <div className='flex gap-2 justify-between items-center '>
              <label className='flex flex-col gap-1 flex-1'>
                <p className='flex gap-1 '>
                  <span className='font-bold'>HEADTCOUNT</span>
                  <span className='text-red-500'>*</span>
                </p>
                <input
                  className='max-w-[70%] p-2 rounded-md border border-gray-200 outline-[#1273eb] hover:outline-[#1273eb] '
                  placeholder={'Head Count'}
                  name='headCount'
                  type='number'
                  value={formik.values.headCount}
                  onChange={formik.handleChange}
                />
                {formik?.errors?.headCount && (
                  <FormErrors error={formik?.errors?.headCount} />
                )}
              </label>
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
              <label className='flex flex-col gap-1 flex-1'>
                <p className='flex gap-1 '>
                  <span className='font-bold'>DESCRIPTION</span>
                  <span className='text-red-500'>*</span>
                </p>
                <textarea
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  name='description'
                  rows={10}
                  className='resize-none max-w-[70%] p-2 rounded-md border border-gray-200 outline-[#1273eb] hover:outline-[#1273eb] '
                  placeholder={'Description About Job'}
                  type='text'
                />
                {formik?.errors?.description && (
                  <FormErrors error={formik?.errors?.description} />
                )}
              </label>
              <label className='flex flex-col gap-1 flex-1'>
                <p className='flex gap-1 '>
                  <span className='font-bold '>SALARY RANGE</span>
                  <span className='text-red-500'>*</span>
                </p>
                <div className='max-w-[70%]  flex justify-between items-center'>
                  <input
                    value={formik.values.minSalary}
                    onChange={formik.handleChange}
                    className='w-[45%] p-2 rounded-md border border-gray-200 outline-[#1273eb] hover:outline-[#1273eb] '
                    placeholder={'PKR From'}
                    type='number'
                    name='minSalary'
                  />
                  <input
                    value={formik.values.maxSalary}
                    onChange={formik.handleChange}
                    className='w-[45%] p-2 rounded-md border border-gray-200 outline-[#1273eb] hover:outline-[#1273eb] '
                    placeholder={'PKR To'}
                    type='number'
                    name='maxSalary'
                  />
                </div>
                {formik?.errors?.maxSalary && (
                  <FormErrors error={formik?.errors?.maxSalary} />
                )}
                {formik?.errors?.minSalary && (
                  <FormErrors error={formik?.errors?.minSalary} />
                )}
              </label>
            </div>
            <div className='flex items-center justify-end  w-[75%]'>
            <div className="flex justify-end items-center gap-4 max-w-[75%]">
              <button className="text-[#1273eb] font-semibold underline w-[100px] rounded-full h-[32px] hover:text-black hover:underline-none hover:bg-white" type="reset">Reset</button>
              <button className="bg-[#1273eb] text-white hover:opacity-50 rounded-full w-[100px] h-[32px]" type="submit">Save</button>
            </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
