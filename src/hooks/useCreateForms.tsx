
import React from 'react'
import { uploadImageToCloudinary } from '@/utils/uploadImageToCloudinary'
import { createJob } from '@/actions/job/create-job'
import { createCandidate } from '@/actions/candidate/create-candidate'



export default function useCreateForms (formik:any) {

      // CANDIDATES INITIAL VALUES!
  const initialCandidatesValues = {
    candidateName: '',
    candidateEmail: '',
    imageURL: '',
    candidateLocation: '',
    candidateDescription: '',
    phoneNumber: 0
  }

  // ON CHANGE IMAGE HANDLER!
  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
    formik:any
  ) => {
    const response = await uploadImageToCloudinary(event)
    formik.setFieldValue('imageURL', response?.secure_url)
  }

  // CANDIDATES FORM SUBMITTION!
  const handleCreateCandidateFormSubmitted = async (values, actions) => {
    // WILL SUBMIT THIS FORM AND SAVE DATA TO BACKEND!
    const response = await createCandidate(values)
    // IF THE USER WAS SUCCESSFULLY SUBMITTED!
    if (response.status === 200) {
      toast.success('added Success!')
    }
  }

  // INITIAL JOB VALUES!
  const initialJobValues =  {
    jobName: '',
    jobLocation: '',
    minimumSalary: 0,
    maximumSalary: 0,
    headCount: 0,
    jobDescription: '',
    contractDetails: ''
  }

  // HANDLE CREATE JOB SUMMITION!
  const handleCreateJobFormSubmitted = async (values, actions) => {
      // WILL SUBMIT THIS FORM AND SAVE DATA TO BACKEND!
      console.log({values})
      // WILL SUBMIT THIS FORM AND SAVE DATA TO BACKEND!
      const response:any = await createJob(values)
      // IF THE USER WAS SUCCESSFULLY SUBMITTED!
      if (response?.status === 200) {
        toast.success('Added!')
        
      }
  }


  return {
    handleImageChange,
    handleCreateCandidateFormSubmitted,
    initialCandidatesValues,
    handleCreateJobFormSubmitted,
    initialJobValues
  }
}
