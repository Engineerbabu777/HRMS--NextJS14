import { addJobToCandidate } from '@/actions/candidate/add-jobs-to-candidate'
import { fetchJobs } from '@/actions/job/fetch-jobs'
import { ModalAtom } from '@/recoil/modalAtom'
import { useParams } from 'next/navigation'
import toast from 'react-hot-toast'
import { useRecoilState } from 'recoil'
import { useState, useEffect } from 'react'
import { ViewCandidateParamsType } from '@/types'

export default function useJobs () {
  const [selectedJob, setSelectedJob] = useState < string > ('')
  const [jobs, setJobs] = useState([])
  const { candidateId }: ViewCandidateParamsType = useParams()
  const [modalState, setModalState] = useRecoilState(ModalAtom)

  // HANDLING THE CHANGING IN SELECT!
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedJob(e.target.value)
  }

  // FETCHING ALL JOBS!
  const fetchAllJobs = async () => {
    const response = await fetchJobs()
    if (response.status === 200) {
      setJobs(response.jobs.filter((j: any) => j.jobStatus !== 'onhold'))
    }
  }

  useEffect(() => {
    fetchAllJobs()
  }, [])

  // HANDLE SUBMIT FUNCTION!
  const handleSubmit = async () => {
    console.log(selectedJob)
    const response = await addJobToCandidate(selectedJob, candidateId)
    if (response.status === 200) {
      setModalState({ isOpen: false, type: '' })
      toast.success('saved!')
    }
  }

  // RETURNING SOME STATES AND FUNCTION FROM THE CUSTOM HOOK!!
  return {
    handleChange,
    jobs,
    handleSubmit
  }
}
