'use client'

import { ChevronsUpDown, GalleryVerticalEnd, Plus } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from '@/components/ui/sidebar'
import { App } from '@/types/app'
import { useApps } from '@/features/home/api/use-apps'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

export function AppSwitcher() {
  const { isMobile } = useSidebar()
  const [apps, setApps] = useState<App[] | null>(null)
  const [activeApp, setActiveApp] = useState<App | null>(null)

  const router = useRouter()
  const params = useParams()
  const { data, isLoading } = useApps()

  useEffect(() => {
    if (!isLoading && data?.data?.length) {
      setApps(data.data)
      setActiveApp(data.data[0])
    }
  }, [data, isLoading])

  useEffect(() => {
    if (apps) {
      const foundApp = apps.find((app) => app.id.toString() === params.id)
      setActiveApp(foundApp || apps[0])
    }
  }, [params.id, apps])

  useEffect(() => {
    if (activeApp) {
      router.push(`/apps/${activeApp.id}`)
    }
  }, [router, activeApp])

  if (isLoading || !apps) {
    return <Skeleton className="w-full h-12" />
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <GalleryVerticalEnd className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{activeApp?.name}</span>
                <span className="truncate text-xs">Dev</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">Apps</DropdownMenuLabel>
            {apps.map((app, index) => (
              <DropdownMenuItem
                key={app.name}
                onClick={() => setActiveApp(app)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-sm border">
                  <GalleryVerticalEnd className="size-4 shrink-0" />
                </div>
                {app.name}
                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2">
              <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                <Plus className="size-4" />
              </div>
              <div className="font-medium text-muted-foreground">Create app</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
