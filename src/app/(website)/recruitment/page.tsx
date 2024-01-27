import TopDashboardHeader from '@/components/recruitment/components/TopDashboardHeader'
import React from 'react'
import MiddleDashboardSection from '../../../components/recruitment/components/MiddleDashboardSection'
import BottomDashboardSection from '../../../components/recruitment/components/BottomDashboardSection'
type Props = {}

export default function Page ({}: Props) {
  return (
    <>
      <section className='flex flex-col gap-6 h-[calc(100vh-52px)] p-2 bg-gray-100'>
        {/* TOP SECTION HEADER! */}
        <TopDashboardHeader />

        {/* MIDDLE SECTION! */}
        <MiddleDashboardSection />

        {/* LOWER SECTION! */}
        <BottomDashboardSection />
      </section>
    </>
  )
}
