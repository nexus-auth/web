import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import AppCard from './components/app-card'

export default function DashboardView() {
  return (
    <div className="w-6/12 flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-xl font-semibold">Welcome, mazlumcancevik@gmail.com</h1>
        <p className="text-sm text-gray-500">To get started select from your applications.</p>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Applications</h1>
          <Button size="sm" className="flex items-center gap-2">
            <Plus />
            <span>New app</span>
          </Button>
        </div>

        <div className="flex gap-5 flex-wrap">
          <AppCard appName="Randevumo" />
        </div>
      </div>
    </div>
  )
}
