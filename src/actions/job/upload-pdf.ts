'use server'

import { DBConnect } from '@/database/DBConnect'
import { Job } from '@/models/job.model'
import { revalidatePath } from 'next/cache'

export const updateJobWithPdf = async (
  pdfLink: string,
  ID: string,
  file_Name: string,
  file_Size: number,
  file_Type: string
) => {
  try {
    // CONNECT WITH DATABASE
    await DBConnect()

    // UPDATE THE ATTACHMENTS
    await Job.findByIdAndUpdate(ID, {
      $push: {
        attachments: {
          file_Url: pdfLink,
          file_Name: file_Name,
          file_Type: file_Type,
          file_Size: file_Size,
          createdAt: Date.now()
        }
      }
    })

    // REVALIDATE THE PATH
    revalidatePath('/recruitment/jobs/' + ID)

    // RETURN SUCCESSFUL RESPONSE
    return {
      success: true,
      message: 'Update successful!'
    }
  } catch (error: any) {
    // LOG THE ERROR (OPTIONAL)
    console.error('Error updating job:', error)

    // RETURN ERROR RESPONSE WITH STATUS CODE
    return {
      error: true,
      message: error.message || 'Internal Server Error',
      statusCode: 500 // Internal Server Error
    }
  }
}
