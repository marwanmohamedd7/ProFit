import SpinnerMini from "../../../../ui/SpinnerMini"
import TraineeSubscriptionsTable from "./TraineeSubscriptionsTable";
import { useGetTraineeSubscriptions } from "./useGetTraineeSubscriptions"

function TraineeSubscriptions() {
    const { getTraineeSubscriptions, isLoading, count } = useGetTraineeSubscriptions();
    if (isLoading) return <div className="flex items-center justify-center h-[40dvh]"><SpinnerMini size="text-2xl text-blue-900" /></div>
    return (
        <div className="space-y-10 py-4 rounded-md">
            <TraineeSubscriptionsTable subscriptions={getTraineeSubscriptions} count={count} />
        </div>
    )
}

export default TraineeSubscriptions
