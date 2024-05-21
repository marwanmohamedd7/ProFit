import RatingBar from "./RatingBar"
import StarIcon from "../../../../Icons/StarIcon"

function TrainerOverallRating({ averageRating, ratingsDistribution }) {
    return (
        <div>
            <div className="rounded-md p-4 border bg-gray-50 space-y-2">
                <h4 className="capitalize text-blue-900 text-lg font-bold">overall rating</h4>
                <div className="flex items-center justify-center gap-4">
                    <div className="flex flex-col items-center gap-2 justify-center">
                        <p className="text-4xl text-blue-700 font-bold">{averageRating.toFixed(1)}</p>
                        <p className="text-2xl font-semibold"><StarIcon size="30" /></p>
                    </div>
                    <div>
                        <div className="space-y">
                            {Object.entries(ratingsDistribution).map(([label, value]) => <RatingBar label={label} percentage={value} key={label}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrainerOverallRating
