"use client";
import { Search, X } from "lucide-react";
import { useState } from "react";

interface FilterProps {
  onFilterChange: (filters: BlogFilters) => void;
}

export interface BlogFilters {
  search: string;
  category: string;
  date: string;
}

const categories = [
  "All Categories",
  "Personal Care",
  "Home Care",
  "Dementia Support",
  "Live-in Care",
  "Companionship",
  "Health & Wellness",
];

export default function BlogFilter({ onFilterChange }: FilterProps) {
  const [filters, setFilters] = useState<BlogFilters>({
    search: "",
    category: "All Categories",
    date: "",
  });

  const handleFilterChange = (key: keyof BlogFilters, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      search: "",
      category: "All Categories",
      date: "",
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  const hasActiveFilters =
    filters.search || filters.category !== "All Categories" || filters.date;

  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        {/* Filter Controls */}
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-end justify-between">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={filters.search}
                onChange={(e) => handleFilterChange("search", e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
              />
            </div>

            {/* Category Filter */}
            <div className="relative min-w-[200px]">
              <select
                value={filters.category}
                onChange={(e) => handleFilterChange("category", e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none w-full text-gray-900"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Date Filter */}
            <div className="relative min-w-[180px]">
              <input
                type="month"
                value={filters.date}
                onChange={(e) => handleFilterChange("date", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
              />
            </div>
          </div>

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-2 px-6 py-3 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
            >
              <X className="w-4 h-4" />
              Clear All
            </button>
          )}
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="mt-6 flex flex-wrap gap-2">
            {filters.search && (
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                Search: &quot;{filters.search}&quot;
                <button
                  onClick={() => handleFilterChange("search", "")}
                  className="hover:bg-blue-200 rounded-full p-1"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.category !== "All Categories" && (
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                {filters.category}
                <button
                  onClick={() =>
                    handleFilterChange("category", "All Categories")
                  }
                  className="hover:bg-green-200 rounded-full p-1"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.date && (
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                {new Date(filters.date + "-01").toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
                <button
                  onClick={() => handleFilterChange("date", "")}
                  className="hover:bg-purple-200 rounded-full p-1"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
