import React from 'react'
import CandidatesDetails from './Details/CandidatesDetails'
import EmergencyContact from './Emergency-Contact/EmergencyContact'
import EducationDetails from './Education/EducationDetails'
import ExperienceDetails from './Experience/ExperienceDetails'

type Props = {
  data:any
}

// WILL MAKE IT MORE CLEANER LATER!
export default function Main ({data}: Props) {

 
  return (
    <>
      <section className='flex-1 flex flex-col gap-4'>
        {/* CANDIDATES DETAILS! */}
        <CandidatesDetails data={data}/>

        {/* EXPERIENCE */}
       <ExperienceDetails data={data}/>

        {/* EDUCATION! */}
        <EducationDetails data={data}/>

        {/* EMERGENCY CONTACT! */}
        <EmergencyContact data={data} />
      </section>
    </>
  )
}
