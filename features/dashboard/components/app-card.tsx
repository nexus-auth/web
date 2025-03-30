import { Card } from '@/components/ui/card'
import Image from 'next/image'

interface Props {
  appName: string
}

export default function AppCard({ appName }: Props) {
  return (
    <Card className="flex flex-col items-center gap-y-3 px-12 py-8 rounded-xl cursor-pointer hover:bg-gray-100">
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
