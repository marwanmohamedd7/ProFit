import { useSearchParams } from "react-router-dom"
import { useDietProvider } from "../../../../../context/DietProvider"
import DietMeals from "./DietMeals"
import DietMacros from "./DietMacros"
import DaysTabsItems from "../../../../../ui/DaysTabsItems"
import DietForm from "./DietForm"
// import InputDropdown from "../../../../../ui/InputDropdown"

function CreateDiet({ register, watch, errors }) {
    const { days } = useDietProvider()
    const [searchParams] = useSearchParams()
    const activeDay = searchParams.get("day") ?? "1";
    const activeDayDietMacros = days.find(day => day.day === activeDay)?.daymacros ?? {};
    return (
        <div className="flex flex-col gap-4">
            <div className=" bg-white p-4 rounded-md border flex flex-col justify-center gap-6">
                <h4 className="text-blue-700 font-bold capitalize">
                    diet template details
                </h4>
                <DietForm register={register} watch={watch} errors={errors} />
            </div>

            <div className="py-4">
                <DaysTabsItems>
                    <div className="py-4 space-y-4">
                        <DietMacros dietMacros={activeDayDietMacros} />
                        <DietMeals />
                    </div>
                </DaysTabsItems>
            </div>
        </div>
    )
}

export default CreateDiet
