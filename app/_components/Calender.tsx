"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { DateRange } from "react-day-picker";

export function Calendar05({
  onChange,
}: {
  onChange?: (v: DateRange | undefined) => void;
}) {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(2025, 5, 12),
    to: new Date(2025, 6, 15),
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Choose date</Button>
      </PopoverTrigger>
      <PopoverContent className="w-130">
        <Calendar
          mode="range"
          defaultMonth={dateRange?.from}
          selected={dateRange}
          onSelect={(range) => {
            setDateRange(range);
            onChange?.(range);
          }}
          numberOfMonths={2}
          className="rounded-lg border shadow-sm"
        />
      </PopoverContent>
    </Popover>
  );
}
