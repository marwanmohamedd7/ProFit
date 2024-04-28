import { useState } from "react"
import { BiPlus } from "react-icons/bi"
import { FiMinus } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { useSearchParams } from "react-router-dom";
import Day from "./Day";

function DayTab() {
    const [days, setDays] = useState(1)
    const [searchParams, setSearchParams] = useSearchParams();
    const currentDay = !searchParams.get("day") ? 1 : searchParams.get("day");

    // Function to handle tab click
    function handleTabClick(value) {
        // Update search params with new filter
        searchParams.set("day", value);
        setSearchParams(searchParams);
    };
    function handleAddingDays() {
        if (days > 6) return null;
        setDays(value => value + 1);
    }
    return (
        <div className="flex items-center">
            {Array.from({ length: days }, (_, i) => i + 1).map(day => <Day key={day} day={day} currentDay={currentDay} handleTabClick={handleTabClick} setDays={setDays} />)}
            <div className="flex gap-1 ml-2">
                <button onClick={handleAddingDays} className="bg-transparent hover:bg-gray-200 p-3 transition-all duration-300 text-gray-600 border border-gray-600 rounded-md"><BiPlus /></button>
                {/* <button onClick={handleRemovingDays} className="bg-transparent hover:bg-blue-100 p-3 text-blue-700 border border-blue-700 rounded-md text-base"><FiMinus /></button> */}
            </div>
        </div>
    )
}

export default DayTab
