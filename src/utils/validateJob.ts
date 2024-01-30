
import * as yup from 'yup';

// VALIDATION SCHEMA FOR JOB!
export const validationSchemaForJob = yup.object({
  name: yup.string().trim().required('Name is required'),
  headCount: yup.number().min(1).required('HeadCount is required'),
  location: yup.string().required('Location is required'),
  description: yup.string().trim().required('Description is required'),
  contractDetails: yup
    .string()
    .trim()
    .required('contactDetails is required'),
  maxSalary: yup.number().max(250000).required('MaxSalary is required'),
  minSalary: yup.number().min(1).required('MinSalary is required')
})