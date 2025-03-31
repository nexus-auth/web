'use client'

import { AnimatedBackground } from 'animated-backgrounds'
import { useNexus } from '@nexus-auth/react-sdk'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AuthView() {
  const router = useRouter()
  const { nexusLogin, isAuthenticated } = useNexus()

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/')
    }
  }, [isAuthenticated, router])

  useEffect(() => {
    nexusLogin({ closable: false, hideOverlay: false })
  }, [])

  return (
    <div>
      <AnimatedBackground animationName="cosmicDust" />
    </div>
  )
}
