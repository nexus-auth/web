'use client'

import { useNexus } from '@nexus-auth/react-sdk'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface Props {
  children: React.ReactNode
}

export default function AuthGuard({ children }: Props) {
  const { isAuthenticated } = useNexus()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/auth')
    }
  }, [isAuthenticated, router])

  return children
}
