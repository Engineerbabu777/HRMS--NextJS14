'use server'

import { DBConnect } from '@/database/DBConnect'
import { JobTypes } from '@/types'
import { Job } from '@/models/job.model'

export const fetchJobs = async () => {
  try {
    // CONNECT TO DATABASE!
    await DBConnect()

    // SAVE JOB TO DATABASE!
    const jobs = await Job.find()

    // RETURN BACK OK RESPONSE!
    return {
      jobs: JSON.parse(JSON.stringify(jobs)),
      status: 200,
      message: 'Job fetched successfully!'
    }
  } catch (err: any) {
    return { error: err.message }
  }
}
