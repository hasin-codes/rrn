'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SearchBar } from '@/components/ui/search-bar';
import { SortModal } from '@/components/ui/sort-modal';
import { FiltersModal } from '@/components/ui/filters-modal';
import { 
  MapPin, 
  Calendar, 
  Users, 
  DollarSign,
  ExternalLink,
  Star,
  Clock,
  Trophy,
  Zap,
  ChevronLeft,
  ChevronRight,
  SortAsc,
  SortDesc
} from 'lucide-react';

interface Event {
  id: string;
  name: string;
  date: string;
  distanceOptions: string[];
  location: string;
  organizer: string;
  type: 'virtual' | 'physical';
  fee: number;
  status: 'open' | 'closed' | 'full';
  discount?: number;
  description: string;
  maxParticipants?: number;
  currentParticipants?: number;
  featured?: boolean;
  category: string;
}

export default function AllEventsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [distanceFilter, setDistanceFilter] = useState<string>('all');
  const [locationFilter, setLocationFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  
  // Modal states
  const [sortModalOpen, setSortModalOpen] = useState(false);
  const [filtersModalOpen, setFiltersModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    dateRange: { start: '', end: '' },
    priceRange: { min: 0, max: 1000 },
    selectedStatuses: [] as string[],
  });

  // Mock events data
  const events: Event[] = [
    {
      id: '1',
      name: 'Central Park Spring Run',
      date: '2024-04-15',
      distanceOptions: ['5K', '10K', 'Half Marathon'],
      location: 'New York, NY',
      organizer: 'NYC Running Club',
      type: 'physical',
      fee: 45,
      status: 'open',
      discount: 10,
      description: 'Join us for a beautiful spring run through Central Park',
      maxParticipants: 500,
      currentParticipants: 234,
      featured: true,
      category: 'Road Running'
    },
    {
      id: '2',
      name: 'Virtual Marathon Challenge',
      date: '2024-04-20',
      distanceOptions: ['Marathon', 'Half Marathon'],
      location: 'Virtual',
      organizer: 'Global Running Events',
      type: 'virtual',
      fee: 25,
      status: 'open',
      description: 'Run your marathon anywhere in the world',
      maxParticipants: 1000,
      currentParticipants: 567,
      featured: false,
      category: 'Virtual'
    },
    {
      id: '3',
      name: 'Brooklyn Bridge 10K',
      date: '2024-04-25',
      distanceOptions: ['10K'],
      location: 'Brooklyn, NY',
      organizer: 'Brooklyn Runners',
      type: 'physical',
      fee: 35,
      status: 'open',
      description: 'Iconic run across the Brooklyn Bridge',
      maxParticipants: 300,
      currentParticipants: 298,
      featured: false,
      category: 'Road Running'
    },
    {
      id: '4',
      name: 'Trail Running Adventure',
      date: '2024-05-01',
      distanceOptions: ['15K', '25K', '50K'],
      location: 'Bear Mountain, NY',
      organizer: 'Mountain Trail Runners',
      type: 'physical',
      fee: 65,
      status: 'open',
      discount: 15,
      description: 'Challenging trail run through mountain terrain',
      maxParticipants: 150,
      currentParticipants: 89,
      featured: true,
      category: 'Trail Running'
    },
    {
      id: '5',
      name: 'Sunset 5K Fun Run',
      date: '2024-05-05',
      distanceOptions: ['5K'],
      location: 'Manhattan, NY',
      organizer: 'Fun Run Events',
      type: 'physical',
      fee: 20,
      status: 'full',
      description: 'Family-friendly evening run with post-race party',
      maxParticipants: 200,
      currentParticipants: 200,
      featured: false,
      category: 'Fun Run'
    },
    {
      id: '6',
      name: 'Virtual 5K Series',
      date: '2024-05-10',
      distanceOptions: ['5K'],
      location: 'Virtual',
      organizer: 'Virtual Running Co',
      type: 'virtual',
      fee: 15,
      status: 'open',
      description: 'Monthly virtual 5K with themed medals',
      maxParticipants: 500,
      currentParticipants: 123,
      featured: false,
      category: 'Virtual'
    }
  ];

  const getStatusBadge = (status: Event['status']) => {
    switch (status) {
      case 'open':
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            Open
          </Badge>
        );
      case 'closed':
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
            Closed
          </Badge>
        );
      case 'full':
        return (
          <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
            Full
          </Badge>
        );
      default:
        return null;
    }
  };

  const getTypeBadge = (type: Event['type']) => {
    return type === 'virtual' ? (
      <Badge variant="outline" className="bg-blue-50 text-blue-600">
        Virtual
      </Badge>
    ) : (
      <Badge variant="outline" className="bg-purple-50 text-purple-600">
        Physical
      </Badge>
    );
  };

  const filteredAndSortedEvents = useMemo(() => {
    let filtered = events.filter(event => {
      const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.organizer.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesDistance = distanceFilter === 'all' || 
                             event.distanceOptions.some(d => d.toLowerCase().includes(distanceFilter.toLowerCase()));
      
      const matchesLocation = locationFilter === 'all' || 
                             event.location.toLowerCase().includes(locationFilter.toLowerCase());
      
      const matchesStatus = statusFilter === 'all' || event.status === statusFilter;
      const matchesType = typeFilter === 'all' || event.type === typeFilter;
      
      return matchesSearch && matchesDistance && matchesLocation && matchesStatus && matchesType;
    });

    // Sort events
    filtered.sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (sortBy) {
        case 'date':
          aValue = new Date(a.date).getTime();
          bValue = new Date(b.date).getTime();
          break;
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'fee':
          aValue = a.fee;
          bValue = b.fee;
          break;
        case 'participants':
          aValue = a.currentParticipants || 0;
          bValue = b.currentParticipants || 0;
          break;
        default:
          aValue = new Date(a.date).getTime();
          bValue = new Date(b.date).getTime();
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [events, searchTerm, distanceFilter, locationFilter, statusFilter, typeFilter, sortBy, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedEvents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedEvents = filteredAndSortedEvents.slice(startIndex, endIndex);

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleJoinEvent = (eventId: string) => {
    // TODO: Implement event registration
    console.log('Joining event:', eventId);
    alert('Event registration will be implemented soon!');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatFee = (fee: number, discount?: number) => {
    if (discount) {
      const discountedFee = fee * (1 - discount / 100);
      return (
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-green-600">${discountedFee.toFixed(0)}</span>
          <span className="text-sm text-muted-foreground line-through">${fee}</span>
          <Badge className="bg-red-100 text-red-600 text-xs">
            -{discount}%
          </Badge>
        </div>
      );
    }
    return <span className="text-lg font-semibold">${fee}</span>;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">All Running Events</h1>
          <p className="text-muted-foreground mt-2">
            Discover and join amazing running events near you
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date">Sort by Date</SelectItem>
              <SelectItem value="name">Sort by Name</SelectItem>
              <SelectItem value="fee">Sort by Fee</SelectItem>
              <SelectItem value="participants">Sort by Participants</SelectItem>
            </SelectContent>
          </Select>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            className="flex items-center gap-1"
          >
            {sortOrder === 'asc' ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Modern Search and Filters */}
      <Card className="neumorphic-card">
        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Modern Search Bar */}
            <SearchBar
              placeholder="Search events, locations, or organizers..."
              value={searchTerm}
              onChange={setSearchTerm}
              onSortClick={() => setSortModalOpen(true)}
              onFilterClick={() => setFiltersModalOpen(true)}
              sortActive={sortBy !== 'date'}
              filterActive={!!(distanceFilter !== 'all' || locationFilter !== 'all' || statusFilter !== 'all' || typeFilter !== 'all' || filters.dateRange.start || filters.dateRange.end || filters.priceRange.min > 0 || filters.priceRange.max < 1000 || filters.selectedStatuses.length > 0)}
            />

            {/* Quick Filter Pills - Hidden on mobile */}
            <div className="hidden md:flex flex-wrap gap-2">
              {['5K', '10K', 'Half Marathon', 'Marathon'].map(distance => (
                <button
                  key={distance}
                  onClick={() => setDistanceFilter(distanceFilter === distance.toLowerCase() ? 'all' : distance.toLowerCase())}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    distanceFilter === distance.toLowerCase()
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {distance}
                </button>
              ))}
              {['Physical', 'Virtual'].map(type => (
                <button
                  key={type}
                  onClick={() => setTypeFilter(typeFilter === type.toLowerCase() ? 'all' : type.toLowerCase())}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    typeFilter === type.toLowerCase()
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {type}
                </button>
              ))}
              {['Open', 'Closed', 'Full'].map(status => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(statusFilter === status.toLowerCase() ? 'all' : status.toLowerCase())}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    statusFilter === status.toLowerCase()
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {status}
                </button>
              ))}
          </div>
          </div>
        </CardContent>
      </Card>

      {/* Events Table */}
      <Card className="neumorphic-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5" />
            Available Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-medium">Event Details</th>
                  <th 
                    className="text-left p-4 font-medium cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => handleSort('date')}
                  >
                    <div className="flex items-center gap-1">
                      Date
                      {sortBy === 'date' && (
                        sortOrder === 'asc' ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />
                      )}
                    </div>
                  </th>
                  <th className="text-left p-4 font-medium">Distance</th>
                  <th className="text-left p-4 font-medium">Location</th>
                  <th 
                    className="text-left p-4 font-medium cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => handleSort('name')}
                  >
                    <div className="flex items-center gap-1">
                      Organizer
                      {sortBy === 'name' && (
                        sortOrder === 'asc' ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />
                      )}
                    </div>
                  </th>
                  <th className="text-left p-4 font-medium">Type</th>
                  <th 
                    className="text-left p-4 font-medium cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => handleSort('fee')}
                  >
                    <div className="flex items-center gap-1">
                      Fee
                      {sortBy === 'fee' && (
                        sortOrder === 'asc' ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />
                      )}
                    </div>
                  </th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedEvents.map((event) => (
                  <tr key={event.id} className="border-b hover:bg-muted/50 transition-colors">
                   <td className="p-4">
                     <div className="flex items-start gap-3">
                       {event.featured && (
                         <Star className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                       )}
                       <div>
                         <div className="font-medium text-foreground">{event.name}</div>
                         <div className="text-sm text-muted-foreground mt-1">
                           {event.description}
                         </div>
                         {event.maxParticipants && (
                           <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                             <Users className="h-3 w-3" />
                             {event.currentParticipants}/{event.maxParticipants} participants
                           </div>
                         )}
                       </div>
                     </div>
                   </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        {formatDate(event.date)}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1">
                        {event.distanceOptions.map((distance, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {distance}
                          </Badge>
                        ))}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        {event.location}
                      </div>
                    </td>
                    <td className="p-4 text-sm">{event.organizer}</td>
                    <td className="p-4">{getTypeBadge(event.type)}</td>
                    <td className="p-4">
                      {formatFee(event.fee, event.discount)}
                    </td>
                    <td className="p-4">{getStatusBadge(event.status)}</td>
                    <td className="p-4">
                      <Button
                        size="sm"
                        onClick={() => handleJoinEvent(event.id)}
                        disabled={event.status === 'closed' || event.status === 'full'}
                        className="flex items-center gap-1"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {event.status === 'full' ? 'Full' : 'Join'}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-6 pt-4 border-t">
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>
                
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      size="sm"
                      variant={currentPage === page ? "default" : "outline"}
                      onClick={() => handlePageChange(page)}
                      className="w-8 h-8 p-0"
                    >
                      {page}
                    </Button>
                  ))}
      </div>

                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-1"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
      </div>
    </div>
          )}

          {/* Empty State */}
          {filteredAndSortedEvents.length === 0 && (
            <div className="text-center py-12">
              <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No Events Found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria to find more events.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Sort Modal */}
      <SortModal
        open={sortModalOpen}
        onOpenChange={setSortModalOpen}
        options={[
          { value: 'date', label: 'Sort by Date' },
          { value: 'name', label: 'Sort by Name' },
          { value: 'fee', label: 'Sort by Fee' },
          { value: 'participants', label: 'Sort by Participants' },
        ]}
        selectedValue={sortBy}
        onValueChange={setSortBy}
        onApply={() => {}}
      />

      {/* Filters Modal */}
      <FiltersModal
        open={filtersModalOpen}
        onOpenChange={setFiltersModalOpen}
        onApply={(newFilters) => setFilters(newFilters)}
        onReset={() => {
          setFilters({
            dateRange: { start: '', end: '' },
            priceRange: { min: 0, max: 1000 },
            selectedStatuses: [],
          });
          setDistanceFilter('all');
          setLocationFilter('all');
          setStatusFilter('all');
          setTypeFilter('all');
        }}
        statusOptions={[
          { value: 'open', label: 'Open' },
          { value: 'closed', label: 'Closed' },
          { value: 'full', label: 'Full' },
        ]}
        initialFilters={filters}
      />
    </div>
  );
}
