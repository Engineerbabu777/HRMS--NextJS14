import React, { useState } from 'react';
import FullContainer from './SingleDetailContainer';
import SideHeadingBox from './SideHeadingBox';
import { PossibleJobDetails } from '@/types';

type Props = {
  data: any;
};

export default function JobDetailsSide({ data }: Props) {
  // STATE FOR EDIT MODE
  const [inEditView, setInEditView] = useState<PossibleJobDetails>({});

  return (
    <>
      <div className='flex-1'>
        {/* HEADER! */}
        <SideHeadingBox headingName='Job Details' />

        {/* DETAILS! */}
        <div className='flex flex-col p-3 border-2 border-t-0 gap-2'>
          {/* JOB REFERENCE */}
          <FullContainer
            headingName='Job Reference'
            setInEditView={setInEditView}
            placeholder={'Enter Job Reference'}
            type='text'
            value={data?.jobReference || 'Test Reference'}
            editKey={'jobReference'}
            inEditView={inEditView}
          />

          {/* JOB NAME */}
          <FullContainer
            headingName='Job Name'
            setInEditView={setInEditView}
            placeholder={'Enter Job Name'}
            type='text'
            value={data?.jobName || 'Test Name'}
            editKey={'jobName'}
            inEditView={inEditView}
          />

          {/* JOB LOCATION */}
          <FullContainer
            headingName='Job Location'
            setInEditView={setInEditView}
            placeholder={'Enter Job Location'}
            type='text'
            value={data?.jobLocation || 'Test Location'}
            editKey={'jobLocation'}
            inEditView={inEditView}
          />

          {/* REMOTE */}
          <FullContainer
            headingName='Remote'
            setInEditView={setInEditView}
            placeholder={'Enter Yes/No for Remote'}
            type='text'
            value={data?.remote || 'Test Remote'}
            editKey={'remote'}
            inEditView={inEditView}
          />

          {/* OFFICE ADDRESS */}
          <FullContainer
            headingName='Office Address'
            setInEditView={setInEditView}
            placeholder={'Enter Office Address'}
            type='text'
            value={data?.officeAddress || 'Test Office Address'}
            editKey={'officeAddress'}
            inEditView={inEditView}
          />

          {/* EXPERIENCE LEVEL */}
          <FullContainer
            headingName='Experience Level'
            setInEditView={setInEditView}
            placeholder={'Enter Expereince Level'}
            type='text'
            value={data?.experienceLevel || 'Test data'}
            editKey={'experienceLevel'}
            inEditView={inEditView}
          />

          {/* HEADCOUNT */}
          <FullContainer
            headingName='Headcount'
            setInEditView={setInEditView}
            placeholder={'EnterHead Count'}
            type='number'
            value={data?.headCount || 'Test data'}
            editKey={'headCount'}
            inEditView={inEditView}
          />

          {/* MAXIMUM SALARY */}
          <FullContainer
            headingName='Maximum Salary'
            setInEditView={setInEditView}
            placeholder={'Enter Maximum Salary'}
            type='number'
            value={data?.maximumSalary || 'Test data'}
            editKey={'maximumSalary'}
            inEditView={inEditView}
          />

          {/* MINIMUM SALARY */}
          <FullContainer
            headingName='Minimum Salary'
            setInEditView={setInEditView}
            placeholder={'Enter Minimum Salary'}
            type='number'
            value={data?.minimumSalary || 'Test data'}
            editKey={'minimumSalary'}
            inEditView={inEditView}
          />

          {/* FREQUENCY */}
          <FullContainer
            headingName='Frequency'
            setInEditView={setInEditView}
            placeholder={'Enter Frequency'}
            type='text'
            value={data?.frequency || 'Test data'}
            editKey={'frequency'}
            inEditView={inEditView}
          />

          {/* CONTRACT DETAILS */}
          <FullContainer
            headingName='Contract Details'
            setInEditView={setInEditView}
            placeholder={'Enter Contract Details'}
            type='text'
            value={data?.contractDetails || 'Test data'}
            editKey={'contractDetails'}
            inEditView={inEditView}
          />

          {/* OPEN DATE */}
          <FullContainer
            headingName='Open Date'
            setInEditView={setInEditView}
            placeholder={'Enter Close date'}
            type='date'
            value={data?.openDate || 'Test data'}
            editKey={'openDate'}
            inEditView={inEditView}
          />

          {/* CLOSE DATE */}
          <FullContainer
            headingName='Close Date'
            setInEditView={setInEditView}
            placeholder={'Enter Open date'}
            type='date'
            value={data?.closeDate || 'Test data'}
            editKey={'closeDate'}
            inEditView={inEditView}
          />
        </div>
      </div>
    </>
  );
}
