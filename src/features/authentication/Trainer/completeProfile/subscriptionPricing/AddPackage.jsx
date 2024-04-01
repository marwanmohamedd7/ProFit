import { useForm } from "react-hook-form"
import { useState } from "react";
import { useCreatePackage } from "./useCreatePackage";
import { useUpdatePackage } from "./useUpdatePackage";
import Button from "../../../../../ui/Button"
import SpinnerMini from "../../../../../ui/SpinnerMini";
import ActiveButton from "../../../../../ui/ActiveButton";
import InputFloatingLabel from "../../../../../ui/InputFloatingLabel"

function AddPackage({ packageToUpdate = {}, onCloseModal }) {
    const { createPackage, isCreating } = useCreatePackage()
    const { updatePackage, isUpdating } = useUpdatePackage()
    const { _id: packageId, ...packageValues } = packageToUpdate;
    const [isActive, setIsActive] = useState(packageValues?.active ?? true)
    const isUpdateSession = Boolean(packageId);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: isUpdateSession ? packageValues : {},
    });
    let isLoading = isCreating || isUpdating;
    function onSubmit(data) {
        if (!data) return;
        let isMatching = true;
        const packageData = { ...data, active: isActive };
        if (isUpdateSession) {
            const newData = Object.values(packageData)
            const oldData = Object.values(packageValues)
            for (const [i, value] of newData.entries()) if (value !== oldData[i]) isMatching = false
            !isMatching ?
                // update the existing session with new data
                updatePackage({ updatedPackageData: packageData, id: packageId }, {
                    onSuccess: () => {
                        reset()
                        onCloseModal()
                    }
                }) : onCloseModal()
        } else {
            createPackage(packageData, {
                onSuccess: () => {
                    reset()
                    onCloseModal()
                }
            })
        }
    }
    return (
        <form className="flex flex-col capitalize divide-y" onSubmit={handleSubmit(onSubmit)}>

            <div className="py-4 space-y-4">
                <div className="grid grid-cols-2 gap-x-2">
                    <InputFloatingLabel item={{ id: "packageName", label: "package name" }}
                        error={errors?.packageName?.message}
                        register={
                            {
                                ...register("packageName", {
                                    required: 'This field is required',
                                })
                            }
                        }
                    />
                    <div>
                        <div className=" text-gray-600 text-sm space-x-1 border-2 rounded-lg">
                            <select id="packageType" className="capitalize block w-full text-xs sm:text-sm p-1.5 text-gray-500 rounded-md
                         focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                {...register("packageType", {
                                    required: "This field is required",
                                })}
                            >
                                <option value="">package type</option>
                                <option value="Nutrition Plan">Nutrition Plan</option>
                                <option value="Workout Plan">Workout Plan</option>
                                <option value="Nutrition & Workout Plan">Nutrition & Workout Plan</option>

                            </select>
                        </div>
                        {errors?.packageType?.message && <span className="text-xs text-red-700">{errors?.packageType?.message}</span>}
                    </div>
                </div>
                <div className="space-y-1">
                    <label htmlFor="description" className="block text-sm font-medium capitalize text-gray-700">description</label>
                    <textarea
                        id="description"
                        placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque quidem, doloribus, laboriosam odit repudiandae sint fugit optio id, itaque necessitatibus hic. Expedita vitae cupiditate fuga distinctio atque, earum quo! ipsum dolor sit amet consectetur adipisicing elit. A beatae atque iure obcaecati officiis, totam earum numquam incidunt amet nam."
                        className="mt-1 block w-full py-2 h-28 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...register("description", {
                            required: false,
                            // required: "This field is required",
                        })}
                    />
                    {errors?.description?.message && <span className="text-xs text-red-700">{errors?.description?.message}</span>}
                </div>
            </div>

            <div className="py-4 space-y-4">
                <div className="grid grid-cols-3 gap-x-2">

                    <div>
                        <div className="flex items-center text-gray-600 text-sm space-x-1 border-2 rounded-lg">
                            <span className="border-r p-2.5 h-full flex items-center bg-gray-100">EGP</span>
                            <input
                                type="number"
                                id="price"
                                placeholder="Amount"
                                className="outline-none w-full px-2"
                                {...register("price", {
                                    required: "This field is required",
                                    valueAsNumber: true, // convert the input to number type
                                })}
                            />
                        </div>
                        {errors?.price?.message && <span className="text-xs text-red-700">{errors?.price?.message}</span>}
                    </div>

                    <div>
                        <div className="flex items-center text-gray-600 text-sm space-x-1 border-2 rounded-lg">
                            <span className="border-r p-2.5 h-full flex items-center bg-gray-100">Months</span>
                            <select id="duration" className="capitalize block w-full text-xs sm:text-sm px-2 text-gray-500 rounded-md
                         focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                {...register("duration", {
                                    required: "This field is required",
                                    valueAsNumber: true, // convert the input to number type
                                })}
                            >
                                <option value="">duration</option>
                                <option value="3">3 months</option>
                                <option value="6">6 months</option>
                                <option value="9">9 months</option>
                                <option value="12">1 year</option>
                                {/* Add other options here */}
                            </select>
                        </div>
                        {errors?.duration?.message && <span className="text-xs text-red-700">{errors?.duration?.message}</span>}
                    </div>

                    <InputFloatingLabel item={{ id: "subscribersLimit", label: "subscribers limitation", type: "number" }}
                        error={errors?.subscribersLimit?.message}
                        register={
                            {
                                ...register("subscribersLimit", {
                                    required: 'This field is required',
                                    valueAsNumber: true, // convert the input to number type
                                })
                            }
                        }
                    />
                </div>
                <div className="flex gap-2">
                    <div>
                        <ActiveButton isActive={isActive} setIsActive={setIsActive} />
                    </div>
                    <p className="flex flex-col justify-center capitalize text-xs text-gray-700">
                        <span>active</span>
                        <span className="text-gray-400">set as default</span>
                    </p>
                </div>
            </div>

            <div className="pt-6">
                <Button type="primary" >
                    <p className="flex items-center justify-center gap-2 capitalize">
                        {isLoading ? <span className="text-xs"><SpinnerMini /></span> :
                            <>
                                <span>{isUpdateSession ? "update package" : "Add package"}</span>
                                <span>&#43;</span>
                            </>
                        }
                    </p>
                </Button>
            </div>

        </form>
    )
}

export default AddPackage
