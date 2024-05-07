import { createContext, useContext } from "react"
import { useSearchParams } from "react-router-dom";

const TabsContext = createContext();

function VerticualTabs({ children, tabsFeild, defaultTab }) {
    const [searchParams, setSearchParams] = useSearchParams();
    let currentActive = !searchParams.get(tabsFeild) ? defaultTab : searchParams.get(tabsFeild)
    function open(value) {
        if (searchParams.get("page")) searchParams.set("page", 1)
        searchParams.set(tabsFeild, value)
        setSearchParams(searchParams)
    }
    return (
        <TabsContext.Provider value={{ currentActive, open }}>
            <div className="flex gap-4 my-4 p-4 rounded-md">
                {children}
            </div>
        </TabsContext.Provider>
    )
}

function Tabs({ children }) {
    return (
        <div>
            <div className="flex flex-col justify-center gap-2 bg-white p-4 rounded-lg border">
                {children}
            </div>
        </div>
    )
}

function Open({ children, opens: opensTab, icon }) {
    const { currentActive, open } = useContext(TabsContext);
    return (
        <button
            onClick={() => open(opensTab)}
            className={`flex flex-col items-center justify-center gap-2 text-lg ${currentActive === opensTab ? "bg-blue-700 text-white" : "hover:bg-gray-400 hover:text-white text-gray-500"} text-center cursor-pointer transition-all duration-300 font-semibold tracking-wide capitalize rounded-lg px-8 py-6 border`}>
            <span className="text-xl">{icon}</span>
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
