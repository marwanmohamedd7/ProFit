import { IoIosSearch } from "react-icons/io";
function SearchInput({ placeholder, width = "w-72", backgroundColor = "bg-gray-100" }) {
    return (
        <div className={`relative ${width}`}> {/* Container with relative positioning */}
            <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" size={20} />
            <input
                type="text"
                className={`py-2 pl-10 pr-3 mr-4 text-grey-darker text-sm
                 placeholder:text-sm rounded-md w-full transition-all duration-300
                 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:bg-transparent ${backgroundColor} text-gray-500 border`}
                placeholder={placeholder}
            />
        </div>
    );
}

export default SearchInput
//  placeholder:text-sm rounded-md w-full focus:w-72 transition-all duration-300
