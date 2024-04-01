import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import { useSetPersonalInfo } from "./useSetPersonalInfo";
import toast from "react-hot-toast";
import Image from "../../../../../ui/Image";
import Button from "../../../../../ui/Button";
import SpinnerMini from "../../../../../ui/SpinnerMini";
import InputFloatingLabel from "../../../../../ui/InputFloatingLabel"

function PersonalInfoForm({ getPersonalInfo = {} }) {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [isLoadingImg, setIsLoadingImg] = useState(false)
    const { setPersonalInfo, isLoadingSettingInfo } = useSetPersonalInfo()
    const { _id, profilePhoto, ...PersonalInfo } = getPersonalInfo || {};
    const getSession = Boolean(_id)
    const { formState: { errors }, register, handleSubmit, reset, watch, setValue, getValues } = useForm({
        defaultValues: getSession ? PersonalInfo : {},
    });
    function onSubmit(data) {
        if (!data || !profilePhoto) {
            !profilePhoto && setError("Profile photo is required")
            return
        }
        let isMatching = true;
        const formData = new FormData();
        if (PersonalInfo) {
            const newData = Object.entries(data)
            const oldData = Object.entries(PersonalInfo)
            for (const [i, [key, value]] of newData.entries()) if (!oldData[i] || value !== oldData[i][1]) {
                isMatching = false
                formData.append(key, value);
            }
            !isMatching ?
                setPersonalInfo(formData, {
                    onSuccess: ({ message }) => {
                        reset()
                        toast.success(message)
                        navigate("/complete-profile/professional-credentials", { replace: true })
                    }
                })
                : navigate("/complete-profile/professional-credentials")
        } else {
            for (const [key, value] of Object.entries(data)) formData.append(key, value);
            setPersonalInfo(formData, {
                onSuccess: ({ message }) => {
                    reset()
                    toast.success(message)
                    navigate("/complete-profile/professional-credentials")
                }
            });
        }
    }

    function onCropComplete(croppedImgFile) {
        if (!croppedImgFile) return
        if (error) setError("")
        setIsLoadingImg(true)
        setValue("profilePhoto", croppedImgFile, { shouldValidate: true })
        const image = {
            profilePhoto: getValues().profilePhoto
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
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
                <h1 className="text-blue-900 font-bold text-lg capitalize">personal information</h1>
                <Image
                    error={error}
                    minDimension={150}
                    photoType="(profile)"
                    dimensions="w-32 h-32"
                    onCropComplete={onCropComplete}
                    disabled={isLoadingSettingInfo && isLoadingImg}
                    src={profilePhoto || getValues()?.profilePhoto}
                />
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 capitalize">
                <InputFloatingLabel item={{ id: "country", label: "country*", value: watch("country") }}
                    disabled={isLoadingSettingInfo}
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
                    disabled={isLoadingSettingInfo}
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
                    disabled={isLoadingSettingInfo}
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
                    disabled={isLoadingSettingInfo}
                    error={errors?.phoneNumber?.message}
                    register={
                        {
                            ...register("phoneNumber", {
                                required: 'This field is required',
                                minLength: {
                                    value: 11,
                                    message: "Phone number must contains at least 11 characters."
                                }, // phone number must be
                                validate: (value) =>
                                    (value).startsWith("010") || (value).startsWith("011") || (value).startsWith("012") || (value).startsWith("015") ||
                                    "phone number should start with (010, 011, 012, 015)"
                            })
                        }
                    }
                />
                <InputFloatingLabel item={{ id: "birthDate", label: "birth date*", type: "date", value: watch("birthDate") }}
                    disabled={isLoadingSettingInfo}
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
                    disabled={isLoadingSettingInfo}
                    //  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque quidem, doloribus, laboriosam odit repudiandae sint fugit optio id, itaque necessitatibus hic. Expedita vitae cupiditate fuga distinctio atque, earum quo! ipsum dolor sit amet consectetur adipisicing elit. A beatae atque iure obcaecati officiis, totam earum numquam incidunt amet nam."
                    className="mt-1 disabled:bg-gray-50 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...register("biography", {
                        required: false,
                        // required: "This field is required",
                    })}
                />
                {errors?.biography?.message && <span className="text-xs text-red-700">{errors?.description?.message}</span>}
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="male" className="text-sm font-medium capitalize text-gray-700 flex items-center gap-2">
                    <input
                        id="male"
                        disabled={isLoadingSettingInfo}
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
                        disabled={isLoadingSettingInfo}
                        {...register("gender", { required: 'This field is required' })}
                        type="radio"
                        value="Female"
                        className="form-radio"
                    />
                    <span>Female</span>
                </label>
                {errors?.gender?.message && <span className="text-red-700 text-xs">{errors?.gender?.message}</span>}
            </div>

            <div className="flex justify-end items-center">
                <Button disabled={isLoadingSettingInfo}>{isLoadingSettingInfo && !isLoadingImg ? <SpinnerMini /> :
                    <p className="flex justify-center font-bold tracking-wide items-center gap-2">
                        <span>next page</span>
                        <span className="text-xl"><HiArrowLongRight /></span>
                    </p>
                }</Button>
            </div>
        </form>
    )
}
export default PersonalInfoForm
