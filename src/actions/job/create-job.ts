


'use server';

import {DBConnect} from '@/database/DBConnect';
import {JobTypes} from '@/types';
import {Job} from '@/models/job.model';

export const createJob = async(data:JobTypes) => {

    // CONNECT TO DATABASE!
    await DBConnect();

    // DATA WILL BE TYPE OF JOB TYPES!
    const body:JobTypes = data;

    // SAVE JOB TO DATABASE!
    const newJob = await Job.create(body);

    // RETURN BACK OK RESPONSE!
    return {
       newJob:JSON.parse(JSON.stringify(newJob)),
       status:200,
       message:'Job created successfully!'
    }

}