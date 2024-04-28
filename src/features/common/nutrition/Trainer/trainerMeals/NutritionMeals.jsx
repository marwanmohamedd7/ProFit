import { HiPlusSm } from "react-icons/hi"
import { useGetAllMeals } from "./useGetAllMeals"
import { useGetTrainerMeals } from "./useGetTrainerMeals"
import { useGetAppMeals } from "../../meals/useGetAppMeals"
import { useNavigate, useSearchParams } from "react-router-dom"
import Button from "../../../../../ui/Button"
import Spinner from "../../../../../ui/Spinner"
import NutritionOperations from "../../NutritionOperations"
import NutritionMealsTable from "../../meals/NutritionMealsTable"
import NutritionFoodFilterForm from "../../foods/NutritionFoodFilterForm"

function NutritionMeals() {
    let filteredMeals, count;
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const filterValue = searchParams.get('meal') || 'all';
    const { appMeals = [], count: countAppMeals, isLoading: loadAppMeals } = useGetAppMeals();
    const { allMeals = [], count: countAllMeals, isLoading: loadAllMeals } = useGetAllMeals();
    const { trainerMeals = [], count: countTrainerMeals, isLoading: loadTrainerMeals } = useGetTrainerMeals();
    // if (isLoading) return <div className="flex items-center justify-center h-[40dvh]"><Spinner /></div>
    if (filterValue === 'all' && loadAllMeals) return <div className="flex items-center justify-center h-[40dvh]"><Spinner /></div>
    else if (filterValue === 'all') {
        count = countAllMeals
        filteredMeals = allMeals
    }

    if (filterValue === 'proFit-meals' && loadAppMeals) return <div className="flex items-center justify-center h-[40dvh]"><Spinner /></div>
    else if (filterValue === 'proFit-meals') {
        count = countAppMeals
        filteredMeals = appMeals
    }

    if (filterValue === 'private-meals' && loadTrainerMeals) return <div className="flex items-center justify-center h-[40dvh]"><Spinner /></div>
    else if (filterValue === 'private-meals') {
        count = countTrainerMeals
        filteredMeals = trainerMeals
    }

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
            <NutritionMealsTable meals={filteredMeals} count={count} />
        </>
    )
}

export default NutritionMeals
