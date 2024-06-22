import HeartIcon from "../../../../../../Icons/HeartIcon";
import HeartRateIcon from "../../../../../../Icons/HeartRateIcon";
import { useDarkMode } from "../../../../../../context/DarkModeProvider";
import styles from "../../../../../../styles/styles";
import { formatDate } from "../../../../../../utils/helpers";
import TrainerProgressPerformanceCards from "../TrainerProgressPerformanceCards";

function PerformanceHeartRate({ data }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const { bpm, createdAt, weeklyHeartRate } = data;
    return (
        <TrainerProgressPerformanceCards detailedData={{ data: weeklyHeartRate, title: "heart rate", yAxisLabel:" bpm"}} icon={<HeartIcon />} color={isDarkMode ? `text-red-500` : `text-red-600`} title="heart rate">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-2 uppercase">
                    <span className={`text-lg ${isDarkMode ? `text-red-500` : `text-red-600`}`}><strong className="text-2xl">{bpm ?? 0}</strong> bpm</span>
                    <span className={`text-sm ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>{formatDate(createdAt ?? new Date())}</span>
                </div>
                <span className="">
                    <HeartRateIcon />
                </span>
            </div>
            <span className={`text-xs text-right ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>last 7 days</span>
        </TrainerProgressPerformanceCards>
    )
}

export default PerformanceHeartRate
