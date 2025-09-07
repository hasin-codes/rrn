import { HeroSection } from '@/components/HeroSection'
import EventsSection from '@/components/EventsSection'
import { AboutSection } from '@/components/AboutSection'
import { PacersSection } from '@/components/PacersSection'
import { StoriesSection } from '@/components/StoriesSection'
import { StatsSection } from '@/components/StatsSection'
import FlowingMenu from '@/components/FlowingMenu'

export default function Home() {
  const demoItems = [
    { 
      link: '#', 
      text: 'Limited slots left : RunRise Nation 15K', 
      image: '/ui/MEDAL.png' 
    },
  ];

  return (
    <>
      {/* FlowingMenu at the top of the page - positioned below navbar */}
      <div className="w-full pt-[120px]" style={{ height: '80px' }}>
        <FlowingMenu items={demoItems} />
      </div>
      
      <HeroSection />
      <div className="hidden lg:block">
        <EventsSection />
      </div>
      <div className="space-y-2">
        <AboutSection />
        <PacersSection />
        <StoriesSection />
        <StatsSection />
      </div>
    </>
  )
}