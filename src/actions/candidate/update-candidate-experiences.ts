'use server'

import { DBConnect } from '@/database/DBConnect'
import { Candidate } from '@/models/candidate.model'
import { revalidatePath } from 'next/cache'

export const updateCandidateExperiences = async (
  data: any, // WILL CHANGE LATER!
  ID: string // CANDIDATE ID
) => {
  try {
    // CONNECT WITH DATABASE!
    DBConnect()

    // UPDATE THE VALUE!
    await Candidate.findByIdAndUpdate(ID, {
      $push: {
        candidateExperiences: data
      }
    })

    revalidatePath('/recruitment/candidates/view/' + ID)

    // RETURN BACK THE RESPONSE!
    return {
      success: true,
      message: 'updated Success!',
      status:200
    }
  } catch (error: any) {
    // RETURN BACK THE RESPONSE1
    return {
      error: true,
      message: error.message
    }
  }
}
