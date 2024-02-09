// 'use client'
import NothingInfo from '@/components/recruitment/shared/NothingInfo'
import React from 'react'
import SearchInput from '@/components/Header/SearchInput'
import { FaSortDown } from 'react-icons/fa'
import JobsHeader from '@/components/recruitment/jobs/JobsHeader'
import JobsTable from '@/components/recruitment/jobs/JobsTable'
import {useQuery} from '@tanstack/react-query';
import { fetchJobs } from '@/actions/job/fetch-jobs'

type Props = {}

export default async function page ({}: Props) {
    
  const data = await fetchJobs();

  console.log(data)

  return (
    <div className='flex flex-col gap-3 h-[calc(100vh-52px)] p-2 bg-gray-100 overflow-auto scrollbar'>
      {/* IF NO JOBS EXISTS! */}
      {/* <NothingInfo jobs /> */}

      {/* IF JOBS EXISTS! */}
      <>
        {/* HEADER! */}
        <JobsHeader />

        {/* TABLE! */}
        <section className='flex-1 bg-white p-3 rounded-md border w-full '>
          {/* HEADER! */}
          <ContainerHeader />

          {/* TABLE! */}
          <JobsTable data={data?.jobs}/>
        </section>
      </>
    </div>
  )
}

function ContainerHeader () {
  return (
    <>
      <header className='flex items-center justify-between'>
        {/* SEARCH! */}
        <div className='flex-1 flex gap-2 items-center'>
          <h2 className='font-semibold '>Jobs List</h2>
          <SearchInput placeholder="Search for Jobs Names... Location..." jobs />
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
