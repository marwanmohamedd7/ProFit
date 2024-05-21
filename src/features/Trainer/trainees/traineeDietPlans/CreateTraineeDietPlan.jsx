import { useEffect } from "react";
import { useDietProvider } from "../../../../context/DietProvider";
import DietOperations from "../../../common/nutrition/Trainer/trainerDiets/DietOperations";
import { useGetSpecificTraineeCustomizedPlanInfo } from "./useGetSpecificTraineeCustomizedPlanInfo";
import Spinner from "../../../../ui/Spinner";

function CreateTraineeDietPlan() {
    let fetchedData;
    const { dispatch } = useDietProvider()
    const { getTraineeCustomizedPlanInfo, isLoading } = useGetSpecificTraineeCustomizedPlanInfo();
    if (Object.keys(getTraineeCustomizedPlanInfo).length && !isLoading) fetchedData = getTraineeCustomizedPlanInfo
    useEffect(function () {
        if (isLoading && fetchedData) return; // Do nothing while loading
        const { days, ...values } = fetchedData ?? {};
        if (!fetchedData?._id) dispatch({ type: "diet/startCustomizedDietPlan" });
        else {
            if (days.length) dispatch({ type: "diet/updateCustomizedDietPlan", payload: fetchedData })
            else dispatch({ type: "diet/setCustomizedDietPlanData", payload: values })
        };
    }, [fetchedData, isLoading, dispatch])
    if (isLoading) return <div className="flex items-center justify-center h-[80dvh]"><Spinner /></div>
    return <DietOperations dietToUpdate={getTraineeCustomizedPlanInfo} traineeData={getTraineeCustomizedPlanInfo?.trainee} dietType="customized plan" />
}

export default CreateTraineeDietPlan
