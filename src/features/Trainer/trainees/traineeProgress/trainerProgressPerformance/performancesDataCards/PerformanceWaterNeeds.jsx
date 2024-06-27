import { useState } from "react";
import WaterNeedIcon from "../../../../../../Icons/WaterNeedIcon";
import { useDarkMode } from "../../../../../../context/DarkModeProvider";
import styles from "../../../../../../styles/styles";
import Button from "../../../../../../ui/Button";
import { formatDate } from "../../../../../../utils/helpers";
import TrainerProgressPerformanceCards from "../TrainerProgressPerformanceCards";
import InputFloatingLabel from "../../../../../../ui/InputFloatingLabel";
import useUpdateWaterNeedTarget from "./useUpdateWaterNeedTarget";
import SpinnerMini from "../../../../../../ui/SpinnerMini";

function PerformanceWaterNeeds({ data }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const [isOpen, setIsOpen] = useState(false);
    const { goal, intake, weeklyWaterIntake } = data;
    const [addGoal, setAddGoal] = useState(goal ?? "");
    const { updateWaterNeedTarget, isUpdating } = useUpdateWaterNeedTarget();

    function handleSetGoal() {
        updateWaterNeedTarget(addGoal);
        setAddGoal("");
    }

    return (
        <TrainerProgressPerformanceCards detailedData={{ data: weeklyWaterIntake ?? [], chart: "biBarChart", yAxisLabel: " ml" }} icon={<WaterNeedIcon />} color={isDarkMode ? `text-cyan-500` : `text-cyan-600`} title="water needs">
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <span className={`text-2xl font-bold uppercase ${isDarkMode ? `text-cyan-500` : `text-cyan-600`}`}>
                        {intake ?? 0}/{goal ?? 0} ml
                    </span>
                    <span className={`text-xs ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>{formatDate(new Date())}</span>
                </div>
            </div>
            {
                isOpen ?
                    <div className="flex gap-2">
                        <InputFloatingLabel item={{ label: "water need goal", id: "waterNeedGoal", value: addGoal, type: "number" }} onChange={(e) => setAddGoal(e.target.value)} />
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

export default PerformanceWaterNeeds
