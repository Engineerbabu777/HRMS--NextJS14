import React from 'react'
import { useState } from 'react'
import ResumesView from './AttachmentsView'

type Props = {
  data:any
}

export default function Main ({data}: Props) {
  const [open, setOpen] = useState(false)
  return (
    <>
     <ResumesView data={data}/>
    </>
  )
}
