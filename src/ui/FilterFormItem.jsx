function FilterFormItem({ item }) {
    return (
        <div className="grow w-full md:w-4/12 xl:w-3/12">
            <label className="block text-sm font-medium text-gray-700">{item.label}</label>
            <select className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                {item.options.map((option, index) => <option key={index}>{option}</option>)}
                {/* Add options here */}
            </select>
        </div>
    )
}

export default FilterFormItem
