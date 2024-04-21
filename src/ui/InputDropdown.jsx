function InputDropdown({ item: { id, label, options }, register, error, disabled }) {
    return (
        // <div className="grow w-full md:w-4/12 xl:w-3/12 space-y-1">
        <div className="grow flex flex-wrap w-full md:w-4/12 xl:w-3/12 space-y-1">
            {/* <label className="block grow text-xs sm:text-sm font-medium text-gray-700">{label}</label> */}
            <select disabled={disabled} id={id} {...register} className="capitalize block w-full text-xs sm:text-sm p-1.5 border text-gray-500 border-gray-300 bg-white rounded-md shadow-sm
             focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option value="">{label}</option>
                {options.map((option, index) => <option className="text-gray-600 font-semibold" key={index} value={option}>{option}</option>)}
                {/* Add options here */}
            </select>
            {error && <span className="text-red-700 text-xs">{error}</span>}
        </div>
    )
}

export default InputDropdown
