import SpinnerMini from "../../../../ui/SpinnerMini";
import TableOperationsContainer from "../../../../ui/TableOperationsContainer";
import TraineeDietPlansTable from "./TraineeDietPlansTable"
import { useGetTraineeAllCustomizePlans } from "./useGetTraineeAllCustomizePlans"

function TraineeDietPlans() {
    const { getTraineeAllCustomizePlans, isLoading, count } = useGetTraineeAllCustomizePlans();
    if (isLoading) return <div className="flex items-center justify-center h-[40dvh]"><SpinnerMini size="text-2xl" /></div>
    return (
        <TableOperationsContainer>
            <TraineeDietPlansTable diets={getTraineeAllCustomizePlans} count={count} />
        </TableOperationsContainer>
    )
}

export default TraineeDietPlans
