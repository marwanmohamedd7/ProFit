import { HiPlusSm } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";
import { useDietProvider } from "../../../../../context/DietProvider";
import DietMeal from "./DietMeal";
import Button from "../../../../../ui/Button";

function DietMeals() {
    const { days, dispatch } = useDietProvider()
    const [searchParams] = useSearchParams()
    const activeDay = searchParams.get("day") ?? "1";
    const activeDayMeals = days.find(day => day.day === activeDay)?.meals ?? [];
    function handleDeleteMealSection(id) {
        dispatch({ type: "diet/deleteMeal", payload: { day: activeDay, mealId: id } })
        dispatch({ type: "diet/calcDayMacros", payload: activeDay })

    }
    return (
        <div className="bg-white border space-y-4 p-2 rounded">
            <h3 className="text-blue-800 font-bold capitalize">diet meals</h3>
            {activeDayMeals.map(meal =>
                <DietMeal key={meal.mealId} meal={meal} handleDeleteMealSection={handleDeleteMealSection} />
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
