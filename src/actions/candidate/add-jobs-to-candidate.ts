



'use server';

import {DBConnect} from '@/database/DBConnect';
import {CandidateTypes} from '@/types';
import {Candidate} from '@/models/candidate.model';
import {revalidatePath} from 'next/cache';

export const addJobToCandidate = async(JobId:string,candidateId:string) => {

    // CONNECT TO DATABASE!
    await DBConnect();

    // UPDATE CANDIDATE TO DATABASE!
    await Candidate.findByIdAndUpdate(candidateId,{
        $push:{
            candidateJobs:{
                jobId:JobId,
                candidateType:'new'
            }
        }
    });

    revalidatePath('/recruitment/candidates/view'+candidateId)

    // RETURN BACK OK RESPONSE!
    return {
       status:200,
       message:'Candidate created successfully!'
    }

}