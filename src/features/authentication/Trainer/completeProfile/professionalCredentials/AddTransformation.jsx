import { useForm } from "react-hook-form"
import { useCreateTransformation } from "./useCreateTransformation"
import { useUpdateTransformation } from "./useUpdateTransformation"
import Button from "../../../../../ui/Button"
import UploadImage from "../../../../../ui/UploadImage"
import SpinnerMini from "../../../../../ui/SpinnerMini"
import InputFloatingLabel from "../../../../../ui/InputFloatingLabel"

function AddTransformation({ transformationToUpdate = {}, onCloseModal }) {
    const { createTransformation, isCreating } = useCreateTransformation()
    const { updateTransformartion, isUpdating } = useUpdateTransformation()
    const isLoading = isCreating || isUpdating;
    const { id: transformationId, ...transformationValues } = transformationToUpdate
    const isUpdateSession = Boolean(transformationId)
    const { formState: { errors }, register, handleSubmit, reset, control } = useForm({
        defaultValues: isUpdateSession ? transformationValues : {}
    })

    function onSubmit(data) {
        if (!data) return
        const beforeTransformationImg = typeof data.imageBefore === "string" ? data.imageBefore : `${Math.random()}-${data.imageBefore.name}`;
        const afterTransformationImg = typeof data.imageAfter === "string" ? data.imageAfter : `${Math.random()}-${data.imageAfter.name}`;
        const transformationData = {
            ...data,
            imageBefore: beforeTransformationImg,
            imageAfter: afterTransformationImg,
        };
        if (isUpdateSession) {
            updateTransformartion({ transformationData, id: transformationId }, {
                onSettled: () => {
                    reset()
                    onCloseModal()
                }
            })
        } else {
            createTransformation(transformationData, {
                onSettled: () => {
                    reset()
                    onCloseModal()
                }
            })
        }
    }
    return (
        <form className="space-y-8 py-4">
            <div className="flex items-center gap-4">
                <UploadImage
                    id="imageBefore"
                    photo="(Before)"
                    control={control}
                    disabled={isLoading}
                    error={errors?.imageBefore?.message}
                    src={transformationValues?.imageBefore ?? null}
                    rules={{ required: "before transformation photo is required" }}
                />
                <UploadImage
                    id="imageAfter"
                    photo="(After)"
                    control={control}
                    disabled={isLoading}
                    error={errors?.imageAfter?.message}
                    src={transformationValues?.imageAfter ?? null}
                    rules={{ required: "after transformation photo is required" }}
                />
            </div>
            <div className="flex flex-col justify-center gap-4">
                <InputFloatingLabel item={{ id: "title", label: "Transformation title", type: "text" }}
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
                <InputFloatingLabel item={{ id: "description", label: "Transformation description", type: "text" }}
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
