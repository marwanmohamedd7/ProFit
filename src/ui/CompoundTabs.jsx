import { createContext, useContext, useState } from "react";
import { NavLink } from "react-router-dom"

const TabsContext = createContext();

function CompoundTabs({ children, defaultTab }) {
    const [selectedTab, setSelectedTab] = useState(defaultTab);
    const open = setSelectedTab;
    return (
        <TabsContext.Provider value={{ selectedTab, open }}>
            {children}
        </TabsContext.Provider>
    )
}

function Tabs({ children }) {
    return (
        <div>
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 capitalize">
                {children}
            </ul>
        </div>
    )
}

function Open({ children, opens: opensTab }) {
    const { selectedTab, open } = useContext(TabsContext);
    return <NavLink
        onClick={() => open(opensTab)}
        className={`inline-block transition-all duration-300 p-4 w-auto rounded-t-lg border-b-2  ${opensTab === selectedTab ? 'text-blue-600 border-blue-500' : 'border-gray-100 hover:text-gray-600 hover:border-gray-300'
            }`}
    >
        {children}
    </NavLink>
}

function Window({ children, opens }) {
    const { selectedTab } = useContext(TabsContext);
    if (selectedTab !== opens) return null;
    return children
}

CompoundTabs.Tabs = Tabs
CompoundTabs.Open = Open
CompoundTabs.Window = Window

export default CompoundTabs
