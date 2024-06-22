import StepsIcon from "../../../../../../Icons/StepsIcon";
import { useDarkMode } from "../../../../../../context/DarkModeProvider";
import styles from "../../../../../../styles/styles";
import Button from "../../../../../../ui/Button";
import { formatDate } from "../../../../../../utils/helpers";
import TrainerProgressPerformanceCards from "../TrainerProgressPerformanceCards";

function PerformanceSteps({ data }) {
    const { goal, weeklySteps } = data;
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    return (
        <TrainerProgressPerformanceCards detailedData={{ data: weeklySteps, title: "steps", yAxisLabel:" step" }} icon={<StepsIcon />} color={isDarkMode ? `text-red-500` : `text-red-600`} title="steps">
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                        <span className={`text-2xl font-bold ${isDarkMode ? `text-indigo-500` : `text-indigo-500`}`}>
                            {goal??0} steps
                        </span>
                        <span className={`text-sm ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>{formatDate(new Date())}</span>
                    </div>
                    <Button type="secondary">
                        <span>set new goal</span>
                    </Button>
                </div>
            </div>
            <span className={`text-xs text-right ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>last 7 days</span>
        </TrainerProgressPerformanceCards>
    )
}

export default PerformanceSteps
