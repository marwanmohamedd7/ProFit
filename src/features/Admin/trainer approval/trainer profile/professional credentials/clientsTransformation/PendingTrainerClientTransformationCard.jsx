import { useDarkMode } from "../../../../../../context/DarkModeProvider";
import styles from "../../../../../../styles/styles";
import ImageViewer from "../../../../../../ui/ImageViewer"

function PendingTrainerClientTransformationCard({ transformation }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const { beforeImage,afterImage,title,description} = transformation;
    return (
        <div className={`rounded-lg p-4 space-y-2 border ${isDarkMode ? `${colors.bg_slate_700} ${colors.text_white} ${colors.border_gray_700}` : `${colors.bg_gray_50} ${colors.text_gray_700} ${colors.border_gray_200}`}`}>
            <div className="flex items-center justify-center gap-2">
                <ImageViewer imageStyle="w-56 h-56 rounded-md cursor-pointer" imageURL={[afterImage, beforeImage]} />
            </div>
            <div className="flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-1 p-1">
                    <h4 className="text-lg font-bold capitalize">{title}</h4>
                    <p className={`text-sm ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PendingTrainerClientTransformationCard
