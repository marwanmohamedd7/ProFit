import { useForm } from "react-hook-form"
import InputFloatingLabel from "../../../../../ui/InputFloatingLabel"
import DayTab from "../../../../../ui/DayTab"

function CreateDietTemplate() {
    const { handleSubmit, formState: { errors }, register, watch, reset } = useForm()
    return (
        <div className="flex flex-col gap-4 divide-y">
            <div className=" bg-white p-4 rounded-md border flex flex-col justify-center gap-6">
                <h4 className="text-blue-700 font-bold capitalize">
                    diet template details
                </h4>
                <div className="flex items-center justify-center gap-2">
                    <InputFloatingLabel
                        item={{ id: "dietName", label: "diet template name", value: watch("dietName") }}
                        // disabled={isLoading}
                        error={errors?.dietName?.message}
                        register={
                            {
                                ...register("dietName", {
                                    required: 'This field is required',
                                })
                            }
                        }
                    />
                    <InputFloatingLabel
                        item={{ id: "dietNote", label: "diet template note", value: watch("dietNote") }}
                        // disabled={isLoading}
                        error={errors?.dietNote?.message}
                        register={
                            {
                                ...register("dietNote", {
                                    required: 'This field is required',
                                })
                            }
                        }
                    />
                </div>
            </div>
            <div className="py-4">
                <DayTab />
            </div>
        </div>
    )
}

export default CreateDietTemplate
