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
        </form>
    )
}

export default DietForm
