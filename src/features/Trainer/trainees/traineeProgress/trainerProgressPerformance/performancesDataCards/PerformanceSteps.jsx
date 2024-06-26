import { useState } from "react";
import StepsIcon from "../../../../../../Icons/StepsIcon";
import { useDarkMode } from "../../../../../../context/DarkModeProvider";
import styles from "../../../../../../styles/styles";
import Button from "../../../../../../ui/Button";
import { formatDate } from "../../../../../../utils/helpers";
import TrainerProgressPerformanceCards from "../TrainerProgressPerformanceCards";
import InputFloatingLabel from "../../../../../../ui/InputFloatingLabel";

function PerformanceSteps({ data }) {
    const { target, value, weeklySteps } = data;
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const [isOpen, setIsOpen] = useState(false);
    const [addGoal, setAddGoal] = useState(target ?? 0);
    return (
        <TrainerProgressPerformanceCards detailedData={{ data: weeklySteps ?? [], chart: "barChart", yAxisLabel: " step" }} icon={<StepsIcon />} color={isDarkMode ? `text-red-500` : `text-red-600`} title="steps">
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <span className={`text-2xl font-bold ${isDarkMode ? `text-indigo-500` : `text-indigo-500`}`}>
                        {value ?? 0}/{target ?? 0} steps
                    </span>
                    <span className={`text-xs ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>{formatDate(new Date())}</span>
                </div>
            </div>
            {
                isOpen ?
                    <div className="flex gap-2">
                        <InputFloatingLabel item={{ label: "steps goal", id: "stepsGoal", value: addGoal, type: "number" }} onChange={(e) => setAddGoal(e.target.value)} />
                        <div className="flex gap-2">
                            <Button type="primary" customeStyle="whitespace-nowrap">set goal</Button>
                            <Button onClick={() => setIsOpen(false)} type="secondary">cancel</Button>
                        </div>
                    </div>
                    :
                    <Button onClick={() => setIsOpen(true)} type="secondary">set new goal</Button>
            }
            {/* <span className={`text-xs text-right ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>last 7 days</span> */}
        </TrainerProgressPerformanceCards>
    )
}

export default PerformanceSteps
