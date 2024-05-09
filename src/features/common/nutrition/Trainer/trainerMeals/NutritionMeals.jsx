import { HiPlusSm } from "react-icons/hi"
import { useNavigate } from "react-router-dom"
import { useGetTrainerMeals } from "./useGetTrainerMeals"
import Button from "../../../../../ui/Button"
import Spinner from "../../../../../ui/Spinner"
import NutritionOperations from "../../NutritionOperations"
import NutritionMealsTable from "../../meals/NutritionMealsTable"
import NutritionFoodFilterForm from "../../foods/NutritionFoodFilterForm"

function NutritionMeals({ section = "meal", onCloseModal }) {
    const navigate = useNavigate()
    const { trainerMeals = [], count, isLoading } = useGetTrainerMeals();
    if (isLoading) return <div className="flex items-center justify-center h-[40dvh]"><Spinner /></div>

    return (
        <div>
            <NutritionOperations
                filterTabs={{
                    filterField: "meal",
                    options: [
                        { label: "all meals", value: "allMeals" },
                        { label: "my private meals templates", value: "trainerMeals" },
                        { label: "proFIT meals templates", value: "profitMeals" },
                    ]
                }}
                filterForm={<NutritionFoodFilterForm />}
                search="Search Meal Name..."
            >
                {
                    section === "meal" &&
                    <Button type="primary" onClick={() => navigate("meals")}>
                        <p className="capitalize flex justify-center items-center gap-1">
                            <span>create new meal</span>
                            <span className="text-lg"><HiPlusSm /></span>
                        </p>
                    </Button>
                }
            </NutritionOperations>
            <NutritionMealsTable meals={trainerMeals} section={section} count={count} onCloseModal={onCloseModal} />
        </div>
    )
}

export default NutritionMeals
