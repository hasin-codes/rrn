import Image from "next/image";
import { Card } from "@/components/ui/card";

const BADGE_TEXTS = {
  main: "RunRise Nation",
  lastEvent: "Last Event",
  events: "Events",
  bootcamps: "Bootcamps",
  discounts: "Exclusive Discounts",
} as const;

const STATS = {
  engagement: 85,
  title: "One Track, Many Journeys",
  engagementTitle: "Community Engagement in Races",
  boundariesTitle: "Running Knows No Boundaries",
  boundariesText: "From every gender, race, and walk of life - our community thrives because every stride adds to the story.",
} as const;

const Badge = ({ text, className = "" }: { text: string; className?: string }) => (
  <div className={`inline-block px-3 py-1 bg-[#D5FFF8] border border-[#00D8D2] rounded-3xl ${className}`}>
    <span className="text-[#00827e] font-bold text-sm">{text}</span>
  </div>
);

const SectionHeader = () => (
  <div className="text-center space-y-6">
    <Badge text={BADGE_TEXTS.main} className="px-4 py-2" />
    <h2 className="text-3xl font-bold text-black">{STATS.title}</h2>
  </div>
);

const EngagementCard = () => (
  <div className="bg-white border-2 border-[#00827e] rounded-2xl p-6 backdrop-blur-md space-y-4">
    <Badge text={BADGE_TEXTS.lastEvent} />
    
    <h3 className="text-lg font-bold text-black text-center">
      {STATS.engagementTitle}
    </h3>
    
    <div className="text-center border-t border-black pt-4">
      <span className="text-4xl font-bold text-black">{STATS.engagement}</span>
      <span className="text-3xl text-[#00827e]">%</span>
    </div>
  </div>
);

const EventsCard = () => (
  <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
    <div className="h-32 relative">
      <Image 
        src="/ui/ola3.png" 
        alt="Events" 
        fill
        className="object-cover"
      />
    </div>
    
    <div className="p-6 space-y-4">
      <div className="flex flex-wrap gap-2">
        <Badge text={BADGE_TEXTS.events} />
        <Badge text={BADGE_TEXTS.bootcamps} />
      </div>
      
      <Badge text={BADGE_TEXTS.discounts} className="px-4 py-2" />
    </div>
  </div>
);

const BoundariesCard = () => (
  <div className="space-y-6">
    <div className="space-y-3">
      <h3 className="text-xl font-bold text-black">{STATS.boundariesTitle}</h3>
      <p className="text-sm text-gray-600">{STATS.boundariesText}</p>
    </div>
  </div>
);

const BottomStat = () => (
  <div className="text-center">
    <h3 className="text-lg font-bold text-[#00eaff]">{STATS.engagementTitle}</h3>
  </div>
);

export function StatsSection() {
  return (
    <section className="w-full py-4 px-4">
      <div className="max-w-7xl mx-auto">
        <Card className="neumorphic-card space-y-12">
          <SectionHeader />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <EngagementCard />
            <EventsCard />
            <BoundariesCard />
          </div>

          <BottomStat />
        </Card>
      </div>
    </section>
  );
}