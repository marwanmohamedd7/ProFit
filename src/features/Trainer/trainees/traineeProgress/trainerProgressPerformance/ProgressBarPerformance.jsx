import { useDarkMode } from "../../../../../context/DarkModeProvider";
import styles from "../../../../../styles/styles";

function ProgressBarPerformance({ label,color, progressColor, percentage }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    return (
        <div className="flex flex-col gap-1 pb-3">
            <p className={`${color} font-bold text-base`}>{label}%</p>
            <div className="flex items-center justify-center rounded">
                <div
                    className={`flex w-52 h-2 ${isDarkMode ? colors.bg_gray_600 : colors.bg_gray_200} w-full rounded-full overflow-hidden`}
                    role="progressbar"
                    aria-valuenow={percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    <div
                        className={`${progressColor} flex flex-col justify-center rounded-full overflow-hidden text-xs text-white text-center whitespace-nowrap transition duration-500`}
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default ProgressBarPerformance
