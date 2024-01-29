

import * as yup from 'yup';




// VALIDATION SCHEMA FOR CANDIDATE!
export const validationSchemaForCandidate = yup.object({
  name: yup.string().trim().required('Name is required'),
  email: yup
    .string()
    .email('Must be a valid email')
    .required('Email is required'),
  imageURL: yup.number().min(1).required('HeadCount is required'),
  location: yup.string().required('Location is required'),
  description: yup.string().trim().required('Description is required'),
  phoneNumber: yup.number().required('PhoneNumber is required')
})