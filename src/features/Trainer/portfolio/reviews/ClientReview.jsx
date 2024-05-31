import StarIcon from "../../../../Icons/StarIcon"
import { formatDate_time } from "../../../../utils/helpers";

function ClientReview({ review }) {
    const { firstName, lastName, comment, profilePhoto, rating, date } = review;
    return (
        <div className="flex flex-col justify-center gap-2 p-4 rounded-md border">
            <div className="flex items-center gap-3">
                <div className="h-12 w-12">
                    <img className="h-12 w-12 rounded-full" src={profilePhoto} alt={firstName} />
                </div>
                <div className="flex flex-col justify-center gap-1">
                    <p className="flex items-center gap-1 capitalize text-blue-700 text-sm font-bold">
                        <span>{firstName}</span>
                        <span>{lastName}</span>
                    </p>
                    <p className="text-xs flex flex-col text-gray-500">{formatDate_time(date)}</p>
                </div>
            </div>
            <p className="flex items-center gap-1 text-sm text-blue-700 font-bold">
                <span><StarIcon size="16" /></span>
                <span>{rating.toFixed(1)}</span>
            </p>
            <p className="text-gray-600 text-sm font-semibold">
                {comment}
            </p>
        </div>
    )
}

export default ClientReview
