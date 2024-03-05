function InputFloatingLabel({ item: { label, id, defaultValue = "", placeholder = "", disabled = false, type = "text" } }) {
    return (
        <div className="relative">
            <input
                id={id}
                type={type}
                disabled={disabled}
                defaultValue={defaultValue}
                placeholder={placeholder}
                className="flex text-xs sm:text-sm items-center w-full px-2 py-2.5 text-gray-500 bg-transparent rounded-lg bg-white border
              border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-700 peer"
            />
            <label htmlFor={id} className="absolute text-xs sm:text-sm block font-medium bg-white text-gray-500 duration-300 transform -translate-y-4 scale-75
             top-2 sm:top-1.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-sm sm:peer-focus:text-base peer-focus:text-blue-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2
              peer-placeholder-shown:top-1/2 peer-focus:top-1.5 sm:peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 
              rtl:peer-focus:left-auto start-1 capitalize">{label}</label>
        </div>
    )
}

export default InputFloatingLabel
