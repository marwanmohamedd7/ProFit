// import { useState } from "react"
// import { CiFilter } from "react-icons/ci";
// import { FaDeleteLeft } from "react-icons/fa6";
// import { HiMiniChevronDown } from "react-icons/hi2";
// import Button from "./Button";
import { CiFilter } from "react-icons/ci";
import Button from "./Button";
import FilterTabs from "./FilterTabs";
import { useDarkMode } from "../context/DarkModeProvider";
import styles from "../styles/styles";

function FilterForm({ children, filterTabs = {}, isOpen, setIsOpen }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    return isOpen && (
        <div className={`w-full mx-auto my-4 p-4 ${isDarkMode && colors.border_gray_700} rounded-md border`}>
            <form className="flex flex-col gap-4 capitalize" onSubmit={(e) => e.preventDefault()}>
                {
                    Object.keys(filterTabs).length > 0 &&
                    <div className="flex justify-center">
                        <FilterTabs filterTabs={filterTabs} />
                    </div>
                }

                {children}

                <div div className="flex gap-2" >
                    <Button type="primary">
                        <p className="flex justify-center items-center gap-2">
                            <span><CiFilter /></span>
                            <span>Filter</span>
                        </p>
                    </Button>
                    <Button type="secondary" onClick={() => setIsOpen(false)}>
                        <p className="flex justify-center items-center gap-2">
                            {/* <span><FaDeleteLeft /></span> */}
                            <span>Close</span>
                        </p>
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default FilterForm


// (
//     <Button onClick={() => setIsOpen(true)}>
//         <span><CiFilter /></span>
//         {/* <span>Filter</span>
//         <span><HiMiniChevronDown /></span> */}
//     </Button>
// ) :