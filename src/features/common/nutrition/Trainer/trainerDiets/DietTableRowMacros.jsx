import { useDarkMode } from "../../../../../context/DarkModeProvider";
import styles from "../../../../../styles/styles";

function DietTableRowMacros({ calories, proteins, carbs, fats }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    return (
        <div className={`${isDarkMode ? `${colors.bg_white} bg-opacity-10 ${colors.border_gray_700}` : `${colors.bg_gray_100} ${colors.text_gray_700}`} px-4 py-2 rounded-md border`}>
            <div className="flex items-center justify-between gap-8 text-lg font-bold">
                <h3 className="flex flex-col gap-1">
                    <p className="flex items-center gap-1">
                        <span>{Math.round(calories)}</span>
                        <span className="font-normal">Kcal</span>
                    </p>
                    <span className={`text-xs font-normal`}>calories</span>
                </h3>
                <h3 className="flex flex-col gap-1">
                    <p className="flex items-center gap-1">
                        <span>{Math.round(proteins)}</span>
                        <span className="font-normal">g</span>
                    </p>
                    <span className={`text-xs font-normal`}>proteins</span>
                </h3>
                <h3 className="flex flex-col gap-1">
                    <p className="flex items-center gap-1">
                        <span>{Math.round(fats)}</span>
                        <span className="font-normal">g</span>
                    </p>
                    <span className={`text-xs font-normal`}>fats</span>
                </h3>
                <h3 className="flex flex-col gap-1">
                    <p className="flex items-center gap-1">
                        <span>{Math.round(carbs)}</span>
                        <span className="font-normal">g</span>
                    </p>
                    <span className={`text-xs font-normal`}>carbs</span>
                </h3>
            </div>
        </div>
    )
}

export default DietTableRowMacros
