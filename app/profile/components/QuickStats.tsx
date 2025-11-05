'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, BookOpen, TrendingUp } from 'lucide-react';

interface StatItem {
  label: string;
  value: string | number;
  icon: React.ComponentType<{ className?: string }>;
  bgColor: string;
  textColor: string;
}

interface QuickStatsProps {
  totalEvents: number;
  totalDistance: number;
  storiesShared: number;
  weeklyGoal?: number;
  weeklyProgress?: number;
}

export function QuickStats({
  totalEvents,
  totalDistance,
  storiesShared,
  weeklyGoal = 50,
  weeklyProgress = 0,
}: QuickStatsProps) {
  const stats: StatItem[] = [
    {
      label: 'Events Joined',
      value: totalEvents,
      icon: Calendar,
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
    },
    {
      label: 'Distance Run',
      value: `${totalDistance} km`,
      icon: MapPin,
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
    },
    {
      label: 'Stories Shared',
      value: storiesShared,
      icon: BookOpen,
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
    },
    {
      label: 'Weekly Progress',
      value: `${weeklyProgress}/${weeklyGoal} km`,
      icon: TrendingUp,
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
    },
  ];

  return (
    <Card className="neumorphic-card h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg font-semibold">
          <TrendingUp className="h-5 w-5" />
          Quick Stats
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className={`${stat.bgColor} p-4 rounded-lg border border-white/50`}
              >
                <div className="flex items-center justify-between mb-2">
                  <IconComponent className={`h-4 w-4 ${stat.textColor}`} />
                </div>
                <div className={`text-2xl font-bold ${stat.textColor} mb-1`}>
                  {stat.value}
                </div>
                <p className={`text-xs font-medium ${stat.textColor.replace('600', '900')}`}>
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {weeklyGoal > 0 && (
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">
                Weekly Goal Progress
              </span>
              <span className="text-sm text-muted-foreground">
                {Math.round((weeklyProgress / weeklyGoal) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${Math.min((weeklyProgress / weeklyGoal) * 100, 100)}%`,
                }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {weeklyProgress} of {weeklyGoal} km completed this week
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
