import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import { useSetPersonalInfo } from "./useSetPersonalInfo";
import toast from "react-hot-toast";
import Button from "../../../../ui/Button";
import SpinnerMini from "../../../../ui/SpinnerMini";
import PersonalInformationForm from "./PersonalInformationForm";

function PersonalInformation({ getPersonalInfo = {} }) {
    const navigate = useNavigate()
    const [isLoadingImg, setIsLoadingImg] = useState(false)
    const [requiredImgMessage, setRequiredImgMessage] = useState("")
    const { setPersonalInfo, isLoadingSettingInfo } = useSetPersonalInfo()
    const { _id, profilePhoto, ...PersonalInfo } = getPersonalInfo || {};
    const getSession = Boolean(_id)
    const { formState: { errors }, register, handleSubmit, reset, watch, setValue, getValues } = useForm({
        defaultValues: getSession ? PersonalInfo : {},
    });
    function onSubmit(data) {
        if (!data || !profilePhoto) {
            !profilePhoto && setRequiredImgMessage("Profile photo is required")
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

    return (
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-blue-900 font-bold text-xl capitalize">personal information</h1>
            <PersonalInformationForm
                watch={watch}
                errors={errors}
                setValue={setValue}
                register={register}
                getValues={getValues}
                profilePhoto={profilePhoto}
                isLoadingImg={isLoadingImg}
                setIsLoadingImg={setIsLoadingImg}
                requiredImgMessage={requiredImgMessage}
                setRequiredImgMessage={setRequiredImgMessage}
            />

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
export default PersonalInformation
