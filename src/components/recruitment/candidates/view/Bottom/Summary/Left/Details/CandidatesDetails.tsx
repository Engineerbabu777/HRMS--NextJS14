import React, { useState } from 'react'
import FullContainer from '@/components/recruitment/shared/EachInfoContainer/EachInfoFull';
import {format} from 'date-fns';

type Props = {data:any}

export default function CandidatesDetails ({data}: Props) {
  const [inEditView, setInEditView] = useState < any > ({})

  return (
    <>
      <div className=''>
        {/* HEADER! */}
        <header className='bg-gray-100 text-[#1273eb] font-bold p-2 text-xl border-2 '>
          Candidate Details
        </header>
        {/* BODY! */}
        <section className='p-3 w-full border-2 border-t-0 flex justify-between p-5 flex-col gap-2'>
          <FullContainer
            headingName='Candidate Reference'
            type='text'
            placeholder='Enter Candidate Reference'
            inEditView={inEditView}
            setInEditView={setInEditView}
            editKey={'candidateReference'}
            value={data?.candidateReference || "AA8VVVV"}
          />

          <FullContainer
            headingName='Candidate Name'
            type='text'
            placeholder='Enter Candidate Name'
            inEditView={inEditView}
            setInEditView={setInEditView}
            editKey={'candidateName'}
            value={data?.candidateName || "test value"}
          />

          <FullContainer
            headingName='Candidate Location'
            type='text'
            placeholder='Enter Candidate Location'
            inEditView={inEditView}
            setInEditView={setInEditView}
            editKey={'candidateLocation'}
            value={data?.candidateLocation || "default value"}
          />

          <FullContainer
            select={true}
            options={['Male', 'Female', 'Other']}
            headingName='Gender'
            type='text'
            placeholder='Select Candidate Gender'
            inEditView={inEditView}
            setInEditView={setInEditView}
            editKey={'gender'}
            value={data?.gender || "default value"}
          />

          <FullContainer
            headingName='Diploma'
            type='text'
            placeholder='Enter details about diploma'
            inEditView={inEditView}
            setInEditView={setInEditView}
            editKey={'diploma'}
            value={data?.diploma || "default value"}

          />

          <FullContainer
            headingName='University'
            type='text'
            placeholder='Enter Candidate Name'
            inEditView={inEditView}
            setInEditView={setInEditView}
            editKey={'university'}
            value={data?.university || "default value"}
          />

          <FullContainer
            headingName='Current Company'
            type='text'
            placeholder='Enter Current Company Name'
            inEditView={inEditView}
            setInEditView={setInEditView}
            editKey={'currentCompany'}
            value={data?.currentCompany || "default value"}

          />

          <FullContainer
            select={true}
            options={[
              'Backend Developer',
              'Frontend Developer',
              'Rust Developer',
              'Go Devloper',
              'Flutter Developer',
              'Python Developer'
            ]}
            headingName='Current Position'
            type='text'
            placeholder='Select Current Position'
            inEditView={inEditView}
            setInEditView={setInEditView}
            editKey={'currentPosition'}
            value={data?.currentPosition || "default value"}

          />
          <FullContainer
            headingName='Birthday'
            type='date'
            placeholder='Enter Candidate Name'
            inEditView={inEditView}
            setInEditView={setInEditView}
            editKey={'candidateBirthday'}
            value=
              {data.candidateBirthday
                ? format(new Date(data?.candidateBirthday), 'dd-MM-yyyy')
                : ""}

          />

          <FullContainer
            headingName='Address'
            type='text'
            placeholder='Enter Candidate Name'
            inEditView={inEditView}
            setInEditView={setInEditView}
            editKey={'candidateAddress'}
            value={data?.candidateAddress || "default value"}

          />

          <FullContainer
            headingName='Candidate Email'
            type='text'
            placeholder='Enter Candidate Email'
            inEditView={inEditView}
            setInEditView={setInEditView}
            editKey={'candidateEmail'}
            value={data?.candidateEmail || "default value"}

          />

          <FullContainer
            headingName='Candidate Number'
            type='number'
            placeholder='Enter Candidate Number'
            inEditView={inEditView}
            setInEditView={setInEditView}
            editKey={'candidateNumber'}
            value={data?.candidateNumber || "default value"}

          />

          <FullContainer
            headingName='Other Contact'
            type='number'
            placeholder='Enter Candidate Other Number'
            inEditView={inEditView}
            setInEditView={setInEditView}
            editKey={'candidateOtherContact'}
            value={data?.candidateOtherContact || "default value"}

          />
        </section>
      </div>
    </>
  )
}
