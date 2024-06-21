import { BiPlus } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { createContext, useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { HiOutlineDuplicate } from "react-icons/hi";
import { useDietProvider } from "../context/DietProvider";
import Menus from "./Menus";
import { useDarkMode } from "../context/DarkModeProvider";
import styles from "../styles/styles";
// import Menus from "./Menus";
// import { FiMinus } from "react-icons/fi";

const DayContext = createContext();

function DaysTabs({ children }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const { dispatch, days } = useDietProvider();
    const [searchParams, setSearchParams] = useSearchParams();
    const currentActiveDay = !searchParams.get("day") || (days.length < Number(searchParams.get("day"))) ? "1" : searchParams.get("day");

    useEffect(() => {
        if (days.length < Number(searchParams.get("day"))) {
            searchParams.set("day", 1);
            setSearchParams(searchParams);
        }
    }, [days.length, searchParams, setSearchParams]);

    // Function to handle tab click
    function handleTabClick(value) {
        // Update search params with new filter
        searchParams.set("page", 1);
        searchParams.set("day", value);
        setSearchParams(searchParams);
    }

    function handleAddingDays() {
        if (days.length < 7) {
            searchParams.set("day", days.length + 1);
            setSearchParams(searchParams);
        }
        dispatch({ type: "diet/addDay" });
    }

    function handleRemoveDay(id) {
        if (days.length > 1) {
            searchParams.set("day", Number(searchParams.get("day")) > 1 ? searchParams.get("day") >= id ? Number(searchParams.get("day")) - 1 : searchParams.get("day") : 1);
            setSearchParams(searchParams);
        }
        dispatch({ type: "diet/deleteDay", payload: id });
    }

    function handleDuplicateDay(id) {
        if (days.length < 7) {
            searchParams.set("day", Number(id) + 1);
            setSearchParams(searchParams);
        }
        dispatch({ type: "diet/duplicateDay", payload: id });
    }

    function handleResetDay(id) {
        dispatch({ type: "diet/resetDay", payload: id });
    }

    return (
        <DayContext.Provider value={{ handleAddingDays, handleRemoveDay, handleDuplicateDay, handleResetDay, handleTabClick, isDarkMode, colors, currentActiveDay }}>
            <Menus>
                {children}
            </Menus>
        </DayContext.Provider>
    );
}

function Tabs({ children }) {
    const { handleAddingDays, isDarkMode, colors } = useContext(DayContext);
    const buttonStyle = `hover:${isDarkMode ? colors.bg_slate_700 : colors.bg_gray_50} p-3.5 transition-all duration-300 ${isDarkMode ? colors.text_white : colors.text_gray_600} border ${isDarkMode ? colors.border_gray_700 : colors.border_gray_400} rounded-md`;

    return (
        <div className="flex items-center">
            <div className="grow flex items-center justify-center gap-2 lg:flex-nowrap flex-wrap">
                {children}
            </div>
            <div className="flex gap-1 ml-2">
                <button onClick={handleAddingDays} className={`${isDarkMode ? colors.bg_slate_800 : colors.bg_white} ${buttonStyle}`}>
                    <span><BiPlus /></span>
                </button>
            </div>
        </div>
    );
}

function Open({ children, opens: openDayTab }) {
    openDayTab = openDayTab.slice(-1);
    const { handleTabClick, handleRemoveDay, handleDuplicateDay, handleResetDay, currentActiveDay, isDarkMode, colors } = useContext(DayContext);
    const inActiveTabStyle = `${isDarkMode ? `${colors.bg_slate_800} hover:${colors.bg_slate_700}` : `${colors.bg_gray_100} hover:${colors.bg_gray_200}`} ${isDarkMode ? colors.text_white : colors.text_gray_700}`;
    const activeTabStyle = `${isDarkMode ? colors.bg_slate_600 : colors.bg_gray_400} ${colors.text_white} font-bold tracking-wide`;

    return (
        <div className="cursor-pointer grow">
            <div onClick={() => handleTabClick(openDayTab)} className={`flex justify-between items-center px-3.5 py-2 grow text-center capitalize transition-all duration-300 ${openDayTab === currentActiveDay ? activeTabStyle : inActiveTabStyle} rounded-md`}>
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
    );
}

function Window({ children, opens: openDayTab }) {
    openDayTab = openDayTab.slice(-1);
    const { currentActiveDay } = useContext(DayContext);
    if (currentActiveDay !== openDayTab) return null;
    return children;
}

DaysTabs.Tabs = Tabs;
DaysTabs.Open = Open;
DaysTabs.Window = Window;

export default DaysTabs;