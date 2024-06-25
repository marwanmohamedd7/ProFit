import { useForm } from "react-hook-form";
import { useState } from "react";
import { useCreatePackage } from "./useCreatePackage";
import { useUpdatePackage } from "./useUpdatePackage";
import Button from "../../../ui/Button";
import SpinnerMini from "../../../ui/SpinnerMini";
import ActiveButton from "../../../ui/ActiveButton";
import InputFloatingLabel from "../../../ui/InputFloatingLabel";
import InputDropdown from "../../../ui/InputDropdown";
import { useDarkMode } from "../../../context/DarkModeProvider";
import styles from "../../../styles/styles";
import InputTextArea from "../../../ui/InputTextArea";

function AddPackage({ packageToUpdate = {}, overwrite = true, onCloseModal, isLoading: parentLoading }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const { createPackage, isCreating } = useCreatePackage();
    const { updatePackage, isUpdating } = useUpdatePackage();

    const { _id: packageId, ...packageValues } = packageToUpdate;
    const [isActive, setIsActive] = useState(packageValues?.active ?? true);
    const isUpdateSession = Boolean(packageId);
    const { register, handleSubmit, formState: { errors }, getValues, reset, watch } = useForm({
        defaultValues: isUpdateSession ? packageValues : {},
    });

    let isLoading = isCreating || isUpdating || parentLoading;

    function onSubmit(data) {
        if (!data) return;
        const packageData = { ...data, active: isActive };
        if (isUpdateSession) {
            updatePackage({ updatedPackageData: packageData, id: packageId }, {
                onSuccess: () => {
                    reset();
                    onCloseModal();
                }
            });
        } else {
            createPackage(packageData, {
                onSuccess: () => {
                    reset();
                    onCloseModal();
                }
            });
        }
    }

    return (
        <form className={`flex flex-col capitalize divide-y ${isDarkMode && "divide-gray-700"}`} onSubmit={handleSubmit(onSubmit)}>
            <div className="py-4 space-y-4">
                <div className="grid grid-cols-2 gap-x-2">
                    <InputFloatingLabel
                        item={{ id: "packageName", label: "package name", value: watch("packageName") }}
                        disabled={isLoading}
                        error={errors?.packageName?.message}
                        register={{
                            ...register("packageName", {
                                required: 'This field is required',
                            })
                        }}
                    />
                    <InputDropdown
                        item={{
                            id: "packageType",
                            label: "package type",
                            options: [
                                "Nutrition Plan",
                                "Workout Plan",
                                "Nutrition & Workout Plan",
                            ],
                        }}
                        disabled={isLoading}
                        error={errors?.packageType?.message}
                        getValues={getValues()}
                        register={{
                            ...register("packageType", {
                                required: "Select package type."
                            })
                        }}
                    />
                </div>
                <InputTextArea
                    id="description"
                    register={{
                        ...register("description", {
                            required: false,
                        })
                    }}
                    disabled={isLoading}
                    placeholder="package description...."
                    errors={errors?.description?.message}
                />
            </div>

            <div className="py-4 space-y-4">
                <div className="grid grid-cols-3 gap-x-2">
                    <div>
                        <div className={`flex items-center text-sm space-x-1 border ${isDarkMode ? `${colors.border_gray_700} ${colors.bg_slate_800}` : colors.border_gray_300} rounded-md`}>
                            <span className={`border-r p-2.5 h-full rounded-l-md flex items-center ${isDarkMode ? `${colors.bg_slate_900} ${colors.text_white} ${colors.border_gray_700}` : colors.bg_gray_100}`}>EGP</span>
                            <input
                                type="number"
                                id="price"
                                disabled={isLoading}
                                placeholder="Amount"
                                className={`outline-none w-full px-2 disabled:cursor-not-allowed ${isDarkMode ? `${colors.text_gray_300} ${colors.bg_slate_800} placeholder:text-gray-400` : `${colors.text_gray_700} placeholder:text-gray-500`}`}
                                {...register("price", {
                                    required: "This field is required",
                                    valueAsNumber: true, // convert the input to number type
                                    min: {
                                        value: 0,
                                        message: "Price must not be less 0"
                                    }
                                })}
                            />
                        </div>
                        {errors?.price?.message && <span className="text-xs text-red-700">{errors?.price?.message}</span>}
                    </div>

                    <div>
                        <div className={`flex items-center text-sm space-x-1 border ${isDarkMode ? `${colors.border_gray_700} ${colors.bg_slate_800}` : colors.border_gray_300} rounded-md`}>
                            <span className={`border-r p-2.5 h-full flex rounded-l-md items-center ${isDarkMode ? `${colors.bg_slate_900} ${colors.text_white} ${colors.border_gray_700}` : colors.bg_gray_100}`}>Months</span>
                            <select disabled={isLoading} id="duration" className={`capitalize block w-full disabled:cursor-not-allowed text-xs sm:text-sm px-2 ${isDarkMode ? `${colors.text_gray_300} ${colors.bg_slate_800} ${colors.border_gray_700} focus:ring-blue-500 focus:border-blue-500` : `${colors.text_gray_700} ${colors.border_gray_300} focus:ring-blue-700 focus:border-blue-700`} rounded-md focus:outline-none`}
                                {...register("duration", {
                                    required: "This field is required",
                                    valueAsNumber: true, // convert the input to number type
                                })}
                            >
                                <option className={`${isDarkMode ? colors.text_gray_500 : colors.text_gray_400}`} value="">duration</option>
                                <option className={`text-sm ${isDarkMode ? colors.text_gray_300 : colors.text_gray_700}`} value="3">3 months</option>
                                <option className={`text-sm ${isDarkMode ? colors.text_gray_300 : colors.text_gray_700}`} value="6">6 months</option>
                                <option className={`text-sm ${isDarkMode ? colors.text_gray_300 : colors.text_gray_700}`} value="9">9 months</option>
                                <option className={`text-sm ${isDarkMode ? colors.text_gray_300 : colors.text_gray_700}`} value="12">12 months</option>
                            </select>
                        </div>
                        {errors?.duration?.message && <span className="text-xs text-red-700">{errors?.duration?.message}</span>}
                    </div>

                    <InputFloatingLabel
                        item={{ id: "subscribersLimit", label: "subscribers limitation", type: "number", value: watch("subscribersLimit") }}
                        error={errors?.subscribersLimit?.message}
                        disabled={isLoading}
                        register={{
                            ...register("subscribersLimit", {
                                required: 'This field is required',
                                valueAsNumber: true, // convert the input to number type
                                min: {
                                    value: 0,
                                    message: "subscribers must not be less 0"
                                }
                            })
                        }}
                    />
                </div>
                <div className="flex gap-2">
                    <span>
                        <ActiveButton isActive={isActive} setIsActive={setIsActive} disabled={isLoading} />
                    </span>
                    <p className={`flex flex-col justify-center capitalize text-xs ${isDarkMode ? colors.text_gray_300 : colors.text_gray_700}`}>
                        <span>active</span>
                        <span className={`${isDarkMode ? colors.text_gray_500 : colors.text_gray_400}`}>set as default</span>
                    </p>
                </div>
            </div>

            {
                overwrite &&
                <div className="pt-6">
                    <Button type="primary" disabled={isLoading}>
                        <p className="flex items-center justify-center gap-2 capitalize">
                            {isLoading ? <span className="text-xs"><SpinnerMini dark={false} /></span> :
                                <>
                                    <span>{isUpdateSession ? "update package" : "Add package"}</span>
                                    {!isUpdateSession && <span>&#43;</span>}
                                </>
                            }
                        </p>
                    </Button>
                </div>
            }

        </form>
    );
}

export default AddPackage;
