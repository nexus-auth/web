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
import { AppSwitcher } from './app-switcher'
import { appNavbarConfig } from '../config/app-navbar-config'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="w-2/12 h-screen" collapsible="none" {...props}>
      <SidebarHeader>
        <AppSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={appNavbarConfig.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
