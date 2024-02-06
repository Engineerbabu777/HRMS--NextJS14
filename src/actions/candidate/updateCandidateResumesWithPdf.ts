'use server'

import { DBConnect } from '@/database/DBConnect'
import { Candidate } from '@/models/candidate.model'
import { revalidatePath } from 'next/cache'

export const updateCandidateWithPdf = async (
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
    await Candidate.findByIdAndUpdate(ID, {
      $push: {
        resumes: {
          file_Url: pdfLink,
          file_Name: file_Name,
          file_Type: file_Type,
          file_Size: file_Size,
          createdAt: Date.now()
        }
      }
    })

    // REVALIDATE THE PATH
    revalidatePath('/recruitment/candidates/' + ID)

    // RETURN SUCCESSFUL RESPONSE
    return {
      success: true,
      message: 'Update successful!'
    }
  } catch (error: any) {
    // LOG THE ERROR (OPTIONAL)
    console.error('Error updating candidate:', error)

    // RETURN ERROR RESPONSE WITH STATUS CODE
    return {
      error: true,
      message: error.message || 'Internal Server Error',
      statusCode: 500 // Internal Server Error
    }
  }
}
