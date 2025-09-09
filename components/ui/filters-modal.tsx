"use client";

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './dialog';
import { Button } from './button';
import { Input } from './input';
import { Calendar, DollarSign, Check } from 'lucide-react';
import { cn } from './utils';

interface FilterOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface DateRange {
  start: string;
  end: string;
}

interface PriceRange {
  min: number;
  max: number;
}

interface FiltersModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onApply: (filters: {
    dateRange: DateRange;
    priceRange: PriceRange;
    selectedStatuses: string[];
  }) => void;
  onReset: () => void;
  statusOptions: FilterOption[];
  initialFilters?: {
    dateRange: DateRange;
    priceRange: PriceRange;
    selectedStatuses: string[];
  };
  title?: string;
}

export function FiltersModal({
  open,
  onOpenChange,
  onApply,
  onReset,
  statusOptions,
  initialFilters,
  title = "Filters",
}: FiltersModalProps) {
  const [dateRange, setDateRange] = useState<DateRange>(
    initialFilters?.dateRange || { start: '', end: '' }
  );
  const [priceRange, setPriceRange] = useState<PriceRange>(
    initialFilters?.priceRange || { min: 0, max: 1000 }
  );
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>(
    initialFilters?.selectedStatuses || []
  );

  const handleStatusToggle = (value: string) => {
    setSelectedStatuses(prev =>
      prev.includes(value)
        ? prev.filter(status => status !== value)
        : [...prev, value]
    );
  };

  const handleApply = () => {
    onApply({
      dateRange,
      priceRange,
      selectedStatuses,
    });
    onOpenChange(false);
  };

  const handleReset = () => {
    setDateRange({ start: '', end: '' });
    setPriceRange({ min: 0, max: 1000 });
    setSelectedStatuses([]);
    onReset();
  };

  const handleClearAll = () => {
    setDateRange({ start: '', end: '' });
    setPriceRange({ min: 0, max: 1000 });
    setSelectedStatuses([]);
  };

  const activeFiltersCount = selectedStatuses.length + 
    (dateRange.start ? 1 : 0) + 
    (priceRange.min > 0 || priceRange.max < 1000 ? 1 : 0);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm mx-auto max-h-[70vh] overflow-y-auto rounded-lg">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <button
              onClick={handleReset}
              className="text-sm text-red-500 hover:text-red-600 transition-colors"
            >
              Reset
            </button>
            <DialogTitle className="text-center">{title}</DialogTitle>
            <div className="w-12" /> {/* Spacer for centering */}
          </div>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Date Range */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-foreground">Date range</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs text-muted-foreground">Start date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="date"
                    value={dateRange.start}
                    onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                    className="pl-10 w-full"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-muted-foreground">End date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="date"
                    value={dateRange.end}
                    onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                    className="pl-10 w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-foreground">Price range</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs text-muted-foreground">Min price</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="number"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
                    className="pl-10 w-full"
                    placeholder="0"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-muted-foreground">Max price</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="number"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                    className="pl-10 w-full"
                    placeholder="1000"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Status Options */}
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {statusOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleStatusToggle(option.value)}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-colors",
                    selectedStatuses.includes(option.value)
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  {option.icon}
                  {option.label}
                  {selectedStatuses.includes(option.value) && (
                    <Check className="h-3 w-3" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-4 border-t">
          <Button
            onClick={handleClearAll}
            variant="outline"
            className="flex-1"
          >
            Clear all
          </Button>
          <Button
            onClick={handleApply}
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Apply {activeFiltersCount > 0 && `(${activeFiltersCount})`}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
