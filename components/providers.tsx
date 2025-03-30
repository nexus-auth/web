'use client'

import React from 'react'
import { NexusProvider } from '@nexus-auth/react-sdk'

interface ProvidersProps {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <NexusProvider
      config={{
        appId: 'test'
      }}
    >
      {children}
    </NexusProvider>
  )
}
