'use client'

import { AnimatedBackground } from 'animated-backgrounds'
import { useNexus } from '@nexus-auth/react-sdk'
import { useEffect } from 'react'

export default function AuthView() {
  const { nexusLogin } = useNexus()

  useEffect(() => {
    nexusLogin({ closable: false, hideOverlay: true })
  }, [])

  return (
    <div>
      <AnimatedBackground animationName="cosmicDust" />
    </div>
  )
}
