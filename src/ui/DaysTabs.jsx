import { BiPlus } from "react-icons/bi"
import { IoClose } from "react-icons/io5";
import { createContext, useContext } from "react"
import { useSearchParams } from "react-router-dom";
import { useDietProvider } from "../context/DietProvider";
import { GrPowerReset } from "react-icons/gr";
import { HiOutlineDuplicate } from "react-icons/hi";
import Menus from "./Menus";
// import Menus from "./Menus";
// import { FiMinus } from "react-icons/fi";
// import { IoIosClose } from "react-icons/io";

const DayContext = createContext()

function DaysTabs({ children }) {
    const { dispatch } = useDietProvider()
    const [searchParams, setSearchParams] = useSearchParams();
    const currentActiveDay = !searchParams.get("day") ? "1" : searchParams.get("day");

    // Function to handle tab click
    function handleTabClick(value) {
        // Update search params with new filter
        searchParams.set("page", 1);
        searchParams.set("day", value);
        setSearchParams(searchParams);
    };
    function handleAddingDays() {
        dispatch({ type: "diet/addDay" })
        // setDays(value => value > 6 ? 7 : value + 1);
    }
    function handleRemoveDay(id) {
        dispatch({ type: "diet/deleteDay", payload: id })
        // setDays(value => value < 2 ? 1 : value - 1);
    }

    function handleDuplicateDay(id) {
        dispatch({ type: "diet/duplicateDay", payload: id })
        // setDays(value => value < 2 ? 1 : value - 1);
    }

    function handleResetDay(id) {
        dispatch({ type: "diet/resetDay", payload: id })
        // setDays(value => value < 2 ? 1 : value - 1);
    }
    return (
        <DayContext.Provider value={{ handleAddingDays, handleRemoveDay, handleDuplicateDay, handleResetDay, handleTabClick, currentActiveDay }}>
            <Menus>
                {children}
            </Menus>
        </DayContext.Provider>
    )
}

function Tabs({ children }) {
    const { handleAddingDays } = useContext(DayContext)
    return (
        <div className="flex items-center">
            <div className="grow flex items-center justify-center lg:flex-nowrap flex-wrap xl:gap-0 gap-y-2">
                {children}
            </div>
            <div className="flex gap-1 ml-2">
                <button onClick={handleAddingDays} className="bg-transparent hover:bg-gray-200 p-3 transition-all duration-300 text-gray-600 border border-gray-600 rounded-md">
                    <span><BiPlus /></span>
                </button>
            </div>
        </div>
    )
}
function Open({ children, opens: openDayTab }) {
    openDayTab = openDayTab.slice(-1)
    const inActiveTabStyle = "bg-gray-300 text-gray-600"
    const activeTabStyle = "bg-gray-600 text-gray-50 font-bold tracking-wide"
    const { handleTabClick, handleRemoveDay, handleDuplicateDay, handleResetDay, currentActiveDay } = useContext(DayContext)
    return (
        <div className="cursor-pointer grow ml-2">
            <div onClick={() => handleTabClick(openDayTab)} className={`flex justify-between items-center px-3.5 py-2 grow text-center capitalize transition-all duration-300 ${openDayTab === currentActiveDay ? activeTabStyle : `${inActiveTabStyle} hover:bg-gray-400 hover:text-gray-50`} rounded-md`}>
                <span className="whitespace-nowrap">{children}</span>
                {/* <p className="flex items-center justify-center gap-[1px]">
                    <span onClick={(e) => {
                        e.stopPropagation();  // This stops the event from bubbling up to parent elements
                        handleResetDay(openDayTab)
                    }} className={`${openDayTab === currentActiveDay ? `hover:bg-gray-800` : `hover:bg-gray-500`} p-1 rounded text-base hover:text-gray-50`}><GrPowerReset /></span>
                    <span onClick={(e) => {
                        e.stopPropagation();  // This stops the event from bubbling up to parent elements
                        handleDuplicateDay(openDayTab)
                    }} className={`${openDayTab === currentActiveDay ? `hover:bg-gray-800` : `hover:bg-gray-500`} p-1 rounded text-lg hover:text-gray-50`}><HiOutlineDuplicate /></span>
                    <span onClick={(e) => {
                        e.stopPropagation();  // This stops the event from bubbling up to parent elements
                        handleRemoveDay(openDayTab)
                    }} className={`${openDayTab === currentActiveDay ? `hover:bg-gray-800` : `hover:bg-gray-500`} p-[0.75px] rounded text-2xl hover:text-gray-50`}><IoIosClose /></span>
                </p> */}
                <Menus.Menu>
                    <Menus.Toggle id={openDayTab} />
                    <Menus.List id={openDayTab}>
                        <Menus.Button onClick={() => handleResetDay(openDayTab)} icon={<GrPowerReset />}>Reset</Menus.Button>
                        <Menus.Button onClick={() => handleDuplicateDay(openDayTab)} icon={<HiOutlineDuplicate />}>Duplicate</Menus.Button>
                        <Menus.Button onClick={() => handleRemoveDay(openDayTab)} icon={<span className="text-xl"><IoClose /></span>}>Delete</Menus.Button>
                    </Menus.List>
                </Menus.Menu>
            </div>
        </div>
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
