"use client";

import * as React from "react";
import { Search, Loader2 } from "lucide-react";

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
  const [location, setLocation] = useState("")

  const isFormValid = 
    category.trim().length > 0 && location.trim().length > 0;

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
        <CardTitle>New Search Opportunities</CardTitle>
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
          <Input
            value={category}
            placeholder="Enter a market category"
            onChange={(e) => setCategory(e.target.value)}
            disabled={isLoading}
            className="flex-1"
          />
          <Input
            value={location}
            placeholder="Enter a location (e.g. Bogota, Medellin)"
            onChange={(e) => setLocation(e.target.value)}
            disabled={isLoading}
            className="flex-1"
          />
          <Button
            type="submit"
            disabled={isLoading || category.trim().length === 0 || location.trim().length === 0}
            className="text-gray-400"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 size-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Search className="mr-2 size-4 text-gray-400" />
                Analyzing the market
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
