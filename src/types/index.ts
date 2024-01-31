// TYPESCRIPT TYPES FOR JOB DATA!
export type JobTypes = {
  name: string
  location: string
  minSalary: number
  maxSalary: number
  headCount: number
  description: string
  contractDetails: string
}

// TYPESCRIPT TYPES FOR CANDIDATES DATA!
export type CandidateTypes = {
  name: string
  imageURL: string
  phoneNumber: number
  location: string
  email: string
  description: string
}

// VIEW PARAM TYPE!
export type ViewJobParamsType = {
  jobId: string
}
