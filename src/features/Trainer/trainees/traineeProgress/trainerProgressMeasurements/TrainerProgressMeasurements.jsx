import { useState } from "react";
import DivContainer from "../../../../../ui/DivContainer"
import FilterButtonsState from "../../../../../ui/FilterButtonsState";
import SpinnerMini from "../../../../../ui/SpinnerMini";
import ProgressAreaChart from "./ProgressAreaChart";
import { useGetProgressMeasurements } from "./useGetProgressMeasurements"

function TrainerProgressMeasurements() {
    let yAxisLabel;
    const [value, setValue] = useState("bodyFat")
    const { getTraineeProgressMeasurements, isLoading } = useGetProgressMeasurements();
    if (value === "bodyFat") yAxisLabel = " %"
    if (value === "weight") yAxisLabel = " kg"
    if (value === "neckArea") yAxisLabel = " cm"
    if (value === "waistArea") yAxisLabel = " cm"
    return (
        <DivContainer>
            <div className="flex justify-end py-4">
                <FilterButtonsState
                    setValue={setValue}
                    options={[
                        { value: 'bodyFat', label: 'Body fat' },
                        { value: 'weight', label: 'weight' },
                        { value: 'neckArea', label: 'neck area' },
                        { value: 'waistArea', label: 'waist area' },
                    ]}
                />
            </div>
            {
                isLoading ?
                    <div className="flex justify-center mt-20 w-full h-full"><SpinnerMini /></div>
                    :
                    <ProgressAreaChart data={getTraineeProgressMeasurements?.[value]} yAxisLabel={yAxisLabel} />
            }
        </DivContainer>
    )
}

export default TrainerProgressMeasurements
