'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, User, Wifi, WifiOff } from 'lucide-react';

interface ProfileCardProps {
  name: string;
  email: string;
  membershipNumber: string;
  avatarUrl?: string;
  stravaConnected: boolean;
  onConnectStrava?: () => void;
}

export function ProfileCard({
  name,
  email,
  membershipNumber,
  avatarUrl,
  stravaConnected,
  onConnectStrava,
}: ProfileCardProps) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <Card className="neumorphic-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg font-semibold">
          <User className="h-5 w-5" />
          Profile Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Profile Info */}
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback className="text-lg font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground">{email}</p>
            <p className="text-xs text-muted-foreground mt-1">
              Member #{membershipNumber}
            </p>
          </div>
        </div>

        {/* Strava Status */}
        <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
          <div className="flex items-center gap-2">
            {stravaConnected ? (
              <Wifi className="h-4 w-4 text-green-600" />
            ) : (
              <WifiOff className="h-4 w-4 text-muted-foreground" />
            )}
            <span className="text-sm font-medium">Strava Integration</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant={stravaConnected ? 'default' : 'secondary'}
              className={
                stravaConnected
                  ? 'bg-green-100 text-green-800 hover:bg-green-100'
                  : 'bg-orange-100 text-orange-600 hover:bg-orange-100'
              }
            >
              {stravaConnected ? 'Connected' : 'Coming Soon'}
            </Badge>
            {!stravaConnected && onConnectStrava && (
              <Button
                size="sm"
                variant="outline"
                onClick={onConnectStrava}
                className="h-7 px-3 text-xs"
              >
                <ExternalLink className="h-3 w-3 mr-1" />
                Preview
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
