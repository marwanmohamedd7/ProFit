function MealMacros({ calories, proteins, carbs, fats }) {
    return (
        <div className="bg-blue-100 border border-blue-700 px-3 py-6 rounded-md w-full grid lg:grid-cols-4 sm:grid-cols-2 gap-2 text-blue-700">
            <div className="sm:text-center w-full">
                <p className="font-bold text-3xl space-x-2">
                    <span>{proteins}</span>
                    <span className="font-semibold text-lg">g</span>
                </p>
                <span className="text-base">proteins</span>
            </div>
            <div className="sm:text-center w-full">
                <p className="font-bold text-3xl space-x-2">
                    <span>{fats}</span>
                    <span className="font-semibold text-lg">g</span>
                </p>
                <span className="text-base">fats</span>
            </div>
            <div className="sm:text-center w-full">
                <p className="font-bold text-3xl space-x-2">
                    <span>{carbs}</span>
                    <span className="font-semibold text-lg">g</span>
                </p>
                <span className="text-base">carbs</span>
            </div>
            <div className="sm:text-center w-full">
                <p className="font-bold text-3xl space-x-2">
                    <span>{calories}</span>
                    <span className="font-semibold text-lg">Kcal</span>
                </p>
                <span className="text-base">calories</span>
            </div>
        </div>
    )
}

export default MealMacros