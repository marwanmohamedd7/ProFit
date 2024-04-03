
function InputFloatingLabel({ item: { label, id, value = "", placeholder = "", type = "text", paddingStyle = "" }, onChange, disabled = false, error, register }) {
    return (
        <div className="flex flex-col gap-1">
            <div className="relative">
                <input
                    id={id}
                    type={type}
                    disabled={disabled}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    {...register}
                    className={`flex ${type === "date" && ` justify-between`} text-xs sm:text-sm items-center w-full ${paddingStyle ? paddingStyle : "py-2.5 px-2"} text-gray-500 bg-transparent rounded-lg bg-white border
                border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-700 peer`} />
                <label htmlFor={id} className="absolute text-sm block font-medium bg-white disabled:bg-gray-50 text-gray-500 duration-300 transform -translate-y-4 scale-75
             top-1.5 sm:top-1.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-sm peer-focus:text-blue-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2
             peer-placeholder-shown:top-1/2 peer-focus:top-1.5 sm:peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 
             rtl:peer-focus:left-auto start-1 capitalize">{label}</label>
            </div>
            {error && <span className="text-red-700 text-xs">{error}</span>}
        </div>
    )
}

export default InputFloatingLabel
