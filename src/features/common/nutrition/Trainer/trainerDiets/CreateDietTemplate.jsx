import { useSearchParams } from "react-router-dom"
import { useDietProvider } from "../../../../../context/DietProvider"
import DietMeals from "./DietMeals"
import DietMacros from "./DietMacros"
import DaysTabsItems from "../../../../../ui/DaysTabsItems"
import InputFloatingLabel from "../../../../../ui/InputFloatingLabel"
// import InputDropdown from "../../../../../ui/InputDropdown"

function CreateDietTemplate({ register, watch, errors }) {
    const { days } = useDietProvider()
    const [searchParams] = useSearchParams()
    const activeDay = searchParams.get("day") ?? "1";
    const activeDayDietMacros = days.find(day => day.day === activeDay)?.daymacros ?? {};
    return (
        <div className="flex flex-col gap-4 divide-y">
            <div className=" bg-white p-4 rounded-md border flex flex-col justify-center gap-6">
                <h4 className="text-blue-700 font-bold capitalize">
                    diet template details
                </h4>
                <div className="flex items-center justify-center gap-2">
                    <InputFloatingLabel
                        item={{ id: "planName", label: "diet template name", value: watch("planName") }}
                        // disabled={isLoading}
                        error={errors?.planName?.message}
                        register={
                            {
                                ...register("planName", {
                                    required: 'This field is required',
                                })
                            }
                        }
                    />
                    {/* <InputDropdown item={
                        {
                            id: "plantype",
                            label: "Plan Type",
                            options: ["My plan", "Free Plan", "Customized Plan"]
                        }
                    }
                        //    disabled={isLoading}
                        error={errors?.plantype?.message}
                        register={{
                            ...register("plantype", {
                                required: "Select plan type."
                            })
                        }}
                    /> */}
                    <InputFloatingLabel
                        item={{ id: "description", label: "diet template note", value: watch("description") }}
                        // disabled={isLoading}
                        error={errors?.description?.message}
                        register={
                            {
                                ...register("description", {
                                    required: 'This field is required',
                                })
                            }
                        }
                    />
                </div>
            </div>

            <div className="py-4">
                <DaysTabsItems>
                    <div className="px-2 py-4 space-y-4">
                        <DietMacros dietMacros={activeDayDietMacros} />
                        <DietMeals />
                    </div>
                </DaysTabsItems>
            </div>
        </div>
    )
}

export default CreateDietTemplate
