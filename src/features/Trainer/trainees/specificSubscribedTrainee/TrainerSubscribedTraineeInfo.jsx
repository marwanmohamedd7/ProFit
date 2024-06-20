import { FiRefreshCcw } from "react-icons/fi";
import { HiArrowLongRight } from "react-icons/hi2"
import { BiMessageRoundedDetail } from "react-icons/bi"
import SubscribedTrainerInfoCard from "../../../../ui/SubscribedTrainerInfoCard";
import CompoundTabs from "../../../../ui/CompoundTabs";
import TraineeDietPlans from "../traineeDietPlans/TraineeDietPlans";
import TraineeProgress from "../traineeProgress/TraineeProgress";
import Spinner from "../../../../ui/Spinner";
import { useGetSpecificSubscribedTrainee } from "./useGetSpecificSubscribedTrainee";
import { useCreateRequestAssessment } from "./useCreateRequestAssessment";
import SpinnerMini from "../../../../ui/SpinnerMini";
import { useNavigate } from "react-router-dom";
import { calcBirthday, formatDate_time } from "../../../../utils/helpers";
import TraineeSubscriptions from "../traineeSubcriptions/TraineeSubscriptions";
import BreadCrumbs from "../../../../ui/BreadCrumbs";
import ImageViewer from "../../../../ui/ImageViewer";
import { useDarkMode } from "../../../../context/DarkModeProvider";
import styles from "../../../../styles/styles";

function TrainerSubscribedTraineeInfo() {
    let assessmentStatus;
    const colors = styles();
    const navigate = useNavigate();
    const { isDarkMode } = useDarkMode();
    const { requestAssessment, isRequesting } = useCreateRequestAssessment();
    const { getSpecificSubscribedTrainee, isLoading } = useGetSpecificSubscribedTrainee();

    if (isLoading) return <div className="flex items-center justify-center h-[75dvh]"><Spinner /></div>

    const { _id, firstName, lastName, email, phoneNumber, profilePhoto, dietAssessmentStatus, traineeDietAssessment = {} } = getSpecificSubscribedTrainee;
    const { activityLevel, fitnessGoals, birthDate, gender, height, weight, createdAt } = traineeDietAssessment;

    if (dietAssessmentStatus === "Working" || dietAssessmentStatus === "Pending") assessmentStatus = "request assessment";
    if (dietAssessmentStatus === "Ready") assessmentStatus = "assessment ready";
    if (dietAssessmentStatus === "In Preparation") assessmentStatus = "in progress...";

    return (
        <div className={`space-y-4`}>
            <BreadCrumbs />
            <div className={`p-4 rounded-lg border shadow-sm space-y-4 ${isDarkMode ? `${colors.bg_slate_800} ${colors.border_gray_700}` : `${colors.bg_white}`}`}>
                <div className="flex items-start gap-3">
                    <div className="h-14 w-14">
                        <ImageViewer imageURL={profilePhoto}>
                            <img className="h-14 w-14 rounded-md cursor-pointer" src={profilePhoto} alt={firstName} />
                        </ImageViewer>
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <p className={`flex items-center gap-1 capitalize ${isDarkMode ? colors.text_white : colors.text_gray_700}`}>
                            <span className="text-sm font-bold">{firstName}</span>
                            <span className="text-sm font-bold">{lastName}</span>
                        </p>
                        <p className={`text-xs flex flex-col ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>
                            <span>{email}</span>
                            <span>{phoneNumber}</span>
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <p className={`rounded-md text-xs capitalize whitespace-nowrap p-2 ${isDarkMode ? `text-green-500 bg-green-900 bg-opacity-50` : `text-green-500 bg-green-100`}`}>active</p>
                    <button className={`font-semibold capitalize text-xl px-2 py-1.5 rounded-md border ${isDarkMode ? colors.border_gray_700 : colors.border_gray_200} ${isDarkMode ? colors.text_gray_200 : colors.text_gray_900} hover:${isDarkMode ? colors.bg_slate_700 : colors.bg_gray_50}`}>
                        <BiMessageRoundedDetail />
                    </button>
                    <button onClick={() => dietAssessmentStatus === "Ready" ? navigate(`/trainer/trainees/diets/${_id}`) : requestAssessment()} disabled={dietAssessmentStatus === "In Preparation"} className={`font-semibold capitalize transition-all duration-300 text-sm px-3 py-1.5 rounded-md ${isDarkMode ? colors.text_gray_100 : colors.text_gray_700} border ${isDarkMode ? colors.border_gray_700 : colors.border_gray_200} hover:${isDarkMode ? colors.bg_slate_700 : colors.bg_gray_50}`}>
                        <p className="flex justify-center items-center gap-2 capitalize font-bold tracking-wide">
                            {
                                isRequesting ? <SpinnerMini /> :
                                    <>
                                        <span>{assessmentStatus}</span>
                                        {dietAssessmentStatus !== "In Preparation" && <span className="text-xl"><HiArrowLongRight /></span>}
                                    </>
                            }
                        </p>
                    </button>
                </div>
            </div>
            <div className="flex items-center gap-2 capitalize text-xs">
                <p className={`flex items-center gap-2 ${isDarkMode ? colors.text_gray_400 : colors.text_gray_700}`}>
                    <span><FiRefreshCcw /></span>
                    <span>last sync at:</span>
                </p>
                <p className={`${isDarkMode ? colors.text_gray_300 : colors.text_gray_500}`}>{formatDate_time(createdAt)}</p>
            </div>
            {
                (dietAssessmentStatus !== "Pending" && Object.keys(traineeDietAssessment).length > 0) &&
                <div className="flex justify-start gap-4 capitalize">
                    <SubscribedTrainerInfoCard field="gender" value={gender} />
                    <SubscribedTrainerInfoCard field="age" value={calcBirthday(birthDate)} />
                    <SubscribedTrainerInfoCard field="height" value={height} />
                    <SubscribedTrainerInfoCard field="weight" value={weight} />
                    <SubscribedTrainerInfoCard field="goal" value={fitnessGoals} />
                    <SubscribedTrainerInfoCard field="activity level" value={activityLevel} />
                </div>
            }

            <CompoundTabs tabsFeild="profile" defaultTab="progress">
                <CompoundTabs.Tabs>
                    <CompoundTabs.Open opens="progress">progress</CompoundTabs.Open>
                    <CompoundTabs.Open opens="diet">diet</CompoundTabs.Open>
                    <CompoundTabs.Open opens="workout">workout</CompoundTabs.Open>
                    <CompoundTabs.Open opens="subscription">subscription</CompoundTabs.Open>
                </CompoundTabs.Tabs>
                <CompoundTabs.Window opens="progress">
                    <TraineeProgress />
                </CompoundTabs.Window>
                <CompoundTabs.Window opens="diet">
                    <TraineeDietPlans />
                </CompoundTabs.Window>
                <CompoundTabs.Window opens="workout">
                </CompoundTabs.Window>
                <CompoundTabs.Window opens="subscription">
                    <TraineeSubscriptions />
                </CompoundTabs.Window>
            </CompoundTabs>
        </div>
    )
}

export default TrainerSubscribedTraineeInfo;
