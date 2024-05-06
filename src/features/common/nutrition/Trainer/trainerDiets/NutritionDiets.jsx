import { HiPlusSm } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useGetDietTemplates } from "./useGetDietTemplates";
import { useDietProvider } from "../../../../../context/DietProvider";
import Button from "../../../../../ui/Button";
import Spinner from "../../../../../ui/Spinner";
import NutritionDietsTable from "./NutritionDietsTable";
import NutritionOperations from "../../NutritionOperations";

function NutritionDiets() {
    const navigate = useNavigate()
    const { dispatch } = useDietProvider()
    const { getDietTemplates, count, isLoading } = useGetDietTemplates()
    if (isLoading) return <div className="flex items-center justify-center h-[40dvh]"><Spinner /></div>
    return (
        <>
            <NutritionOperations
                // filterForm={<NutritionFoodFilterForm />}
                search="Search Diet Template Name..."
            >
                <Button onClick={() => {
                    navigate("diets")
                    dispatch({ type: "diet/startMyDietPlan" })
                }
                }>
                    <p className="capitalize flex justify-center items-center gap-1">
                        <span>create new diet template</span>
                        <span className="text-lg"><HiPlusSm /></span>
                    </p>
                </Button>

            </NutritionOperations>
            <NutritionDietsTable diets={getDietTemplates} count={count} />
        </>
    )
}

export default NutritionDiets
