import { useDarkMode } from "../../../../context/DarkModeProvider";
import styles from "../../../../styles/styles";

function MealMacros({ calories, proteins, carbs, fats }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    return (
        <div className={`${isDarkMode ? `${colors.bg_white} bg-opacity-10 ${colors.text_blue_50} ${colors.border_gray_700}` : `${colors.bg_blue_100} ${colors.text_blue_700} ${colors.border_blue_700}`} border px-3 py-6 rounded-md w-full grid lg:grid-cols-4 sm:grid-cols-2 gap-2`}>
            <div className="sm:text-center w-full">
                <p className="font-bold text-3xl space-x-2">
                    <span>{Math.round(calories)}</span>
                    <span className="font-semibold text-lg">Kcal</span>
                </p>
                <span className="text-base">calories</span>
            </div>
            <div className="sm:text-center w-full">
                <p className="font-bold text-3xl space-x-2">
                    <span>{Math.round(proteins)}</span>
                    <span className="font-semibold text-lg">g</span>
                </p>
                <span className="text-base">proteins</span>
            </div>
            <div className="sm:text-center w-full">
                <p className="font-bold text-3xl space-x-2">
                    <span>{Math.round(fats)}</span>
                    <span className="font-semibold text-lg">g</span>
                </p>
                <span className="text-base">fats</span>
            </div>
            <div className="sm:text-center w-full">
                <p className="font-bold text-3xl space-x-2">
                    <span>{Math.round(carbs)}</span>
                    <span className="font-semibold text-lg">g</span>
                </p>
                <span className="text-base">carbs</span>
            </div>
        </div>
    )
}

export default MealMacros