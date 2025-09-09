'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SearchBar } from '@/components/ui/search-bar';
import { SortModal } from '@/components/ui/sort-modal';
import { FiltersModal } from '@/components/ui/filters-modal';
import { 
  Calendar, 
  MapPin, 
  Download, 
  Trophy,
  Clock,
  CheckCircle,
  User
} from 'lucide-react';

interface Event {
  id: string;
  name: string;
  date: string;
  distance: string;
  status: 'registered' | 'completed' | 'upcoming';
  bibNumber?: string;
  certificateAvailable: boolean;
  location: string;
  eventType: string;
  finishTime?: string;
  position?: number;
}

export default function MyEventsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'table' | 'list'>('table');
  
  // Modal states
  const [sortModalOpen, setSortModalOpen] = useState(false);
  const [filtersModalOpen, setFiltersModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState('date');
  const [filters, setFilters] = useState({
    dateRange: { start: '', end: '' },
    priceRange: { min: 0, max: 1000 },
    selectedStatuses: [] as string[],
  });

  // Mock event data
  const events: Event[] = [
    {
      id: '1',
      name: 'Central Park 10K Run',
      date: '2024-03-15',
      distance: '10K',
      status: 'upcoming',
      bibNumber: 'CP-2024-001',
      certificateAvailable: false,
      location: 'Central Park, New York',
      eventType: 'Road Running'
    },
    {
      id: '2',
      name: 'Brooklyn Half Marathon',
      date: '2024-02-28',
      distance: 'Half Marathon',
      status: 'completed',
      bibNumber: 'BHM-2024-045',
      certificateAvailable: true,
      location: 'Brooklyn, New York',
      eventType: 'Road Running',
      finishTime: '1:45:32',
      position: 45
    },
    {
      id: '3',
      name: 'Manhattan 5K Fun Run',
      date: '2024-02-10',
      distance: '5K',
      status: 'completed',
      bibNumber: 'M5K-2024-123',
      certificateAvailable: true,
      location: 'Manhattan, New York',
      eventType: 'Fun Run',
      finishTime: '22:15',
      position: 12
    },
    {
      id: '4',
      name: 'Trail Running Challenge',
      date: '2024-04-20',
      distance: '15K',
      status: 'registered',
      bibNumber: 'TRC-2024-078',
      certificateAvailable: false,
      location: 'Bear Mountain, NY',
      eventType: 'Trail Running'
    },
    {
      id: '5',
      name: 'NYC Marathon',
      date: '2024-11-03',
      distance: 'Marathon',
      status: 'registered',
      certificateAvailable: false,
      location: 'New York City',
      eventType: 'Marathon'
    },
    {
      id: '6',
      name: 'Queens 10K',
      date: '2024-01-15',
      distance: '10K',
      status: 'completed',
      bibNumber: 'Q10K-2024-089',
      certificateAvailable: true,
      location: 'Queens, New York',
      eventType: 'Road Running',
      finishTime: '48:22',
      position: 89
    }
  ];

  const getStatusBadge = (status: Event['status']) => {
    switch (status) {
      case 'completed':
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            <CheckCircle className="h-3 w-3 mr-1" />
            Completed
          </Badge>
        );
      case 'upcoming':
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            <Clock className="h-3 w-3 mr-1" />
            Upcoming
          </Badge>
        );
      case 'registered':
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            <User className="h-3 w-3 mr-1" />
            Registered
          </Badge>
        );
      default:
        return null;
    }
  };

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || event.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleDownloadCertificate = (eventId: string) => {
    // TODO: Implement actual certificate download
    console.log('Downloading certificate for event:', eventId);
    alert('Certificate download will be implemented soon!');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
      <div>
          <h1 className="text-3xl font-bold text-foreground">My Events</h1>
          <p className="text-muted-foreground mt-2">
            Track your running journey and event history
          </p>
        </div>
      </div>

      {/* Modern Search and Filters */}
      <Card className="neumorphic-card">
        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Modern Search Bar */}
            <SearchBar
              placeholder="Search events by name or location..."
              value={searchTerm}
              onChange={setSearchTerm}
              onSortClick={() => setSortModalOpen(true)}
              onFilterClick={() => setFiltersModalOpen(true)}
              sortActive={sortBy !== 'date'}
              filterActive={!!(statusFilter !== 'all' || filters.dateRange.start || filters.dateRange.end || filters.selectedStatuses.length > 0)}
            />

            {/* Quick Filter Pills and View Toggle */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Quick Filter Pills - Hidden on mobile */}
              <div className="hidden md:flex flex-wrap gap-2">
                {['Upcoming', 'Registered', 'Completed'].map(status => (
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
              
              <div className="flex border rounded-md">
                <Button
                  variant={viewMode === 'table' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('table')}
                  className="rounded-r-none"
                >
                  Table
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  List
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Events Display */}
      {viewMode === 'table' ? (
        <Card className="neumorphic-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Event History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">Event Name</th>
                    <th className="text-left p-3 font-medium">Date</th>
                    <th className="text-left p-3 font-medium">Distance</th>
                    <th className="text-left p-3 font-medium">Location</th>
                    <th className="text-left p-3 font-medium">Status</th>
                    <th className="text-left p-3 font-medium">Bib Number</th>
                    <th className="text-left p-3 font-medium">Results</th>
                    <th className="text-left p-3 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEvents.map((event) => (
                    <tr key={event.id} className="border-b hover:bg-muted/50">
                      <td className="p-3">
                        <div>
                          <div className="font-medium text-foreground">{event.name}</div>
                          <div className="text-sm text-muted-foreground">{event.eventType}</div>
                        </div>
                      </td>
                      <td className="p-3 text-sm">{formatDate(event.date)}</td>
                      <td className="p-3">
                        <Badge variant="outline">{event.distance}</Badge>
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-1 text-sm">
                          <MapPin className="h-3 w-3" />
                          {event.location}
                        </div>
                      </td>
                      <td className="p-3">{getStatusBadge(event.status)}</td>
                      <td className="p-3 text-sm font-mono">
                        {event.bibNumber || 'TBD'}
                      </td>
                      <td className="p-3">
                        {event.status === 'completed' && event.finishTime ? (
                          <div className="text-sm">
                            <div className="font-medium">{event.finishTime}</div>
                            {event.position && (
                              <div className="text-muted-foreground">#{event.position}</div>
                            )}
                          </div>
                        ) : (
                          <span className="text-muted-foreground text-sm">-</span>
                        )}
                      </td>
                      <td className="p-3">
                        {event.certificateAvailable && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDownloadCertificate(event.id)}
                            className="flex items-center gap-1"
                          >
                            <Download className="h-3 w-3" />
                            Certificate
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="neumorphic-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{event.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{event.eventType}</p>
                  </div>
                  {getStatusBadge(event.status)}
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  {formatDate(event.date)}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  {event.location}
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{event.distance}</Badge>
                  {event.bibNumber && (
                    <span className="text-sm font-mono text-muted-foreground">
                      Bib: {event.bibNumber}
                    </span>
                  )}
                </div>
                {event.status === 'completed' && event.finishTime && (
                  <div className="flex items-center gap-2 text-sm">
                    <Trophy className="h-4 w-4 text-yellow-600" />
                    <span className="font-medium">{event.finishTime}</span>
                    {event.position && (
                      <span className="text-muted-foreground">(#{event.position})</span>
                    )}
                  </div>
                )}
                {event.certificateAvailable && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDownloadCertificate(event.id)}
                    className="w-full flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Download Certificate
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredEvents.length === 0 && (
        <Card className="neumorphic-card">
          <CardContent className="text-center py-12">
            <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              No Events Found
            </h3>
            <p className="text-muted-foreground">
              {searchTerm || statusFilter !== 'all'
                ? 'Try adjusting your search or filter criteria.'
                : 'You haven\'t registered for any events yet.'}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Sort Modal */}
      <SortModal
        open={sortModalOpen}
        onOpenChange={setSortModalOpen}
        options={[
          { value: 'date', label: 'Sort by Date' },
          { value: 'name', label: 'Sort by Name' },
          { value: 'status', label: 'Sort by Status' },
          { value: 'distance', label: 'Sort by Distance' },
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
          setStatusFilter('all');
        }}
        statusOptions={[
          { value: 'upcoming', label: 'Upcoming' },
          { value: 'registered', label: 'Registered' },
          { value: 'completed', label: 'Completed' },
        ]}
        initialFilters={filters}
      />
    </div>
  );
}