import Button from "../../../../../ui/Button"
import CreateFood from "../../foods/CreateFood"
import NutritionFoodFilterForm from "../../foods/NutritionFoodFilterForm"
import NutritionOperations from "../../NutritionOperations"
import NutritionMealsTable from "../../meals/NutritionMealsTable"
import { useNavigate } from "react-router-dom"
import { HiPlusSm } from "react-icons/hi"
import { useGetMeals } from "../../meals/useGetMeals"
import Spinner from "../../../../../ui/Spinner"

function NutritionMeals() {
    const navigate = useNavigate()
    const { trainerMeals = [], isLoading } = useGetMeals();
    if (isLoading) return <div className="flex items-center justify-center h-[40dvh]"><Spinner /></div>
    return (
        <>
            <NutritionOperations
                filterTabs={{
                    filterField: "meal",
                    options: [
                        { label: "all meals", value: "all" },
                        { label: "my private meals templates", value: "private-meals" },
                        { label: "proFIT meals templates", value: "proFit-meals" },
                    ]
                }}
                filterForm={<NutritionFoodFilterForm />}
                modalForm={< CreateFood />}
                modalName="meal"
                search="Search Meal Name...">
                <Button onClick={() => navigate("meals")}>
                    <p className="capitalize flex justify-center items-center gap-1">
                        <span>create new meal</span>
                        <span className="text-lg"><HiPlusSm /></span>
                    </p>
                </Button>
            </NutritionOperations>
            <NutritionMealsTable meals={trainerMeals} />
        </>
    )
}

export default NutritionMeals
