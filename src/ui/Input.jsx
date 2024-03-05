function Input({ item: { label, type="text", placeholder="" } }) {
    return (
        // <div className="space-y-1">
        <div className="grow w-full md:w-4/12 xl:w-3/12">
            <label className="block text-xs sm:text-sm font-medium capitalize text-gray-700">{label}</label>
            <input type={type} placeholder={placeholder} className="mt-1 block w-full py-2 px-3 border
             border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 text-xs sm:text-sm" />
        </div>
    )
}

export default Input
