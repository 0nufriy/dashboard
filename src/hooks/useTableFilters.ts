import { useState, useMemo } from "react";
import { calculatePageButtons } from "@/utils/pagination";

export interface FilterConfig {
  [key: string]: string;
}

export interface UseTableFiltersOptions<T extends Record<string, unknown>> {
  data: T[];
  pageSize: number;
  searchFields: (keyof T)[];
  filterConfigs?: FilterConfig;
  onSearchChange?: (value: string) => void;
  onFilterChange?: (filterKey: string, value: string) => void;
}

export interface UseTableFiltersReturn<T> {
  search: string;
  filters: FilterConfig;
  page: number;
  paginated: T[];
  totalPages: number;
  pageButtons: (number | "…")[];
  filtered: T[];
  setSearch: (value: string) => void;
  setFilter: (key: string, value: string) => void;
  setPage: (page: number) => void;
}


export const useTableFilters = <T extends Record<string, unknown>>({
  data,
  pageSize,
  searchFields,
  filterConfigs = {},
  onSearchChange,
  onFilterChange,
}: UseTableFiltersOptions<T>): UseTableFiltersReturn<T> => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<FilterConfig>(filterConfigs);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return data.filter((item) => {
      const matchSearch =
        !q || searchFields.some((field) => {
          const value = String(item[field] || "").toLowerCase();
          return value.includes(q);
        });

      const matchFilters = Object.entries(filters).every(([key, value]) => {
        if (value === "All" || value === "all") return true;
        return String(item[key] || "") === value;
      });

      return matchSearch && matchFilters;
    });
  }, [search, filters, data, searchFields]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const paginated = filtered.slice(
    (safePage - 1) * pageSize,
    safePage * pageSize
  );

  const pageButtons = useMemo(() => {
    return calculatePageButtons(safePage, totalPages);
  }, [safePage, totalPages]);

  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(1);
    onSearchChange?.(value);
  };

  const handleFilter = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1);
    onFilterChange?.(key, value);
  };

  return {
    search,
    filters,
    page: safePage,
    paginated,
    totalPages,
    pageButtons,
    filtered,
    setSearch: handleSearch,
    setFilter: handleFilter,
    setPage,
  };
};
