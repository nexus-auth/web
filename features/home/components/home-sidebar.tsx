'use client'

import * as React from 'react'

import { NavMain } from '@/components/nav/nav-main'
import { NavUser } from '@/components/nav/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail
} from '@/components/ui/sidebar'
import { Comfortaa } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { NavSecondary } from '@/components/nav/nav-secondary'
import { homeNavbarConfig } from '../config/home-navbar-config'

const comfortaa = Comfortaa({ subsets: ['latin'] })

export function HomeSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="w-2/12 h-screen" collapsible="none" {...props}>
      <SidebarHeader>
        <div>
          <h1 className={cn(comfortaa.className, 'text-xl text-black font-extrabold pt-3 mb-3')}>
            Nexus Auth
          </h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={homeNavbarConfig.navMain} />
        <Separator />
        <NavSecondary className="px-5" items={homeNavbarConfig.navSecondary!} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
