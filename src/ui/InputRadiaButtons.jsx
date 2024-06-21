import { useDarkMode } from "../context/DarkModeProvider";
import styles from "../styles/styles";

function InputRadiaButtons({ disabled, register, values, errors }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    return (
        <>
            {
                values.map(name =>
                    <label key={name} htmlFor={name} className={`text-sm font-medium capitalize flex items-center gap-2 disabled:cursor-not-allowed ${isDarkMode ? `${colors.text_white} accent-blue-500` : colors.text_gray_700}`}>
                        <input
                            id={name}
                            disabled={disabled}
                            {...register}
                            type="radio"
                            value={name.slice(0, 1).toUpperCase() + name.slice(1)}
                            className={`form-radio disabled:cursor-not-allowed cursor-pointer`}
                        />
                        <span className="capitalize">{name}</span>
                    </label>
                )

            }
            {errors && <span className={`text-xs ${isDarkMode ? "text-red-500" : "text-red-700"}`}>{errors}</span>}
        </>
    )
}

export default InputRadiaButtons
