import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Who are you?" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Owner</SelectLabel>
          <SelectItem value="Owner">Owner</SelectItem>
          <SelectItem value="Guest">Guest</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
