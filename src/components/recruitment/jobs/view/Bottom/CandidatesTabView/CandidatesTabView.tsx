'use client'
import React from 'react'
import { fetchCandidates } from '@/actions/candidate/fetch-candidates'
import NewCandidates from './Type/NewCandidates'
import ScreeningCandidates from './Type/ScreeningCandidates'
import ShortListedCandidates from './Type/ShortListedCandidates'
import TechnicalInterviewCandidates from './Type/TechnicalInterviewninbgCandidates'
import CEOInterview from './Type/CEOInterview'
import OfferedCandidates from './Type/OfferedCandidates'
import ConfirmationCandidates from './Type/ConfirmationCandidates'
import HiredCandidates from './Type/HiredCandidates';
import JoiningCandidates from './Type/JoiningCandidates'
import { useParams } from 'next/navigation'
import { sharedAtom } from '@/recoil/sharedAtom'
import { useRecoilState } from 'recoil'

type Props = {
  data: any
}

export default function CandidatesTabView ({ data }: Props) {

  const [sharedState, setSharedState] = useRecoilState(sharedAtom);
  const [candidates, setCandidates] = React.useState<any>([])
  const {jobId}:ViewJobParamsType = useParams();

  const fetch_Candidates = async () => {
    // FINDING THOSE CANDIDATES WHO ARE LINKED WITH THIS JOB ID!
    const response = await fetchCandidates(jobId)
    setCandidates(response.candidates)
    setSharedState({...sharedState, candidates: response.candidates})
    console.log(response)
  }

  React.useEffect(() => {
    fetch_Candidates()
  }, [])

  return (
    <>
      <section className='w-full flex h-full flex-1 overflow-auto scrollbar'>
        {/* NEW CANDIDATE! */}
        <NewCandidates
          candidates={sharedState?.candidates?.filter(
            c => c.candidateJobs[0].candidateType === "new"
          )}
        />

        {/* SCREENING! */}
        <ScreeningCandidates
          candidates={sharedState?.candidates?.filter(
            c => c.candidateJobs[0].candidateType === "screening" 
          )}
        />

        {/* SHORTLISTED! */}
        <ShortListedCandidates
          candidates={sharedState?.candidates?.filter(
            c => c.candidateJobs[0].candidateType === "shortlisted" 
          )}
        />

        {/* INTERVIEW! */}
        <TechnicalInterviewCandidates
          candidates={sharedState?.candidates?.filter(
            c => c.candidateJobs[0].candidateType === "interview" 
          )}
        />

        {/* CEO! */}
        <CEOInterview
          candidates={sharedState.candidates?.filter(
            c => c.candidateJobs[0].candidateType === "ceo" 
          )}
        />

        {/* OFFERED! */}
        <OfferedCandidates
          candidates={sharedState.candidates?.filter(
            c => c.candidateJobs[0].candidateType === "offered" 
          )}
        />

        {/* HIRED! */}
        <HiredCandidates
          candidates={sharedState.candidates?.filter(
            c => c.candidateJobs[0].candidateType === "hired" 
          )}
        />

        {/* JOINING! */}
        <JoiningCandidates
          candidates={sharedState.candidates?.filter(
            c => c.candidateJobs[0].candidateType === "joining" 
          )}
        />

        {/* CONFIRMATION! */}
        <ConfirmationCandidates
          candidates={sharedState.candidates?.filter(
            c => c.candidateJobs[0].candidateType === "confirmation" 
          )}
        />
      </section>
    </>
  )
}
