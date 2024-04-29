import { BiPlus } from "react-icons/bi"
import { IoIosClose } from "react-icons/io";
import { createContext, useContext } from "react"
import { useSearchParams } from "react-router-dom";
import { useDietProvider } from "../context/DietProvider";
// import { FiMinus } from "react-icons/fi";
// import { IoIosClose } from "react-icons/io";

const DayContext = createContext()

function DaysTabs({ children, setDays }) {
    const { dispatch } = useDietProvider()
    const [searchParams, setSearchParams] = useSearchParams();
    const currentActiveDay = !searchParams.get("day") ? "1" : searchParams.get("day");

    // Function to handle tab click
    function handleTabClick(value) {
        // Update search params with new filter
        searchParams.set("day", value);
        setSearchParams(searchParams);
    };
    function handleAddingDays() {
        dispatch({ type: "diet/addDay" })
        // setDays(value => value > 6 ? 7 : value + 1);
    }
    function handleRemoveDay(id) {
        dispatch({ type: "diet/deleteDay", payload: Number(id) })
        // setDays(value => value < 2 ? 1 : value - 1);
    }
    return (
        <DayContext.Provider value={{ handleAddingDays, handleRemoveDay, handleTabClick, currentActiveDay }}>
            {children}
        </DayContext.Provider>
    )
}

function Tabs({ children }) {
    const { handleAddingDays } = useContext(DayContext)
    return (
        <div className="flex items-center">
            {children}
            <div className="flex gap-1 ml-2">
                <button onClick={handleAddingDays} className="bg-transparent hover:bg-gray-200 p-3 transition-all duration-300 text-gray-600 border border-gray-600 rounded-md"><BiPlus /></button>
                {/* <button onClick={handleRemovingDays} className="bg-transparent hover:bg-blue-100 p-3 text-blue-700 border border-blue-700 rounded-md text-base"><FiMinus /></button> */}
            </div>
        </div>
    )
}
function Open({ children, opens: openDayTab }) {
    openDayTab = openDayTab.slice(-1)
    const inActiveTabStyle = "bg-gray-300 text-gray-600"
    const activeTabStyle = "bg-gray-600 text-gray-50 font-bold tracking-wide"
    const { handleTabClick, handleRemoveDay, currentActiveDay } = useContext(DayContext)
    return (
        <button className="cursor-pointer grow ml-2">
            <p onClick={() => handleTabClick(openDayTab)} className={`flex justify-between items-center px-3.5 py-2.5 grow text-center capitalize transition-all duration-300 ${openDayTab === currentActiveDay ? activeTabStyle : `${inActiveTabStyle} hover:bg-gray-400 hover:text-gray-50`} rounded-md`}>
                <span>{children}</span>
                <span onClick={() => handleRemoveDay(openDayTab)} className={`hover:bg-red-700 p-[0.5px] rounded-full text-xl hover:text-gray-50`}><IoIosClose /></span>
            </p>
        </button>
    )
}
function Window({ children, opens: openDayTab }) {
    openDayTab = openDayTab.slice(-1)
    const { currentActiveDay } = useContext(DayContext);
    if (currentActiveDay !== openDayTab) return null;
    return children
}

DaysTabs.Tabs = Tabs;
DaysTabs.Open = Open;
DaysTabs.Window = Window;

export default DaysTabs
