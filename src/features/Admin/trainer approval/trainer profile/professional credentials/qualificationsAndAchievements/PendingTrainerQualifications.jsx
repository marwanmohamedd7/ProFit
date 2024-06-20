import Empty from "../../../../../../ui/Empty";
import ImageViewer from "../../../../../../ui/ImageViewer";
import SpinnerMini from "../../../../../../ui/SpinnerMini";
import { useGetPendingTrainerQualifications } from "./useGetPendingTrainerQualifications";
import { useDarkMode } from "../../../../../../context/DarkModeProvider";
import styles from "../../../../../../styles/styles";

function PendingTrainerQualifications() {
    const { getPendingTrainerQualifications: qualifications = [], isLoading } = useGetPendingTrainerQualifications();
    const { isDarkMode } = useDarkMode();
    const colors = styles();

    return (
        <section className={`space-y-4 p-4 rounded-md border ${isDarkMode ? `${colors.bg_slate_800} ${colors.border_gray_700}` : colors.bg_white}`}>
            <h2 className={`text-xl font-bold ${isDarkMode ? colors.text_white : colors.text_gray_900}`}>Qualifications and Achievements*</h2>
            {
                !qualifications.length || isLoading ?
                    isLoading ?
                        <div className={`h-[10dvh] text-center rounded-md flex justify-center items-center`}>
                            <SpinnerMini />
                        </div>
                        : <Empty resource={"certificates"} />
                    :
                    <div className="flex flex-wrap gap-1">
                        {
                            qualifications.map((qualification, index) => (
                                <ImageViewer key={index} imageURL={qualification.photo} imageStyle="w-28 h-28 rounded-md cursor-pointer">
                                    <img src={qualification.photo} alt="achievement" className="w-28 h-28 rounded-md cursor-pointer" />
                                </ImageViewer>
                            ))
                        }
                    </div>
            }
        </section >
    )
}

export default PendingTrainerQualifications;
