import InputDropdown from "../../../../../ui/InputDropdown"
import InputFloatingLabel from "../../../../../ui/InputFloatingLabel"

function DietForm({ register, watch, errors }) {
    return (
        <form className="flex items-center justify-center gap-2">
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
            <InputDropdown
                item={{
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
                }}
                error={errors?.dietType?.message}
                register={
                    {
                        ...register("dietType", {
                            required: "This field is required"
                        })
                    }
                }
            />
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
        </form>
    )
}

export default DietForm
