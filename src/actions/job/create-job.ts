'use server'

import { DBConnect } from '@/database/DBConnect'
import { JobTypes } from '@/types'
import { Job } from '@/models/job.model'
import { revalidatePath } from 'next/cache'

export const createJob = async (data: JobTypes) => {
  try {
    // CONNECT TO DATABASE!
    await DBConnect()
    console.log('saved1')

    // DATA WILL BE TYPE OF JOB TYPES!
    const body: JobTypes = data

    // SAVE JOB TO DATABASE!
    const newJob = await Job.create(body)
    console.log('saved2')

    // UPDATING THE PAGE WITH NEWER DATA!
    revalidatePath('/recruitment/jobs')

    // RETURN BACK OK RESPONSE!
    return {
      newJob: JSON.parse(JSON.stringify(newJob)),
      status: 200,
      message: 'Job created successfully!'
    }
  } catch (err: any) {
    console.log({ err })
  }
}
