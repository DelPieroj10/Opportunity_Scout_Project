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

interface SearchFormProps {
  onSearch: (category: string) => void;
  isLoading: boolean;
}

export function SearchForm({ onSearch, isLoading = false }: SearchFormProps) {
  const [category, setCategory] = React.useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (category.trim().length === 0) return;
    onSearch(category.trim());
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>New Search Opportunities</CardTitle>
        <CardDescription>
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
          <Button
            type="submit"
            disabled={isLoading || category.trim().length === 0}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 size-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Search className="mr-2 size-4" />
                Analyzing the market
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
