import { HiPlusSm } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useGetDietTemplates } from "./useGetDietTemplates";
import Button from "../../../../../ui/Button";
import Spinner from "../../../../../ui/Spinner";
import NutritionDietsTable from "./NutritionDietsTable";
import NutritionOperations from "../../NutritionOperations";
import { useSearch } from "../../../../../hooks/useSearch";

function NutritionDiets({ dietType = "my plan", onCloseModal }) {
    const navigate = useNavigate();
    const { getDietTemplates, allTrainerDietTemplates, count, isLoading } = useGetDietTemplates();
    const { searchedItems, searchKeyword, setSearchKeyword } = useSearch(allTrainerDietTemplates, ["planName", "plantype", "daysCount"]);
    const dataCount = searchKeyword ? 1 : count
    const dataReady = searchKeyword ? searchedItems : getDietTemplates;
    return (
        <div className={`space-y-4`}>
            <NutritionOperations
                search="Search Diet Template Name..."
                setSearchKeyword={setSearchKeyword}
            >
                {
                    dietType !== "customized plan" && dietType !== "free plan" &&
                    <Button type="primary" onClick={() => navigate("diets")}>
                        <p className="capitalize flex justify-center items-center gap-1">
                            <span>create new diet template</span>
                            <span className="text-lg"><HiPlusSm /></span>
                        </p>
                    </Button>
                }
            </NutritionOperations >
            {
                isLoading ?
                    <Spinner />
                    :
                    <NutritionDietsTable diets={dataReady} count={dataCount} dietType={dietType} onCloseModal={onCloseModal} />
            }
        </div>
    )
}

export default NutritionDiets
