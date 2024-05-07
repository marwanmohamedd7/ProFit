import { useEffect } from "react";
import Spinner from "../../../../../ui/Spinner";
import DietOperations from "./DietOperations"
import { useGetSpecificDietTemplate } from "./useGetSpecificDietTemplate";
import { useDietProvider } from "../../../../../context/DietProvider";

function DietPlanTemplate() {
    let fetchedData;
    const { dispatch } = useDietProvider()
    const { getDietTemplate, isLoading } = useGetSpecificDietTemplate();
    if (Object.keys(getDietTemplate).length && !isLoading) fetchedData = getDietTemplate
    useEffect(function () {
        if (isLoading && fetchedData) return; // Do nothing while loading
        if (!fetchedData?._id) dispatch({ type: "diet/startMyDietPlan" });
        else dispatch({ type: "diet/updateMyDietPlan", payload: fetchedData });
    }, [fetchedData, isLoading, dispatch])
    if (isLoading) return <div className="flex items-center justify-center h-[80dvh]"><Spinner /></div>
    return <DietOperations dietToUpdate={getDietTemplate} />
}

export default DietPlanTemplate
