import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { IoCheckmarkOutline } from "react-icons/io5";
import { useDarkMode } from "../../../../context/DarkModeProvider";
import { usePendingTrainerReject } from "./usePendingTrainerReject";
import { usePendingTrainerAccept } from "./usePendingTrainerAccept";
import { useGetPendingTrainerInfoBar } from "./useGetPendingTrainerInfoBar";
import Button from "../../../../ui/Button";
import styles from "../../../../styles/styles";
import SpinnerMini from "../../../../ui/SpinnerMini";

function PendingTrainerInfoBar() {
    const colors = styles();
    const navigate = useNavigate();
    const { isDarkMode } = useDarkMode();
    const { acceptPendingTrainer, isAccepting } = usePendingTrainerAccept();
    const { rejectPendingTrainer, isRejecting } = usePendingTrainerReject();
    const { getPendingTrainerInfoBar, isLoading: isGettingInfo } = useGetPendingTrainerInfoBar();
    const { _id, firstName, lastName, email, phoneNumber, profilePhoto, status } = getPendingTrainerInfoBar ?? {};
    return (
        <div className={`flex flex-wrap gap-4 items-center justify-between p-4 rounded-md max-w-full border ${isDarkMode ? `${colors.bg_slate_800} ${colors.border_gray_700}` : colors.bg_white}`}>
            {
                isGettingInfo ?
                    <div className={`w-full h-[10dvh] text-center rounded-md flex justify-center items-center`}>
                        <SpinnerMini />
                    </div>
                    :
                    <>
                        <div className="flex items-center">
                            <img
                                src={profilePhoto}
                                alt="Profile"
                                className="rounded-md h-16 w-16 object-cover mr-4"
                            />
                            <div className="flex flex-col gap-1 justify-center">
                                <h4 className={`flex justify-start items-center gap-1 font-bold text-md ${isDarkMode ? colors.text_gray_50 : colors.text_gray_700}`}>
                                    <span>{firstName}</span>
                                    <span>{lastName}</span>
                                </h4>
                                <p className={`flex flex-col text-xs ${isDarkMode ? colors.text_gray_300 : colors.text_gray_500}`}>
                                    <span>{email}</span>
                                    <span>{phoneNumber}</span>
                                </p>
                            </div>
                        </div>
                        {
                            (status !== "accepted" && status !== "rejected") &&
                            <div className="flex items-center justify-center gap-2 text-sm">
                                <Button
                                    type="accept"
                                    onClick={() => acceptPendingTrainer(_id, {
                                        onSuccess: () => navigate("/admin/trainer-approval", { replace: true })
                                    })}
                                >
                                    <p className="flex justify-center items-center gap-2 tracking-wide">
                                        {
                                            isAccepting ?
                                                <SpinnerMini />
                                                :
                                                <>
                                                    <span className="text-base">
                                                        <IoCheckmarkOutline />
                                                    </span>
                                                    <span>Accept</span>
                                                </>
                                        }
                                    </p>
                                </Button>
                                <Button
                                    type="reject"
                                    onClick={() => rejectPendingTrainer(_id, {
                                        onSuccess: () => navigate("/admin/trainer-approval", { replace: true })
                                    })}
                                >
                                    <p className="flex justify-center items-center gap-2 tracking-wide">
                                        {
                                            isRejecting ?
                                                <SpinnerMini />
                                                :
                                                <>
                                                    <span className="text-base">
                                                        <RxCross1 />
                                                    </span>
                                                    <span>Reject</span>
                                                </>
                                        }
                                    </p>
                                </Button>
                            </div>
                        }
                    </>
            }
        </div>
    );
}

export default PendingTrainerInfoBar;
