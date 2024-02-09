import NothingInfo from '@/components/recruitment/shared/NothingInfo'
import React from 'react'
import SearchInput from '@/components/Header/SearchInput'
import { FaSortDown } from 'react-icons/fa'
import { fetchCandidates } from '../../../../actions/candidate/fetch-candidates'
import MainPage from '@/components/recruitment/candidates/MainPage/MainPage'

type Props = {}

export default async function page ({}: Props) {
  const data = await fetchCandidates()

  return (
    <>
      <section className='flex flex-col gap-6 h-[calc(100vh-52px)] p-2 bg-gray-100 overflow-auto'>
        {/* IF NO CANDIDATES EXISTS! */}
        {data?.candidates?.length === 0 && <NothingInfo candidates />}

        {/* IF CANDIDATES EXISTS! */}
        {data?.candidates?.length > 0 && <MainPage data={data}/>}
      </section>
    </>
  )
}
