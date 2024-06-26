import { HiPlusSm } from "react-icons/hi";
import { useGetAppFoods } from "./useGetAppFoods";
import Button from "../../../../../ui/Button";
import Spinner from "../../../../../ui/Spinner";
import NutritionTable from "../../foods/NutritionTable";
import NutritionOperations from "../../NutritionOperations";
import NutritionFoodFilterForm from "../../foods/NutritionFoodFilterForm";
import { useSearch } from "../../../../../hooks/useSearch";
import { useNavigate } from "react-router-dom";

function NutritionAppFood({ section = "food", onCloseModal }) {
    const navigate = useNavigate();
    const { appFoods, allAppFoods, count, isLoading } = useGetAppFoods();

    // Use the useSearch hook to filter foods based on the search keyword
    const { searchedItems, searchKeyword, setSearchKeyword } = useSearch(allAppFoods, ["foodname", "category", "servingUnit", "baseMacro", "per", ["macros", "calories"], ["macros", "carbs"], ["macros", "fats"], ["macros", "proteins"]]);
    const dataCount = searchKeyword ? 1 : count
    const dataReady = searchKeyword ? searchedItems : appFoods;
    return (
        <div className="space-y-4">
            <NutritionOperations
                filterForm={<NutritionFoodFilterForm />}
                setSearchKeyword={setSearchKeyword}
                search="Search Food Name..."
            >
                {
                    section === "food" &&
                    <Button onClick={() => navigate("/admin/nutrition/foods")} type="primary">
                        <p className="capitalize flex justify-center items-center gap-1">
                            <span>create new food</span>
                            <span className="text-lg"><HiPlusSm /></span>
                        </p>
                    </Button>
                }
            </NutritionOperations>
            {
                isLoading ?
                    <Spinner />
                    :
                    <NutritionTable foods={dataReady} count={dataCount} section={section} onCloseModal={onCloseModal} />
            }
        </div>
    )
}

export default NutritionAppFood
