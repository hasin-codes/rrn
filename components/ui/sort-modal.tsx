"use client";

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './dialog';
import { Button } from './button';
import { cn } from './utils';

interface SortOption {
  value: string;
  label: string;
}

interface SortModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  options: SortOption[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  onApply: () => void;
  title?: string;
}

export function SortModal({
  open,
  onOpenChange,
  options,
  selectedValue,
  onValueChange,
  onApply,
  title = "Sort",
}: SortModalProps) {
  const handleApply = () => {
    onApply();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">{title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          {options.map((option) => (
            <div
              key={option.value}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
              onClick={() => onValueChange(option.value)}
            >
              <span className="text-sm font-medium">{option.label}</span>
              <div className="relative">
                <div
                  className={cn(
                    "w-5 h-5 rounded-full border-2 transition-colors",
                    selectedValue === option.value
                      ? "border-primary bg-primary"
                      : "border-muted-foreground/30"
                  )}
                >
                  {selectedValue === option.value && (
                    <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end pt-4 border-t">
          <Button
            onClick={handleApply}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Apply
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
