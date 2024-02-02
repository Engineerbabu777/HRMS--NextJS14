import React from 'react'

type Props = {
  headingName: string
}

export default function LabelName ({ headingName }: Props) {
  return (
    <>
      <h2 className='text-md font-bold flex-1 '>{headingName}</h2>
    </>
  )
}
