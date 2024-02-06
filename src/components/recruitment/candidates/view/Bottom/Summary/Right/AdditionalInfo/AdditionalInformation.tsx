import FullContainer from '@/components/recruitment/shared/EachInfoContainer/EachInfoFull'
import React, { useState } from 'react'
import { differenceInDays } from 'date-fns';
type Props = {
  data: any
}

export default function AdditionalInformation ({ data }: Props) {
  const [inEditView, setInEditView] = useState < any > ({})
  return (
    <>
      <div className=''>
        {/* HEADER! */}
        <header className='bg-gray-100 text-[#1273eb] font-bold p-2 text-xl border-2 '>
          Additional Information
        </header>
        {/* BODY! */}
        <section className='p-3 w-full border-2 border-t-0 flex justify-between p-5 flex-col gap-2'>
          <FullContainer
            headingName='Current Department'
            editKey='currentDepartment'
            inEditView={inEditView}
            placeholder='Enter Current Department'
            setInEditView={setInEditView}
            type='text'
            value={data?.currentDepartment || 'default-value'}
            options={[]}
            select={false}
          />

          <FullContainer
            headingName='Candidate Industry'
            editKey='candidateIndustry'
            inEditView={inEditView}
            placeholder='Enter Current Department'
            setInEditView={setInEditView}
            type='text'
            value={data?.candidateIndustry || 'default-value'}
          />

          <FullContainer
            headingName='Candidate Experience'
            editKey='candidateExperience'
            inEditView={inEditView}
            placeholder='Enter Current Department'
            setInEditView={setInEditView}
            type='text'
            value={data?.candidateExperience || 'default-value'}
          />

          <FullContainer
            headingName='Candidate Industry'
            editKey='candidateIndustry'
            inEditView={inEditView}
            placeholder='Enter Current Department'
            setInEditView={setInEditView}
            type='text'
            value={data?.candidateIndustry || 'default-value'}
          />

          <FullContainer
            headingName='Relevent Experience'
            editKey='releventExperience'
            inEditView={inEditView}
            placeholder='Enter Current Department'
            setInEditView={setInEditView}
            type='text'
            value={data?.releventExperience || 'default-value'}
          />

          <FullContainer
            headingName='Current Salary'
            editKey='currentSalary'
            inEditView={inEditView}
            placeholder='Enter Current Department'
            setInEditView={setInEditView}
            type='text'
            value={data?.currentSalary || 'default-value'}
          />

          <FullContainer
            headingName='Notice Period'
            editKey='noticePeriod'
            inEditView={inEditView}
            placeholder='Enter Current Department'
            setInEditView={setInEditView}
            type='date'
            value={
              data?.noticePeriod
                ? differenceInDays(new Date(data?.noticePeriod), new Date(Date.now()))+' days remaining'
                : 'add'
            }
          />

          <FullContainer
            headingName='Expected Salary'
            editKey='expectedSalary'
            inEditView={inEditView}
            placeholder='Enter Current Department'
            setInEditView={setInEditView}
            type='text'
            value={data?.expectedSalary || 'default-value'}
          />

          <FullContainer
            headingName='Languages'
            editKey='languages'
            inEditView={inEditView}
            placeholder='Enter Current Department'
            setInEditView={setInEditView}
            type='text'
            value={data?.languages || 'default-value'}
          />

          <FullContainer
            headingName='Candidate Reference Name'
            editKey='candidateReference'
            inEditView={inEditView}
            placeholder='Enter Current Department'
            setInEditView={setInEditView}
            type='text'
            value={data?.candidateReference || 'default-value'}
          />

          <FullContainer
            headingName='Candidate Description'
            editKey='candidateDescription'
            inEditView={inEditView}
            placeholder='Enter Current Department'
            setInEditView={setInEditView}
            type='text'
            value={data?.candidateDescription || 'default-value'}
          />
        </section>
      </div>
    </>
  )
}
