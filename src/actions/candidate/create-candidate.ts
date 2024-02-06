'use server';

import {DBConnect} from '@/database/DBConnect';
import {CandidateTypes} from '@/types';
import {Candidate} from '@/models/candidate.model';
import {revalidatePath} from 'next/cache';

export const createCandidate = async(data:CandidateTypes) => {

    // CONNECT TO DATABASE!
    await DBConnect();

    // DATA WILL BE TYPE OF CANDIDATE TYPES!
    const body:CandidateTypes = data;

    // SAVE CANDIDATE TO DATABASE!
    const newCandidate = await Candidate.create(body);

    revalidatePath('/recruitment/jobs')


    // RETURN BACK OK RESPONSE!
    return {
       newCandidate:JSON.parse(JSON.stringify(newCandidate)),
       status:200,
       message:'Candidate created successfully!'
    }

}