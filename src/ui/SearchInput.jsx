import { IoIosSearch } from "react-icons/io";
import { useDarkMode } from "../context/DarkModeProvider";
import styles from "../styles/styles";
// import { useSearchParams } from "react-router-dom";
function SearchInput({ setSearchKeyword, placeholder, width = "w-72", backgroundColor }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    // const [searchParams, setSearchParams] = useSearchParams();
    const handleSearch = (e) => {
        const value = e.target.value;
        // if (!value) {
        //     searchParams.delete("keyword");
        // } else {
        //     searchParams.set("keyword", value);
        // }
        // setSearchParams(searchParams);
        setSearchKeyword(value); // Uncomment if you still need to update local state
    }
   
    return (
        <div className={`relative ${width}`}> {/* Container with relative positioning */}
            <IoIosSearch className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500} cursor-pointer`} size={20} />
            <input
                type="text"
                className={`py-2 pl-10 pr-3 mr-4 text-grey-darker text-sm
                 placeholder:text-sm rounded-md w-full transition-all duration-300
                focus:outline-none focus:ring-1 focus:bg-transparent ${isDarkMode ? `${colors.bg_white} bg-opacity-10 ${colors.text_white} ${colors.border_gray_700} focus:border-blue-500 focus:ring-blue-500` : backgroundColor ? backgroundColor : `${colors.bg_gray_100} ${colors.text_gray_500} focus:border-blue-600 focus:ring-blue-700`} border`}
                placeholder={placeholder}
                onChange={handleSearch}
            />
        </div>
    );
}

export default SearchInput
//  placeholder:text-sm rounded-md w-full focus:w-72 transition-all duration-300
