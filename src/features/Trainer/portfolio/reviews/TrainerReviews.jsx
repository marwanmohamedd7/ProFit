import TrainerOverallRating from "./TrainerOverallRating";
import TrainerClientsReviews from "./TrainerClientsReviews";
import { useGetAllReviews } from "./useGetAllReviews";
import SpinnerMini from "../../../../ui/SpinnerMini";
import { useDarkMode } from "../../../../context/DarkModeProvider";
import styles from "../../../../styles/styles";
import DivContainerPortoflio from "../../../../ui/DivContainerPortoflio";

function TrainerReviews() {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const h1Style = isDarkMode ? colors.text_white : colors.text_gray_900;
    const { getReviews, isLoading } = useGetAllReviews();
    if (isLoading) return <div className="flex items-center justify-center h-[50dvh]"><SpinnerMini size="text-2xl text-blue-900" /></div>
    const { averageRating, ratingsDistribution, reviews } = getReviews;
    return (
        <div className="space-y-4 py-4 rounded-md">
            <DivContainerPortoflio>
                <div className="space-y-4">
                    <h1 className={`capitalize text-xl ${h1Style} font-bold`}>my ratings & reviews</h1>
                    <div className="grid grid-cols-[auto_1fr] gap-4">
                        <TrainerOverallRating averageRating={averageRating} ratingsDistribution={ratingsDistribution} />
                        <TrainerClientsReviews reviews={reviews} />
                    </div>
                </div>
            </DivContainerPortoflio>
        </div>
    )
}

export default TrainerReviews