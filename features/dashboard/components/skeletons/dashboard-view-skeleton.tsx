import { Skeleton } from '@/components/ui/skeleton'
import AppCardSkeleton from './app-card-skeleton'

export default function DashboardViewSkeleton() {
  return (
    <div className="w-6/12 flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-2">
        <Skeleton className="w-96 h-8" />
        <Skeleton className="w-72 h-6" />
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <Skeleton className="w-40 h-6" />
          <Skeleton className="w-28 h-10" />
        </div>

        <div className="flex gap-5 flex-wrap">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <AppCardSkeleton key={index} />
            ))}
        </div>
      </div>
    </div>
  )
}
