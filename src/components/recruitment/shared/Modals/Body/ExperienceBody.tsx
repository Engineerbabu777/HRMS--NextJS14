'use client'

import React from 'react'
import { useFormik } from 'formik'
import { validationSchemaForExperience } from '@/utils/validations'
import Input from '../Input/Input'
import Header from './Header'
import { updateCandidateExperiences } from '@/actions/candidate/update-candidate-experiences'
import { useParams } from 'next/navigation'
import toast from 'react-hot-toast';
import { useRecoilState } from 'recoil'
import { ModalAtom } from '@/recoil/modalAtom'

type Props = {}

export default function ExperienceBody ({}: Props) {
  const {candidateId} = useParams();
  const [modalState, setModalState] = useRecoilState(ModalAtom);

  const formik = useFormik({
    initialValues: {
      positionName: '',
      companyName: '',
      startDate: '',
      endDate: '',
      salary: '',
      jobDescription: ''
    },
    onSubmit: async (values, actions) => {
      // WILL SUBMIT THIS FORM AND SAVE DATA TO BACKEND!
      console.log({ values })
      // WILL SUBMIT THIS FORM AND SAVE DATA TO BACKEND!
      const response: any = await updateCandidateExperiences(values,candidateId as string)
      // IF THE USER WAS SUCCESSFULLY SUBMITTED!
      if (response?.status === 200) {
        toast.success('Added!')
        formik.resetForm() // Reset the form after successful submission.
      }
    },
    validationSchema: validationSchemaForExperience
  })

  console.log(formik.values)

  return (
    <>
      {/* HEADER! */}
      <Header headerName={'Experiences'} />

      {/* BODY! */}
      <div className='flex flex-col gap-2 w-full mt-3'>
        <Input
          label={'Position Name'}
          required
          name='positionName'
          placeholder='Software Engineer'
          value={formik.values.positionName}
          key={formik.values.positionName}
          type='text'
          error={formik.errors.positionName}
          onChange={formik.handleChange}
        />

        <Input
          label={'Company'}
          required
          name='companyName'
          placeholder='Software Engineer'
          value={formik.values.companyName}
          key={formik.values.companyName}
          type='text'
          error={formik.errors.companyName}
          onChange={formik.handleChange}
        />

        <div className='flex items-center justify-between gap-3'>
          <Input
            label={'Start Date'}
            required
            name='startDate'
            placeholder='Software Engineer'
            value={formik.values.startDate}
            key={formik.values.startDate}
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
            key={formik.values.endDate}
            type='date'
            error={formik.errors.endDate}
            onChange={formik.handleChange}
          />
        </div>

        <Input
          label={'Salary'}
          name='salary'
          placeholder='Software Engineer'
          value={formik.values.salary}
          key={formik.values.salary}
          type='number'
          error={formik.errors.salary}
          onChange={formik.handleChange}
        />

        <Input
          label={'Job Description'}
          required
          name='jobDescription'
          placeholder='Software Engineer'
          value={formik.values.jobDescription}
          key={formik.values.jobDescription}
          type='text'
          textarea
          error={formik.errors.jobDescription}
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
