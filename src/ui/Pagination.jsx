import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE_DEFAULT } from "../utils/constants";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeProvider";
import styles from "../styles/styles";

function Pagination({ count, pages }) {
  const colors = styles();
  const { isDarkMode } = useDarkMode();
  if (!pages) pages = PAGE_SIZE_DEFAULT
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const pageCount = Math.ceil(count / pages);

  function handleNextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }
  function handlePrevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }
  if (pageCount <= 1 || !pageCount) return null;
  return (
    <>
      <td colSpan="3" className="text-xs text-left font-lighter p-3">
        <p>
          Showing <span>{(currentPage - 1) * pages + 1}</span> to <span>{currentPage === pageCount ? count : currentPage * pages}</span> of <span>{count}</span> results
        </p>
      </td>
      <td colSpan="100%" className="text-xs p-3 font-semibold">
        <div className='flex justify-end cursor-pointer items-center'>
          <button disabled={currentPage === 1} onClick={handlePrevPage} className={`cursor-pointer border p-2 rounded-l-md font-bold ${isDarkMode ? `hover:bg-gray-600 hover:text-gray-50 ${colors.border_gray_700} disabled:hover:border-gray-600` : `hover:bg-gray-200 hover:text-gray-600 disabled:hover:border-gray-200`} transition-all duration-300 disabled:hover:bg-transparent disabled:hover:cursor-not-allowed`}>
            <span className=""><HiMiniChevronLeft /></span>
            {/* <span>&lt;</span> */}
          </button>
          <p className={`flex justify-center items-center gap-1 px-3 py-1.5 border-t border-b ${isDarkMode && colors.border_gray_700}`}>
            <span>{`${currentPage}`}</span>
            <span>{`-`}</span>
            <span>{`${pageCount ? pageCount : 1}`}</span>
          </p>
          <button disabled={currentPage === pageCount} onClick={handleNextPage} className={`cursor-pointer border p-2 rounded-r-md font-bold ${isDarkMode ? `hover:bg-gray-600 hover:text-gray-50 ${colors.border_gray_700} disabled:hover:border-gray-600` : `hover:bg-gray-200 hover:text-gray-600 disabled:hover:border-gray-200`} transition-all duration-300 disabled:hover:bg-transparent disabled:hover:cursor-not-allowed`}>
            <span><HiMiniChevronRight /></span>
            {/* <span>&gt;</span> */}
          </button>
        </div>
      </td>
    </>
  )
}

export default Pagination
