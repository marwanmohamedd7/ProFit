import { HiPlusSm } from "react-icons/hi"
import { useGetAppMeals } from "../../meals/useGetAppMeals"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useGetTrainerMeals } from "../../meals/useGetTrainerMeals"
import Button from "../../../../../ui/Button"
import Spinner from "../../../../../ui/Spinner"
import NutritionOperations from "../../NutritionOperations"
import NutritionMealsTable from "../../meals/NutritionMealsTable"
import NutritionFoodFilterForm from "../../foods/NutritionFoodFilterForm"

function NutritionMeals() {
    let filteredMeals;
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const filterValue = searchParams.get('meal') || 'all';
    const { appMeals = [], isLoading: loadAppMeals } = useGetAppMeals()
    const { trainerMeals = [], isLoading: loadTrainerMeals } = useGetTrainerMeals();
    const isLoading = loadAppMeals || loadTrainerMeals;
    if (isLoading) return <div className="flex items-center justify-center h-[40dvh]"><Spinner /></div>
    if (filterValue === 'proFit-meals') filteredMeals = appMeals;
    if (filterValue === 'private-meals') filteredMeals = trainerMeals;
    if (filterValue === 'all') filteredMeals = [...appMeals, ...trainerMeals];

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
                search="Search Meal Name..."
            >
                <Button onClick={() => navigate("meals")}>
                    <p className="capitalize flex justify-center items-center gap-1">
                        <span>create new meal</span>
                        <span className="text-lg"><HiPlusSm /></span>
                    </p>
                </Button>
            </NutritionOperations>
            <NutritionMealsTable meals={filteredMeals} />
        </>
    )
}

export default NutritionMeals
