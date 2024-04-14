import { useSearchParams } from "react-router-dom"
import NutritionTable from "../../NutritionTable";
import FoodsTableOperations from "../../FoodsTableOperations";
import { useGetTrainerFoods } from "../useGetTrainerFoods";
import { useGetAppFoods } from "../../useGetAppFoods";
import Spinner from "../../../../../ui/Spinner";

function NutritionFood() {
    const [searchParams] = useSearchParams();
    const { appFoods, isLoading: loadAppFoods } = useGetAppFoods();
    const { trainerFoods, isLoading: loadTrainerFoods } = useGetTrainerFoods();
    const isLoading = loadAppFoods || loadTrainerFoods;
    if (isLoading) return <div className="flex items-center justify-center h-[40dvh]"><Spinner /></div>
    const filterValue = searchParams.get('food') || 'all';
    let filteredFoods;
    if (filterValue === 'all') filteredFoods = [...appFoods, ...trainerFoods];
    if (filterValue === 'private') filteredFoods = trainerFoods;
    if (filterValue === 'proFit') filteredFoods = appFoods;
    return (
        <>
            <FoodsTableOperations />
            <NutritionTable foods={filteredFoods} />
        </>
    )
}

export default NutritionFood
