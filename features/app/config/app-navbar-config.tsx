import { NavbarConfig } from '@/types'
import { Home, Settings, UsersIcon } from 'lucide-react'

export const appNavbarConfig: NavbarConfig = {
  navMain: [
    {
      title: 'Home',
      url: '/',
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
      title: 'User management',
      url: '#',
      icon: UsersIcon,
      isActive: true,
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
