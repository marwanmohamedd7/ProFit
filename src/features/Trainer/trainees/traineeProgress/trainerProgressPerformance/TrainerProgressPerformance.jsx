import SpinnerMini from "../../../../../ui/SpinnerMini";
import PerformanceDietCommitment from "./performancesDataCards/PerformanceDietCommitment";
import PerformanceHeartRate from "./performancesDataCards/PerformanceHeartRate";
import PerformanceSleepTrack from "./performancesDataCards/PerformanceSleepTrack";
import PerformanceSteps from "./performancesDataCards/PerformanceSteps";
import PerformanceWaterNeeds from "./performancesDataCards/PerformanceWaterNeeds";
import PerformanceWorkoutCommitment from "./performancesDataCards/PerformanceWorkoutCommitment";
// import { useGetProgressCommitments } from "./useGetProgressCommitments";
import useGetProgressPerformances from "./useGetProgressPerformances";

function TrainerProgressPerformance() {
    // const { getTraineeProgressCommitments, isLoading: isGettingCommitments } = useGetProgressCommitments();
    const { getTraineeProgressPerformances, isLoading: isGettingperformances } = useGetProgressPerformances();
    if (isGettingperformances) return <div className="h-[20rem] w-full flex items-center justify-center"><SpinnerMini /></div>
    const { heartRate, sleepData, steps, waterIntake, weeklyHeartRate, weeklySleep, weeklySteps, weeklyWaterIntake } = getTraineeProgressPerformances;
    // console.log(getTraineeProgressCommitments)
    return (
        <div className="grid grid-rows-[1fr_1fr] grid-cols-3 w-full gap-4 rounded-lg">
            <PerformanceDietCommitment />
            <PerformanceWorkoutCommitment />
            <PerformanceSleepTrack data={{ ...sleepData, weeklySleep }} />
            <PerformanceSteps data={{ ...steps, weeklySteps }} />
            <PerformanceWaterNeeds data={{ ...waterIntake, weeklyWaterIntake }} />
            <PerformanceHeartRate data={{ ...heartRate, weeklyHeartRate }} />
        </div>
    )
}

export default TrainerProgressPerformance
