import * as yup from 'yup'

// VALIDATION SCHEMA FOR EXPERIENCE FORM!
export const validationSchemaForExperience = yup.object({
  positionName: yup.string().trim().required('Position Name is required'),
  companyName: yup.string().trim().required('Comapany Name is required'),
  startDate: yup.date().required('Start Date is required'),
  endDate: yup.date().required('End Date is required'),
  salary: yup.number().min(1).required('Salary is required'),
  jobDescription: yup
    .string()
    .trim()
    .required('Job Description is required')
})

// VALIDATION SCHEMA FOR EDUCATION FORM!
export const validationSchemaForEducation = yup.object({
  instituteName: yup.string().trim().required('institute Name is required'),
  degree: yup.string().trim().required('Degree is required'),
  specialization: yup.string().trim().required('Specialization is required'),
  startDate: yup.date().required('Start Date is required'),
  endDate: yup.date().required('End Date is required'),
  marks: yup.number().required('Marks is required'),
  grade: yup.number().required('grade is required'),
  location: yup.string().trim().required('location is required')
})

// VALIDATION SCHEMA FOR ADDRESS FORM!
export const validationSchemaForAddress = yup.object({
  currentAddress: yup.string().trim().required('Current Address is required'),
  permanentAddress: yup
    .string()
    .trim()
    .required('Permanent Address is required'),
  district: yup.string().trim().required('District is required'),
  province: yup.string().trim().required('Province is required'),
  country: yup.string().trim().required('Country is required'),
  postCode: yup.number().required('postCode is required')
})

// VALIDATION SCHEMA FOR REFERENCE FORM!
export const validationSchemaForReference = yup.object({
  referenceName: yup.string().trim().required('Reference Name is required'),
  relation: yup.string().trim().required('Relation is required'),
  companyName: yup.string().trim().required('Company Name is required'),
  phoneNumber: yup.number().required('Phone Number is required'),
  emailAddress: yup
    .string()
    .email('Must be a valid email')
    .required('Email is required')
})


// WILL ADD ALL HERE!