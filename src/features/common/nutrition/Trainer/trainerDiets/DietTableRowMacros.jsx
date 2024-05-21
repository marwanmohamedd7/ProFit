function DietTableRowMacros({ calories, proteins, carbs, fats }) {
    return (
        <div className="bg-gray-100 px-4 py-2 rounded-md border">
            <div className="flex items-center justify-between gap-8 text-lg font-bold text-blue-700">
                <h3 className="flex flex-col gap-1">
                    <p className="flex items-center gap-1">
                        <span>{Math.round(calories)}</span>
                        <span className="font-normal">Kcal</span>
                    </p>
                    <span className="text-xs text-blue-900 font-normal">calories</span>
                </h3>
                <h3 className="flex flex-col gap-1">
                    <p className="flex items-center gap-1">
                        <span>{Math.round(proteins)}</span>
                        <span className="font-normal">g</span>
                    </p>
                    <span className="text-xs text-blue-900 font-normal">proteins</span>
                </h3>
                <h3 className="flex flex-col gap-1">
                    <p className="flex items-center gap-1">
                        <span>{Math.round(fats)}</span>
                        <span className="font-normal">g</span>
                    </p>
                    <span className="text-xs text-blue-900 font-normal">fats</span>
                </h3>
                <h3 className="flex flex-col gap-1">
                    <p className="flex items-center gap-1">
                        <span>{Math.round(carbs)}</span>
                        <span className="font-normal">g</span>
                    </p>
                    <span className="text-xs text-blue-900 font-normal">carbs</span>
                </h3>
            </div>
        </div>
    )
}

export default DietTableRowMacros
