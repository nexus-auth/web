'use client'

import * as React from 'react'
import { GalleryVerticalEnd } from 'lucide-react'

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

const apps = [
  {
    name: 'Randevumo',
    logo: GalleryVerticalEnd,
    plan: 'Dev'
  }
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="w-2/12 h-screen" collapsible="none" {...props}>
      <SidebarHeader>
        <AppSwitcher apps={apps} />
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
