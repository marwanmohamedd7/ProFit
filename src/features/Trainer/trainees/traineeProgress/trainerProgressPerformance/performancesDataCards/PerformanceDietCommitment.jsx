import AppleIcon from "../../../../../../Icons/AppleIcon"
import { useDarkMode } from "../../../../../../context/DarkModeProvider";
import styles from "../../../../../../styles/styles";
import ProgressBarPerformance from "../ProgressBarPerformance"
import TrainerProgressPerformanceCards from "../TrainerProgressPerformanceCards"

function PerformanceDietCommitment() {
    const colors = styles();
    const { isDarkMode } = useDarkMode();

    return (
        <TrainerProgressPerformanceCards detailedData={{ title: "diet commitment", data: [] }} icon={<AppleIcon fill={true} />} color={isDarkMode ? `text-green-500` : `text-green-600`} title="diet commitment">
            <ProgressBarPerformance label={28} percentage={28} key={"label"} color={isDarkMode ? `text-green-500` : `text-green-600`} progressColor={isDarkMode ? `bg-green-500` : `bg-green-600`} />
            <span className={`text-xs text-right ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>last 7 days</span>
        </TrainerProgressPerformanceCards>
    )
}

export default PerformanceDietCommitment
