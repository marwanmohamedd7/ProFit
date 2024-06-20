import { useDarkMode } from "../context/DarkModeProvider";
import styles from "../styles/styles";

function InputFloatingLabel({ item: { label, id, value = "", placeholder = "", type = "text", paddingStyle = "" }, onChange, onBlur, disabled = false, error, register, icon, setShowPassword }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    return (
        <div className="flex flex-col gap-1 grow">
            <div className="relative">
                {
                    icon && <button onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setShowPassword(value => !value)
                    }}
                        className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-gray-200' : 'text-gray-500'} cursor-pointer`}>{icon}</button>
                }
                <input
                    id={id}
                    type={type}
                    disabled={disabled}
                    value={value || value === 0 ? value : ""}
                    placeholder={placeholder}
                    onChange={onChange}
                    onBlur={onBlur}
                    {...register}
                    className={`w-full text-sm flex ${type === "date" && ` justify-between`} ${disabled ? `${isDarkMode ? `${colors.text_gray_200} disabled:bg-slate-700` : `${colors.text_gray_600} disabled:bg-gray-50`} cursor-not-allowed` : isDarkMode ? colors.text_white : colors.text_gray_700} 
                    ${paddingStyle ? paddingStyle : "py-2.5 px-2"} ${isDarkMode ? colors.bg_slate_800 : colors.bg_white} 
                    ${isDarkMode ? colors.border_gray_700 : colors.border_gray_200}
                    ${isDarkMode ? `focus:ring-blue-500 focus:border-blue-500` : `focus:ring-blue-700 focus:border-blue-700`}
                    rounded-md border appearance-none focus:outline-none focus:ring-0 peer`}
                />
                <label htmlFor={id} className={`absolute text-sm block font-medium 
                ${disabled ? isDarkMode ? colors.bg_slate_700 : colors.bg_gray_50 : isDarkMode ? colors.bg_slate_800 : colors.bg_white}
                ${isDarkMode ? `${colors.text_white} peer-focus:text-white` : `${colors.text_gray_700} peer-focus:text-blue-700`} duration-300 transform -translate-y-4 scale-75 top-1.5 sm:top-1.5 z-10 origin-[0] 
                px-2 peer-focus:px-2 peer-focus:text-sm peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2
                peer-placeholder-shown:top-1/2 peer-focus:top-1.5 sm:peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 
                rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 capitalize`}>{label}</label>
            </div>
            {error && <span className={`text-xs ${isDarkMode ? "text-red-500" : "text-red-700"}`}>{error}</span>}
        </div>
    )
}

export default InputFloatingLabel
