"use client";

import React from 'react';
import { Search, ArrowUpDown, Filter } from 'lucide-react';
import { cn } from './utils';

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onSortClick?: () => void;
  onFilterClick?: () => void;
  className?: string;
  showSort?: boolean;
  showFilter?: boolean;
  sortActive?: boolean;
  filterActive?: boolean;
}

export function SearchBar({
  placeholder = "Search...",
  value,
  onChange,
  onSortClick,
  onFilterClick,
  className,
  showSort = true,
  showFilter = true,
  sortActive = false,
  filterActive = false,
}: SearchBarProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* Sort Button */}
      {showSort && (
        <button
          onClick={onSortClick}
          className={cn(
            "p-2 rounded-lg transition-colors",
            sortActive
              ? "bg-primary text-primary-foreground"
              : "bg-muted hover:bg-muted/80 text-muted-foreground"
          )}
          aria-label="Sort options"
        >
          <ArrowUpDown className="h-4 w-4" />
        </button>
      )}

      {/* Search Input */}
      <div className="relative flex-1 neumorphic-card" style={{ padding: '0.5rem', borderRadius: '0.75rem' }}>
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-10 pr-4 py-1 bg-transparent border-none focus:outline-none transition-colors"
          style={{ borderRadius: '0.75rem' }}
        />
      </div>

      {/* Filter Button */}
      {showFilter && (
        <button
          onClick={onFilterClick}
          className={cn(
            "p-2 rounded-lg transition-colors",
            filterActive
              ? "bg-primary text-primary-foreground"
              : "bg-muted hover:bg-muted/80 text-muted-foreground"
          )}
          aria-label="Filter options"
        >
          <Filter className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
