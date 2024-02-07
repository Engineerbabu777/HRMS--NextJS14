import React from 'react'
import { useState } from 'react'
import ResumesView from './AttachmentsView'

type Props = {
  data:any
}

export default function Main ({data}: Props) {
  return (
    <>
    {/* <p className="text-red-500">tets</p> */}
     <ResumesView data={data}/>
    </>
  )
}
