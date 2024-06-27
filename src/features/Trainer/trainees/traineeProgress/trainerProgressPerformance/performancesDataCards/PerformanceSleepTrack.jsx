import SleepIcon from "../../../../../../Icons/SleepIcon";
import SleepTrackIcon from "../../../../../../Icons/SleepTrackIcon";
import { useDarkMode } from "../../../../../../context/DarkModeProvider";
import styles from "../../../../../../styles/styles";
import { formatDate, subtractDatesHours, subtractDatesMinutes } from "../../../../../../utils/helpers";
import TrainerProgressPerformanceCards from "../TrainerProgressPerformanceCards";

function PerformanceSleepTrack({ data }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const { fallAsleepTime, wakeUpTime, createdAt, weeklySleep } = data
    return (
        <TrainerProgressPerformanceCards detailedData={{ data: weeklySleep ?? [], chart: "barChart", yAxisLabel: " hrs" }} icon={<SleepTrackIcon />} color={isDarkMode ? `text-red-500` : `text-red-600`} title="sleep track">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-2 lowercase">
                    <div className="flex items-center gap-2 lowercase">
                        <span className={`text-lg ${isDarkMode ? `text-blue-500` : `text-blue-600`}`}><strong className="text-2xl">{subtractDatesHours(wakeUpTime, fallAsleepTime) || 0}</strong> hrs</span>
                        <span className={`text-lg ${isDarkMode ? `text-blue-500` : `text-blue-600`}`}><strong className="text-2xl">{subtractDatesMinutes(wakeUpTime, fallAsleepTime) ? (subtractDatesMinutes(wakeUpTime, fallAsleepTime) % 60)?.toFixed(0) : 0}</strong> mins</span>
                    </div>
                    <span className={`text-xs ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>{formatDate(createdAt ? createdAt : new Date())}</span>
                </div>
                <SleepIcon />
            </div>
            <span className={`text-xs text-right ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>last 7 days</span>
        </TrainerProgressPerformanceCards>
    )
}

export default PerformanceSleepTrack
