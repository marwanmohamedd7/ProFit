import { useSearchParams } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeProvider";
import styles from "../styles/styles";

function FilterTabs({ filterTabs: { filterField, options } }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const [searchParams, setSearchParams] = useSearchParams();
    const currentFilter = searchParams.get(filterField) || options.at(0).value;

    // Function to handle tab click
    function handleTabClick(value) {
        // Update search params with new filter
        if (searchParams.get("page")) searchParams.set("page", 1);
        searchParams.set(filterField, value);
        setSearchParams(searchParams);
    }

    // Conditional styling for active tab
    const activeTabStyle = isDarkMode ? `${colors.bg_slate_500} ${colors.text_white}` : `${colors.bg_gray_400} ${colors.text_white}`;
    const inactiveTabStyle = isDarkMode ? `${colors.bg_slate_700} ${colors.text_white} hover:${colors.bg_slate_600}` : `${colors.bg_gray_100} ${colors.text_gray_700} hover:${colors.bg_gray_200}`;

    return (
        <div className="flex rounded-md grow overflow-hidden">
            {options.map(({ label, value }) =>
                <button
                    key={value}
                    onClick={() => handleTabClick(value)}
                    className={`flex-1 p-3 text-sm transition-all duration-300 whitespace-nowrap ${currentFilter === value ? activeTabStyle : inactiveTabStyle} capitalize`}
                >
                    {label}
                </button>
            )}
        </div>
    );
}

export default FilterTabs;
