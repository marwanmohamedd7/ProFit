import { useEffect } from "react";
import { useDietProvider } from "../../../../../context/DietProvider";
import { useGetSpecificDietTemplate } from "../../../../common/nutrition/Trainer/trainerDiets/useGetSpecificDietTemplate";
import Spinner from "../../../../../ui/Spinner";
import DietOperations from "../../../../common/nutrition/Trainer/trainerDiets/DietOperations"

function DietFreePlan() {
    let fetchedData;
    const { dispatch } = useDietProvider()
    const { getDietTemplate, isLoading } = useGetSpecificDietTemplate();
    if (Object.keys(getDietTemplate).length && !isLoading) fetchedData = getDietTemplate
    useEffect(function () {
        if (isLoading && fetchedData) return; // Do nothing while loading
        if (!fetchedData?._id) dispatch({ type: "diet/startFreeDietPlan" });
        else dispatch({ type: "diet/updateFreeDietPlan", payload: fetchedData });
    }, [fetchedData, isLoading, dispatch])
    if (isLoading) return <div className="flex items-center justify-center h-[80dvh]"><Spinner /></div>
    return <DietOperations dietToUpdate={getDietTemplate} />
}

export default DietFreePlan
