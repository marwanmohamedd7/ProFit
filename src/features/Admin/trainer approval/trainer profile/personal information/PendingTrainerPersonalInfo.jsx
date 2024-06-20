import { useDarkMode } from "../../../../../context/DarkModeProvider";
import styles from "../../../../../styles/styles";
import SpinnerMini from "../../../../../ui/SpinnerMini";
import PendingTrainerPersonalInfoForm from "./PendingTrainerPersonalInfoForm";
import { useGetTrainerPersonalInfo } from "./useGetTrainerPersonalInfo";

function PendingTrainerPersonalInfo() {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const { getPendingTrainerInfo, isLoading } = useGetTrainerPersonalInfo();

    return (
        <section className={`space-y-4 p-4 rounded-md border ${isDarkMode ? `${colors.bg_slate_800} ${colors.border_gray_700}` : colors.bg_white}`}>
            <h2 className={`text-xl font-bold ${isDarkMode ? colors.text_gray_100 : colors.text_gray_900}`}>Personal Information</h2>
            {
                isLoading ?
                    <div className={`h-[40dvh] text-center rounded-md flex justify-center items-center`}>
                        <SpinnerMini />
                    </div>
                    :
                    <PendingTrainerPersonalInfoForm getPendingTrainerInfo={getPendingTrainerInfo} />
            }
        </section>
    );
}

export default PendingTrainerPersonalInfo;
