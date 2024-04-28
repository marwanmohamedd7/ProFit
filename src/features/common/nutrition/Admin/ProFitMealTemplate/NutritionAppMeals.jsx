import { HiPlusSm } from "react-icons/hi"
import { useNavigate } from "react-router-dom"
import NutritionOperations from "../../NutritionOperations"
import NutritionFoodFilterForm from "../../foods/NutritionFoodFilterForm"
import CreateFood from "../../foods/CreateFood"
// import Button from "../../../../../ui/Button"
import NutritionMealsTable from "../../meals/NutritionMealsTable"
import Button from "../../../../../ui/Button"
import Spinner from "../../../../../ui/Spinner"
import { useGetAppMeals } from "../../meals/useGetAppMeals"

function NutritionAppMeals() {
    const navigate = useNavigate()
    const { appMeals = [], isLoading } = useGetAppMeals();
    if (isLoading) return <div className="flex items-center justify-center h-[40dvh]"><Spinner /></div>
    return (
        <>
            <NutritionOperations
                filterForm={<NutritionFoodFilterForm />}
                search="Search Meal Name..."
            >
                <Button onClick={() => navigate("meals")}>
                    <p className="capitalize flex justify-center items-center gap-1">
                        <span>create new meal</span>
                        <span className="text-lg"><HiPlusSm /></span>
                    </p>
                </Button>
            </NutritionOperations>
            <NutritionMealsTable meals={appMeals} />
        </>
    )
}

export default NutritionAppMeals
