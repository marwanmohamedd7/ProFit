import { useDarkMode } from "../context/DarkModeProvider";
import styles from "../styles/styles";

function InputTextArea({ id = "biography", disabled, errors, register, placeholder }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    return (
        <div className="space-y-1">
            {/* <label htmlFor="biography" className="block text-sm font-medium capitalize text-gray-700">biography*</label> */}
            <textarea
                id={id}
                disabled={disabled}
                placeholder={placeholder}
                //  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque quidem, doloribus, laboriosam odit repudiandae sint fugit optio id, itaque necessitatibus hic. Expedita vitae cupiditate fuga distinctio atque, earum quo! ipsum dolor sit amet consectetur adipisicing elit. A beatae atque iure obcaecati officiis, totam earum numquam incidunt amet nam."
                className={`mt-1 h-16 block w-full py-2 px-3 border rounded-md shadow-sm focus:outline-none disabled:cursor-not-allowed ${isDarkMode ? `focus:ring-blue-500 focus:border-blue-500 disabled:bg-slate-700 disabled:text-gray-200 ${colors.bg_slate_800} ${colors.border_gray_700} ${colors.text_white} placeholder:text-gray-300` : `focus:ring-blue-700 focus:border-blue-700 disabled:bg-gray-50 disabled:text-gray-600 placeholder:text-gray-500`} sm:text-sm`}
                {...register}
            />
            {errors && <span className={`text-xs ${isDarkMode ? "text-red-500" : "text-red-700"}`}>{errors}</span>}
        </div>
    )
}

export default InputTextArea
