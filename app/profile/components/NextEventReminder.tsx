'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  distance: string;
  participants: number;
  maxParticipants?: number;
  status: 'upcoming' | 'today' | 'tomorrow';
  description?: string;
}

interface NextEventReminderProps {
  event: Event | null;
  onViewDetails?: (eventId: string) => void;
  onRegister?: (eventId: string) => void;
}

export function NextEventReminder({
  event,
  onViewDetails,
  onRegister,
}: NextEventReminderProps) {
  if (!event) {
    return (
      <Card className="neumorphic-card h-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg font-semibold">
            <Calendar className="h-5 w-5" />
            Next Event
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              No Upcoming Events
            </h3>
            <p className="text-muted-foreground mb-4">
              You don't have any events registered yet. Check out our upcoming events!
            </p>
            <Button variant="outline" className="w-full">
              <ExternalLink className="h-4 w-4 mr-2" />
              Browse Events
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const getStatusColor = (status: Event['status']) => {
    switch (status) {
      case 'today':
        return 'bg-red-100 text-red-800 hover:bg-red-100';
      case 'tomorrow':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100';
      default:
        return 'bg-blue-100 text-blue-800 hover:bg-blue-100';
    }
  };

  const getStatusText = (status: Event['status']) => {
    switch (status) {
      case 'today':
        return 'Today';
      case 'tomorrow':
        return 'Tomorrow';
      default:
        return 'Upcoming';
    }
  };

  return (
    <Card className="neumorphic-card h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg font-semibold">
            <Calendar className="h-5 w-5" />
            Next Event
          </CardTitle>
          <Badge className={getStatusColor(event.status)}>
            {getStatusText(event.status)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Event Title */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-1">
            {event.title}
          </h3>
          {event.description && (
            <p className="text-sm text-muted-foreground">
              {event.description}
            </p>
          )}
        </div>

        {/* Event Details */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">
              {event.date} at {event.time}
            </span>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">{event.location}</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">
              {event.participants}
              {event.maxParticipants && ` / ${event.maxParticipants}`} participants
            </span>
          </div>
        </div>

        {/* Distance Badge */}
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-muted/50">
            {event.distance}
          </Badge>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button
            onClick={() => onViewDetails?.(event.id)}
            className="flex-1"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            View Details
          </Button>
          {event.status === 'upcoming' && onRegister && (
            <Button
              variant="outline"
              onClick={() => onRegister(event.id)}
              className="flex-1"
            >
              Register
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
