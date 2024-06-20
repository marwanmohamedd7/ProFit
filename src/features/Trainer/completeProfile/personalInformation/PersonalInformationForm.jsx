import { useSetPersonalInfo } from "./useSetPersonalInfo";
import toast from "react-hot-toast";
import Image from "../../../../ui/Image";
import InputFloatingLabel from "../../../../ui/InputFloatingLabel"
import InputTextArea from "../../../../ui/InputTextArea";
import InputRadiaButtons from "../../../../ui/InputRadiaButtons";
// import ImageViewer from "../../../../ui/ImageViewer";

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

    function validateAge(value) {
        const today = new Date();
        const birthDate = new Date(value);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) age--;
        return age >= 12 || "You must be at least 12 years old.";
    }

    return (
        <>
            <div className="flex flex-col gap-6">
                {/* <ImageViewer imageURL={profilePhoto}> */}
                <Image
                    minDimension={150}
                    photoType="(profile)"
                    dimensions="w-32 h-32"
                    error={requiredImgMessage}
                    onCropComplete={onCropComplete}
                    isLoading={isLoading && isLoadingImg}
                    src={profilePhoto || getValues()?.profilePhoto}
                />
                {/* </ImageViewer> */}
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
                                maxLength: {
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
                                validate: validateAge
                            })
                        }
                    }
                />
            </div>

            <InputTextArea
                disabled={isLoading}
                placeholder="Description..."
                register={{
                    ...register("biography", {
                        // required: false,
                        required: "This field is required",
                    })
                }}
                errors={errors?.biography?.message}
            />

            <div className="flex flex-col gap-2">
                <InputRadiaButtons
                    disabled={isLoading}
                    values={["male", "female"]}
                    errors={errors?.gender?.message}
                    register={{ ...register("gender", { required: 'This field is required' }) }}
                />
            </div>

        </>
    )
}
export default PersonalInformationForm
