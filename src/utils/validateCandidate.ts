

import * as yup from 'yup';




// VALIDATION SCHEMA FOR CANDIDATE!
export const validationSchemaForCandidate = yup.object({
  candidateName: yup.string().trim().required('Name is required'),
  candidateEmail: yup.string()
    .email('Must be a valid email')
    .required('Email is required'),
  imageURL: yup.string().min(1).required('HeadCount is required'),
  candidateLocation: yup.string().required('Location is required'),
  candidateDescription: yup.string().trim().required('Description is required'),
  phoneNumber: yup.number().required('PhoneNumber is required')
})