'use client'

import { MdClose } from 'react-icons/md'

import React from 'react'
import { useFormik } from 'formik'
import { validationSchemaForReference } from '@/utils/validations'
import Input from '../Input/Input'
import Header from './Header'

type Props = {}

export default function ReferenceBody ({}: Props) {
  const formik = useFormik({
    initialValues: {
      referenceName: '',
      relation: '',
      companyName: '',
      phoneNumber: 0,
      emailAddress: ''
    },
    onSubmit: async (values, actions) => {
      // WILL SUBMIT THIS FORM AND SAVE DATA TO BACKEND!
      // console.log({values})
      // WILL SUBMIT THIS FORM AND SAVE DATA TO BACKEND!
      // const response:any = await createJob(values)
      // IF THE USER WAS SUCCESSFULLY SUBMITTED!
      // if (response?.status === 200) {
      //   toast.success('Added!')
      // formik.resetForm() // Reset the form after successful submission.
      // }
    },
    validationSchema: validationSchemaForReference
  })

  return (
    <>
      {/* HEADER! */}
      <Header headerName='Reference Contact' />

      {/* BODY! */}
      <div className='flex flex-col gap-2 w-full mt-3'>
        <Input
          label={'Reference Name'}
          required
          name='referenceName'
          placeholder='Software Engineer'
          value={formik.values.referenceName}
          key={formik.values.referenceName}
          type='text'
          error={formik.errors.referenceName}
          onChange={formik.handleChange}
        />

        <Input
          label={'Relation'}
          required
          name='relation'
          placeholder='Software Engineer'
          value={formik.values.relation}
          key={formik.values.relation}
          type='text'
          error={formik.errors.relation}
          onChange={formik.handleChange}
        />

        <Input
          label={'Company Name'}
          required
          name='companyName'
          placeholder='Software Engineer'
          value={formik.values.companyName}
          key={formik.values.companyName}
          type='text'
          error={formik.errors.companyName}
          onChange={formik.handleChange}
        />

        <Input
          label={'Phone Number'}
          required
          name='phoneNumber'
          placeholder='Software Engineer'
          value={formik.values.phoneNumber}
          key={formik.values.phoneNumber}
          type='number'
          error={formik.errors.phoneNumber}
          onChange={formik.handleChange}
        />

        <Input
          label={'Email Address'}
          required
          name='emailAddress'
          placeholder='Software Engineer'
          value={formik.values.emailAddress}
          key={formik.values.emailAddress}
          type='text'
          error={formik.errors.emailAddress}
          onChange={formik.handleChange}
        />
      </div>

      {/* ACTIONS! */}
      <div className='flex items-center justify-end mt-3 gap-2'>
        <button className='text-gray-500 border text-lg p-1 rounded-md'>
          Cancel
        </button>
        <button className='bg-[#1273eb] text-white text-lg p-1 rounded-md'>
          Submit
        </button>
      </div>
    </>
  )
}
