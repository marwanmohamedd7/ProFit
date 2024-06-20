import SpinnerMini from "../../../../ui/SpinnerMini"
import TableOperationsContainer from "../../../../ui/TableOperationsContainer";
import TraineeSubscriptionsTable from "./TraineeSubscriptionsTable";
import { useGetTraineeSubscriptions } from "./useGetTraineeSubscriptions"

function TraineeSubscriptions() {
    const { getTraineeSubscriptions, isLoading, count } = useGetTraineeSubscriptions();
    if (isLoading) return <div className="flex items-center justify-center h-[40dvh]"><SpinnerMini size="text-2xl text-blue-900" /></div>
    return (
        <TableOperationsContainer>
            <TraineeSubscriptionsTable subscriptions={getTraineeSubscriptions} count={count} />
        </TableOperationsContainer>
    )
}

export default TraineeSubscriptions
