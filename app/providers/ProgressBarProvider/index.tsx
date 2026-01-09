'use client'

import { ReactNode } from 'react'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

function ProgressBarProvider({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <ProgressBar height="4px" color="#017bcf" options={{ showSpinner: false }} shallowRouting />
    </>
  )
}
export default ProgressBarProvider
