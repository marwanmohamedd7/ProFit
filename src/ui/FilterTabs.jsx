import { useSearchParams } from "react-router-dom";

function FilterTabs() {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentFilter = searchParams.get("food") || "all";

    // Function to handle tab click
    function handleTabClick(value) {
        // Update search params with new filter
        searchParams.set('food', value);
        setSearchParams(searchParams);
    };

    // Conditional styling for active tab
    const activeTabStyle = "bg-gray-500 text-white";
    const inactiveTabStyle = "bg-gray-100 text-gray-500";

    return (
        <div className="flex rounded-md grow overflow-hidden">
            <button
                onClick={() => handleTabClick('all')}
                className={`flex-1 p-3 text-sm ${currentFilter === 'all' ? activeTabStyle : inactiveTabStyle}`}
            >
                All Foods
            </button>
            <button
                onClick={() => handleTabClick('private')}
                className={`flex-1 p-3 text-sm ${currentFilter === 'private' ? activeTabStyle : inactiveTabStyle}`}
            >
                My Private Foods
            </button>
            <button
                onClick={() => handleTabClick('proFit')}
                className={`flex-1 p-3 text-sm ${currentFilter === 'proFit' ? activeTabStyle : inactiveTabStyle}`}
            >
                ProFIT Foods
            </button>
        </div>
    );
}

export default FilterTabs
