import { useDarkMode } from "../../../../context/DarkModeProvider";
import styles from "../../../../styles/styles";
import RatingBar from "./RatingBar";
import StarIcon from "../../../../Icons/StarIcon";

function TrainerOverallRating({ averageRating, ratingsDistribution }) {
    const { isDarkMode } = useDarkMode();
    const colors = styles();

    return (
        <div>
            <div className={`rounded-md p-4 border ${isDarkMode ? `${colors.bg_slate_800} ${colors.border_gray_700}` : colors.bg_white} space-y-2`}>
                <h4 className={`capitalize ${isDarkMode ? colors.text_white : colors.text_gray_900} text-lg font-bold`}>overall rating</h4>
                <div className="flex items-center justify-center gap-4">
                    <div className="flex flex-col items-center gap-2 justify-center">
                        <p className={`text-4xl ${isDarkMode ? colors.text_white : colors.text_gray_700} font-bold`}>{averageRating.toFixed(1)}</p>
                        <p className="text-2xl font-semibold"><StarIcon size="30" /></p>
                    </div>
                    <div>
                        <div className="space-y">
                            {Object.entries(ratingsDistribution).map(([label, value]) => (
                                <RatingBar label={label} percentage={value} key={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrainerOverallRating;
