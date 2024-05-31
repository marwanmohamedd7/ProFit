import { useForm } from "react-hook-form"
import PersonalInformationForm from "../../completeProfile/personalInformation/PersonalInformationForm"
import { useState } from "react"
import ProfessionalCredentialsForm from "../../completeProfile/professionalCredentials/ProfessionalCredentialsForm"
import Button from "../../../../ui/Button"
import { HiArrowLongRight } from "react-icons/hi2"
import SocialMedia from "../../completeProfile/professionalCredentials/SocialMedia"
import { useUpdateUserAboutData } from "./useUpdateUserAboutData"
import SpinnerMini from "../../../../ui/SpinnerMini"

function AboutMeForm({ getUserAboutData = {} }) {
    const [isLoadingImg, setIsLoadingImg] = useState(false)
    const [requiredImgMessage, setRequiredImgMessage] = useState("")
    const { updateUserAboutData, isUpdating } = useUpdateUserAboutData()
    const { _id, profilePhoto, socialMedia, ...values } = getUserAboutData || {};
    const getSession = Boolean(_id)
    const { handleSubmit, register, formState: { errors }, control, watch, getValues, setValue } = useForm({
        defaultValues: getSession ? { ...socialMedia, ...values } : {},

    })
    function submit(data) {
        if (!data) return
        let isMatching = true;
        if (_id) {
            // 1- structure necessary properties
            let { profilePhoto, ...newData } = data;
            let oldData = { ...values, ...socialMedia }

            // 2- Convert the "specialization" array into a sorted string
            oldData.yearsOfExperience = String(oldData.yearsOfExperience);
            newData.yearsOfExperience = String(newData.yearsOfExperience);

            newData.specializations = newData.specializations.map(item => item.value).sort().join(",")
            oldData.specializations = oldData.specializations.map(item => item.value).sort().join(",")

            // 3- compare data with the server's one and make changes
            newData = Object.values(newData).sort()
            oldData = Object.values(oldData).sort()
            for (const [i, value] of newData.entries()) if (value !== oldData[i] && typeof value === "string") isMatching = false;
        }

        if (!isMatching) {
            const { facebook, instagram, X, ...credValues } = data
            const userData = {
                ...credValues,
                socialMedia: {
                    facebook: facebook,
                    instagram: instagram,
                    X: X,
                }
            }
            updateUserAboutData(userData)
        }
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className="space-y-10 p-4 rounded-md">
                <div className="space-y-4">
                    <h1 className="capitalize text-blue-900 font-bold text-xl">personal information</h1>
                    <PersonalInformationForm
                        watch={watch}
                        errors={errors}
                        setValue={setValue}
                        register={register}
                        getValues={getValues}
                        disabled={isUpdating}
                        profilePhoto={profilePhoto}
                        isLoadingImg={isLoadingImg}
                        setIsLoadingImg={setIsLoadingImg}
                        requiredImgMessage={requiredImgMessage}
                        setRequiredImgMessage={setRequiredImgMessage}
                    />
                </div>

                <div className="space-y-4">
                    <h1 className="capitalize text-blue-900 font-bold text-xl">professional credentials</h1>
                    <ProfessionalCredentialsForm
                        watch={watch}
                        errors={errors}
                        control={control}
                        register={register}
                        disabled={isUpdating}
                    />
                </div>

                <div className="space-y-4">
                    <h1 className="capitalize text-blue-900 font-bold text-xl">Social Media and Contact Links</h1>
                    <div className="space-y-2">
                        <SocialMedia link={{ url: socialMedia?.facebook ?? "", name: 'Facebook', img: '/images/facebook.png' }}
                            watch={watch("facebook")}
                            disabled={isUpdating}
                            register={{ ...register("facebook", { required: false }) }}
                        />
                        <SocialMedia link={{ url: socialMedia?.instagram ?? "", name: 'Instagram', img: '/images/instagram.png' }}
                            watch={watch("instagram")}
                            disabled={isUpdating}
                            register={{ ...register("instagram", { required: false }) }}
                        />
                        <SocialMedia link={{ url: socialMedia?.X ?? "", name: 'Twitter (X)', img: '/images/X.png' }}
                            watch={watch("X")}
                            disabled={isUpdating}
                            register={{ ...register("X", { required: false }) }}
                        />
                    </div>
                </div>
                <div className="flex justify-end items-center">
                    <Button>
                        {
                            isUpdating ?
                                <SpinnerMini />
                                :
                                <p className="flex justify-center font-bold tracking-wide items-center gap-2">
                                    <span>save changes</span>
                                    <span className="text-xl"><HiArrowLongRight /></span>
                                </p>
                        }
                    </Button>
                </div>
            </div>
        </form>
    )
}

export default AboutMeForm
