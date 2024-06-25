import FutureFeaturesIcon from "../Icons/FutureFeaturesIcon"
import { useDarkMode } from "../context/DarkModeProvider";
import styles from "../styles/styles";

function FutureFeatures() {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    return (
        <div className="flex flex-col items-center justify-center gap-4 my-36">
            <FutureFeaturesIcon />
            <div className={`text-center flex flex-col gap-4 ${isDarkMode ? colors.text_white : colors.text_gray_900}`}>
                <h1 className={`text-3xl font-bold ${isDarkMode ? colors.text_white : colors.text_gray_900}`}>Coming Soon!</h1>
                <p className={`text-xl font-sono ${isDarkMode ? colors.text_gray_200 : colors.text_gray_700}`}>This Page is Under Construction.</p>
            </div>
        </div>
    )
}

export default FutureFeatures
