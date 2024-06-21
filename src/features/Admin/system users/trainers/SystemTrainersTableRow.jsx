import { IoEyeOutline } from "react-icons/io5"
// import { MdOutlineBlock } from "react-icons/md";
// import { IoCheckmarkOutline, IoEyeOutline } from "react-icons/io5"
// import { usePendingTrainerAccept } from "../../trainer approval/trainer profile/usePendingTrainerAccept";
// import { usePendingTrainerReject } from "../../trainer approval/trainer profile/usePendingTrainerReject";
// import SpinnerMini from "../../../../ui/SpinnerMini";
import Table from "../../../../ui/Table";
import ImageViewer from "../../../../ui/ImageViewer";
import StatusLabel from "../../../../ui/StatusLabel";
import { formatDate, formatTime } from "../../../../utils/helpers";
import { useDarkMode } from "../../../../context/DarkModeProvider";
import styles from "../../../../styles/styles";
import Button from "../../../../ui/Button";
import { useNavigate } from "react-router-dom";

function SystemTrainersTableRow({ trainer }) {
    const navigate = useNavigate();
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    // const { acceptPendingTrainer, isAccepting } = usePendingTrainerAccept();
    // const { rejectPendingTrainer, isRejecting } = usePendingTrainerReject();
    const { _id, firstName, lastName, email, phoneNumber, profilePhoto, Registration_Date, activeSubscribers, status, paidAmount } = trainer ?? {};
    return (
        <Table.Row>
            <td className="px-4 py-2 whitespace-nowrap mx-auto">
                <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 h-14 w-14">
                        <ImageViewer imageURL={profilePhoto}>
                            <img className="h-14 w-14 rounded-md" src={profilePhoto} alt={firstName} />
                        </ImageViewer>
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <p className="flex items-center gap-1 capitalize">
                            <span className="text-sm font-bold">{firstName}</span>
                            <span className="text-sm font-bold">{lastName}</span>
                        </p>
                        <div className={`text-xs flex flex-col  ${isDarkMode ? colors.text_gray_100 : colors.text_gray_700}`}>
                            <span>{email}</span>
                            <span>{phoneNumber}</span>
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-10 py-4 whitespace-nowrap">{activeSubscribers}</td>
            <td className="px-10 py-4 whitespace-nowrap">{paidAmount}</td>
            <td className="px-10 py-4 whitespace-nowrap">
                <p className="flex flex-col justify-center gap-0.5">
                    <strong>{formatDate(Registration_Date)}</strong>
                    <span>{formatTime(Registration_Date)}</span>
                </p>
            </td>
            <td className="px-10 py-4 whitespace-nowrap"><StatusLabel status={status} /></td>
            <td className="px-10 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className='flex items-center justify-start gap-2'>
                    <Button onClick={() => navigate(`/admin/system-users/trainer-profile/${_id}`)} type="icon-update"
                    >
                        <IoEyeOutline />
                    </Button>
                    {/* <button
                            onClick={() => acceptPendingTrainer(_id)}
                            className="text-green-600 p-2 hover:text-green-900 bg-green-100 rounded-md"
                        >
                            {isAccepting ? <SpinnerMini /> : <IoCheckmarkOutline />}
                        </button>


                        <button
                            onClick={() => rejectPendingTrainer(_id)}
                            className="text-red-600 p-2 hover:text-red-900 bg-red-100 rounded-md"
                        >
                            {isRejecting ? <SpinnerMini /> : <MdOutlineBlock />}
                        </button> */}
                </div>
            </td>
        </Table.Row>
    )
}

export default SystemTrainersTableRow