import { format } from "date-fns"
import Button from "../../../ui/Button"
import { IoEyeOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom"

function PendingTrainerCard({ trainer }) {
    const navigate = useNavigate()
    return (
        <div className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center gap-2 text-center">
            <img className="w-24 h-24 bg-gray-200 rounded-md" src={trainer.profilePhoto} alt="avatar" />
            <div className="flex flex-col gap-1 text-xs text-gray-500">
                <h3 className="text-lg text-blue-700 font-bold space-x-1">
                    <span>{trainer.firstName}</span>
                    <span>{trainer.lastName}</span>
                </h3>
                <p className="flex flex-col gap-1">
                    <span>{trainer.email}</span>
                    <span>{trainer.phoneNumber}</span>
                </p>
            </div>
            <Button type="primary" onClick={() => navigate(`trainer-profile/${trainer._id}`)}>
                <span>Review Profile</span><IoEyeOutline />
            </Button>
            <div className="text-blue-700 text-xs">{format(new Date(trainer.createdAt), 'dd MMMM, yyyy \'at\' HH:mm a')}</div>
            {/* <div className="text-blue-700 text-xs">07 Jan, 2024 at 09:28 PM</div> */}
        </div>
    )
}

export default PendingTrainerCard
