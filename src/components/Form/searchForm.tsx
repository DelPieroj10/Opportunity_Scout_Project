"use client";

import * as React from "react";
import { ArrowRight, Loader2, MapPin, Search, Tag } from "lucide-react";
// import { Search, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

interface SearchFormProps {
  onSearch: (category: string, location: string) => void;
  isLoading: boolean;
}

export function SearchForm({ onSearch, isLoading = false }: SearchFormProps) {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  const isFormValid = category.trim().length > 0 && location.trim().length > 0;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isFormValid) {
      return;
    }
    onSearch(category.trim(), location.trim());
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-xl font-bold">
          <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
            <Search className="size-5" />
          </span>
          Search Opportunities
        </CardTitle>
        <CardDescription className="text-gray-50">
          Enter a market category, and we’ll analyze competitors, prices,
          customer reviews, and trends for you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <div className="relative flex-1">
            <Tag
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              value={category}
              placeholder="Enter a market category (e.g. Café, Fitness, Tech)"
              aria-label="Market category"
              onChange={(e) => setCategory(e.target.value)}
              disabled={isLoading}
              className="h-10 pl-9"
            />
          </div>
          <div className="relative flex-1">
            <MapPin
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              value={location}
              placeholder="Enter a location (e.g. Bogota, Medellin)"
              onChange={(e) => setLocation(e.target.value)}
              disabled={isLoading}
              className="h-10 pl-9"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            disabled={
              isLoading || !isFormValid}
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                Analyze the market
                <ArrowRight className="ml-2 size-4 text-gray-400" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
