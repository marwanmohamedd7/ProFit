import { useSearchParams } from "react-router-dom";

function FilterTabs({ filterTabs: { filterField, options } }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentFilter = searchParams.get(filterField) || options.at(0).value;
    // Function to handle tab click
    function handleTabClick(value) {
        // Update search params with new filter
        if (searchParams.get("page")) searchParams.set("page", 1);
        searchParams.set(filterField, value);
        setSearchParams(searchParams);
    };

    // Conditional styling for active tab
    const activeTabStyle = "bg-gray-500 text-white";
    const inactiveTabStyle = "bg-gray-100 text-gray-500";

    return (
        <div className="flex rounded-md grow overflow-hidden">
            {options.map(({ label, value }) =>
                <button
                    key={value}
                    onClick={() => handleTabClick(value)}
                    className={`flex-1 p-3 text-sm ${currentFilter === value ? activeTabStyle : inactiveTabStyle} capitalize`}
                >
                    {label}
                </button>
            )}
        </div>
    );
}

export default FilterTabs
