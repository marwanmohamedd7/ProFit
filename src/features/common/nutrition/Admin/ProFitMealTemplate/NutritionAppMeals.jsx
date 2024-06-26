import { HiPlusSm } from "react-icons/hi"
import { useNavigate } from "react-router-dom"
import { useGetAppMeals } from "../../meals/useGetAppMeals"
import Button from "../../../../../ui/Button"
import Spinner from "../../../../../ui/Spinner"
import NutritionOperations from "../../NutritionOperations"
import NutritionMealsTable from "../../meals/NutritionMealsTable"
// import NutritionFoodFilterForm from "../../foods/NutritionFoodFilterForm"
import { useSearch } from "../../../../../hooks/useSearch"
import { useMealProvider } from "../../../../../context/MealProvider"
import { useDietProvider } from "../../../../../context/DietProvider"

function NutritionAppMeals({ section = "meal" }) {
    const navigate = useNavigate()
    const { dispatch: dispatchMeal } = useMealProvider();
    const { dispatch: dispatchDiet } = useDietProvider();
    const { appMeals, allAppMeals, count, isLoading } = useGetAppMeals();

    const { searchedItems, searchKeyword, setSearchKeyword } = useSearch(allAppMeals, ["mealname", "mealtype", ["mealmacros", "calories"], ["mealmacros", "carbs"], ["mealmacros", "fats"], ["mealmacros", "proteins"]]);
    const dataCount = searchKeyword ? 1 : count
    const dataReady = searchKeyword ? searchedItems : appMeals;
    return (
        <div className="space-y-4">
            <NutritionOperations
                // filterForm={<NutritionFoodFilterForm />}
                search="Search Meal Name..."
                setSearchKeyword={setSearchKeyword}
            >
                {
                    section === "meal" &&
                    <Button type="primary" onClick={() => {
                        dispatchMeal({ type: "meal/endSession" })
                        dispatchDiet({ type: "diet/endSession" })
                        navigate("meals")
                    }}>
                        <p className="capitalize flex justify-center items-center gap-1">
                            <span>create new meal</span>
                            <span className="text-lg"><HiPlusSm /></span>
                        </p>
                    </Button>
                }
            </NutritionOperations>
            {
                isLoading ?
                    <Spinner />
                    :
                    <NutritionMealsTable meals={dataReady} count={dataCount} section={section} />
            }
        </div>
    )
}

export default NutritionAppMeals
