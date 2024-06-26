import DumbbellIcon from "../../../../../../Icons/DumbbellIcon";
import { useDarkMode } from "../../../../../../context/DarkModeProvider";
import styles from "../../../../../../styles/styles";
import ProgressBarPerformance from "../ProgressBarPerformance";
import TrainerProgressPerformanceCards from "../TrainerProgressPerformanceCards";

function PerformanceWorkoutCommitment({ data }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const { percentage, totalExercises, totalExercisesDone } = data;
    return (
        <TrainerProgressPerformanceCards detailedData={{ chart: "biBarChart", data: [] }} icon={<DumbbellIcon />} color={isDarkMode ? `text-red-500` : `text-red-600`} title="workout commitment">
            <ProgressBarPerformance label={percentage} percentage={percentage} key={"label"} color={isDarkMode ? `text-red-500` : `text-red-600`} progressColor={isDarkMode ? `bg-red-500` : `bg-red-600`} />
            <span className={`text-sm text-right ${isDarkMode ? colors.text_gray_50 : colors.text_gray_700}`}>{totalExercisesDone} / {totalExercises} <strong>Exercises</strong></span>
        </TrainerProgressPerformanceCards>
    )
}

export default PerformanceWorkoutCommitment
