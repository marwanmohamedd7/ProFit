import CircularProgress from "../../../../../ui/CircularProgress"

function DietMacros({ dietMacros, targetDietMacros }) {
    const targetMacros = Boolean(Object.keys(targetDietMacros).length);
    const { proteins, fats, carbs, calories } = dietMacros;

    const getPercentage = (value, target) => {
        if (!target) return 0;
        return Math.round((value / target) * 100);
    };

    const roundFats = getPercentage(fats, targetMacros ? targetDietMacros.fats : fats);
    const roundCarbs = getPercentage(carbs, targetMacros ? targetDietMacros.carbs : carbs);
    const roundCalories = getPercentage(calories, targetMacros ? targetDietMacros.calories : calories);
    const roundProteins = getPercentage(proteins, targetMacros ? targetDietMacros.proteins : proteins);

    return (
        <div className="bg-white border space-y-4 p-4 rounded-md">
            <h3 className="text-blue-800 font-bold">Diet Macros</h3>
            <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4">
                <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg border">
                    <div className="flex flex-col justify-center gap-2 text-gray-700">
                        <h3 className="text-lg font-normal tracking-wide">Calories</h3>
                        <p className="text-xl"><strong>{Math.round(calories)} Kcal/</strong>{targetMacros ? targetDietMacros.calories : calories} Kcal</p>
                    </div>
                    <CircularProgress variations="percentage" percentage={roundCalories} />
                </div>
                <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg border">
                    <div className="flex flex-col justify-center gap-2 text-gray-700">
                        <h3 className="text-lg font-normal tracking-wide">Proteins</h3>
                        <p className="text-xl"><strong>{Math.round(proteins)}g/</strong>{targetMacros ? targetDietMacros.proteins : proteins}g</p>
                    </div>
                    <CircularProgress variations="percentage" percentage={roundProteins} />
                </div>
                <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg border">
                    <div className="flex flex-col justify-center gap-2 text-gray-700">
                        <h3 className="text-lg font-normal tracking-wide">Carbs</h3>
                        <p className="text-xl"><strong>{Math.round(carbs)}g/</strong>{targetMacros ? targetDietMacros.carbs : carbs}g</p>
                    </div>
                    <CircularProgress variations="percentage" percentage={roundCarbs} />
                </div>
                <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg border">
                    <div className="flex flex-col justify-center gap-2 text-gray-700">
                        <h3 className="text-lg font-normal tracking-wide">Fats</h3>
                        <p className="text-xl"><strong>{Math.round(fats)}g/</strong>{targetMacros ? targetDietMacros.fats : fats}g</p>
                    </div>
                    <CircularProgress variations="percentage" percentage={roundFats} />
                </div>
            </div>
        </div>
    );
}

export default DietMacros;
