function InputDropdown({ item: { id, label, options }, register, error, disabled }) {
    return (
        // <div className="grow w-full md:w-4/12 xl:w-3/12 space-y-1">
        // <div className="grow flex flex-wrap w-full md:w-4/12 xl:w-3/12 space-y-1">

        // <div className="relative flex flex-col gap-1 grow">
        //     <select className="capitalize block w-full text-xs sm:text-sm p-1.5 border text-gray-500 border-gray-300 bg-white rounded-md shadow-sm
        //         focus:outline-none focus:ring-blue-500 focus:border-blue-500 peer pe-9 disabled:opacity-50 disabled:pointer-events-none 
        //         focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6  autofill:pb-2"
        //         // value={country}
        //         onChange={e => ""}
        //     >
        //         {/* <option value="">Select {label}...</option> */}
        //         {options.map((option, index) => <option className="text-gray-700 font-bold" key={index} value={option}>{option}</option>)}            </select>
        //     <label className="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500">{label}</label>
        // </div>

        <div className="flex flex-col gap-1 grow">
            {/* <label className="block grow text-xs sm:text-sm font-medium text-gray-700">{label}</label> */}
            <select disabled={disabled} id={id} {...register} className="capitalize block w-full text-xs sm:text-sm p-1.5 border text-gray-700 border-gray-300 bg-white rounded-md shadow-sm
             focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option className="text-gray-500 font-semibold" value="">{label}...</option>
                {options.map((option, index) => <option className="text-gray-700 font-semibold" key={index} value={option}>{option}</option>)}
                {/* Add options here */}
            </select>
            {error && <span className="text-red-700 text-xs">{error}</span>}
        </div>
    )
}

export default InputDropdown
