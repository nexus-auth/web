import { LucideIcon } from 'lucide-react'

export type NavbarItem = {
  title: string
  url: string
  icon: LucideIcon
  isActive?: boolean
  items?: {
    title: string
    url: string
  }[]
}

export type NavbarConfig = {
  navMain: NavbarItem[]
  navSecondary?: NavbarItem[]
}
