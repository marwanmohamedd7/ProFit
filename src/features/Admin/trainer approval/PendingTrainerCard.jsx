import Button from "../../../ui/Button"
import { IoEyeOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import { formatDate_time } from "../../../utils/helpers"

function PendingTrainerCard({ trainer }) {
    const navigate = useNavigate()
    const { _id, firstName, lastName, phoneNumber, email, profilePhoto, createdAt } = trainer ?? {};
    return (
        <div className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center gap-2 text-center">
            <img className="w-24 h-24 bg-gray-200 rounded-md" src={profilePhoto} alt="avatar" />
            <div className="flex flex-col gap-1 text-xs text-gray-500">
                <h3 className="text-lg text-blue-700 font-bold space-x-1">
                    <span>{firstName}</span>
                    <span>{lastName}</span>
                </h3>
                <p className="flex flex-col gap-1">
                    <span>{email}</span>
                    <span>{phoneNumber}</span>
                </p>
            </div>
            <Button type="primary" onClick={() => navigate(`trainer-profile/${_id}`)}>
                <span>Review Profile</span><IoEyeOutline />
            </Button>
            <div className="text-blue-700 text-xs">{formatDate_time(createdAt)}</div>
            {/* <div className="text-blue-700 text-xs">07 Jan, 2024 at 09:28 PM</div> */}
        </div>
    )
}

export default PendingTrainerCard
