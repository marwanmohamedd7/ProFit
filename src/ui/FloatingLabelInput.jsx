function FloatingLabelInput({ item: { label, id, defaultValue = "", placeholder = "", disabled = false, type = "text" } }) {
    return (
        <div className="relative">
            <input
                id={id}
                type={type}
                disabled={disabled}
                defaultValue={defaultValue}
                placeholder={placeholder}
                className="block w-full p-2 text-gray-500 pt-4 text-sm bg-transparent rounded-lg bg-white border
              border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-700 peer"
            />
            <label htmlFor={id} className="absolute text-sm block font-medium text-gray-500 duration-300 bg-white transform -translate-y-4 scale-75
             top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-md peer-focus:text-blue-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2
              peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 
              rtl:peer-focus:left-auto start-1 capitalize">{label}</label>
        </div>
    )
}

export default FloatingLabelInput
