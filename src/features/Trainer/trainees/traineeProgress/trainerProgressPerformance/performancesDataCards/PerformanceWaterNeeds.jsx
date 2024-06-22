import WaterNeedIcon from "../../../../../../Icons/WaterNeedIcon";
import { useDarkMode } from "../../../../../../context/DarkModeProvider";
import styles from "../../../../../../styles/styles";
import Button from "../../../../../../ui/Button";
import { formatDate } from "../../../../../../utils/helpers";
import TrainerProgressPerformanceCards from "../TrainerProgressPerformanceCards";

function PerformanceWaterNeeds({ data }) {
    const { goal, weeklyWaterIntake } = data;
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    return (
        <TrainerProgressPerformanceCards detailedData={{ data: weeklyWaterIntake, title: "water needs" }} icon={<WaterNeedIcon />} color={isDarkMode ? `text-cyan-500` : `text-cyan-600`} title="water needs">
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                        <span className={`text-2xl font-bold uppercase ${isDarkMode ? `text-cyan-500` : `text-cyan-600`}`}>
                            {goal ?? 0} ml
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

export default PerformanceWaterNeeds
