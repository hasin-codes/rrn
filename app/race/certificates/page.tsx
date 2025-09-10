'use client';

import { useMemo } from 'react';
import PatternedContainer from '@/components/ui/patterned-container';
import RaceCard from '@/components/ui/race-card';

export default function CertificatesPage() {
  const upcomingEvents = [
    {
      title: 'RunRise Nation 15K Challenge',
      date: '15 Feb 2025',
      time: '6:00 AM',
      location: 'Central Park, Dhaka',
      eventType: 'Live',
      distance: '15K',
      level: 'Marathon',
    },
    {
      title: 'Spring Marathon 2025',
      date: '22 Mar 2025',
      time: '5:30 AM',
      location: 'Hatirjheel, Dhaka',
      eventType: 'Live',
      distance: '42K',
      level: 'Marathon',
    },
    {
      title: 'Virtual Running Workshop',
      date: '9 Jan 2025',
      time: '2:00 AM',
      location: 'Online Event',
      eventType: 'Virtual',
      distance: '7K',
      level: 'Training',
    },
    {
      title: 'Night Run Series',
      date: '5 Apr 2025',
      time: '7:00 PM',
      location: 'Dhanmondi Lake',
      eventType: 'Live',
      distance: '5K',
      level: 'Fun Run',
    },
  ];

  // Use the same two as Events (Spring Marathon and Night Run)
  const topEvents = useMemo(() => [upcomingEvents[1], upcomingEvents[3]].filter(Boolean), [upcomingEvents]);

  return (
    <>
      <div className="w-full py-6 px-4 pt-16">
        <PatternedContainer className="space-y-8 px-4 sm:px-6 md:px-8 lg:px-16 py-6 sm:py-8" maxWidthClassName="max-w-7xl" variant="events">
          <div className="relative z-10 space-y-8">
            <div className="text-center space-y-4">
              <div className="inline-block px-4 py-2 bg-[#D5FFF8] border border-[#00D8D2] rounded backdrop-blur-sm">
                <span className="text-[#00827e] font-bold">Race</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                Download Certificates
              </h1>

              <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto">
                Get your completion certificates for eligible events instantly.
              </p>
            </div>

            {/* Stack: Race Cards (no grid) */}
            <div className="max-w-4xl mx-auto space-y-8">
              {topEvents.map((event, index) => (
                <div key={index} className="w-full">
                  <RaceCard
                    title={event.title}
                    labels={[event.distance, event.eventType, 'Certificate', event.level]}
                    href="#"
                  />
                </div>
              ))}
            </div>
          </div>
        </PatternedContainer>
      </div>
    </>
  );
}
