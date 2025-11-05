'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { User, Save, Edit3 } from 'lucide-react';

export default function MyProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    gender: 'male',
    phoneNumber: '+1 234 567 8900',
    dateOfBirth: '1990-05-15',
    age: '34',
    facebookProfile: 'john.doe.fb',
    deliveryAddress: '123 Main Street, Apt 4B',
    district: 'Manhattan',
    occupation: 'Software Engineer',
    institutionCompany: 'Tech Corp Inc.',
    specialSkills: 'Web Development, UI/UX Design',
    preferredDistance: '10K',
    preferredEventType: 'Road Running',
    wantToBeOrganizer: 'yes',
    eventsParticipated: '8',
    recommendations: 'Add more beginner-friendly events and training programs',
    tshirtSize: 'L',
    profilePhoto: 'https://github.com/shadcn.png'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    console.log('Saving profile data:', formData);
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({
          ...prev,
          profilePhoto: e.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const initials = formData.fullName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Profile</h1>
          <p className="text-muted-foreground mt-2">
            Manage your personal information and preferences
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-blue-50 text-blue-600">
            Member #RRN-2024-001
          </Badge>
          <Button
            variant={isEditing ? "default" : "outline"}
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2"
          >
            {isEditing ? <Save className="h-4 w-4" /> : <Edit3 className="h-4 w-4" />}
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </Button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* Profile Photo - Large Card */}
        <div className="md:col-span-2 lg:col-span-1 xl:col-span-1">
          <Card className="neumorphic-card h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <User className="h-5 w-5" />
                Profile Photo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={formData.profilePhoto} alt={formData.fullName} />
                  <AvatarFallback className="text-lg font-semibold">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                {isEditing && (
                  <div className="space-y-2 w-full">
                    <Label htmlFor="photo-upload" className="text-sm font-medium">
                      Upload Photo
                    </Label>
                    <Input
                      id="photo-upload"
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="text-sm"
                    />
                  </div>
                )}
                <p className="text-xs text-muted-foreground text-center">
                  For RUNRISE NATION website
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Basic Info */}
        <div className="md:col-span-1 lg:col-span-1 xl:col-span-1">
          <Card className="neumorphic-card h-full">
            <CardHeader>
              <CardTitle className="text-lg">Basic Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm">Full Name *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  disabled={!isEditing}
                  className="h-8"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  disabled={!isEditing}
                  className="h-8"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-sm">Phone (WhatsApp)</Label>
                <Input
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  disabled={!isEditing}
                  className="h-8"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Personal Details */}
        <div className="md:col-span-1 lg:col-span-1 xl:col-span-1">
          <Card className="neumorphic-card h-full">
            <CardHeader>
              <CardTitle className="text-lg">Personal Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="gender" className="text-sm">Gender</Label>
                <Select
                  value={formData.gender}
                  onValueChange={(value) => handleInputChange('gender', value)}
                  disabled={!isEditing}
                >
                  <SelectTrigger className="h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth" className="text-sm">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  disabled={!isEditing}
                  className="h-8"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age" className="text-sm">Age</Label>
                <Input
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                  disabled={!isEditing}
                  className="h-8"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Location & Social */}
        <div className="md:col-span-1 lg:col-span-1 xl:col-span-1">
          <Card className="neumorphic-card h-full">
            <CardHeader>
              <CardTitle className="text-lg">Location & Social</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="district" className="text-sm">District</Label>
                <Input
                  id="district"
                  value={formData.district}
                  onChange={(e) => handleInputChange('district', e.target.value)}
                  disabled={!isEditing}
                  className="h-8"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="facebookProfile" className="text-sm">Facebook Profile</Label>
                <Input
                  id="facebookProfile"
                  value={formData.facebookProfile}
                  onChange={(e) => handleInputChange('facebookProfile', e.target.value)}
                  disabled={!isEditing}
                  className="h-8"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deliveryAddress" className="text-sm">Delivery Address</Label>
                <Textarea
                  id="deliveryAddress"
                  value={formData.deliveryAddress}
                  onChange={(e) => handleInputChange('deliveryAddress', e.target.value)}
                  disabled={!isEditing}
                  rows={2}
                  className="text-sm"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Professional Info */}
        <div className="md:col-span-1 lg:col-span-1 xl:col-span-1">
          <Card className="neumorphic-card h-full">
            <CardHeader>
              <CardTitle className="text-lg">Professional</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="occupation" className="text-sm">Occupation</Label>
                <Input
                  id="occupation"
                  value={formData.occupation}
                  onChange={(e) => handleInputChange('occupation', e.target.value)}
                  disabled={!isEditing}
                  className="h-8"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="institutionCompany" className="text-sm">Company/Institution</Label>
                <Input
                  id="institutionCompany"
                  value={formData.institutionCompany}
                  onChange={(e) => handleInputChange('institutionCompany', e.target.value)}
                  disabled={!isEditing}
                  className="h-8"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="specialSkills" className="text-sm">Special Skills</Label>
                <Textarea
                  id="specialSkills"
                  value={formData.specialSkills}
                  onChange={(e) => handleInputChange('specialSkills', e.target.value)}
                  disabled={!isEditing}
                  rows={2}
                  className="text-sm"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Running Preferences */}
        <div className="md:col-span-1 lg:col-span-1 xl:col-span-1">
          <Card className="neumorphic-card h-full">
            <CardHeader>
              <CardTitle className="text-lg">Running Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="preferredDistance" className="text-sm">Preferred Distance</Label>
                <Select
                  value={formData.preferredDistance}
                  onValueChange={(value) => handleInputChange('preferredDistance', value)}
                  disabled={!isEditing}
                >
                  <SelectTrigger className="h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5K">5K</SelectItem>
                    <SelectItem value="10K">10K</SelectItem>
                    <SelectItem value="Half Marathon">Half Marathon (21K)</SelectItem>
                    <SelectItem value="Marathon">Marathon (42K)</SelectItem>
                    <SelectItem value="Ultra">Ultra Marathon</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferredEventType" className="text-sm">Event Type</Label>
                <Select
                  value={formData.preferredEventType}
                  onValueChange={(value) => handleInputChange('preferredEventType', value)}
                  disabled={!isEditing}
                >
                  <SelectTrigger className="h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Road Running">Road Running</SelectItem>
                    <SelectItem value="Trail Running">Trail Running</SelectItem>
                    <SelectItem value="Track Running">Track Running</SelectItem>
                    <SelectItem value="Cross Country">Cross Country</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="tshirtSize" className="text-sm">T-Shirt Size</Label>
                <Select
                  value={formData.tshirtSize}
                  onValueChange={(value) => handleInputChange('tshirtSize', value)}
                  disabled={!isEditing}
                >
                  <SelectTrigger className="h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="XS">XS</SelectItem>
                    <SelectItem value="S">S</SelectItem>
                    <SelectItem value="M">M</SelectItem>
                    <SelectItem value="L">L</SelectItem>
                    <SelectItem value="XL">XL</SelectItem>
                    <SelectItem value="XXL">XXL</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Community & Events */}
        <div className="md:col-span-1 lg:col-span-1 xl:col-span-1">
          <Card className="neumorphic-card h-full">
            <CardHeader>
              <CardTitle className="text-lg">Community & Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="eventsParticipated" className="text-sm">Events Participated</Label>
                <Input
                  id="eventsParticipated"
                  type="number"
                  value={formData.eventsParticipated}
                  onChange={(e) => handleInputChange('eventsParticipated', e.target.value)}
                  disabled={!isEditing}
                  className="h-8"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="wantToBeOrganizer" className="text-sm">Want to be Organizer?</Label>
                <Select
                  value={formData.wantToBeOrganizer}
                  onValueChange={(value) => handleInputChange('wantToBeOrganizer', value)}
                  disabled={!isEditing}
                >
                  <SelectTrigger className="h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes, I'm interested</SelectItem>
                    <SelectItem value="maybe">Maybe, tell me more</SelectItem>
                    <SelectItem value="no">No, not at this time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recommendations - Wide Card */}
        <div className="md:col-span-2 lg:col-span-2 xl:col-span-2">
          <Card className="neumorphic-card h-full">
            <CardHeader>
              <CardTitle className="text-lg">Community Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="recommendations" className="text-sm">
                  Any recommendation or ideas to make the community better and helpful for runners?
                </Label>
                <Textarea
                  id="recommendations"
                  value={formData.recommendations}
                  onChange={(e) => handleInputChange('recommendations', e.target.value)}
                  disabled={!isEditing}
                  placeholder="Share your ideas to help improve the running community..."
                  rows={4}
                  className="text-sm"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Save Button */}
      {isEditing && (
        <div className="flex justify-end gap-4 mt-6">
          <Button
            variant="outline"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </Button>
          <Button onClick={handleSave} className="flex items-center gap-2">
            <Save className="h-4 w-4" />
            Save Changes
          </Button>
        </div>
      )}
    </div>
  );
}