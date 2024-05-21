import SpinnerMini from "../../../../ui/SpinnerMini";
import TraineeDietPlansTable from "./TraineeDietPlansTable"
import { useGetTraineeAllCustomizePlans } from "./useGetTraineeAllCustomizePlans"

function TraineeDietPlans() {
    const { getTraineeAllCustomizePlans, isLoading, count } = useGetTraineeAllCustomizePlans();
    if (isLoading) return <div className="flex items-center justify-center h-[40dvh]"><SpinnerMini size="text-2xl text-blue-900" /></div>
    return (
        <div className="space-y-10 bg-white py-4 rounded-md">
            <TraineeDietPlansTable diets={getTraineeAllCustomizePlans} count={count} />
        </div>
    )
}

export default TraineeDietPlans
