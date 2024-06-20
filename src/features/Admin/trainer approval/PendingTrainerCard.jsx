import Button from "../../../ui/Button";
import { IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { formatDate_time } from "../../../utils/helpers";
import { useDarkMode } from "../../../context/DarkModeProvider";
import styles from "../../../styles/styles";

function PendingTrainerCard({ trainer }) {
    const colors = styles();
    const navigate = useNavigate();
    const { isDarkMode } = useDarkMode();
    const { _id, firstName, lastName, phoneNumber, email, profilePhoto, createdAt } = trainer ?? {};

    return (
        <div className={`p-4 shadow-md rounded-lg flex flex-col items-center gap-2 text-center ${isDarkMode ? colors.bg_slate_800 : colors.bg_white}`}>
            <img className="w-24 h-24 rounded-md" src={profilePhoto} alt="avatar" />
            <div className={`flex flex-col gap-1 text-xs ${isDarkMode ? colors.text_gray_300 : colors.text_gray_600}`}>
                <h3 className={`text-lg font-bold space-x-1 ${isDarkMode ? colors.text_gray_50 : colors.text_gray_600}`}>
                    <span>{firstName}</span>
                    <span>{lastName}</span>
                </h3>
                <p className="flex flex-col gap-1">
                    <span>{email}</span>
                    <span>{phoneNumber}</span>
                </p>
            </div>
            <Button type="primary" onClick={() => navigate(`trainer-profile/${_id}`)}>
                <span>Review Profile</span><IoEyeOutline />
            </Button>
            <div className={`text-xs ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>{formatDate_time(createdAt)}</div>
        </div>
    );
}

export default PendingTrainerCard;
