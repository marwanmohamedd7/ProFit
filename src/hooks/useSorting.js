import { useState, useMemo } from "react";

function getNestedValue(obj, keys) {
  return keys.reduce((value, key) => {
    return value[key];
  }, obj);
}

export function useSorting(data) {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "default",
  });

  const sortedData = useMemo(() => {
    const sortArray = (array, key, direction) => {
      return [...array].sort((a, b) => {
        const aValue =
          typeof key === "string" ? a[key] : getNestedValue(a, key);
        const bValue =
          typeof key === "string" ? b[key] : getNestedValue(b, key);
        if (aValue < bValue) return direction === "ascending" ? -1 : 1;
        if (aValue > bValue) return direction === "ascending" ? 1 : -1;
        return 0;
      });
    };

    if (sortConfig.key === null) return [...data];
    else return sortArray(data, sortConfig.key, sortConfig.direction);
  }, [data, sortConfig]);

  return { sortedData, sortConfig, setSortConfig };
}
