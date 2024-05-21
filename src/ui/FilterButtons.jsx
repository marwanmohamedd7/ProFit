import { useSearchParams } from "react-router-dom"

function FilterButtons({ fiterBtns: { fiterFeild, options } }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(fiterFeild) || options.at(0).value;

  function handleBtnClick(value) {
    // Update search params with new filter
    if (searchParams.get("page")) searchParams.set("page", 1);
    searchParams.set(fiterFeild, value);
    setSearchParams(searchParams);
  }
  return (
    <div className="flex overflow-x-auto rounded-md text-xs font-semibold border">
      {options.map(({ label, value }) =>
        <button key={label} onClick={() => handleBtnClick(value)} className={`px-4 py-2 hover:bg-gray-100 outline-none ${currentFilter === value ? `bg-gray-100 text-blue-600` : ` text-blue-900 bg-white`} transition-all duration-300`}>
          {label}
        </button>
      )}
      {/* <button className="flex items-center justify-center gap-2 px-4 py-2 text-blue-900 bg-white hover:bg-gray-100 outline-none focus:bg-gray-100 focus:text-blue-600 transition-all duration-300 relative">
        <span>Sorting</span>
        <svg className="w-4 h-4 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button> */}
    </div >
  )
}

export default FilterButtons
