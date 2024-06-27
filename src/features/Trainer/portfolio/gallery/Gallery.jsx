import { useDarkMode } from "../../../../context/DarkModeProvider";
import styles from "../../../../styles/styles";
import DivContainerPortoflio from "../../../../ui/DivContainerPortoflio";
import QualificationAndAchievement from "./qualifications/QualificationAndAchievement"
import Transformations from "./transformations/Transformations"

function Gallery() {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const h1Style = isDarkMode ? colors.text_white : colors.text_gray_900;
    return (
        <div className="space-y-10 py-4 rounded-md">
            <DivContainerPortoflio>
                <div className="space-y-4">
                    <h1 className={`capitalize ${h1Style} font-bold text-xl`}>transformations photo</h1>
                    <Transformations />
                </div>
            </DivContainerPortoflio>
            <DivContainerPortoflio>
                <div className="space-y-4">
                    <h1 className={`capitalize ${h1Style} font-bold text-xl`}>Certifications and Achievements</h1>
                    <QualificationAndAchievement />
                </div>
            </DivContainerPortoflio>
        </div>
    )
}

export default Gallery
