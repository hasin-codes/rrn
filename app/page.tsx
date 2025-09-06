import { HeroSection } from '@/components/HeroSection'
import { EventsSection } from '@/components/EventsSection'
import { AboutSection } from '@/components/AboutSection'
import { PacersSection } from '@/components/PacersSection'
import { StoriesSection } from '@/components/StoriesSection'
import { StatsSection } from '@/components/StatsSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="hidden lg:block">
        <EventsSection />
      </div>
      <div className="space-y-6 lg:space-y-8">
        <AboutSection />
        <PacersSection />
        <StoriesSection />
        <StatsSection />
      </div>
    </>
  )
}