import ClientReview from "./ClientReview"

function TrainerClientsReviews({ reviews }) {
    return (
        <div className="bg-gray-50 p-4 rounded-md border space-y-2">
            <h4 className="capitalize text-blue-900 text-lg font-bold">clients reviews</h4>
            <div className="space-y-2">
                {reviews.map((review, index) => <ClientReview review={review} key={index} />)}
            </div>
        </div>
    )
}

export default TrainerClientsReviews
