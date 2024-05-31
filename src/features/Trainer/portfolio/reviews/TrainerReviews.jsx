import TrainerOverallRating from "./TrainerOverallRating";
import TrainerClientsReviews from "./TrainerClientsReviews";
import { useGetAllReviews } from "./useGetAllReviews";
import SpinnerMini from "../../../../ui/SpinnerMini";

function TrainerReviews() {
    const { getReviews, isLoading } = useGetAllReviews();
    if (isLoading) return <div className="flex items-center justify-center h-[50dvh]"><SpinnerMini size="text-2xl text-blue-900"/></div>
    const { averageRating, ratingsDistribution, reviews } = getReviews;
    return (
        <div className="space-y-4 p-4 rounded-md">
            <h3 className="capitalize text-xl text-blue-900 font-bold">my ratings & reviews</h3>
            <div className="grid grid-cols-[auto_1fr] gap-4">
                <TrainerOverallRating averageRating={averageRating} ratingsDistribution={ratingsDistribution} />
                <TrainerClientsReviews reviews={reviews} />
            </div>
        </div>
    )
}

export default TrainerReviews