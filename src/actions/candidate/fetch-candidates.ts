'use server'

import { DBConnect } from '@/database/DBConnect'
import { CandidateTypes } from '@/types'
import { Candidate } from '@/models/candidate.model'

export const fetchJobs = async (data: JobTypes) => {
  // CONNECT TO DATABASE!
  await DBConnect()

  // FETCH CANDIDATES TO DATABASE!
  const candidates = await Candidate.find()

  // RETURN BACK OK RESPONSE!
  return {
    candidates: JSON.parse(JSON.stringify(candidates)),
    status: 200,
    message: 'Job fetched successfully!'
  }
}
