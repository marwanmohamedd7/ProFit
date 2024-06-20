import StarIcon from "../../../../Icons/StarIcon";
import { formatDate_time } from "../../../../utils/helpers";
import { useDarkMode } from "../../../../context/DarkModeProvider";
import styles from "../../../../styles/styles";

function ClientReview({ review }) {
    const { isDarkMode } = useDarkMode();
    const colors = styles();
    const { firstName, lastName, comment, profilePhoto, rating, date } = review;

    return (
        <div className={`flex flex-col justify-center gap-2 p-4 rounded-md border ${isDarkMode ? colors.border_gray_700 : colors.border_gray_200}`}>
            <div className="flex items-center gap-3">
                <div className="h-12 w-12">
                    <img className="h-12 w-12 rounded-full" src={profilePhoto} alt={firstName} />
                </div>
                <div className="flex flex-col justify-center gap-1">
                    <p className={`flex items-center gap-1 capitalize ${isDarkMode ? colors.text_white : colors.text_gray_900} text-sm font-bold`}>
                        <span>{firstName}</span>
                        <span>{lastName}</span>
                    </p>
                    <p className={`text-xs flex flex-col ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>{formatDate_time(date)}</p>
                </div>
            </div>
            <p className={`flex items-center gap-1 text-sm ${isDarkMode ? colors.text_gray_100 : colors.text_gray_700} font-bold`}>
                <span><StarIcon size="16" /></span>
                <span>{rating.toFixed(1)}</span>
            </p>
            <p className={`${isDarkMode ? colors.text_gray_100 : colors.text_gray_700} text-sm font-semibold`}>
                {comment}
            </p>
        </div>
    )
}

export default ClientReview;
