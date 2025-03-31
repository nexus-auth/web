import { NavbarConfig } from '@/types'
import { Folder, LayoutGrid, LifeBuoy, ReceiptText, UsersRound } from 'lucide-react'

export const homeNavbarConfig: NavbarConfig = {
  navMain: [
    {
      title: 'Applications',
      url: '/',
      icon: LayoutGrid,
      isActive: true
    },
    {
      title: 'Team',
      url: '/team',
      icon: UsersRound
    },
    {
      title: 'Billing',
      url: '/billing',
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
