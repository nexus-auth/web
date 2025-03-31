import { HomeSidebar } from '@/components/home-sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

interface Props {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: Props) {
  return (
    <SidebarProvider>
      <HomeSidebar />
      <SidebarInset className="px-16 py-12">{children}</SidebarInset>
    </SidebarProvider>
  )
}
