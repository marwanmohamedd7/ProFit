// import BackBtn from "../../../../ui/BackBtn"
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
import { calcBirthday, formatDate } from "../../../../utils/helpers";
import TraineeSubscriptions from "../traineeSubcriptions/TraineeSubscriptions";
// import { usePageLocation } from "../../../../hooks/usePageLocation";
import BreadCrumbs from "../../../../ui/BreadCrumbs";

function TrainerSubscribedTraineeInfo() {
    let assessmentStatus;
    const navigate = useNavigate();
    // const { prevPath } = usePageLocation()
    // const previousPath = prevPath.split("/").slice(0, -1).join("/")
    const { requestAssessment, isRequesting } = useCreateRequestAssessment();
    const { getSpecificSubscribedTrainee, isLoading } = useGetSpecificSubscribedTrainee();
    if (isLoading) return <div className="flex items-center justify-center h-[75dvh]"><Spinner /></div>
    const { _id, firstName, lastName, email, phoneNumber, profilePhoto, dietAssessmentStatus, traineeDietAssessment = {} } = getSpecificSubscribedTrainee;
    const { activityLevel, fitnessGoals, birthDate, gender, height, weight, createdAt } = traineeDietAssessment;
    if (dietAssessmentStatus === "Working" || dietAssessmentStatus === "Pending") assessmentStatus = "request assessment";
    if (dietAssessmentStatus === "Ready") assessmentStatus = "assessment ready";
    if (dietAssessmentStatus === "In Preparation") assessmentStatus = "in progress...";
    console.log()
    return (
        <>
            <div className="space-y-2">
                <BreadCrumbs />
                {/* <BackBtn path={previousPath} /> */}
                <div className="flex items-start gap-3">
                    <div className="h-14 w-14">
                        <img className="h-14 w-14 rounded-md" src={profilePhoto} alt={firstName} />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <p className="flex items-center gap-1 capitalize text-blue-700">
                            <span className="text-sm font-bold">{firstName}</span>
                            <span className="text-sm font-bold">{lastName}</span>
                        </p>
                        <p className="text-xs flex flex-col text-blue-900">
                            <span>{email}</span>
                            <span>{phoneNumber}</span>
                        </p>
                    </div>
                </div>
                <div className="flex items-end gap-2 pt-1">
                    <p className={`font-semibold capitalize text-xs px-3 py-[0.55rem] rounded-md text-green-500 bg-green-100`}>active</p>
                    {/* <p className={`font-semibold capitalize text-lg p-2 rounded-md text-blue-900 border`}></p> */}
                    <button className="font-semibold capitalize text-xl px-2 py-1.5 rounded-md border border-gray-200 text-blue-900 hover:bg-gray-100"><BiMessageRoundedDetail /></button>
                    <button onClick={() => dietAssessmentStatus === "Ready" ? navigate(`/trainer/trainees/diets/${_id}`) : requestAssessment()} disabled={dietAssessmentStatus === "In Preparation"} className={`font-semibold capitalize text-sm px-3 py-1.5 rounded-md text-blue-900 border border-gray-200 hover:bg-gray-100`}>
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

                {
                    (dietAssessmentStatus !== "Pending" && Object.keys(traineeDietAssessment).length > 0) &&
                    <>
                        <div className="flex items-center gap-2 capitalize text-xs py-2">
                            <p className="flex items-center gap-2 text-gray-700">
                                <span><FiRefreshCcw /></span>
                                <span>last sync at:</span>
                            </p>
                            <p className="text-gray-500">{formatDate(createdAt)}</p>
                        </div>

                        <div className="flex justify-start gap-2 capitalize">
                            <SubscribedTrainerInfoCard field="gender" value={gender} />
                            <SubscribedTrainerInfoCard field="age" value={calcBirthday(birthDate)} />
                            <SubscribedTrainerInfoCard field="height" value={height} />
                            <SubscribedTrainerInfoCard field="weight" value={weight} />
                            <SubscribedTrainerInfoCard field="goal" value={fitnessGoals} />
                            <SubscribedTrainerInfoCard field="activity level" value={activityLevel} />
                            {/* <SubscribedTrainerInfoCard field="religion" value="muslim" /> */}
                        </div>
                    </>
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
        </>
    )
}

export default TrainerSubscribedTraineeInfo
