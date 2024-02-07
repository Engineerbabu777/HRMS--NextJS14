'use server'

import { DBConnect } from '@/database/DBConnect'
import { Candidate } from '@/models/candidate.model'
import { revalidatePath } from 'next/cache'

export const updateCandidateType = async (
  type: string, // WILL CHANGE LATER!
  ID: string, // CANDIDATE ID
  jobId: string // JOB ID!
) => {
  try {
    // CONNECT WITH DATABASE!
    DBConnect()

    // FIND THE CANDIDATE!
    const candidate = await Candidate.findById(ID)

    // UPDATE ITS TYPE BY MAPPING!
    candidate.candidateJobs.map((job:any) => {
      if (job.jobId.toString() === jobId) {
        job.candidateType = type
        return job
      } else {
        return job
      }
    })

    console.log({data: candidate.candidateJobs})

    await candidate.save();

    revalidatePath('/recruitment/candidates/view/' + ID)

    // RETURN BACK THE RESPONSE!
    return {
      success: true,
      message: 'updated Success!',
      status: 200
    }
  } catch (error: any) {
    // RETURN BACK THE RESPONSE1
    return {
      error: true,
      message: error.message
    }
  }
}
