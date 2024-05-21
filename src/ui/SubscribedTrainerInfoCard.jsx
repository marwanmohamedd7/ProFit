function SubscribedTrainerInfoCard({ field, value }) {
    return (
        <div className="bg-gray-50 p-4 rounded-lg border grow">
            <p className="flex flex-col items-start text-sm gap-2 w-28 px-1 rounded-lg">
                <span className="font-normal text-gray-500">{field}</span>
                <span className="font-bold">{value}</span>
            </p>
        </div>
    )
}

export default SubscribedTrainerInfoCard
