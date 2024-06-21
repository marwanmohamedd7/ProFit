import { useSearchParams } from "react-router-dom"
import { useDarkMode } from "../context/DarkModeProvider";
import styles from "../styles/styles";

function FilterButtons({ fiterBtns: { fiterFeild, options } }) {
  const colors = styles();
  const { isDarkMode } = useDarkMode();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(fiterFeild) || options.at(0).value;
  const inActiveBtn = isDarkMode ? `${colors.bg_slate_800} ${colors.text_gray_400} hover:bg-slate-700` : `${colors.bg_white} ${colors.text_gray_600} hover:bg-gray-50`
  const activeBtn = isDarkMode ? `${colors.bg_slate_600} ${colors.text_gray_50}` : `${colors.bg_gray_100} ${colors.text_gray_950}`

  function handleBtnClick(value) {
    // Update search params with new filter
    if (searchParams.get("page")) searchParams.set("page", 1);
    searchParams.set(fiterFeild, value);
    setSearchParams(searchParams);
  }
  return (
    <div className={`flex overflow-x-auto rounded-md text-xs font-semibold border ${isDarkMode && colors.border_gray_700}`}>
      {options.map(({ label, value }) =>
        <button key={label} onClick={() => handleBtnClick(value)} className={`px-4 py-2 capitalize outline-none ${currentFilter === value ? activeBtn : inActiveBtn} transition-all duration-300`}>
          {label}
        </button>
      )}
      {/* <button className="flex items-center justify-center gap-2 px-4 py-2 text-gray-900 bg-white hover:bg-gray-100 outline-none focus:bg-gray-100 focus:text-blue-600 transition-all duration-300 relative">
        <span>Sorting</span>
        <svg className="w-4 h-4 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button> */}
    </div >
  )
}

export default FilterButtons
