import SpinnerMini from "../../../../../../ui/SpinnerMini";
import PendingTrainerSocialMedia from "./PendingTrainerSocialMedia";
import PendingTrainerProfessionalCredentials from "./PendingTrainerProfessionalCredentials";
import { useDarkMode } from "../../../../../../context/DarkModeProvider";
import styles from "../../../../../../styles/styles";

function PendingTrainerProfessionalCredForm({ getPendingTrainerProfessionalCred = {}, isLoading }) {
    const { _id, socialMedia, ...values } = getPendingTrainerProfessionalCred || {};
    const { isDarkMode } = useDarkMode();
    const colors = styles();

    return (
        <div className="space-y-4">
            <section className={`space-y-4 p-4 rounded-md border ${isDarkMode ? `${colors.bg_slate_800} ${colors.text_white} ${colors.border_gray_700}` : colors.bg_white}`}>
                <h2 className={`text-xl font-bold ${isDarkMode ? colors.text_white : colors.text_gray_900}`}>Professional Credentials</h2>
                {
                    isLoading ?
                        <div className={`h-[15dvh] text-center rounded-md flex justify-center items-center`}>
                            <SpinnerMini />
                        </div>
                        :
                        <PendingTrainerProfessionalCredentials values={values} id={_id} />
                }
            </section>

            <section className={`space-y-4 p-4 rounded-md border ${isDarkMode ? `${colors.bg_slate_800} ${colors.text_white} ${colors.border_gray_700}` : colors.bg_white}`}>
                <h2 className={`text-xl font-bold ${isDarkMode ? colors.text_white : colors.text_gray_900}`}>Social Media and Contact Links</h2>
                {
                    isLoading ?
                        <div className={`h-[20dvh] text-center rounded-md flex justify-center items-center`}>
                            <SpinnerMini />
                        </div>
                        :
                        // Social Media and Links
                        <PendingTrainerSocialMedia socialMedia={socialMedia} />
                }
            </section>
        </div>
    )
}

export default PendingTrainerProfessionalCredForm;
