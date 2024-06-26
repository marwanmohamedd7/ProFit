import AppleIcon from "../../../../../../Icons/AppleIcon"
import { useDarkMode } from "../../../../../../context/DarkModeProvider";
import styles from "../../../../../../styles/styles";
import ProgressBarPerformance from "../ProgressBarPerformance"
import TrainerProgressPerformanceCards from "../TrainerProgressPerformanceCards"

function PerformanceDietCommitment({ data }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const { percentage, totalDayMacros, totalEatenDayMacros, dietDetails } = data ?? {};
    const dataDetails = dietDetails?.map(({ startDate, totalDayMacros, totalEatenDayMacros }) => ({ createdAt: startDate, target: totalDayMacros, value: totalEatenDayMacros }));
    return (
        <TrainerProgressPerformanceCards detailedData={{ chart: "biBarChart", data: dataDetails ?? [] }} icon={<AppleIcon fill={true} />} color={isDarkMode ? `text-green-500` : `text-green-600`} title="diet commitment">
            <ProgressBarPerformance label={percentage} percentage={percentage} key={"label"} color={isDarkMode ? `text-green-500` : `text-green-600`} progressColor={isDarkMode ? `bg-green-500` : `bg-green-600`} />
            <span className={`text-sm text-right ${isDarkMode ? colors.text_gray_50 : colors.text_gray_700}`}>{totalEatenDayMacros} / {totalDayMacros} <strong>Kcal</strong></span>
        </TrainerProgressPerformanceCards>
    )
}

export default PerformanceDietCommitment
