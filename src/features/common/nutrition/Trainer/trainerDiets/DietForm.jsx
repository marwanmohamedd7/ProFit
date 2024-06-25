import InputDropdown from "../../../../../ui/InputDropdown"
import InputFloatingLabel from "../../../../../ui/InputFloatingLabel"
import InputTextArea from "../../../../../ui/InputTextArea"

function DietForm({ register, watch, errors, getValues }) {
    return (
        <form className="grid grid-cols-2 gap-2">
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
            {/* <InputFloatingLabel
                item={{ id: "description", label: "diet template note", value: watch("description") }}
                error={errors?.description?.message}
                register={
                    {
                        ...register("description", {
                            required: 'This field is required',
                        })
                    }
                }
            /> */}
            <div className="grid col-span-2">
                <InputTextArea
                    errors={errors?.description?.message}
                    placeholder="Diet template note..."
                    register={{
                        ...register("description", {
                            required: false,
                        })
                    }}
                />
            </div>
        </form>
    )
}

export default DietForm
