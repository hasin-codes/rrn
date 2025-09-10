'use client';

import Image from 'next/image';
import { useMemo } from 'react';
import PatternedContainer from '@/components/ui/patterned-container';
import { MapPin } from 'lucide-react';

export default function EventsPage() {

  const upcomingEvents = [
    {
      title: "RunRise Nation 15K Challenge",
      date: "15 Feb 2025",
      time: "6:00 AM",
      location: "Central Park, Dhaka",
      description: "Join us for our signature 15K challenge featuring scenic routes through the heart of the city. Perfect for intermediate runners looking to push their limits.",
      price: "৳1,500",
      participants: 150,
      totalParticipants: 200,
      category: "Challenge",
      level: "Marathon",
      subLevel: "Challenge",
      eventType: "Live",
      distance: "15K",
      isOnline: false,
      avatars: [
        "/ui/1.png",
        "/ui/2.png", 
        "/ui/3.png"
      ],
      mainImage: "/ui/hero.png"
    },
    {
      title: "Spring Marathon 2025",
      date: "22 Mar 2025", 
      time: "5:30 AM",
      location: "Hatirjheel, Dhaka",
      description: "Our annual spring marathon featuring full marathon, half marathon, and 10K categories. Experience the beauty of spring in Dhaka.",
      price: "৳2,500",
      participants: 89,
      totalParticipants: 150,
      category: "Marathon",
      level: "Marathon",
      subLevel: "Marathon",
      eventType: "Live",
      distance: "42K",
      isOnline: false,
      avatars: [
        "/ui/1.png",
        "/ui/2.png",
        "/ui/3.png"
      ],
      mainImage: "/ui/hero.png"
    },
    {
      title: "Virtual Running Workshop",
      date: "9 Jan 2025",
      time: "2:00 AM", 
      location: "Online Event",
      description: "Join our expert trainers for an interactive online workshop covering running techniques, injury prevention, and nutrition tips.",
      price: "৳500",
      participants: 2534,
      totalParticipants: 5000,
      category: "Training",
      level: "Training",
      subLevel: "Workshop",
      eventType: "Virtual",
      distance: "7K",
      isOnline: true,
      avatars: [
        "/ui/1.png",
        "/ui/2.png",
        "/ui/3.png"
      ],
      mainImage: "/ui/hero.png"
    },
    {
      title: "Night Run Series",
      date: "5 Apr 2025",
      time: "7:00 PM",
      location: "Dhanmondi Lake",
      description: "Experience running under the stars with our popular night run series. Glow sticks, music, and an unforgettable atmosphere.",
      price: "৳800",
      participants: 45,
      totalParticipants: 100,
      category: "Fun Run",
      level: "Fun Run",
      subLevel: "Night Run",
      eventType: "Live",
      distance: "5K",
      isOnline: false,
      avatars: [
        "/ui/1.png",
        "/ui/2.png",
        "/ui/3.png"
      ],
      mainImage: "/ui/hero.png"
    }
  ];

  // Only keep two events to display: Spring Marathon and Night Run
  const topEvents = useMemo(() => [upcomingEvents[1], upcomingEvents[3]].filter(Boolean), [upcomingEvents]);

  return (
    <>
      {/* Events Overview Section */}
      <div className="w-full py-6 px-4 pt-16">
        <PatternedContainer className="space-y-8 px-4 sm:px-6 md:px-8 lg:px-16 py-6 sm:py-8" maxWidthClassName="max-w-7xl" variant="events">
          <div className="text-center space-y-4">
            <div className="inline-block px-4 py-2 bg-[#D5FFF8] border border-[#00D8D2] rounded backdrop-blur-sm">
              <span className="text-[#00827e] font-bold">Upcoming Events</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Join Our Events
            </h1>
            
            <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto">
              Discover exciting running events for every level in our community.
            </p>
          </div>

          {/* Events Grid */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 place-items-center">
              {topEvents.length > 0 ? (
                topEvents.map((event, index) => (
                <div key={index} className="event-card">
                  {/* Date Section */}
                  <div className="event-card-date-section">
                  <div className="event-card-date">
                    <div className="event-card-date-text">
                      {event.date}
                      </div>
                    </div>
                    <div className="event-card-level-text">
                      {event.level}
                    </div>
                    <div className="event-card-ongoing-text">
                      Ongoing
                    </div>
                  </div>

                  {/* Header Section */}
                  <div className="event-card-header">
                    <div className="event-card-labels">
                      <div className={`event-card-event-type event-card-event-type-${event.eventType.toLowerCase()}`}>
                        {event.eventType}
                      </div>
                      <div className={`event-card-distance event-card-distance-${event.distance.toLowerCase()}`}>
                        {event.distance}
                      </div>
                      {event.isOnline && (
                        <div className="event-card-online-indicator">
                          <div className="event-card-online-dot"></div>
                          <span className="event-card-online-text">Ongoing</span>
                        </div>
                      )}
                    </div>
                    <h2 className="event-card-title">{event.title}</h2>
                    <div className="event-card-time flex items-center justify-between">
                      <span>{event.time}</span>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <MapPin className="h-3 w-3" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Engagement Section */}
                  <div className="event-card-engagement-card">
                    <div className="event-card-participants">
                      <div className="event-card-avatars">
                        {event.avatars.map((avatar, avatarIndex) => (
                          <Image
                            key={avatarIndex}
                            src={avatar}
                            alt={`Participant ${avatarIndex + 1}`}
                            width={24}
                            height={24}
                            className="event-card-avatar"
                          />
                        ))}
                      </div>
                      <span className="event-card-count">
                        + {event.participants} registered
                      </span>
                    </div>
                    <span className="event-card-join-text">
                      Join Event
                    </span>
                  </div>

                  {/* Main Image Section */}
                  <div className="event-card-image-container">
                  <div className="event-card-image">
                    <Image
                      src={event.mainImage}
                      alt={event.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                </div>
                ))
              ) : null}
              </div>
            </div>
        </PatternedContainer>
      </div>

      

    </>
  )
}


