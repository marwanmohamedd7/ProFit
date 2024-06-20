import { useDarkMode } from "../../../../../context/DarkModeProvider";
import styles from "../../../../../styles/styles";
import CircularProgress from "../../../../../ui/CircularProgress"

function DietMacrosCard({ roundedValue, macroValue, macroName, isTargetMacrosExist, targetDietMacros, measuringUnit }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    return (
        <div className={`flex justify-between items-center ${isDarkMode ? `${colors.bg_white} bg-opacity-10 ${colors.border_gray_700} ${colors.text_gray_100}` : `${colors.bg_gray_100} ${colors.text_gray_700}`} p-4 rounded-lg border`}>
            <div className="flex flex-col justify-center gap-2">
                <h3 className="text-lg font-normal tracking-wide capitalize">{macroName}</h3>
                <p className="text-xl"><strong>{Math.round(macroValue)} {measuringUnit}/</strong>{Math.round(isTargetMacrosExist ? targetDietMacros[macroName] : macroValue)} {measuringUnit}</p>
            </div>
            <CircularProgress variations="percentage" percentage={roundedValue} />
        </div>
    )
}

export default DietMacrosCard
