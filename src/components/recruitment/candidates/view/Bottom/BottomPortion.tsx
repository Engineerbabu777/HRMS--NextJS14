'use client'

import React from 'react'
import SummaryMain from './Summary/Main'
import AttachmentsMain from './Attachments/Main'
import JobsMain from './Jobs/Main'
import ResumeMain from './Resume/Main'

type Props = {
  data:any
}

const tabsNames = ['Summary', 'Resume', 'Attachments', 'Jobs']

export default function BottomPortion ({data}: Props) {
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
          {activeTab === 0 && <SummaryMain data={data}/>}
          {activeTab === 1 && <ResumeMain data={data}/>}
          {activeTab === 2 && <AttachmentsMain />}
          {activeTab === 3 && <JobsMain />}
        </div>
      </div>
    </>
  )
}
