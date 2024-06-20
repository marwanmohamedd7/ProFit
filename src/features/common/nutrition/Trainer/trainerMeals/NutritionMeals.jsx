import { HiPlusSm } from "react-icons/hi"
import { useNavigate } from "react-router-dom"
import { useGetTrainerMeals } from "./useGetTrainerMeals"
import Button from "../../../../../ui/Button"
import Spinner from "../../../../../ui/Spinner"
import NutritionOperations from "../../NutritionOperations"
import NutritionMealsTable from "../../meals/NutritionMealsTable"
import { useSearch } from "../../../../../hooks/useSearch"

function NutritionMeals({ section = "meal", onCloseModal }) {
    const navigate = useNavigate();
    const { trainerMeals, allTrainerMeals, count, isLoading } = useGetTrainerMeals();

    const { searchedItems, searchKeyword, setSearchKeyword } = useSearch(allTrainerMeals, ["mealname", "mealtype", ["mealmacros", "calories"], ["mealmacros", "carbs"], ["mealmacros", "fats"], ["mealmacros", "proteins"]]);
    const dataCount = searchKeyword ? 1 : count
    const dataReady = searchKeyword ? searchedItems : trainerMeals;
    return (
        <div className="space-y-4">
            <NutritionOperations
                filterTabs={{
                    filterField: "meal",
                    options: [
                        { label: "all meals", value: "allMeals" },
                        { label: "my private meals templates", value: "trainerMeals" },
                        { label: "proFIT meals templates", value: "profitMeals" },
                    ]
                }}
                // filterForm={<NutritionFoodFilterForm />}
                search="Search Meal Name..."
                setSearchKeyword={setSearchKeyword}
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
            {
                isLoading ?
                    <Spinner />
                    :
                    <NutritionMealsTable meals={dataReady} count={dataCount} section={section} onCloseModal={onCloseModal} />
            }
        </div>
    )
}

export default NutritionMeals
