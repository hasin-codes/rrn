"use client";

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './dialog';
import { Button } from './button';
import { Input } from './input';
import { Slider } from './slider';
import { Switch } from './switch';
import { Calendar, Star, Users, User, FileText, Building, Check } from 'lucide-react';
import { cn } from './utils';

interface CategoryOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
  selected?: boolean;
}

interface ProjectFiltersModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onApply: (filters: {
    projectType: string;
    startDate: string;
    dueDate: string;
    rating: number;
    categories: string[];
    showCompleted: boolean;
    assignedToMe: boolean;
  }) => void;
  onCancel: () => void;
  initialFilters?: {
    projectType: string;
    startDate: string;
    dueDate: string;
    rating: number;
    categories: string[];
    showCompleted: boolean;
    assignedToMe: boolean;
  };
  projectTypes?: string[];
  categories?: CategoryOption[];
  title?: string;
}

export function ProjectFiltersModal({
  open,
  onOpenChange,
  onApply,
  onCancel,
  initialFilters,
  projectTypes = ['CRM', 'Ecommerce', 'Mobile'],
  categories = [
    { value: 'teams', label: 'Teams', icon: <Users className="h-4 w-4" /> },
    { value: 'tasks', label: 'Tasks', icon: <Check className="h-4 w-4" /> },
    { value: 'creators', label: 'Creators', icon: <User className="h-4 w-4" /> },
    { value: 'notes', label: 'Notes', icon: <FileText className="h-4 w-4" /> },
    { value: 'priority', label: 'Priority', icon: <Star className="h-4 w-4" /> },
    { value: 'companies', label: 'Companies', icon: <Building className="h-4 w-4" /> },
    { value: 'projects', label: 'Projects', icon: <FileText className="h-4 w-4" /> },
  ],
  title = "Projects",
}: ProjectFiltersModalProps) {
  const [projectType, setProjectType] = useState(
    initialFilters?.projectType || projectTypes[0]
  );
  const [startDate, setStartDate] = useState(
    initialFilters?.startDate || ''
  );
  const [dueDate, setDueDate] = useState(
    initialFilters?.dueDate || ''
  );
  const [rating, setRating] = useState(
    initialFilters?.rating || 4.5
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialFilters?.categories || []
  );
  const [showCompleted, setShowCompleted] = useState(
    initialFilters?.showCompleted || true
  );
  const [assignedToMe, setAssignedToMe] = useState(
    initialFilters?.assignedToMe || false
  );

  const handleCategoryToggle = (value: string) => {
    setSelectedCategories(prev =>
      prev.includes(value)
        ? prev.filter(cat => cat !== value)
        : [...prev, value]
    );
  };

  const handleApply = () => {
    onApply({
      projectType,
      startDate,
      dueDate,
      rating,
      categories: selectedCategories,
      showCompleted,
      assignedToMe,
    });
    onOpenChange(false);
  };

  const handleCancel = () => {
    onCancel();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center">{title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Project Types */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-foreground">Projects</h3>
            <div className="flex flex-wrap gap-2">
              {projectTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setProjectType(type)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    projectType === type
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Project Deadline */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-foreground">Project deadline due</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs text-muted-foreground">Start date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs text-muted-foreground">Due date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Project Rating */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-foreground">Project rating</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Star className="h-4 w-4 text-muted-foreground" />
                <Input
                  type="number"
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                  className="w-20"
                  min="0"
                  max="5"
                  step="0.1"
                />
                <span className="text-sm text-muted-foreground">/ 5.0</span>
              </div>
              <Slider
                value={[rating]}
                onValueChange={(value) => setRating(value[0])}
                max={5}
                min={0}
                step={0.1}
                className="w-full"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-foreground">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => handleCategoryToggle(category.value)}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-colors",
                    selectedCategories.includes(category.value)
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  {category.icon}
                  {category.label}
                  {selectedCategories.includes(category.value) && (
                    <Check className="h-3 w-3" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* More Options */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-foreground">More options</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Show completed projects</span>
                <Switch
                  checked={showCompleted}
                  onCheckedChange={setShowCompleted}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Display projects assigned to me</span>
                <Switch
                  checked={assignedToMe}
                  onCheckedChange={setAssignedToMe}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-4 border-t">
          <Button
            onClick={handleCancel}
            variant="outline"
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            onClick={handleApply}
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Apply
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
