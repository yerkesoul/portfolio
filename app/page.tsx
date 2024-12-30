import AppSidebar from '@/components/AppSidebar'
import Hero from '@/components/Hero'
import MainContent from '@/components/MainContent'
import { SidebarInset } from '@/components/ui/sidebar'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <SidebarInset>
        <Hero />
        <MainContent />
      </SidebarInset>
    </div>
  )
}

