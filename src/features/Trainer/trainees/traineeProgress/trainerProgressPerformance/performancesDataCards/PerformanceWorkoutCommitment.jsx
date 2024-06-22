import DumbbellIcon from "../../../../../../Icons/DumbbellIcon";
import { useDarkMode } from "../../../../../../context/DarkModeProvider";
import styles from "../../../../../../styles/styles";
import ProgressBarPerformance from "../ProgressBarPerformance";
import TrainerProgressPerformanceCards from "../TrainerProgressPerformanceCards";

function PerformanceWorkoutCommitment() {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    return (
        <TrainerProgressPerformanceCards detailedData={{ title: "workout commitment", data: [] }} icon={<DumbbellIcon />} color={isDarkMode ? `text-red-500` : `text-red-600`} title="workout commitment">
            <ProgressBarPerformance label={70} percentage={70} key={"label"} color={isDarkMode ? `text-red-500` : `text-red-600`} progressColor={isDarkMode ? `bg-red-500` : `bg-red-600`} />
            <span className={`text-xs text-right ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>last 7 days</span>
        </TrainerProgressPerformanceCards>
    )
}

export default PerformanceWorkoutCommitment
