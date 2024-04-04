function PendingTrainerClientTransformationCard({ transformation }) {
    return (
        <div className="grid grid-rows-[12rem_auto] gap-2 p-2 shadow rounded-lg">
            <div className="flex items-center justify-center gap-2">
                <div className="w-full h-full">
                    <img src={transformation.beforeImage} alt="Before" className="w-full h-full rounded-md" />
                </div>
                <div className="w-full h-full">
                    <img src={transformation.afterImage} alt="After" className="w-full h-full rounded-md" />
                </div>
                {/* <img src={transformation.beforeImage} alt="Before" className="w-[49%] rounded-md" /> */}
                {/* <img src={transformation.afterImage} alt="After" className="w-[49%] rounded-md" /> */}
            </div>
            <div className="flex flex-col justify-between gap-4 h-full">
                <div className="flex flex-col gap-1 p-1">
                    <h4 className="text-lg text-blue-700 font-bold capitalize">{transformation.title}</h4>
                    <p className="text-sm text-gray-500">
                        {transformation.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PendingTrainerClientTransformationCard
