import { useForm } from "react-hook-form"
import PersonalInformationForm from "../../completeProfile/personalInformation/PersonalInformationForm"
import { useState } from "react"
import { useSetPersonalInfo } from "../../completeProfile/personalInformation/useSetPersonalInfo"
import ProfessionalCredentialsForm from "../../completeProfile/professionalCredentials/ProfessionalCredentialsForm"
import SocialMedia from "../../completeProfile/professionalCredentials/SocialMedia"
import Button from "../../../../ui/Button"
import { HiArrowLongRight } from "react-icons/hi2"

function AboutMeForm({ getPersonalInfo = {}, getProfessionalCred = {} }) {
    const [isLoadingImg, setIsLoadingImg] = useState(false)
    const [requiredImgMessage, setRequiredImgMessage] = useState("")
    const { _id: personalInfoId, profilePhoto, ...PersonalInfo } = getPersonalInfo || {};
    const { _id: professionalCredId, socialMedia, ...values } = getProfessionalCred || {};
    const getSession = Boolean(personalInfoId && professionalCredId)
    const { handleSubmit, register, formState: { errors }, control, watch, getValues, setValue } = useForm({
        defaultValues: getSession ? { ...PersonalInfo, ...socialMedia, ...values } : {},

    })
    function submit(data) {
        if (!data) return
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className="space-y-10 my-4 bg-white p-4 rounded-md">
                <div className="space-y-4">
                    <h1 className="capitalize text-blue-900 font-bold text-xl">personal information</h1>
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
                </div>

                <div className="space-y-4">
                    <h1 className="capitalize text-blue-900 font-bold text-xl">professional credentials</h1>
                    <ProfessionalCredentialsForm
                        watch={watch}
                        errors={errors}
                        control={control}
                        register={register}
                        disabled={false}
                    />
                </div>

                <div className="space-y-4">
                    <h1 className="capitalize text-blue-900 font-bold text-xl">Social Media and Contact Links</h1>
                    <div className="space-y-2">
                        <SocialMedia link={{ url: socialMedia?.facebook ?? "", name: 'Facebook', img: '/images/facebook.png' }}
                            watch={watch("facebook")}
                            disabled={false}
                            register={{ ...register("facebook", { required: false }) }}
                        />
                        <SocialMedia link={{ url: socialMedia?.instagram ?? "", name: 'Instagram', img: '/images/instagram.png' }}
                            watch={watch("instagram")}
                            disabled={false}
                            register={{ ...register("instagram", { required: false }) }}
                        />
                        <SocialMedia link={{ url: socialMedia?.X ?? "", name: 'Twitter (X)', img: '/images/X.png' }}
                            watch={watch("X")}
                            disabled={false}
                            register={{ ...register("X", { required: false }) }}
                        />
                    </div>
                </div>
                <div className="flex justify-end items-center">
                    <Button>
                        <p className="flex justify-center font-bold tracking-wide items-center gap-2">
                            <span>save changes</span>
                            <span className="text-xl"><HiArrowLongRight /></span>
                        </p>
                    </Button>
                </div>
            </div>
        </form>
    )
}

export default AboutMeForm
