import React from 'react';
import Image from 'next/image';

const HEADER_ITEMS = [
  { text: "Training", alignment: "text-left" },
  { text: "Community", alignment: "text-center" },
  { text: "Running events 2025", alignment: "text-right" },
] as const;

const FOOTER_ITEMS = [
  { text: "View Pacers", alignment: "text-left" },
  { text: "Team", alignment: "text-right" },
] as const;

const HeaderItem = ({ text, alignment }: { text: string; alignment: string }) => (
  <div className={alignment}>
    <h3 className="text-sm lg:text-base xl:text-lg font-bold text-black">{text}</h3>
  </div>
);

const FooterItem = ({ text, alignment }: { text: string; alignment: string }) => (
  <div className={alignment}>
    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-black">{text}</h3>
  </div>
);

const EventsHeader = () => (
  <div className="grid grid-cols-3 py-3 px-6">
    {HEADER_ITEMS.map((item, index) => (
      <HeaderItem key={index} text={item.text} alignment={item.alignment} />
    ))}
  </div>
);

const EventsImage = () => (
  <div className="px-6 pb-2">
    <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
      <Image
        src="/ui/hero.png" 
        alt="Events hero" 
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
      />
    </div>
  </div>
);

const EventsFooter = () => (
  <div className="grid grid-cols-2 py-3 px-6">
    {FOOTER_ITEMS.map((item, index) => (
      <FooterItem key={index} text={item.text} alignment={item.alignment} />
    ))}
  </div>
);

export default function EventsSection() {
  return (
    <section className="w-full py-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="neumorphic-card overflow-hidden">
          <EventsHeader />
          <EventsImage />
          <EventsFooter />
        </div>
      </div>
    </section>
  );
}