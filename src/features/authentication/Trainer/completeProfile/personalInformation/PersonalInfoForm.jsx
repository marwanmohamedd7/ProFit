import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetPersonalInfo } from "./useSetPersonalInfo";
import Button from "../../../../../ui/Button";
import SpinnerMini from "../../../../../ui/SpinnerMini";
import UploadImage from "../../../../../ui/UploadImage";
import InputFloatingLabel from "../../../../../ui/InputFloatingLabel"
import { HiArrowLongRight } from "react-icons/hi2";

function PersonalInfoForm({ getPersonalInfo = {} }) {
    const navigate = useNavigate()
    const [onReset, setOnReset] = useState(false)
    const { setPersonalInfo, isLoadingSettingInfo } = useSetPersonalInfo()
    const { id, ...PersonalInfo } = getPersonalInfo || {}
    const getSession = Boolean(id)
    const { formState: { errors }, register, handleSubmit, reset, control } = useForm({
        defaultValues: getSession ? PersonalInfo : {},
    });

    function onSubmit(data) {
        if (!data) return
        let isTrue = true;
        if (PersonalInfo) {
            const formData = Object.values(data)
            const userData = Object.values(PersonalInfo)
            for (const [i, value] of formData.entries()) if (value !== userData[i]) isTrue = false
        }

        if (isTrue) {
            navigate("/complete-profile/professional-credentials")
        } else {
            const profileImage = `${Math.random()}-${data.avatar.name}`;
            setPersonalInfo({ ...data, avatar: profileImage }, {
                onSettled: () => {
                    reset()
                    setOnReset(true)
                    navigate("/complete-profile/professional-credentials")
                }
            });
        }
    }
    return (
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
                <h1 className="text-blue-900 font-bold text-lg capitalize">personal information</h1>
                <UploadImage
                    id="avatar"
                    photo="(profile)"
                    onReset={onReset}
                    control={control}
                    disabled={isLoadingSettingInfo}
                    dimentions="h-28 w-28"
                    error={errors?.avatar?.message}
                    src={PersonalInfo?.avatar ?? null}
                    rules={{ required: "Profile photo is required" }}
                />
                {/* <div>
                    <div className="relative w-28">
                        <label
                            htmlFor={"avatar"}
                            className="cursor-pointer absolute right-[-6%] top-[-6%] text-blue-50 p-1 rounded-full bg-blue-700"
                        >
                            <MdOutlineEdit />
                        </label>
                        <div
                            className={`rounded-md text-gray-500 text-xs flex flex-col items-center justify-center gap-2 tracking-wide text-center border h-28 w-28 capitalize`}
                        >

                            {avatar ?
                                <>
                                    {typeof avatar === "string" ?
                                        <img src={avatar} alt="avatar" />
                                        :
                                        <>
                                            <span className="text-blue-700 text-3xl"><HiMiniCheckCircle /></span>
                                            <span className="text-blue-700 text-lg font-bold capitalize">uploaded</span>
                                        </>
                                    }
                                </>
                                :
                                <>
                                    <span>upload</span>
                                    <span>(certifcate) photo</span>
                                </>
                            }

                        </div>
                        <input
                            type="file"
                            accept="image/*"
                            id="avatar"
                            className="hidden"
                            disabled={isLoadingSettingInfo}
                            {...register("avatar", {
                                required: "Profile photo is required",
                                onChange: (e) => setAvatar(e.target.files[0])
                            })}
                        />
                    </div>
                    {errors?.avatar?.message && <span className="text-red-700 text-xs">{errors?.avatar?.message}</span>}
                </div> */}
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 capitalize">
                <InputFloatingLabel item={{ id: "country", label: "country*" }}
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

                <InputFloatingLabel item={{ id: "state", label: "state*" }}
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

                <InputFloatingLabel item={{ id: "city", label: "city*" }}
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
                <InputFloatingLabel item={{ id: "phone_number", label: "phone number*", type: "number" }}
                    disabled={isLoadingSettingInfo}
                    error={errors?.phone_number?.message}
                    register={
                        {
                            ...register("phone_number", {
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
                <InputFloatingLabel item={{ id: "birth_date", label: "birth date*", type: "date" }}
                    disabled={isLoadingSettingInfo}
                    error={errors?.birth_date?.message}
                    register={
                        {
                            ...register("birth_date", {
                                required: 'This field is required',
                            })
                        }
                    }
                />
            </div>

            <div className="space-y-1">
                <label htmlFor="description" className="block text-sm font-medium capitalize text-gray-700">biography*</label>
                <textarea
                    id="description"
                    disabled={isLoadingSettingInfo}
                    //  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque quidem, doloribus, laboriosam odit repudiandae sint fugit optio id, itaque necessitatibus hic. Expedita vitae cupiditate fuga distinctio atque, earum quo! ipsum dolor sit amet consectetur adipisicing elit. A beatae atque iure obcaecati officiis, totam earum numquam incidunt amet nam."
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    error={errors?.birth_date?.message}
                    {...register("description", {
                        required: false,
                        // required: "This field is required",
                    })}
                />
                {errors?.description?.message && <span className="text-xs text-red-700">{errors?.description?.message}</span>}
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="male" className="text-sm font-medium capitalize text-gray-700 flex items-center gap-2">
                    <input
                        id="male"
                        disabled={isLoadingSettingInfo}
                        {...register("gender", { required: 'This field is required' })}
                        type="radio"
                        value="male"
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
                        value="female"
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
