import { useState } from "react";
import StepsIcon from "../../../../../../Icons/StepsIcon";
import { useDarkMode } from "../../../../../../context/DarkModeProvider";
import styles from "../../../../../../styles/styles";
import Button from "../../../../../../ui/Button";
import { formatDate } from "../../../../../../utils/helpers";
import TrainerProgressPerformanceCards from "../TrainerProgressPerformanceCards";
import InputFloatingLabel from "../../../../../../ui/InputFloatingLabel";
import useUpdateStepsGoal from "./useUpdateStepsGoal";
import SpinnerMini from "../../../../../../ui/SpinnerMini";

function PerformanceSteps({ data }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const [isOpen, setIsOpen] = useState(false);
    const { target, value, weeklySteps } = data;
    const [addGoal, setAddGoal] = useState("");
    const { updateStepsGoal, isUpdating } = useUpdateStepsGoal();
    const dataDetails = weeklySteps?.map(({ target, value, createdAt }) => ({ target, value, createdAt }));

    function handleSetGoal() {
        updateStepsGoal(addGoal);
        setAddGoal("");
    }

    return (
        <TrainerProgressPerformanceCards detailedData={{ data: dataDetails ?? [], chart: "biBarChart", yAxisLabel: " step" }} icon={<StepsIcon />} color={isDarkMode ? `text-red-500` : `text-red-600`} title="steps">
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
                            <Button onClick={handleSetGoal} type="primary" customeStyle="whitespace-nowrap">
                                {isUpdating ? <SpinnerMini dark={false} /> : "set goal"}
                            </Button>
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
