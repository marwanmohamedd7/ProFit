import { useParams } from "react-router-dom";
import SubmissionAndReview from "./submissionAndReview/SubmissionAndReview";
import SubscriptionPricing from "./subscriptionPricing/SubscriptionPricing";
import CompleteProfileProcedures from "./CompleteProfileProcedures";
import PersonalInfo from "./personalInformation/PersonalInfo";
import ProfessionalCred from "./professionalCredentials/ProfessionalCred";
import { useDarkMode } from "../../../context/DarkModeProvider";
import styles from "../../../styles/styles";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

function CompleteProfileMain() {
    const colors = styles();
    const { page } = useParams();
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    return (
        <main>
            <div className="grid grid-cols-[auto_1fr] h-dvh scrollbar--custom relative">
                <button onClick={toggleDarkMode} className={`absolute top-2 right-4 p-2 text-2xl rounded-md cursor-pointer ${isDarkMode ? `${colors.bg_blue_900} bg-opacity-50 ${colors.text_blue_500}` : `${colors.bg_blue_100} ${colors.text_blue_600}`}`}>
                    {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
                </button>
                {page === "personal-information" && (
                    <>
                        <CompleteProfileProcedures page={0} />
                        <div className={`container lg:p-14 md:p-8 p-6 space-y-10 overflow-scroll ${isDarkMode ? `${colors.bg_slate_900}` : `${colors.bg_white}`}`}>
                            <PersonalInfo />
                        </div>
                    </>
                )}
                {page === "professional-credentials" && (
                    <>
                        <CompleteProfileProcedures page={1} />
                        <div className={`container lg:p-14 md:p-8 p-6 space-y-10 overflow-scroll ${isDarkMode ? `${colors.bg_slate_900}` : `${colors.bg_white}`}`}>
                            <ProfessionalCred />
                        </div>
                    </>
                )}
                {page === "subscription-pricing" && (
                    <>
                        <CompleteProfileProcedures page={2} />
                        <div className={`container lg:p-14 md:p-8 p-6 space-y-10 overflow-scroll ${isDarkMode ? `${colors.bg_slate_900}` : `${colors.bg_white}`}`}>
                            <SubscriptionPricing />
                        </div>
                    </>
                )}
                {page === "submission-and-review" && (
                    <>
                        <CompleteProfileProcedures page={3} />
                        <div className={`container lg:p-14 md:p-8 p-6 space-y-10 overflow-scroll ${isDarkMode ? `${colors.bg_slate_900}` : `${colors.bg_white}`}`}>
                            <SubmissionAndReview />
                        </div>
                    </>
                )}
            </div>
        </main>
    );
}

export default CompleteProfileMain;
