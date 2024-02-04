'use client'

import { MdClose } from 'react-icons/md'

import React from 'react'
import { useFormik } from 'formik'
import { validationSchemaForAddress } from '@/utils/validations'
import Input from '../Input/Input'
import Header from './Header'

type Props = {}

export default function AddressBody ({}: Props) {
  const formik = useFormik({
    initialValues: {
      currentAddress: '',
      permanentAddress: '',
      district: '',
      province: '',
      country: '',
      postCode: 0
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
    validationSchema: validationSchemaForAddress
  })
  return (
    <>
      {/* HEADER! */}
      <Header headerName='Address' />

      {/* BODY! */}
      <div className='flex flex-col gap-2 w-full mt-3'>
        <Input
          label={'Current Address'}
          required
          name='currentAddress'
          placeholder='Software Engineer'
          value={formik.values.currentAddress}
          key={formik.values.currentAddress}
          type='text'
          error={formik.errors.currentAddress}
          onChange={formik.handleChange}
        />

        <Input
          label={'Permanent Address'}
          required
          name='permanentAddress'
          placeholder='Software Engineer'
          value={formik.values.permanentAddress}
          key={formik.values.permanentAddress}
          type='text'
          error={formik.errors.permanentAddress}
          onChange={formik.handleChange}
        />

        <Input
          label={'District'}
          name='district'
          placeholder='Software Engineer'
          value={formik.values.district}
          key={formik.values.district}
          type='text'
          error={formik.errors.district}
          onChange={formik.handleChange}
        />
        <Input
          label={'Province'}
          name='province'
          placeholder='Software Engineer'
          value={formik.values.province}
          key={formik.values.province}
          type='text'
          error={formik.errors.province}
          onChange={formik.handleChange}
        />

        <Input
          label={'Country'}
          name='country'
          placeholder='Software Engineer'
          value={formik.values.country}
          key={formik.values.country}
          type='text'
          error={formik.errors.country}
          onChange={formik.handleChange}
        />

        <Input
          label={'Post Code'}
          name='postCode'
          placeholder='Software Engineer'
          value={formik.values.postCode}
          key={formik.values.postCode}
          type='number'
          error={formik.errors.postCode}
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
