'use client'

import AppCard from './components/app-card'
import { useNexus } from '@nexus-auth/react-sdk'
import { useApps } from './api/use-apps'
import CreateAppDialog from './dialogs/new-app'
import DashboardViewSkeleton from './components/skeletons/dashboard-view-skeleton'

export default function DashboardView() {
  const { user, ready } = useNexus()
  const { data } = useApps()

  const dataReady = ready && data && user

  if (!dataReady) {
    return <DashboardViewSkeleton />
  }

  return (
    <div className="w-6/12 flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-xl font-semibold">Welcome, {user.email}</h1>
        <p className="text-sm text-gray-500">To get started select from your applications.</p>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Applications</h1>
          <CreateAppDialog />
        </div>

        <div className="flex gap-5 flex-wrap">
          {data?.data?.map((app) => (
            <AppCard key={app.id} appName={app.name} navUrl={`/apps/${app.id}`} />
          ))}
        </div>
      </div>
    </div>
  )
}
