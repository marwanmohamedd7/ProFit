import NutritionTable from "../../NutritionTable";
import { useGetAppFoods } from "../../useGetAppFoods";
import FoodsTableOperations from "../../FoodsTableOperations"
import Spinner from "../../../../../ui/Spinner";

function NutritionAppFood() {
    const { appFoods, isLoading } = useGetAppFoods();
    if (isLoading) return <div className="flex items-center justify-center h-[40dvh]"><Spinner /></div>
    return (
        <>
            <FoodsTableOperations />
            <NutritionTable foods={appFoods}/>
        </>
    )
}

export default NutritionAppFood
