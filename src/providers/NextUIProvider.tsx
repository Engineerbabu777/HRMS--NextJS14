import { NextUIProvider as Provider } from '@nextui-org/react'

import React from 'react'

type Props = {
  children: REact.ReactNode
}

export default function NextUIProvider ({ children }: Props) {
  return (
    <>
      <Provider>{children}</Provider>
    </>
  )
}
