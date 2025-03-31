'use client'

import * as React from 'react'
import { GalleryVerticalEnd, Home, Settings, UsersIcon, WalletCardsIcon } from 'lucide-react'

import { NavMain } from '@/components/nav-main'
import { NavUser } from '@/components/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail
} from '@/components/ui/sidebar'
import { useNexus } from '@nexus-auth/react-sdk'
import { AppSwitcher } from './app-switcher'

const data = {
  apps: [
    {
      name: 'Randevumo',
      logo: GalleryVerticalEnd,
      plan: 'Dev'
    }
  ],
  navMain: [
    {
      title: 'Home',
      url: '#',
      icon: Home
    },
    {
      title: 'Configuration',
      url: '#',
      icon: Settings,
      isActive: true,
      items: [
        {
          title: 'App settings',
          url: '#'
        },
        {
          title: 'UI components',
          url: '#'
        },
        {
          title: 'Integrations',
          url: '#'
        },
        {
          title: 'Webhooks',
          url: '#'
        }
      ]
    },
    {
      title: 'Wallet infrastructure',
      url: '#',
      icon: WalletCardsIcon,
      items: [
        {
          title: 'Wallets',
          url: '#'
        },
        {
          title: 'Smart wallets',
          url: '#'
        }
      ]
    },
    {
      title: 'User management',
      url: '#',
      icon: UsersIcon,
      items: [
        {
          title: 'Authentication',
          url: '#'
        },
        {
          title: 'Account funding',
          url: '#'
        },
        {
          title: 'Global wallet',
          url: '#'
        },
        {
          title: 'Users',
          url: '#'
        }
      ]
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useNexus()

  return (
    <Sidebar className="w-2/12 h-screen" collapsible="none" {...props}>
      <SidebarHeader>
        <AppSwitcher apps={data.apps} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>{user && <NavUser user={user} />}</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
