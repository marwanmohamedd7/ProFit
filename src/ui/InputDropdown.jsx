function InputDropdown({ item: { label, options } }) {
    return (
        // <div className="space-y-1">
            <div className="grow w-full md:w-4/12 xl:w-3/12 space-y-1">
            <label className="block grow text-xs sm:text-sm font-medium text-gray-700">{label}</label>
            <select className="block w-full text-xs sm:text-sm p-1 border text-gray-500 border-gray-300 bg-white rounded-md shadow-sm
             focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                {options.map((option, index) => <option key={index}>{option}</option>)}
                {/* Add options here */}
            </select>
        </div>
    )
}

export default InputDropdown
