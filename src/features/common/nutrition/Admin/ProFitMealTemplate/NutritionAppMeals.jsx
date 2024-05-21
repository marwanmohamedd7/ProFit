import { HiPlusSm } from "react-icons/hi"
import { useNavigate } from "react-router-dom"
import { useGetAppMeals } from "../../meals/useGetAppMeals"
import Button from "../../../../../ui/Button"
import Spinner from "../../../../../ui/Spinner"
import NutritionOperations from "../../NutritionOperations"
import NutritionMealsTable from "../../meals/NutritionMealsTable"
import NutritionFoodFilterForm from "../../foods/NutritionFoodFilterForm"

function NutritionAppMeals({ section = "meal" }) {
    const navigate = useNavigate()
    const { appMeals = [], count, isLoading } = useGetAppMeals();
    if (isLoading) return <div className="flex items-center justify-center h-[50dvh]"><Spinner /></div>
    return (
        <div>
            <NutritionOperations
                filterForm={<NutritionFoodFilterForm />}
                search="Search Meal Name..."
            >
                {
                    section === "meal" &&
                    <Button onClick={() => navigate("meals")}>
                        <p className="capitalize flex justify-center items-center gap-1">
                            <span>create new meal</span>
                            <span className="text-lg"><HiPlusSm /></span>
                        </p>
                    </Button>
                }
            </NutritionOperations>
            <NutritionMealsTable meals={appMeals} count={count} section={section} />
        </div>
    )
}

export default NutritionAppMeals
