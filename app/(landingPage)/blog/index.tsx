"use client";
import { useState } from "react";
import HeroSection from "../shared/components/HeroSection";
import BlogFilter, { BlogFilters } from "./components/BlogFilter";
import BlogList from "./components/BlogList";

const Blog = () => {
  const [filters, setFilters] = useState<BlogFilters>({
    search: "",
    category: "All Categories",
    date: "",
  });

  return (
    <div>
      <HeroSection
        title="Stay up to Date with our Blog"
        imageSrc="/images/hero.webp"
        imageAlt="Team smiling"
      />
      <BlogFilter onFilterChange={setFilters} />
      <BlogList filters={filters} />
    </div>
  );
};

export default Blog;
