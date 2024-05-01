import CircularProgress from "../../../../../ui/CircularProgress"

function DietMacros({ dietMacros }) {
    const { proteins, fats, carbs, calories } = dietMacros
    return (
        <div className="bg-white border space-y-4 p-2 rounded capitalize">
            <h3 className="text-blue-800 font-bold">diet macros</h3>
            <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4">
                {/* Without Percentage */}
                <div className="flex justify-between items-center bg-blue-900 p-4 rounded-xl">
                    <div className="flex flex-col justify-center gap-2 text-gray-50">
                        <h3 className="text-lg font-bold tracking-wide">calories</h3>
                        <p className="text-xl"><strong>{calories.toFixed(2)}g/</strong>10000g</p>
                    </div>
                    <CircularProgress percentage={((calories / 10000) * 100).toFixed(2)} />
                </div>
                <div className="flex justify-between items-center bg-blue-900 p-4 rounded-xl">
                    <div className="flex flex-col justify-center gap-2 text-gray-50">
                        <h3 className="text-lg font-bold tracking-wide">proteins</h3>
                        <p className="text-xl"><strong>{proteins.toFixed(2)}g/</strong>2000g</p>
                    </div>
                    <CircularProgress percentage={((proteins / 2000) * 100).toFixed(2)} />
                </div>
                <div className="flex justify-between items-center bg-blue-900 p-4 rounded-xl">
                    <div className="flex flex-col justify-center gap-2 text-gray-50">
                        <h3 className="text-lg font-bold tracking-wide">carbs</h3>
                        <p className="text-xl"><strong>{carbs.toFixed(2)}g/</strong>1000g</p>
                    </div>
                    <CircularProgress percentage={((carbs / 1000) * 100).toFixed(2)} />
                </div>
                <div className="flex justify-between items-center bg-blue-900 p-4 rounded-xl">
                    <div className="flex flex-col justify-center gap-2 text-gray-50">
                        <h3 className="text-lg font-bold tracking-wide">fats</h3>
                        <p className="text-xl"><strong>{fats.toFixed(2)}g/</strong>1000g</p>
                    </div>
                    <CircularProgress percentage={((fats / 1000) * 100).toFixed(2)} />
                </div>
            </div>
        </div>
    )
}

export default DietMacros
