import AppleIcon from "../../../../../../Icons/AppleIcon"
import { useDarkMode } from "../../../../../../context/DarkModeProvider";
import styles from "../../../../../../styles/styles";
import ProgressBarPerformance from "../ProgressBarPerformance"
import TrainerProgressPerformanceCards from "../TrainerProgressPerformanceCards"

function PerformanceDietCommitment({ data }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const { percentage, totalDayMacros, totalEatenDaysMacros } = data;
    return (
        <TrainerProgressPerformanceCards detailedData={{ title: "diet commitment", data: [] }} icon={<AppleIcon fill={true} />} color={isDarkMode ? `text-green-500` : `text-green-600`} title="diet commitment">
            <ProgressBarPerformance label={percentage} percentage={percentage} key={"label"} color={isDarkMode ? `text-green-500` : `text-green-600`} progressColor={isDarkMode ? `bg-green-500` : `bg-green-600`} />
            <span className={`text-sm text-right ${isDarkMode ? colors.text_gray_50 : colors.text_gray_700}`}>{totalEatenDaysMacros} / {totalDayMacros} <strong>Kcal</strong></span>
        </TrainerProgressPerformanceCards>
    )
}

export default PerformanceDietCommitment
