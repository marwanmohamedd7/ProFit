import { createContext, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "../styles/styles";
import { useDarkMode } from "../context/DarkModeProvider";

const TabsContext = createContext();

function CompoundTabs({ children, tabsFeild, defaultTab }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const [searchParams, setSearchParams] = useSearchParams();
    let currentActive = !searchParams.get(tabsFeild) ? defaultTab : searchParams.get(tabsFeild)

    // Function to clear all search parameters
    const clearSearchParams = () => {
        // Create a new URLSearchParams object without any parameters
        const newSearchParams = new URLSearchParams();
        // Set the new empty search parameters
        setSearchParams(newSearchParams);
    };

    function open(value) {
        clearSearchParams();
        if (searchParams.get("page")) searchParams.set("page", 1)
        searchParams.set(tabsFeild, value)
        setSearchParams(searchParams)
    }
    return (
        <TabsContext.Provider value={{ currentActive, open, colors, isDarkMode }}>
            {children}
        </TabsContext.Provider>
    )
}

function Tabs({ children }) {
    const { colors, isDarkMode } = useContext(TabsContext);
    return (
        <div>
            <ul className={`flex flex-wrap -mb-px text-sm font-medium border-b text-center capitalize ${isDarkMode ? `${colors.text_gray_400} ${colors.border_gray_700}` : colors.text_gray_500}`}>
                {children}
            </ul>
        </div>
    )
}

function Open({ children, opens: opensTab }) {
    const { currentActive, open, colors, isDarkMode } = useContext(TabsContext);
    return <button
        onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            open(opensTab);
        }}
        className={`inline-block transition-all duration-300 p-4 w-auto rounded-t-lg border-b capitalize tracking-wide font-semibold
         ${opensTab === currentActive ? `${isDarkMode ? `${colors.text_blue_500}` : `${colors.text_blue_700}`} ${colors.border_blue_600} font-semibold`
                :
            `${isDarkMode ? `${colors.border_gray_700} hover:border-gray-600 hover:text-gray-400` : `${colors.border_gray_200} hover:border-gray-300 hover:text-gray-500`}`}`}>
        {children}
    </button>
}

function Window({ children, opens }) {
    const { currentActive } = useContext(TabsContext);
    if (currentActive !== opens) return null;
    return children
}

CompoundTabs.Tabs = Tabs
CompoundTabs.Open = Open
CompoundTabs.Window = Window

export default CompoundTabs
