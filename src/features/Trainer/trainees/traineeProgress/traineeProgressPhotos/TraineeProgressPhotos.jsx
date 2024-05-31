import SpinnerMini from "../../../../../ui/SpinnerMini";
import TraineeProgressPhotosCard from "./TraineeProgressPhotosCard"
import { useGetTraineeProgressPhotos } from "./useGetTraineeProgressPhotos"

function TraineeProgressPhotos() {
    const { getTraineeProgressPhotos, isLoading } = useGetTraineeProgressPhotos();
    if (isLoading) return <div className="flex items-center justify-center w-full h-[50dvh]"><SpinnerMini size="text-2xl text-blue-900" /></div>
    return (
        <div className="flex justify-start gap-2">
            {getTraineeProgressPhotos.map(photo => <TraineeProgressPhotosCard photo={photo} key={photo.progressId} />)}
        </div>
    )
}

export default TraineeProgressPhotos
