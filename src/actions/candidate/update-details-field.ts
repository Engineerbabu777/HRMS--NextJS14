
'use server'

import { DBConnect } from '@/database/DBConnect'
import { Candidate } from '@/models/candidate.model'
import { revalidatePath } from 'next/cache'

export const updateDetailsField = async (
  field: string,
  value: string | number,
  ID: string
) => {
  try {
    // CONNECT WITH DATABASE!
    DBConnect()

    // UPDATE THE VALUE!
    await Candidate.findByIdAndUpdate(ID, { [field]: value })

    revalidatePath('/recruitment/candidates/view/' + ID)

    // RETURN BACK THE RESPONSE!
    return {
      success: true,
      message: 'updated Success!'
    }
  } catch (error: any) {
    // RETURN BACK THE RESPONSE1
    return {
      error: true,
      message: error.message
    }
  }
}
