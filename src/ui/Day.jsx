import { IoIosClose } from "react-icons/io"

function Day({ day, handleTabClick, currentDay, setDays }) {
    const activeTabStyle = "bg-gray-600 text-gray-50 font-bold tracking-wide"
    const inActiveTabStyle = "bg-gray-300 text-gray-600"
    function handleRemoveDay() {
        setDays(value => value - 1);
    }
    return (
        <div className="cursor-pointer grow ml-2">
            <p onClick={() => handleTabClick(day)} className={`flex justify-between items-center px-3.5 py-2.5 grow text-center transition-all duration-300 ${day === Number(currentDay) ? activeTabStyle : `${inActiveTabStyle} hover:bg-gray-400 hover:text-gray-50`} rounded-md`}>
                <span>Day {day}</span>
                <span onClick={handleRemoveDay} className={`hover:bg-red-700 p-[0.5px] rounded-full text-xl hover:text-gray-50`}><IoIosClose /></span>
            </p>
        </div>
    )
}

export default Day
