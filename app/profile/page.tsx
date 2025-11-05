'use client';

import { ProfileCard } from './components/ProfileCard';
import { QuickStats } from './components/QuickStats';
import { NextEventReminder } from './components/NextEventReminder';

export default function ProfileDashboard() {
  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    membershipNumber: 'RRN-2024-001',
    avatarUrl: 'https://github.com/shadcn.png',
    stravaConnected: false,
  };

  const userStats = {
    totalEvents: 8,
    totalDistance: 312,
    storiesShared: 3,
    weeklyGoal: 50,
    weeklyProgress: 28,
  };

  const nextEvent = {
    id: 'event-1',
    title: 'Morning Run in Central Park',
    date: 'March 15, 2024',
    time: '7:00 AM',
    location: 'Central Park, New York',
    distance: '5K',
    participants: 45,
    maxParticipants: 100,
    status: 'upcoming' as const,
    description: 'Join us for a refreshing morning run through the beautiful Central Park.',
  };

  const handleConnectStrava = () => {
    console.log('Strava integration will be implemented later...');
    alert('Strava integration coming soon! This feature will allow automatic sync of your running data.');
  };

  const handleViewEventDetails = (eventId: string) => {
    console.log('Viewing event details for:', eventId);
  };

  const handleRegisterForEvent = (eventId: string) => {
    console.log('Registering for event:', eventId);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-2">
          Welcome back, {userProfile.name}! Here's your running journey at a glance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <ProfileCard
            name={userProfile.name}
            email={userProfile.email}
            membershipNumber={userProfile.membershipNumber}
            avatarUrl={userProfile.avatarUrl}
            stravaConnected={userProfile.stravaConnected}
            onConnectStrava={handleConnectStrava}
          />
        </div>

        <div className="lg:col-span-1">
          <NextEventReminder
            event={nextEvent}
            onViewDetails={handleViewEventDetails}
            onRegister={handleRegisterForEvent}
          />
        </div>

        <div className="lg:col-span-1">
          <QuickStats
            totalEvents={userStats.totalEvents}
            totalDistance={userStats.totalDistance}
            storiesShared={userStats.storiesShared}
            weeklyGoal={userStats.weeklyGoal}
            weeklyProgress={userStats.weeklyProgress}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="neumorphic-card h-full flex flex-col">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Recent Activity
          </h3>
          <div className="space-y-3 flex-1">
            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <div>
                <p className="text-sm font-medium text-foreground">5K Morning Run</p>
                <p className="text-xs text-muted-foreground">March 12, 2024</p>
              </div>
              <span className="text-sm font-semibold text-green-600">5.2 km</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <div>
                <p className="text-sm font-medium text-foreground">Community Event</p>
                <p className="text-xs text-muted-foreground">March 10, 2024</p>
              </div>
              <span className="text-sm font-semibold text-blue-600">10 km</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <div>
                <p className="text-sm font-medium text-foreground">Story Published</p>
                <p className="text-xs text-muted-foreground">March 8, 2024</p>
              </div>
              <span className="text-sm font-semibold text-purple-600">1 story</span>
            </div>
          </div>
        </div>

        <div className="neumorphic-card h-full flex flex-col">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Recent Achievements
          </h3>
          <div className="space-y-3 flex-1">
            <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 text-sm">🏃</span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">First 10K</p>
                <p className="text-xs text-muted-foreground">Completed your first 10K run</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm">📚</span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Storyteller</p>
                <p className="text-xs text-muted-foreground">Shared your first story</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-sm">🎯</span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Goal Crusher</p>
                <p className="text-xs text-muted-foreground">Met weekly distance goal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
