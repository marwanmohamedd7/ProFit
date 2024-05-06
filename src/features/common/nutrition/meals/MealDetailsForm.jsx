import InputDropdown from "../../../../ui/InputDropdown"
import InputFloatingLabel from "../../../../ui/InputFloatingLabel"

function MealDetailsForm({ register, watch, errors }) {
    return (
        <div className="grid grid-cols-3 gap-2">
            <InputFloatingLabel
                item={{ id: "mealname", label: "meal name", value: watch("mealname") }}
                // disabled={isLoading}
                error={errors?.mealname?.message}
                register={
                    {
                        ...register("mealname", {
                            required: 'This field is required',
                        })
                    }
                }
            />
            <InputDropdown item={
                {
                    id: "mealtype",
                    label: "Meal Type",
                    options: ["Breakfast", "Lunch", "Snack", "Dinner"]
                }
            }
                //    disabled={isLoading}
                error={errors?.mealtype?.message}
                register={{
                    ...register("mealtype", {
                        required: "Select meal type."
                    })
                }}
            />
            <InputFloatingLabel
                item={{ id: "mealnote", label: "meal note", value: watch("mealnote") }}
                // disabled={isLoading}
                error={errors?.mealnote?.message}
                register={
                    {
                        ...register("mealnote", {
                            required: 'This field is required',
                        })
                    }
                }
            />
        </div>
    )
}

export default MealDetailsForm
