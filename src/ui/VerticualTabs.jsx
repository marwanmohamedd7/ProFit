import { createContext, useContext } from "react"
import { useSearchParams } from "react-router-dom";
import styles from "../styles/styles";
import { useDarkMode } from "../context/DarkModeProvider";

const TabsContext = createContext();

function VerticualTabs({ children, tabsFeild, defaultTab }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const [searchParams, setSearchParams] = useSearchParams();
    let currentActive = !searchParams.get(tabsFeild) ? defaultTab : searchParams.get(tabsFeild)
    function open(value) {
        if (searchParams.get("page")) searchParams.set("page", 1)
        searchParams.set(tabsFeild, value)
        setSearchParams(searchParams)
    }
    return (
        <TabsContext.Provider value={{ currentActive, open, colors, isDarkMode }}>
            <div className="flex gap-4 rounded-md">
                {children}
            </div>
        </TabsContext.Provider>
    )
}

function Tabs({ children }) {
    const { colors, isDarkMode } = useContext(TabsContext);
    return (
        <div>
            <div className={`flex flex-col justify-center gap-2 p-4 rounded-lg border ${isDarkMode ? `${colors.bg_slate_800} ${colors.border_gray_700}` : colors.bg_white}`}>
                {children}
            </div>
        </div>
    )
}

function Open({ children, opens: opensTab, icon }) {
    const { currentActive, open, isDarkMode } = useContext(TabsContext);
    return (
        <button
            onClick={() => open(opensTab)}
            className={`flex flex-col items-center justify-center gap-2 text-base ${currentActive === opensTab ? "bg-blue-700 text-white" : `${isDarkMode ? "hover:bg-slate-700 text-gray-400" : "hover:bg-gray-400 text-gray-500"} hover:text-white`}
             text-center cursor-pointer transition-all duration-300 font-semibold tracking-wide capitalize rounded-lg px-5 py-4`}>
            <span className="text-2xl">{icon}</span>
            <span>{children}</span>
        </button>
    )
}

function Window({ children, opens }) {
    const { currentActive } = useContext(TabsContext);
    if (currentActive !== opens) return null;
    return children
}

VerticualTabs.Open = Open;
VerticualTabs.Tabs = Tabs;
VerticualTabs.Window = Window;

export default VerticualTabs
