'use client'

import React from 'react'
import { NexusProvider } from '@nexus-auth/react-sdk'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface ProvidersProps {
  children: React.ReactNode
}

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } }
})

export default function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NexusProvider
        config={{
          appId: 'test'
        }}
      >
        {children}
      </NexusProvider>
    </QueryClientProvider>
  )
}
