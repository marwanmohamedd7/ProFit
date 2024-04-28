import { useNavigate } from "react-router-dom";
// import Spinner from "../../../../../ui/Spinner";
import NutritionOperations from "../../NutritionOperations";
import Button from "../../../../../ui/Button";
import { HiPlusSm } from "react-icons/hi";
import NutritionDietsTable from "./NutritionDietsTable";

const diets = []

function NutritionDiets() {
    const navigate = useNavigate()
    // if (isLoading) return <div className="flex items-center justify-center h-[40dvh]"><Spinner /></div>
    return (
        <>
            <NutritionOperations
                // filterForm={<NutritionFoodFilterForm />}
                search="Search Diet Template Name..."
            >
                <Button onClick={() => navigate("diets")}>
                    <p className="capitalize flex justify-center items-center gap-1">
                        <span>create new diet template</span>
                        <span className="text-lg"><HiPlusSm /></span>
                    </p>
                </Button>

            </NutritionOperations>
            <NutritionDietsTable diets={diets} />
        </>
    )
}

export default NutritionDiets
