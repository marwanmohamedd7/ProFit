function FilterButtons({ name }) {
  return (
    <div className="flex overflow-x-auto rounded-lg shadow-sm text-xs font-semibold">
      <button className="px-4 py-2 text-blue-900 bg-white hover:bg-gray-100 outline-none focus:bg-gray-100 focus:text-blue-600 transition-all duration-300">
        Active
      </button>
      <button className="px-4 py-2 text-blue-900 bg-white hover:bg-gray-100 outline-none focus:bg-gray-100 focus:text-blue-600 transition-all duration-300">
        Blocked
      </button>
      {name === "trainers" &&
        <button className="px-4 py-2 text-blue-900 bg-white hover:bg-gray-100 outline-none focus:bg-gray-100 focus:text-blue-600 transition-all duration-300">
          Pending
        </button>
      }
      <button className="flex items-center justify-center gap-2 px-4 py-2 text-blue-900 bg-white hover:bg-gray-100 outline-none focus:bg-gray-100 focus:text-blue-600 transition-all duration-300 relative">
        <span>Sorting</span>
        <svg className="w-4 h-4 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div >
  )
}

export default FilterButtons
