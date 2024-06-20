import { useDarkMode } from "../../../../context/DarkModeProvider";
import styles from "../../../../styles/styles";

function RatingBar({ label, percentage }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    return (
        <div className="flex items-center justify-center gap-4 text-sm">
            <p className={`${isDarkMode ? colors.text_gray_300 : colors.text_gray_700} font-bold`}>{label}</p>
            <div className="flex items-center justify-center rounded">
                <div
                    className={`flex w-52 h-1 ${isDarkMode ? colors.bg_gray_600 : colors.bg_gray_200} rounded-full overflow-hidden`}
                    role="progressbar"
                    aria-valuenow={percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    <div
                        className={`${isDarkMode ? colors.bg_blue_500 : colors.bg_blue_700} flex flex-col justify-center rounded-full overflow-hidden text-xs text-white text-center whitespace-nowrap transition duration-500`}
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
            </div>
            <p className={`${isDarkMode ? colors.text_gray_200 : colors.text_gray_700} w-8 text-right font-bold`}>{percentage}%</p>
        </div>
    );
}

export default RatingBar;
