import { useSearchParams } from "react-router-dom";

function FilterTabs({ filterTabs: { filterField, options } }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentFilter = searchParams.get(filterField) || options.at(0).value;

    // Function to handle tab click
    function handleTabClick(value) {
        // Update search params with new filter
        searchParams.set(filterField, value);
        setSearchParams(searchParams);
    };

    // Conditional styling for active tab
    const activeTabStyle = "bg-gray-500 text-white";
    const inactiveTabStyle = "bg-gray-100 text-gray-500";

    return (
        <div className="flex rounded-md grow overflow-hidden">
            {options.map((filter) =>
                <button
                    key={filter.value}
                    onClick={() => handleTabClick(filter.value)}
                    className={`flex-1 p-3 text-sm ${currentFilter === filter.value ? activeTabStyle : inactiveTabStyle} capitalize`}
                >
                    {filter.label}
                </button>
            )}
        </div>
    );
}

export default FilterTabs
