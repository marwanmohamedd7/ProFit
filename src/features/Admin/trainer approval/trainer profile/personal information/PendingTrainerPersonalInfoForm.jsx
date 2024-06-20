import { useForm } from "react-hook-form";
import Image from "../../../../../ui/Image";
import InputFloatingLabel from "../../../../../ui/InputFloatingLabel";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import ImageViewer from "../../../../../ui/ImageViewer";
import { useDarkMode } from "../../../../../context/DarkModeProvider";
import styles from "../../../../../styles/styles";
import InputTextArea from "../../../../../ui/InputTextArea";
import InputRadiaButtons from "../../../../../ui/InputRadiaButtons";

function PendingTrainerPersonalInfoForm({ getPendingTrainerInfo = {} }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const navigate = useNavigate();
    const { _id, profilePhoto, ...personalInfo } = getPendingTrainerInfo ?? {};
    const isExist = Boolean(_id);
    const { register, formState: { errors }, watch } = useForm({
        defaultValues: isExist ? personalInfo : {}
    });

    useEffect(function () {
        if (!isExist) navigate('/admin/trainer-approval');
    }, [isExist, navigate]);

    return (
        <div className={`flex flex-col gap-4 shadow-sm rounded-md ${isDarkMode ? colors.bg_slate_800 : colors.bg_white}`}>
            <div className="flex flex-col gap-6">
                <ImageViewer imageURL={profilePhoto}>
                    <Image
                        photoType="(profile)"
                        dimensions="w-32 h-32"
                        disabled={true}
                        canUpdate={false}
                        src={profilePhoto || ""}
                    />
                </ImageViewer>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 capitalize">
                <InputFloatingLabel
                    item={{ id: "country", label: "country*", value: watch("country") }}
                    disabled={true}
                    error={errors?.country?.message}
                    register={{
                        ...register("country", {
                            required: 'This field is required',
                        })
                    }}
                />
                <InputFloatingLabel
                    item={{ id: "state", label: "state*", value: watch("state") }}
                    disabled={true}
                    error={errors?.state?.message}
                    register={{
                        ...register("state", {
                            required: 'This field is required',
                        })
                    }}
                />
                <InputFloatingLabel
                    item={{ id: "city", label: "city*", value: watch("city") }}
                    disabled={true}
                    error={errors?.city?.message}
                    register={{
                        ...register("city", {
                            required: 'This field is required',
                        })
                    }}
                />
                <InputFloatingLabel
                    item={{ id: "phoneNumber", label: "phone number*", type: "number", value: watch("phoneNumber") }}
                    disabled={true}
                    error={errors?.phoneNumber?.message}
                    register={{
                        ...register("phoneNumber", {
                            required: 'This field is required',
                            minLength: {
                                value: 11,
                                message: "Phone number must contain at least 11 characters."
                            },
                            validate: (value) =>
                                value.startsWith("010") || value.startsWith("011") || value.startsWith("012") || value.startsWith("015") ||
                                "Phone number should start with (010, 011, 012, 015)"
                        })
                    }}
                />
                <InputFloatingLabel
                    item={{ id: "birthDate", label: "birth date*", type: "date", value: watch("birthDate") }}
                    disabled={true}
                    error={errors?.birthDate?.message}
                    register={{
                        ...register("birthDate", {
                            required: 'This field is required',
                        })
                    }}
                />
            </div>

            <InputTextArea
                disabled={true}
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
                    disabled={true}
                    values={["male", "female"]}
                    errors={errors?.gender?.message}
                    register={{ ...register("gender", { required: 'This field is required' }) }}
                />
            </div>
        </div>
    );
}

export default PendingTrainerPersonalInfoForm;
