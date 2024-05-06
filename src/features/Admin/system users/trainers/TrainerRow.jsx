import { MdOutlineBlock } from "react-icons/md";
import { IoCheckmarkOutline, IoEyeOutline } from "react-icons/io5"
import { usePendingTrainerAccept } from "../../trainer approval/trainer profile/usePendingTrainerAccept";
import { usePendingTrainerReject } from "../../trainer approval/trainer profile/usePendingTrainerReject";
import SpinnerMini from "../../../../ui/SpinnerMini";

function TrainerRow({ trainer }) {
    let statusStyle;
    const { acceptPendingTrainer, isAccepting } = usePendingTrainerAccept();
    const { rejectPendingTrainer, isRejecting } = usePendingTrainerReject();
    const { firstName, lastName, email, phoneNumber, profilePhoto, Registration_Date, subscriptions, status, paidAmount } = trainer ?? {};
    if (status === "rejected") statusStyle = `text-red-500 bg-red-100`;
    if (status === "pending") statusStyle = `text-gray-500 bg-gray-100`;
    if (status === "incomplete") statusStyle = `text-blue-500 bg-blue-100`;
    if (status === "accepted") statusStyle = `text-green-500 bg-green-100`;
    return (
        <tr key={trainer.id} className="border-b text-sm text-left text-blue-800 bg-white cursor-pointer hover:bg-gray-50">
            <td className="px-6 py-2 whitespace-nowrap mx-auto">
                <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 h-14 w-14">
                        <img className="h-14 w-14 rounded-md ml-[-10px]" src={profilePhoto} alt={firstName} />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <p className="flex items-center gap-1 capitalize">
                            <span className="text-sm font-bold">{firstName}</span>
                            <span className="text-sm font-bold">{lastName}</span>
                        </p>
                        <div className="text-xs flex flex-col text-gray-800">
                            <span>{email}</span>
                            <span className="underline">{phoneNumber}</span>
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-2 whitespace-nowrap">{subscriptions}</td>
            <td className="px-6 py-2 whitespace-nowrap">{paidAmount}</td>
            <td className="px-6 py-2 whitespace-nowrap">{Registration_Date}</td>
            <td className="px-6 py-2 whitespace-nowrap capitalize text-xs font-semibold"><span className={`px-2 py-0.5 rounded-md ${statusStyle}`}>{status}</span></td>
            <td className="px-6 py-2 whitespace-nowrap text-right text-sm font-medium">
                <div className='flex items-center justify-start gap-2'>
                    <button
                        className="text-blue-600 p-2 hover:text-blue-900 bg-blue-100 rounded-md"
                    >
                        <IoEyeOutline />
                    </button>

                    <button
                        onClick={() => acceptPendingTrainer()}
                        className="text-green-600 p-2 hover:text-green-900 bg-green-100 rounded-md"
                    >
                        {isAccepting ? <SpinnerMini /> : <IoCheckmarkOutline />}
                    </button>


                    <button
                        onClick={() => rejectPendingTrainer()}
                        className="text-red-600 p-2 hover:text-red-900 bg-red-100 rounded-md"
                    >
                        {isRejecting ? <SpinnerMini /> : <MdOutlineBlock />}
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default TrainerRow
