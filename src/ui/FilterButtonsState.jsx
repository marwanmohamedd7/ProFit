import { useDarkMode } from "../context/DarkModeProvider";
import styles from "../styles/styles";
import { useState } from "react";

function FilterButtonsState({ options, setValue }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const [filter, setFilter] = useState(options[0].value);
    const activeBtn = isDarkMode ? `${colors.bg_slate_600} ${colors.text_gray_50}` : `${colors.bg_gray_100} ${colors.text_gray_950}`;
    const inActiveBtn = isDarkMode ? `${colors.bg_slate_800} ${colors.text_gray_400} hover:bg-slate-700` : `${colors.bg_white} ${colors.text_gray_600} hover:bg-gray-50`;

    function handleBtnClick(value) {
        // Update search params with new filter
        if (!value) return;
        setFilter(value);
        setValue(value);
    }

    return (
        <div className={`flex overflow-x-auto rounded-md text-xs font-semibold border ${isDarkMode && colors.border_gray_700}`}>
            {options.map(({ label, value }) =>
                <button key={label} onClick={() => handleBtnClick(value)} className={`px-4 py-2 capitalize outline-none ${filter === value ? activeBtn : inActiveBtn} transition-all duration-300`}>
                    {label}
                </button>
            )}
        </div >
    )
}

export default FilterButtonsState
