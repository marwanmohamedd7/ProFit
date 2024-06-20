import { HiPlusSm } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";
import { useDietProvider } from "../../../../../context/DietProvider";
import DietMeal from "./DietMeal";
import Button from "../../../../../ui/Button";
import { useDarkMode } from "../../../../../context/DarkModeProvider";
import styles from "../../../../../styles/styles";

function DietMeals() {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const [searchParams] = useSearchParams()
    const { days, dispatch } = useDietProvider()
    const activeDay = searchParams.get("day") ?? "1";
    const activeDayMeals = days.find(day => day.day === activeDay)?.meals ?? [];
    return (
        <div className={`border space-y-4 p-4 rounded-md ${isDarkMode ? `${colors.border_gray_700} ${colors.bg_slate_800}` : colors.bg_white}`}>
            <h3 className={`${isDarkMode ? colors.text_gray_100 : colors.text_gray_900} font-bold capitalize`}>diet meals</h3>
            {activeDayMeals.map((meal, index) =>
                <DietMeal index={index} key={meal?._id || meal?.mealId} meal={meal} />
            )}
            {/* <Button type="secondary" onClick={() => setMealCount(value => value + 1)} customeStyle="ml-auto py-2.5"> */}
            <Button type="secondary" onClick={() => dispatch({ type: "diet/addMeal", payload: activeDay })} customeStyle="ml-auto py-2.5">
                <p className="capitalize flex justify-center items-center gap-1">
                    <span>new section</span>
                    <span className="text-lg"><HiPlusSm /></span>
                </p>
            </Button>
        </div>
    )
}

export default DietMeals
