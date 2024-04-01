import { useForm } from "react-hook-form"
import { useCreateTransformation } from "./useCreateTransformation"
import { useUpdateTransformation } from "./useUpdateTransformation"
import Button from "../../../../../ui/Button"
import SpinnerMini from "../../../../../ui/SpinnerMini"
import InputFloatingLabel from "../../../../../ui/InputFloatingLabel"
import UploadImageForm from "../../../../../ui/UploadImageForm"

function AddTransformation({ transformationToUpdate = {}, onCloseModal }) {
    const { createTransformation, isCreating } = useCreateTransformation()
    const { updateTransformartion, isUpdating } = useUpdateTransformation()
    const isLoading = isCreating || isUpdating;
    const { _id: transformationId, ...transformationValues } = transformationToUpdate
    const isUpdateSession = Boolean(transformationId)
    const { formState: { errors }, register, handleSubmit, reset, watch, control } = useForm({
        defaultValues: isUpdateSession ? transformationValues : {}
    })

    function onSubmit(data) {
        if (!data) return
        let isMatching = true;
        const formData = new FormData();
        if (isUpdateSession) {
            const newData = Object.entries(data)
            const oldData = Object.entries(transformationValues)
            for (const [i, [key, value]] of newData.entries()) if (value !== oldData[i][1]) {
                isMatching = false
                formData.append(key, value);
            }
            !isMatching ?
                updateTransformartion({ formData, id: transformationId }, {
                    onSuccess: () => {
                        reset()
                        onCloseModal()
                    }
                })
                : onCloseModal()
        } else {
            for (const [key, value] of Object.entries(data)) formData.append(key, value);
            createTransformation(formData, {
                onSuccess: () => {
                    reset()
                    onCloseModal()
                }
            })
        }
        // Iterate over each key in data and show the formData values 
        // for (let entry of formData.entries()) {
        //     console.log(entry[0], entry[1]);
        // }
    }

    return (
        <form className="space-y-8 py-4">
            <div className="flex items-center gap-4">
                <UploadImageForm
                    id="beforeImage"
                    photo="(Before)"
                    control={control}
                    disabled={isLoading}
                    error={errors?.beforeImage?.message}
                    // src={bef}
                    dimentions="w-52"
                    src={transformationValues?.beforeImage ?? null}
                    rules={{ required: "before transformation photo is required" }}
                />
                <UploadImageForm
                    id="afterImage"
                    photo="(After)"
                    control={control}
                    disabled={isLoading}
                    error={errors?.afterImage?.message}
                    // src={aft}
                    dimentions="w-52"
                    src={transformationValues?.afterImage ?? null}
                    rules={{ required: "after transformation photo is required" }}
                />
            </div>
            <div className="flex flex-col justify-center gap-4">
                <InputFloatingLabel item={{ id: "title", label: "Transformation title", type: "text", value: watch("title") }}
                    disabled={isLoading}
                    error={errors?.title?.message}
                    register={
                        {
                            ...register("title", {
                                required: 'This field is required',
                                minLength: {
                                    value: 2,
                                    message: "title must not be less than 2 characters"
                                },
                                maxLength: {
                                    value: 30,
                                    message: "title must not exceed than 30 characters"
                                }
                            })
                        }
                    }
                />
                <InputFloatingLabel item={{ id: "description", label: "Transformation description", type: "text", value: watch("description") }}
                    disabled={isLoading}
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
            <Button disabled={isLoading} onClick={handleSubmit(onSubmit)}>
                <p className="flex justify-center items-center gap-2">
                    {
                        isLoading ? <SpinnerMini /> :
                            <>
                                <span>{isUpdateSession ? "update transformation" : "add transformation"}</span>
                                <span>&rarr;</span>
                            </>
                    }
                </p>
            </Button>
        </form>
    )
}

export default AddTransformation
