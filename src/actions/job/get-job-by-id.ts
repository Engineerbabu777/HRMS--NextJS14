'use server'

import { DBConnect } from '@/database/DBConnect'
import { Job } from '@/models/job.model'

export const getJobById = async (ID: string) => {
  try {
    // CONNECTING TO DATABASE FIRSTLY!
    DBConnect()

    // GET JOB BY ID!
    const job = await Job.findById(ID)

    // RETURN JOB BACK!
    return {
      success: true,
      message: 'Job Feteched Success!',
      job: JSON.parse(JSON.stringify(job))
    }
  } catch (err: any) {
    return {
      error: true,
      message: 'Job Feteched Failed!',
      errorMessage: err.message
    }
  }
}
