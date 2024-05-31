import { formatDate_time } from "../../../../../utils/helpers"

function TraineeProgressPhotosCard({ photo }) {
    const { image, createdAt } = photo ?? {};
    return (
        <div className="flex flex-col items-center justify-start gap-2 h-fit p-3.5 rounded-lg border">
            <div className="w-60 h-60">
                <img src={image} alt="photos" className="w-full h-full rounded-md" />
            </div>
            <p className="text-gray-600 p-2 text-sm">
                {formatDate_time(createdAt)}
            </p>
        </div>
    )
}

export default TraineeProgressPhotosCard
