import styles from "../styles/styles";
import { useDarkMode } from "../context/DarkModeProvider";

function SubscribedTrainerInfoCard({ field, value, setValue, disabled = false, backgroundColor, updateValue = false }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    return (
        <div className={`p-4 rounded-lg border grow ${isDarkMode ? `${colors.bg_slate_800} ${colors.border_gray_700} ${colors.text_white}` : `${backgroundColor ? backgroundColor : colors.bg_white} ${colors.text_gray_900}`}`}>
            <p className="flex flex-col w-full items-start text-sm gap-2 px-1 rounded-lg whitespace-nowrap">
                <span className={`font-normal ${isDarkMode ? `${colors.text_gray_400}` : `${colors.text_gray_500}`}`}>{field}</span>
                {
                    updateValue ?
                        <input
                            id="price"
                            type="number"
                            value={value}
                            disabled={disabled}
                            onChange={(e) => setValue(e.target.value)}
                            className={`outline-none w-full font-bold py-2 ${isDarkMode ? `${colors.text_gray_300} ${colors.bg_slate_800} placeholder:text-gray-400` : `${colors.text_gray_700} ${backgroundColor} placeholder:text-gray-500`}`}
                        /> :
                        <span className="font-bold">{value}</span>
                }
            </p>
        </div>
    )
}

export default SubscribedTrainerInfoCard
