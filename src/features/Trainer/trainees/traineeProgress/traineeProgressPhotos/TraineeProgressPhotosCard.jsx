import { formatDate } from "../../../../../utils/helpers"

function TraineeProgressPhotosCard() {
    return (
        <div className="flex flex-col items-center justify-start gap-2 h-fit p-2 rounded-md border">
            <div className="w-52 h-52">
                <img src={"/uifaces-popular-image.jpg"} alt="photos" className="w-full h-full rounded-md" />
            </div>
            <p className="text-gray-600 p-2">
                {formatDate(new Date())}
            </p>
        </div>
    )
}

export default TraineeProgressPhotosCard
