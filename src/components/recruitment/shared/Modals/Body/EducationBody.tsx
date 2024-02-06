'use client'

import { MdClose } from 'react-icons/md'

import React from 'react'
import { useFormik } from 'formik'
import { validationSchemaForEducation } from '@/utils/validations'
import Input from '../Input/Input'
import Header from './Header'
import { updateCandidateEducation } from '@/actions/candidate/update-candidate-education'
import { useParams } from 'next/navigation'
import toast from 'react-hot-toast';

type Props = {}

export default function EducationBody ({}: Props) {
  

  const {candidateId} = useParams();

  const formik = useFormik({
    initialValues: {
      instituteName: '',
      degree: '',
      specialization: '',
      startDate: '',
      endDate: '',
      marks: 0,
      grade: 0.0,
      location: ''
    },
    onSubmit: async (values, actions) => {
      // WILL SUBMIT THIS FORM AND SAVE DATA TO BACKEND!
      console.log({values})
      // WILL SUBMIT THIS FORM AND SAVE DATA TO BACKEND!
      const response:any = await updateCandidateEducation(values,candidateId as string)
      // IF THE USER WAS SUCCESSFULLY SUBMITTED!
      if (response?.status === 200) {
      formik.resetForm() // Reset the form after successful submission.
      toast.success('Added!')
      }
    },
    validationSchema: validationSchemaForEducation
  })

  console.log(formik.values)

  return (
    <>
      {/* HEADER! */}
      <Header headerName={'Education'} />

      {/* BODY! */}
      <div className='flex flex-col gap-2 w-full mt-3'>
        <Input
          label={'Institute Name'}
          required
          name='instituteName'
          placeholder='Software Engineer'
          value={formik.values.instituteName}
          // key={formik.values.instituteName}
          type='text'
          error={formik.errors.instituteName}
          onChange={formik.handleChange}
        />

        <Input
          label={'Degree'}
          required
          name='degree'
          placeholder='Software Engineer'
          value={formik.values.degree}
          // key={formik.values.degree}
          type='text'
          error={formik.errors.degree}
          onChange={formik.handleChange}
        />

        <Input
          label={'Specialization'}
          required
          name='specialization'
          placeholder='Software Engineer'
          value={formik.values.specialization}
          // key={formik.values.specialization}
          type='text'
          error={formik.errors.specialization}
          onChange={formik.handleChange}
        />

        <div className='flex items-center justify-between gap-3'>
          <Input
            label={'Start Date'}
            required
            name='startDate'
            placeholder='Software Engineer'
            value={formik.values.startDate}
            // key={formik.values.startDate}
            type='date'
            error={formik.errors.startDate}
            onChange={formik.handleChange}
          />

          <Input
            label={'End Date'}
            required
            name='endDate'
            placeholder='Software Engineer'
            value={formik.values.endDate}
            // key={formik.values.endDate}
            type='date'
            error={formik.errors.endDate}
            onChange={formik.handleChange}
          />
        </div>
        <div className='flex items-center justify-between gap-3'>
          <Input
            label={'Marks'}
            required
            name='marks'
            placeholder='Software Engineer'
            value={formik.values.marks}
            // key={formik.values.marks}
            type='text'
            error={formik.errors.marks}
            onChange={formik.handleChange}
          />

          <Input
            label={'Grade'}
            required
            name='grade'
            placeholder='Software Engineer'
            value={formik.values.grade}
            // key={formik.values.grade}
            type='text'
            error={formik.errors.grade}
            onChange={formik.handleChange}
          />
        </div>

        <Input
          label={'Location'}
          required
          name='location'
          placeholder='Software Engineer'
          value={formik.values.location}
          // key={formik.values.location}
          type='text'
          error={formik.errors.location}
          onChange={formik.handleChange}
        />
      </div>

      {/* ACTIONS! */}
      <div className='flex items-center justify-end mt-3 gap-2'>
        <button className='text-gray-500 border text-lg p-1 rounded-md'>
          Cancel
        </button>
        <button onClick={formik.handleSubmit} className='bg-[#1273eb] text-white text-lg p-1 rounded-md'>
          Submit
        </button>
      </div>
    </>
  )
}
