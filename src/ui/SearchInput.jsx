function SearchInput({ placeholder }) {
    return (
        <input
            type="text"
            className="shadow border py-2 px-3 mr-4 text-grey-darker text-sm placeholder:text-sm rounded-md w-64 focus:w-72 transition-all duration-300 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-600"
            placeholder={placeholder}
        />
    )
}

export default SearchInput
