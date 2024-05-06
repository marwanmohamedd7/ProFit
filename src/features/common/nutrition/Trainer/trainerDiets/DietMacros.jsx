import CircularProgress from "../../../../../ui/CircularProgress"

function DietMacros({ dietMacros }) {
    const { proteins, fats, carbs, calories } = dietMacros
    const roundFats = Math.round(fats)
    const roundCarbs = Math.round(carbs)
    const roundCalories = Math.round(calories)
    const roundProteins = Math.round(proteins)
    return (
        <div className="bg-white border space-y-4 p-2 rounded capitalize">
            <h3 className="text-blue-800 font-bold">diet macros</h3>
            <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4">
                {/* Without Percentage */}
                <div className="flex justify-between items-center bg-blue-900 p-4 rounded-xl">
                    <div className="flex flex-col justify-center gap-2 text-gray-50">
                        <h3 className="text-lg font-bold tracking-wide">calories</h3>
                        <p className="text-xl"><strong>{roundCalories} Kcal/</strong>{roundCalories} Kcal</p>
                    </div>
                    <CircularProgress percentage={((roundCalories / roundCalories) * 100)} />
                </div>
                <div className="flex justify-between items-center bg-blue-900 p-4 rounded-xl">
                    <div className="flex flex-col justify-center gap-2 text-gray-50">
                        <h3 className="text-lg font-bold tracking-wide">proteins</h3>
                        <p className="text-xl"><strong>{roundProteins}g/</strong>{roundProteins}g</p>
                    </div>
                    <CircularProgress percentage={((roundProteins / roundProteins) * 100)} />
                </div>
                <div className="flex justify-between items-center bg-blue-900 p-4 rounded-xl">
                    <div className="flex flex-col justify-center gap-2 text-gray-50">
                        <h3 className="text-lg font-bold tracking-wide">carbs</h3>
                        <p className="text-xl"><strong>{roundCarbs}g/</strong>{roundCarbs}g</p>
                    </div>
                    <CircularProgress percentage={((roundCarbs / roundCarbs) * 100)} />
                </div>
                <div className="flex justify-between items-center bg-blue-900 p-4 rounded-xl">
                    <div className="flex flex-col justify-center gap-2 text-gray-50">
                        <h3 className="text-lg font-bold tracking-wide">fats</h3>
                        <p className="text-xl"><strong>{roundFats}g/</strong>{roundFats}g</p>
                    </div>
                    <CircularProgress percentage={((roundFats / roundFats) * 100)} />
                </div>
            </div>
        </div>
    )
}

export default DietMacros
