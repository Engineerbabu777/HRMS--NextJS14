'use client'

import React from 'react'
import CandidatesTabView from './CandidatesTabView'
import SummaryTabView from './SummaryTabView'

type Props = {}

const tabsNames = [
  'Candidates',
  'Summary',
  'Attachments',
  'Reports',
  'Sourcing'
]
export default function BottomPortion ({}: Props) {
  const [activeTab, setActiveTab] = React.useState(0)

  return (
    <>
      <div className='flex-1 bg-white rounded-md border flex flex-col'>
        {/* TAB OPTIONS */}
        <header className='border-b border-[#1273eb] w-full flex'>
          {tabsNames.map((n: string, i: number) => (
            <>
              <p
                onClick={() => {
                  setActiveTab(i)
                }}
                className={`
                min-w-[100px] text-center p-4 text-[#1273eb] cursor-pointer
               ${
                 activeTab === i
                   ? 'font-bold border-b-2 border-[#1273eb] '
                   : 'opacity-50'
               }
              `}
              >
                {n}
              </p>
            </>
          ))}
        </header>

        <div className='flex-1 h-full bg-gray-100'>
          {/* ACCORDING TO TAB DISPLAY DATA! */}
          {activeTab === 0 && <CandidatesTabView />}
          {activeTab === 1 && <SummaryTabView />}
          {activeTab === 2 && <div>Attachments</div>}
          {activeTab === 3 && <div>Reports</div>}
          {activeTab === 4 && <div>Sourcing</div>}
        </div>
      </div>
    </>
  )
}
