// TYPESCRIPT TYPES FOR JOB DATA!
export type JobTypes = {
  jobName: string
  jobLocation: string
  minimumSalary: number
  maximumSalary: number
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

// TYPES FOR POSSIBLE VALUES IN JOB DETAILS!

export type PossibleJobDetails = {
  jobReference?: string
  positionName?: string
  jobLocation?: string
  jobName?: string
  remote?: string
  officeAddress?: string
  experienceLevel?: string
  headCount?: string
  minimumSalary?: string
  maximumSalary?: string
  frequency?: string
  closeDate?: string
  openDate?: string
  contractDetails?: string
}
