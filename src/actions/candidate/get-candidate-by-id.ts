'use server'

import { DBConnect } from '@/database/DBConnect'
import { Candidate } from '@/models/candidate.model'

export const getCandidateById = async (ID: string) => {
  try {
    // CONNECTING TO DATABASE FIRSTLY!
    DBConnect()

    // GET CANDIDATE BY ID!
    const candidate = await Candidate.findById(ID)

    // RETURN JOB BACK!
    return {
      success: true,
      message: 'Candidate Fetched Success!',
      candidate: JSON.parse(JSON.stringify(candidate))
    }
  } catch (err: any) {
    return {
      error: true,
      message: 'Candidate Feteched Failed!',
      errorMessage: err.message
    }
  }
}
