import CircularProgress from "../../../../../ui/CircularProgress"

function DietMacros() {
    return (
        <div className="bg-white border space-y-4 p-2 rounded capitalize">
            <h3 className="text-blue-800 font-bold">diet macros</h3>
            <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4">
                {/* Without Percentage */}
                <div className="flex justify-between items-center bg-blue-900 p-4 rounded-xl">
                    <div className="flex flex-col justify-center gap-2 text-gray-50">
                        <h3 className="text-lg font-bold tracking-wide">calories</h3>
                        <p className="text-xl"><strong>303g/</strong>1600g</p>
                    </div>
                    <CircularProgress percentage={84} />
                </div>
                <div className="flex justify-between items-center bg-blue-900 p-4 rounded-xl">
                    <div className="flex flex-col justify-center gap-2 text-gray-50">
                        <h3 className="text-lg font-bold tracking-wide">proteins</h3>
                        <p className="text-xl"><strong>303g/</strong>1600g</p>
                    </div>
                    <CircularProgress percentage={33} />
                </div>
                <div className="flex justify-between items-center bg-blue-900 p-4 rounded-xl">
                    <div className="flex flex-col justify-center gap-2 text-gray-50">
                        <h3 className="text-lg font-bold tracking-wide">carbs</h3>
                        <p className="text-xl"><strong>303g/</strong>1600g</p>
                    </div>
                    <CircularProgress percentage={59} />
                </div>
                <div className="flex justify-between items-center bg-blue-900 p-4 rounded-xl">
                    <div className="flex flex-col justify-center gap-2 text-gray-50">
                        <h3 className="text-lg font-bold tracking-wide">fats</h3>
                        <p className="text-xl"><strong>303g/</strong>1600g</p>
                    </div>
                    <CircularProgress percentage={46} />
                </div>
            </div>
        </div>
    )
}

export default DietMacros
