import CandidatesHeader from '@/components/recruitment/candidates/CandidatesHeader'
import NothingInfo from '@/components/recruitment/shared/NothingInfo'
import React from 'react'
import SearchInput from '@/components/Header/SearchInput'
import { FaSortDown } from 'react-icons/fa'
import CandidatesTable from '@/components/recruitment/candidates/CandidatesTable'
import { fetchCandidates } from '../../../../actions/candidate/fetch-candidates'

type Props = {}

export default async function page ({}: Props) {

  
  const data = await fetchCandidates();

  console.log(data)

  return (
    <>
      <section className='flex flex-col gap-6 h-[calc(100vh-52px)] p-2 bg-gray-100 overflow-auto'>
        {/* IF NO CANDIDATES EXISTS! */}
        {/* <NothingInfo candidates /> */}

        {/* IF CANDIDATES EXISTS! */}
        <>
          {/* HEDAER! */}
          <CandidatesHeader />
          {/* TABLE! */}
          <section className='flex-1 bg-white p-3 rounded-md border w-full '>
            {/* HEADER! */}
            <ContainerHeader />

            {/* TABLE! */}
            <CandidatesTable data={data.candidates}/>
          </section>
        </>
      </section>
    </>
  )
}

function ContainerHeader () {
  return (
    <>
      <header className='flex items-center justify-between'>
        {/* SEARCH! */}
        <div className='flex-1 flex gap-2 items-center'>
          <h2 className='font-semibold '>Candidates List</h2>
          <SearchInput />
        </div>

        {/* ACTIONS! */}
        <div className='flex items-center gap-2 justify-center '>
          <button className='text-[#1273eb] font-semibold p-2 rounded-md flex gap-2 items-center border border-[#1273eb]'>
            <span>Bulk Actions</span>
            <FaSortDown className='w-4 h-4 -mt-1' />
          </button>
        </div>
      </header>
    </>
  )
}
