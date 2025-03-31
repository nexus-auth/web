'use client'

import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface Props {
  appName: string
  navUrl: string
}

export default function AppCard({ appName, navUrl }: Props) {
  const router = useRouter()

  function navigate() {
    router.push(navUrl)
  }

  return (
    <Card
      className="flex flex-col items-center min-w-44 gap-y-3 py-8 rounded-xl cursor-pointer hover:bg-gray-100"
      onClick={navigate}
    >
      <Image
        width={30}
        height={30}
        src={'https://dashboard.privy.io/images/blobby-empty.svg'}
        alt=""
      />
      <div className="text-sm font-medium">{appName}</div>
    </Card>
  )
}
