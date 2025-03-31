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
import { useNexus } from '@nexus-auth/react-sdk'
import { Separator } from '@/components/ui/separator'
import { NavSecondary } from '@/components/nav/nav-secondary'

const data = {
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

export function HomeSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useNexus()

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
        <NavMain items={data.navMain} />
        <Separator />
        <NavSecondary className="px-5" items={data.navSecondary} />
      </SidebarContent>
      <SidebarFooter>{user && <NavUser user={user} />}</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
