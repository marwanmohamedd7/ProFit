import { useDarkMode } from "../../../../context/DarkModeProvider";
import styles from "../../../../styles/styles";
import ClientReview from "./ClientReview";

function TrainerClientsReviews({ reviews }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    return (
        <div className={`p-4 rounded-md border ${isDarkMode ? `${colors.bg_slate_700} ${colors.border_gray_700}` : colors.bg_gray_50} space-y-2`}>
            <h4 className={`capitalize ${isDarkMode ? colors.text_white : colors.text_gray_900} text-lg font-bold`}>clients reviews</h4>
            <div className="space-y-2">
                {
                    !reviews.length ? <h1 className={`${isDarkMode ? colors.text_white : colors.text_gray_900} text-center p-8 w-full capitalize`}>
                        No reviews yet!
                        </h1>
                        :
                        reviews.map((review, index) => <ClientReview review={review} key={index} />)
                }
            </div>
        </div>
    );
}

export default TrainerClientsReviews;
