function FoodMacros({ calories, proteins, carbs, fats }) {
    return (
        <>
            <h3 className="flex flex-col gap-1 xl:w-24 2xl:w-36">
                <p className="flex items-center gap-1">
                    <span>{Math.round(calories)}</span>
                    <span className="font-normal">Kcal</span>
                </p>
                <span className="text-xs text-blue-900 font-normal capitalize">calories</span>
            </h3>
            <h3 className="flex flex-col gap-1 xl:w-24 2xl:w-36">
                <p className="flex items-center gap-1">
                    <span>{Math.round(proteins)}</span>
                    <span className="font-normal">g</span>
                </p>
                <span className="text-xs text-blue-900 font-normal capitalize">proteins</span>
            </h3>
            <h3 className="flex flex-col gap-1 xl:w-24 2xl:w-36">
                <p className="flex items-center gap-1">
                    <span>{Math.round(fats)}</span>
                    <span className="font-normal">g</span>
                </p>
                <span className="text-xs text-blue-900 font-normal capitalize">fats</span>
            </h3>
            <h3 className="flex flex-col gap-1 xl:w-24 2xl:w-36">
                <p className="flex items-center gap-1">
                    <span>{Math.round(carbs)}</span>
                    <span className="font-normal">g</span>
                </p>
                <span className="text-xs text-blue-900 font-normal capitalize">carbs</span>
            </h3>
        </>
    )
}

export default FoodMacros
