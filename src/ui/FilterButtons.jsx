import styles from "../styles/styles";
import { useSearchParams } from "react-router-dom"
import { useDarkMode } from "../context/DarkModeProvider";

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
    </div >
  )
}

export default FilterButtons
