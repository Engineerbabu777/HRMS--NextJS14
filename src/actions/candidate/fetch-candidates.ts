'use server'

import { DBConnect } from '@/database/DBConnect'
import { CandidateTypes } from '@/types'
import { Candidate } from '@/models/candidate.model'

export const fetchCandidates = async (jobId: string | undefined) => {
  try {
    // CONNECT TO DATABASE!
    await DBConnect()

    // FETCH CANDIDATES TO DATABASE!
    const candidates = await Candidate.find()
    

    // RETURN BACK OK RESPONSE!
    return {
      candidates: jobId
        ? JSON.parse(JSON.stringify(candidates)).filter((c: any) =>
        c.candidateJobs.map((j: any) => j.jobId.toString()).includes(jobId)
      )
        : JSON.parse(JSON.stringify(candidates)),
      status: 200,
      message: 'Job fetched successfully!'
    }
  } catch (error: any) {
    // RETURN BACK OK RESPONSE IN CASE OF ANY ERROR!
    return {
      status: 504,
      message: 'Job fetched failed!'
    }
  }
}
