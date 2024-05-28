import InputDropdown from "../../../../../ui/InputDropdown"
import InputFloatingLabel from "../../../../../ui/InputFloatingLabel"

function DietForm({ register, watch, errors, getValues }) {
    return (
        <form className="flex items-center justify-center gap-2">
            <InputFloatingLabel
                item={{ id: "planName", label: "diet template name", value: watch("planName") }}
                error={errors?.planName?.message}
                register={
                    {
                        ...register("planName", {
                            required: 'This field is required',
                        })
                    }
                }
            />
            <InputDropdown item={
                {
                    id: "dietType",
                    label: "Diet Type",
                    options: [
                        "Vegetarian",
                        "Vegan",
                        "Ketogenic",
                        "Paleo",
                        "Mediterranean",
                        "Standard",
                        "Other...",
                    ],
                }
            }
                error={errors?.dietType?.message}
                getValues={getValues}
                register={{
                    ...register("dietType", {
                        required: "Select diet type."
                    })
                }}
            />
            <InputFloatingLabel
                item={{ id: "description", label: "diet template note", value: watch("description") }}
                error={errors?.description?.message}
                register={
                    {
                        ...register("description", {
                            required: 'This field is required',
                        })
                    }
                }
            />
        </form>
    )
}

export default DietForm
