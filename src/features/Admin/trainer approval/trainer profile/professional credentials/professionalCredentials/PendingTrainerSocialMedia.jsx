import { NavLink } from "react-router-dom";
import { useDarkMode } from "../../../../../../context/DarkModeProvider";
import styles from "../../../../../../styles/styles";
// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

function PendingTrainerSocialMedia({ socialMedia }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const { facebook, instagram, X } = socialMedia || {}
    return (
        <div className="space-y-6">
            <span className="text-xl basis-40 flex items-center gap-4 text-gray-600" >
                <img className="w-10" src="/images/facebook.png" alt="facebook" />
                <div className="flex flex-col justify-center gap-1 text-sm">
                    <span className={`font-semibold ${isDarkMode ? colors.text_white : colors.text_gray_700}`}>facebook</span>
                    {
                        facebook &&
                        <NavLink to={facebook} target={`${facebook ? "_blank" : ""}`} className={`text-xs ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>
                            {(facebook).startsWith("https://") ? (facebook).replace("https://", "") : facebook}
                        </NavLink>
                    }
                </div>
            </span>
            <span className="text-xl basis-40 flex items-center gap-4 text-gray-600" >
                <img className="w-10" src="/images/instagram.png" alt="instagram" />
                <div className="flex flex-col justify-center gap-1 text-sm">
                    <span className={`font-semibold ${isDarkMode ? colors.text_white : colors.text_gray_700}`}>instagram</span>
                    {
                        instagram &&
                        <NavLink to={instagram} target={`${instagram ? "_blank" : ""}`} className={`text-xs ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>
                            {(instagram).startsWith("https://") ? (instagram).replace("https://", "") : instagram}
                        </NavLink>
                    }
                </div>
            </span>
            <span className="text-xl basis-40 flex items-center gap-4 text-gray-600" >
                <img className="w-10" src="/images/X.png" alt="X" />
                <div className="flex flex-col justify-center gap-1 text-sm">
                    <span className={`font-semibold ${isDarkMode ? colors.text_white : colors.text_gray_700}`}>X</span>
                    {
                        X &&
                        <NavLink to={X} target={`${X ? "_blank" : ""}`} className={`text-xs ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>
                            {(X).startsWith("https://") ? (X).replace("https://", "") : X}
                        </NavLink>
                    }
                </div>
            </span>
        </div>
    )
}

export default PendingTrainerSocialMedia
