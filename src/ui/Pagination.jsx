import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE_DEFAULT } from "../utils/constants";

function Pagination({ count, pages }) {
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
    <tfoot className='text-gray-600 bg-gray-50 border'>
      <tr>
        <td colSpan="3" className="text-xs text-left font-lighter px-6 py-2">
          <p>
            Showing <span>{(currentPage - 1) * pages + 1}</span> to <span>{currentPage === pageCount ? count : currentPage * pages}</span> of <span>{count}</span> results
          </p>
        </td>
        <td colSpan="100%" className="text-xs px-6 py-2 font-semibold">
          <div className='flex justify-end cursor-pointer items-center'>
            <button disabled={currentPage === 1} onClick={handlePrevPage} className={`cursor-pointer border-2 px-3 py-2 rounded-l-md font-bold hover:text-gray-50 hover:bg-blue-700 hover:border-blue-700 transition-all duration-300 disabled:hover:text-gray-600 disabled:hover:bg-gray-50 disabled:hover:border-gray-200 disabled:hover:cursor-not-allowed`}>
              <span>&lt;</span>
            </button>
            <p className='flex justify-center items-center gap-1 px-3 py-2 border-t-2 border-b-2'>
              <span>{`${currentPage}`}</span>
              <span>{`-`}</span>
              <span>{`${pageCount ? pageCount : 1}`}</span>
            </p>
            <button disabled={currentPage === pageCount} onClick={handleNextPage} className={`cursor-pointer border-2 px-3 py-2 rounded-r-md font-bold hover:text-gray-50 hover:bg-blue-700 hover:border-blue-700 transition-all duration-300 disabled:hover:text-gray-600 disabled:hover:bg-gray-50 disabled:hover:border-gray-200 disabled:hover:cursor-not-allowed`}>
              <span>&gt;</span>
            </button>
          </div>
        </td>
      </tr>
    </tfoot>
  )
}

export default Pagination
