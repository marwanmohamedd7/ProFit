import { useSetPersonalInfo } from "./useSetPersonalInfo";
import toast from "react-hot-toast";
import Image from "../../../../ui/Image";
import InputFloatingLabel from "../../../../ui/InputFloatingLabel"

function PersonalInformationForm(
    {
        watch,
        errors,
        register,
        setValue,
        disabled,
        getValues,
        isLoadingImg,
        profilePhoto,
        setIsLoadingImg,
        requiredImgMessage,
        setRequiredImgMessage,
    }) {
    const { setPersonalInfo, isLoadingSettingInfo } = useSetPersonalInfo()
    const isLoading = disabled || isLoadingSettingInfo

    function onCropComplete(croppedImgFile) {
        if (!croppedImgFile) return
        if (requiredImgMessage) setRequiredImgMessage("")
        setIsLoadingImg(true)
        setValue("profilePhoto", croppedImgFile, { shouldValidate: true })
        const image = {
            profilePhoto: getValues()?.profilePhoto
        };
        const formData = new FormData();
        // Append the image file to formData. The key is 'image', and the value is the file object.
        if (image.profilePhoto instanceof File) {
            formData.append('profilePhoto', image.profilePhoto);
        }
        setPersonalInfo(formData, {
            onSuccess: () => {
                setIsLoadingImg(false)
                toast.success("Avatar uploaded successfully")
            }
        });
    }

    return (
        <>
            <div className="flex flex-col gap-6">
                <Image
                    minDimension={150}
                    photoType="(profile)"
                    dimensions="w-32 h-32"
                    error={requiredImgMessage}
                    onCropComplete={onCropComplete}
                    isLoading={isLoading && isLoadingImg}
                    src={profilePhoto || getValues()?.profilePhoto}
                />
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 capitalize">
                <InputFloatingLabel item={{ id: "country", label: "country*", value: watch("country") }}
                    disabled={isLoading}
                    error={errors?.country?.message}
                    register={
                        {
                            ...register("country", {
                                required: 'This field is required',
                            })
                        }
                    }
                />

                <InputFloatingLabel item={{ id: "state", label: "state*", value: watch("state") }}
                    disabled={isLoading}
                    error={errors?.state?.message}
                    register={
                        {
                            ...register("state", {
                                required: 'This field is required',
                            })
                        }
                    }
                />

                <InputFloatingLabel item={{ id: "city", label: "city*", value: watch("city") }}
                    disabled={isLoading}
                    error={errors?.city?.message}
                    register={
                        {
                            ...register("city", {
                                required: 'This field is required',
                            })
                        }
                    }
                />
                <InputFloatingLabel item={{ id: "phoneNumber", label: "phone number*", type: "number", value: watch("phoneNumber") }}
                    disabled={isLoading}
                    error={errors?.phoneNumber?.message}
                    register={
                        {
                            ...register("phoneNumber", {
                                required: 'This field is required',
                                minLength: {
                                    value: 11,
                                    message: "Phone number must contains at least 11 characters."
                                }, // phone number must be
                                maxLength:{
                                    value: 11,
                                    message: "Phone number must not exceeds 11 characters."
                                },
                                validate: (value) =>
                                    (value).startsWith("010") || (value).startsWith("011") || (value).startsWith("012") || (value).startsWith("015") ||
                                    "phone number should start with (010, 011, 012, 015)"
                            })
                        }
                    }
                />
                <InputFloatingLabel item={{ id: "birthDate", label: "birth date*", type: "date", value: watch("birthDate") }}
                    disabled={isLoading}
                    error={errors?.birthDate?.message}
                    register={
                        {
                            ...register("birthDate", {
                                required: 'This field is required',
                            })
                        }
                    }
                />
            </div>

            <div className="space-y-1">
                <label htmlFor="biography" className="block text-sm font-medium capitalize text-gray-700">biography*</label>
                <textarea
                    id="biography"
                    disabled={isLoading}
                    //  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque quidem, doloribus, laboriosam odit repudiandae sint fugit optio id, itaque necessitatibus hic. Expedita vitae cupiditate fuga distinctio atque, earum quo! ipsum dolor sit amet consectetur adipisicing elit. A beatae atque iure obcaecati officiis, totam earum numquam incidunt amet nam."
                    className="mt-1 disabled:bg-gray-50 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...register("biography", {
                        // required: false,
                        required: "This field is required",
                    })}
                />
                {errors?.biography?.message && <span className="text-xs text-red-700">{errors?.biography?.message}</span>}
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="male" className="text-sm font-medium capitalize text-gray-700 flex items-center gap-2">
                    <input
                        id="male"
                        disabled={isLoading}
                        {...register("gender", { required: 'This field is required' })}
                        type="radio"
                        value="Male"
                        className="form-radio"
                    />
                    <span>Male</span>
                </label>
                <label htmlFor="female" className="text-sm font-medium capitalize text-gray-700 flex items-center gap-2">
                    <input
                        id="female"
                        disabled={isLoading}
                        {...register("gender", { required: 'This field is required' })}
                        type="radio"
                        value="Female"
                        className="form-radio"
                    />
                    <span>Female</span>
                </label>
                {errors?.gender?.message && <span className="text-red-700 text-xs">{errors?.gender?.message}</span>}
            </div>

        </>
    )
}
export default PersonalInformationForm
