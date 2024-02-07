import { addJobToCandidate } from '@/actions/candidate/add-jobs-to-candidate'
import { fetchJobs } from '@/actions/job/fetch-jobs'
import { ModalAtom } from '@/recoil/modalAtom'
import { useParams } from 'next/navigation'
import toast from 'react-hot-toast'
import { useRecoilState } from 'recoil'
import { useState, useEffect } from 'react'

export default function useJobs () {
  const [selectedJob, setSelectedJob] = useState(null)
  const [jobs, setJobs] = useState([])
  const { candidateId } = useParams()
  const [modalState, setModalState] = useRecoilState(ModalAtom)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedJob(e.target.value)
  }

  const fetchAllJobs = async () => {
    const response = await fetchJobs()
    if (response.status === 200) {
      setJobs(response.jobs)
    }
  }

  useEffect(() => {
    // fetch jobs
    fetchAllJobs()
  }, [])

  const handleSubmit = async () => {
    console.log(selectedJob)
    const response = await addJobToCandidate(selectedJob, candidateId)
    if (response.status === 200) {
      setModalState({ isOpen: false })
      toast.success('saved!')
    }
  }

  return {
    handleChange,
    jobs,
    handleSubmit
  }
}
