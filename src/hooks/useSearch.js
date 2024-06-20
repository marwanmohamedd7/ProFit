import { useMemo, useState } from "react";

// Helper function to get nested values
function getNestedValue(obj, path) {
  return path.reduce(
    (acc, key) => (acc && acc[key] !== "undefined" ? acc[key] : null),
    obj
  );
}

// Custom hook for searching items based on multiple attributes and a keyword
export function useSearch(items, attrs) {
  const [searchKeyword, setSearchKeyword] = useState("");

  // Use useMemo to memoize the filtered results
  const searchedItems = useMemo(() => {
    if (!searchKeyword) return items; // Return all items if keyword is empty

    const lowerKeyword = searchKeyword.toLowerCase(); // Convert keyword to lowercase for case-insensitive search

    return items.filter((item) =>
      // Check if any of the specified attributes contain the keyword
      attrs.some((key) => {
        const value = Array.isArray(key)
          ? getNestedValue(item, key)
          : item[key];
        return value && value.toString().toLowerCase().includes(lowerKeyword);
      })
    );
  }, [items, attrs, searchKeyword]);

  return { searchedItems, searchKeyword, setSearchKeyword };
}
