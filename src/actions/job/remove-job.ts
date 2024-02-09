'use server'

import { DBConnect } from '@/database/DBConnect'
import { Job } from '@/models/job.model'
import {revalidatePath} from 'next/cache';


export const removeJobById = async (ID: string) => {
  try {
    // CONNECTING TO DATABASE FIRSTLY!
    DBConnect()

    // GET JOB BY ID AND DELETE!
    await Job.findByIdAndDelete(ID)

    // ALSO NEED TO DELETE THAT JOB FROM THOSE CANDIDATES WHO HAVE BEEN APPLIED TO THEM EARLIER! COMING LATER!


    // REVALIDATE DATA PREVIOUS DATA!
    revalidatePath('/recruitment/candidates');

    // RETURN JOB BACK!
    return {
      success: true,
      status: 200
    }
  } catch (err: any) {
    return {
      error: true,
      message: 'Job Feteched Failed!',
      errorMessage: err.message
    }
  }
}
