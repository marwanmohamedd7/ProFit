import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import { useSetPersonalInfo } from "./useSetPersonalInfo";
import Button from "../../../../../ui/Button";
import SpinnerMini from "../../../../../ui/SpinnerMini";
import UploadImage from "../../../../../ui/UploadImage";
import InputFloatingLabel from "../../../../../ui/InputFloatingLabel"
import toast from "react-hot-toast";

function PersonalInfoForm({ getPersonalInfo = {} }) {
    const navigate = useNavigate()
    const { setPersonalInfo, isLoadingSettingInfo } = useSetPersonalInfo()
    const { _id, profilePhoto, ...PersonalInfo } = getPersonalInfo || {};
    const [avatarExist, setAvatarExist] = useState("")
    const [avatar, setAvatar] = useState(profilePhoto ?? null)
    const getSession = Boolean(_id)
    const { formState: { errors }, register, handleSubmit, reset, watch } = useForm({
        defaultValues: getSession ? PersonalInfo : {},
    });

    function onSubmit(data) {
        if (!data || !avatar) {
            setAvatarExist("Please upload an avatar.")
            return;
        }
        let isMatching = true;
        if (PersonalInfo) {
            const newData = Object.values(data)
            const oldData = Object.values(PersonalInfo)
            for (const [i, value] of newData.entries()) if (value !== oldData[i]) isMatching = false
        }
        if (isMatching) {
            navigate("/complete-profile/professional-credentials")
        } else {
            const formData = new FormData();
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    formData.append(key, data[key]);
                }
            }
            setPersonalInfo(formData, {
                onSuccess: ({ message }) => {
                    reset()
                    toast.success(message)
                    navigate("/complete-profile/professional-credentials")
                }
            });
        }
    }
    function handleImage(e) {
        e.preventDefault();
        if (!e.target.files[0].type.includes('image')) return
        setAvatarExist("")
        setAvatar(e.target.files[0]);

        const image = {
            profilePhoto: e.target.files[0]
        };

        const formData = new FormData();
        // Append the image file to formData. The key is 'image', and the value is the file object.
        if (image.profilePhoto instanceof File) {
            formData.append('profilePhoto', image.profilePhoto);
        }

        setPersonalInfo(formData, {
            onSuccess: () => {
                reset()
                toast.success("Avatar uploaded successfully")
            }
        });
    }

    return (
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
                <h1 className="text-blue-900 font-bold text-lg capitalize">personal information</h1>
                <UploadImage
                    id="profilePhoto"
                    photo="(profile)"
                    error={avatarExist}
                    onChange={handleImage}
                    dimentions="w-28 h-28 rounded-full"
                    disabled={isLoadingSettingInfo}
                    src={profilePhoto ?? null}
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
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                <Button disabled={isLoadingSettingInfo}>{isLoadingSettingInfo ? <SpinnerMini /> :
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
