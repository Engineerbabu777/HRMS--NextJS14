
import * as yup from 'yup';

// VALIDATION SCHEMA FOR JOB!
export const validationSchemaForJob = yup.object({
  jobName: yup.string().trim().required('Name is required'),
  headCount: yup.number().min(1).required('HeadCount is required'),
  jobLocation: yup.string().required('Location is required'),
  jobDescription: yup.string().trim().required('Description is required'),
  contractDetails: yup
    .string()
    .trim()
    .required('contactDetails is required'),
  maximumSalary: yup.number().max(250000).required('MaxSalary is required'),
  minimumSalary: yup.number().min(1).required('MinSalary is required')
})