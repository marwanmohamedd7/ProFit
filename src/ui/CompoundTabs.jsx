import { createContext, useContext } from "react";
import { useSearchParams } from "react-router-dom";

const TabsContext = createContext();

function CompoundTabs({ children, tabsFeild, defaultTab }) {
    const [searchParams, setSearchParams] = useSearchParams();
    let currentActive = !searchParams.get(tabsFeild) ? defaultTab : searchParams.get(tabsFeild)
    function open(value) {
        if (searchParams.get("page")) searchParams.set("page", 1)
        searchParams.set(tabsFeild, value)
        setSearchParams(searchParams)
    }
    return (
        <TabsContext.Provider value={{ currentActive, open }}>
            {children}
        </TabsContext.Provider>
    )
}

function Tabs({ children }) {
    return (
        <div>
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 pb-4 capitalize">
                {children}
            </ul>
        </div>
    )
}

function Open({ children, opens: opensTab }) {
    const { currentActive, open } = useContext(TabsContext);
    return <button
        onClick={() => open(opensTab)}
        className={`inline-block transition-all duration-300 p-4 w-auto rounded-t-lg border-b-2 capitalize
         ${opensTab === currentActive ? 'text-blue-600 border-blue-500 font-semibold' : 'border-gray-100 hover:text-gray-600 hover:border-gray-300'
            }`}
    >
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
