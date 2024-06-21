import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { useDarkMode } from "../../../context/DarkModeProvider";
import styles from "../../../styles/styles";
import FilterForm from "../../../ui/FilterForm";
import FilterTabs from "../../../ui/FilterTabs";
import SearchInput from "../../../ui/SearchInput";

function NutritionOperations({ children, filterForm, filterTabs = {}, search, setSearchKeyword }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="space-y-4 px-4">
            {
                Object.keys(filterTabs).length > 0 &&
                <div className="flex justify-center">
                    <FilterTabs filterTabs={filterTabs} />
                </div>
            }
            {
                filterForm &&
                <FilterForm filterTabs={filterTabs} isOpen={isOpen} setIsOpen={setIsOpen}>
                    {filterForm}
                </FilterForm>
            }
            <div className="flex flex-wrap gap-2 md:gap-0 justify-between">
                <div className="flex justify-center items-center gap-2">
                    <SearchInput placeholder={search} setSearchKeyword={setSearchKeyword} />
                    {
                        filterForm &&
                        <button className={`p-[8px] font-bold text-xl rounded-md border ${isDarkMode ? `${colors.bg_white} bg-opacity-10 ${colors.text_white} ${colors.border_gray_700}` : `${colors.bg_gray_100} ${colors.text_gray_700}`}`} onClick={() => setIsOpen(true)}><CiFilter /></button>
                    }
                </div>
                {children}
            </div>
        </div>
    )
}

export default NutritionOperations
