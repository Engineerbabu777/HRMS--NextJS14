'use server'

import { DBConnect } from '@/database/DBConnect'
import { Job } from '@/models/job.model'
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
    await Job.findByIdAndUpdate(ID, { [field]: value })

    revalidatePath('/recruitment/jobs/' + ID)

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
