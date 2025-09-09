'use client';

import Image from 'next/image';
import { useState, useMemo } from 'react';
import { SearchBar } from '@/components/ui/search-bar';
import { SortModal } from '@/components/ui/sort-modal';
import { MapPin } from 'lucide-react';

export default function EventsPage() {
  // Search and filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEventType, setSelectedEventType] = useState('all');
  const [selectedDistance, setSelectedDistance] = useState('all');
  const [selectedMonth, setSelectedMonth] = useState('all');
  
  // Modal/state
  const [sortModalOpen, setSortModalOpen] = useState(false);
  const [filtersModalOpen, setFiltersModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState('newest');

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

  // Filter events based on search and filter criteria
  const filteredEvents = useMemo(() => {
    let filtered = upcomingEvents.filter(event => {
      // Search filter
      const matchesSearch = searchQuery === '' || 
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase());

      // Event type filter
      const matchesEventType = selectedEventType === 'all' || 
        event.eventType.toLowerCase() === selectedEventType;

      // Distance filter
      const matchesDistance = selectedDistance === 'all' || 
        event.distance.toLowerCase() === selectedDistance;

      // Month filter
      const eventMonth = new Date(event.date).toLocaleString('en-US', { month: 'long' }).toLowerCase();
      const matchesMonth = selectedMonth === 'all' || eventMonth === selectedMonth;

      return matchesSearch && matchesEventType && matchesDistance && matchesMonth;
    });

    // Sort events
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'price-high':
          return parseInt(b.price.replace(/[^\d]/g, '')) - parseInt(a.price.replace(/[^\d]/g, ''));
        case 'price-low':
          return parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, ''));
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedEventType, selectedDistance, selectedMonth, sortBy]);

  // Get unique values for filter options
  const eventTypes = [...new Set(upcomingEvents.map(event => event.eventType))];
  const distances = [...new Set(upcomingEvents.map(event => event.distance))];
  const months = [...new Set(
    upcomingEvents.map(e => new Date(e.date).toLocaleString('en-US', { month: 'long' }))
  )];

  return (
    <>
      {/* Events Overview Section */}
      <div className="w-full py-4 px-4 pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="neumorphic-card overflow-hidden space-y-12">
            <div className="text-center space-y-6">
              <div className="inline-block px-4 py-2 bg-[#D5FFF8] border border-[#00D8D2] rounded backdrop-blur-sm">
                <span className="text-[#00827e] font-bold">Upcoming Events</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-black leading-tight">
                Join Our Events
              </h1>
              
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover exciting running events designed for every level. From fun runs to marathons, 
                join our community and challenge yourself in a supportive environment.
              </p>
            </div>

            {/* Search and Filter Section */}
            <div className="space-y-6">
              {/* Modern Search Bar */}
              <div className="max-w-2xl mx-auto">
                <SearchBar
                    placeholder="Search events by title, description, or location..."
                    value={searchQuery}
                  onChange={setSearchQuery}
                  onSortClick={() => setSortModalOpen(true)}
                  onFilterClick={() => setFiltersModalOpen(true)}
                  sortActive={sortBy !== 'newest'}
                  filterActive={selectedEventType !== 'all' || selectedDistance !== 'all' || selectedMonth !== 'all'}
                />
              </div>

              {/* Inline filter controls removed per request; filters available in modal via filter icon */}

            </div>

            {/* Events Grid */}
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event, index) => (
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
                ) : (
                  <div className="col-span-full text-center py-12">
                    <div className="text-gray-500 text-lg mb-4">
                      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">No events found</h3>
                    <p className="text-gray-500 mb-4">
                      Try adjusting your search criteria or filters to find more events.
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedEventType('all');
                        setSelectedDistance('all');
                        setSelectedMonth('all');
                      }}
                      className="px-6 py-2 bg-[#00D8D2] text-white rounded-lg hover:bg-[#00C4BE] transition-colors"
                    >
                      Clear All Filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sort Modal */}
      <SortModal
        open={sortModalOpen}
        onOpenChange={setSortModalOpen}
        options={[
          { value: 'newest', label: 'Newest' },
          { value: 'oldest', label: 'Oldest' },
          { value: 'price-high', label: 'Price: High to low' },
          { value: 'price-low', label: 'Price: Low to high' },
        ]}
        selectedValue={sortBy}
        onValueChange={setSortBy}
        onApply={() => {}}
      />

      {/* Filters Modal (inline) */}
      {filtersModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setFiltersModalOpen(false)}></div>
          <div className="relative z-10 w-full max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
              <button onClick={() => setFiltersModalOpen(false)} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Type chips */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Type</label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedEventType(selectedEventType === 'live' ? 'all' : 'live')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      selectedEventType === 'live' ? 'bg-[#22C55E] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Live
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedEventType(selectedEventType === 'virtual' ? 'all' : 'virtual')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      selectedEventType === 'virtual' ? 'bg-[#3B82F6] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Virtual
                  </button>
                </div>
              </div>

              {/* Month dropdown */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Month</label>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00D8D2] focus:border-transparent outline-none"
                >
                  <option value="all">All Months</option>
                  {months.map(month => (
                    <option key={month} value={month.toLowerCase()}>{month}</option>
                  ))}
                </select>
              </div>

              {/* Distance dropdown */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Distance</label>
                <select
                  value={selectedDistance}
                  onChange={(e) => setSelectedDistance(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00D8D2] focus:border-transparent outline-none"
                >
                  <option value="all">All Distances</option>
                  {distances.map(distance => (
                    <option key={distance} value={distance.toLowerCase()}>{distance}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedEventType('all');
                  setSelectedDistance('all');
                  setSelectedMonth('all');
                }}
                className="px-4 py-2 text-gray-700 hover:text-gray-900"
              >
                Clear All
              </button>
              <button
                onClick={() => setFiltersModalOpen(false)}
                className="px-5 py-2 bg-[#00D8D2] text-white rounded-lg hover:bg-[#00C4BE]"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      

    </>
  )
}


