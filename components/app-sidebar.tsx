'use client'

import * as React from 'react'
import {
  AudioWaveform,
  Command,
  Folder,
  GalleryVerticalEnd,
  LayoutGrid,
  LifeBuoy,
  ReceiptText,
  UsersRound
} from 'lucide-react'

import { NavMain } from '@/components/nav-main'
import { NavUser } from '@/components/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail
} from '@/components/ui/sidebar'
import { NavSecondary } from './nav-secondary'
import { Separator } from './ui/separator'
import { Comfortaa } from 'next/font/google'
import { cn } from '@/lib/utils'

const data = {
  user: {
    name: 'Can',
    email: 'mazlumcancevik@gmail.com',
    avatar: '/avatars/shadcn.jpg'
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise'
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup'
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free'
    }
  ],
  navMain: [
    {
      title: 'Applications',
      url: '#',
      icon: LayoutGrid,
      isActive: true
    },
    {
      title: 'Team',
      url: '#',
      icon: UsersRound
    },
    {
      title: 'Billing',
      url: '#',
      icon: ReceiptText
    }
  ],
  navSecondary: [
    {
      title: 'Docs',
      url: '#',
      icon: Folder
    },
    {
      title: 'Support',
      url: '#',
      icon: LifeBuoy
    }
  ]
}

const comfortaa = Comfortaa({ subsets: ['latin'] })

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="w-2/12 h-screen" collapsible="none" {...props}>
      <SidebarHeader>
        <div>
          <h1
            className={cn(comfortaa.className, 'text-xl text-black font-extrabold px-2 pt-3 mb-3')}
          >
            Nexus Auth
          </h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <Separator />
        <NavSecondary items={data.navSecondary} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
