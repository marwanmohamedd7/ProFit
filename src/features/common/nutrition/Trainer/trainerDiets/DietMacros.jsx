import DietMacrosCard from "./DietMacrosCard";
import styles from "../../../../../styles/styles";
import { useDarkMode } from "../../../../../context/DarkModeProvider";

function DietMacros({ dietMacros, targetDietMacros }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const isTargetMacrosExist = Boolean(Object.keys(targetDietMacros).length);
    const { proteins, fats, carbs, calories } = dietMacros;

    const getPercentage = (value, target) => {
        if (!target) return 0;
        return Math.round((value / target) * 100);
    };

    const roundFats = getPercentage(fats, isTargetMacrosExist ? targetDietMacros.fats : fats);
    const roundCarbs = getPercentage(carbs, isTargetMacrosExist ? targetDietMacros.carbs : carbs);
    const roundCalories = getPercentage(calories, isTargetMacrosExist ? targetDietMacros.calories : calories);
    const roundProteins = getPercentage(proteins, isTargetMacrosExist ? targetDietMacros.proteins : proteins);
    return (
        <div className={`border space-y-4 p-4 rounded-md ${isDarkMode ? `${colors.border_gray_700} ${colors.bg_slate_800}` : colors.bg_white}`}>
            <h3 className={`${isDarkMode ? colors.text_gray_100 : colors.text_gray_900} font-bold capitalize`}>Diet Macros</h3>
            <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4">
                <DietMacrosCard
                    roundedValue={roundCalories}
                    macroValue={calories}
                    isTargetMacrosExist={isTargetMacrosExist}
                    targetDietMacros={targetDietMacros}
                    macroName="calories"
                    measuringUnit="Kcal"
                />
                <DietMacrosCard
                    roundedValue={roundProteins}
                    macroValue={proteins}
                    isTargetMacrosExist={isTargetMacrosExist}
                    targetDietMacros={targetDietMacros}
                    macroName="proteins"
                    measuringUnit="g"
                />
                <DietMacrosCard
                    roundedValue={roundCarbs}
                    macroValue={carbs}
                    isTargetMacrosExist={isTargetMacrosExist}
                    targetDietMacros={targetDietMacros}
                    macroName="carbs"
                    measuringUnit="g"
                />
                <DietMacrosCard
                    roundedValue={roundFats}
                    macroValue={fats}
                    isTargetMacrosExist={isTargetMacrosExist}
                    targetDietMacros={targetDietMacros}
                    macroName="fats"
                    measuringUnit="g"
                />
            </div>
        </div>
    );
}

export default DietMacros;
