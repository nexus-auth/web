import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/features/app/components/app-sidebar'

interface Props {
  children: React.ReactNode
}

export default function AppsLayout({ children }: Props) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="px-16 py-12">{children}</SidebarInset>
    </SidebarProvider>
  )
}
