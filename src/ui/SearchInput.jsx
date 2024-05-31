import { IoIosSearch } from "react-icons/io";
import { useDarkMode } from "../context/DarkModeProvider";
import styles from "../styles/styles";
function SearchInput({ placeholder, width = "w-72", backgroundColor }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    return (
        <div className={`relative ${width}`}> {/* Container with relative positioning */}
            <IoIosSearch className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500} cursor-pointer`} size={20} />
            <input
                type="text"
                className={`py-2 pl-10 pr-3 mr-4 text-grey-darker text-sm
                 placeholder:text-sm rounded-md w-full transition-all duration-300
                 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:bg-transparent ${isDarkMode ? `${colors.bg_white} bg-opacity-10 ${colors.text_white} ${colors.border_gray_700}` : backgroundColor ? backgroundColor : `${colors.bg_gray_100} ${colors.text_gray_500}`} text-gray-500 border`}
                placeholder={placeholder}
            />
        </div>
    );
}

export default SearchInput
//  placeholder:text-sm rounded-md w-full focus:w-72 transition-all duration-300
