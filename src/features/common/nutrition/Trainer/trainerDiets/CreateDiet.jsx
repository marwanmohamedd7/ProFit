import { useSearchParams } from "react-router-dom"
import { useDietProvider } from "../../../../../context/DietProvider"
import DietMeals from "./DietMeals"
import DietMacros from "./DietMacros"
import DaysTabsItems from "../../../../../ui/DaysTabsItems"
import DietForm from "./DietForm"
import { useDarkMode } from "../../../../../context/DarkModeProvider"
import styles from "../../../../../styles/styles"
// import InputDropdown from "../../../../../ui/InputDropdown"

function CreateDiet({ register, watch, getValues, errors }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const { days, targetmacros = {} } = useDietProvider();
    const [searchParams] = useSearchParams();
    const activeDay = searchParams.get("day") ?? "1";
    const activeDayDietMacros = days.find(day => day.day === activeDay)?.daymacros ?? {};
    return (
        <div className="flex flex-col gap-4">
            {
                <div className={`p-4 rounded-md border flex flex-col justify-center gap-6 ${isDarkMode ? `${colors.border_gray_700} ${colors.bg_slate_800}` : colors.bg_white}`}>
                    <h4 className={`${isDarkMode ? colors.text_gray_100 : colors.text_gray_900} font-bold capitalize`}>
                        diet template details
                    </h4>
                    <DietForm register={register} watch={watch} errors={errors} getValues={getValues} />
                </div>
            }

            <div className="pb-4">
                <DaysTabsItems>
                    <div className="py-4 space-y-4">
                        <DietMacros dietMacros={activeDayDietMacros} targetDietMacros={targetmacros} />
                        <DietMeals />
                    </div>
                </DaysTabsItems>
            </div>
        </div>
    )
}

export default CreateDiet
