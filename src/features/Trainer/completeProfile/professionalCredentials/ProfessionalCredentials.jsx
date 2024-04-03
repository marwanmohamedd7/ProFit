import { useNavigate } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import { useSetProfileCredentials } from "./useSetProfileCredentials";
import SocialMedia from "./SocialMedia";
import Transformations from "../../portfolio/gallery/transformations/Transformations";
import QualificationAndAchievement from "../../portfolio/gallery/qualifications/QualificationAndAchievement";
import Button from "../../../../ui/Button";
import SpinnerMini from "../../../../ui/SpinnerMini";
import ProfessionalCredentialsForm from "./ProfessionalCredentialsForm";
import { useForm } from "react-hook-form";


function ProfessionalCredentials({ getProfessionalCred = {} }) {
    const navigate = useNavigate()
    const { setProfessionalCred, isLoading: isLoadingSettingCred } = useSetProfileCredentials()
    const { _id, socialMedia, ...values } = getProfessionalCred || {};
    const getSession = Boolean(_id)
    const { register, formState: { errors }, control, handleSubmit, watch, reset } = useForm({
        defaultValues: getSession ? { ...values, ...socialMedia } : {}
    })
    const isLoading = isLoadingSettingCred;

    function onsubmit(data) {
        if (!data) return null
        let isMatching = true;
        if (getProfessionalCred) {
            // 1- structure necessary properties
            let newData = { ...data }
            let oldData = { ...values, ...socialMedia }

            // 2- Convert the "specialization" array into a sorted string
            newData.specializations = newData.specializations.map(item => item.value).sort().join(",")
            oldData.specializations = oldData.specializations.map(item => item.value).sort().join(",")

            // 3- compare data with the server's one and make changes
            newData = Object.values(newData)
            oldData = Object.values(oldData)
            for (const [i, value] of newData.entries()) if (value !== oldData[i] && typeof value === "string") isMatching = false;
        }
        if (isMatching) navigate("/complete-profile/subscription-pricing", { replace: true })
        else {
            const { facebook, instagram, X, ...credValues } = data
            const credData = {
                ...credValues,
                socialMedia: {
                    facebook: facebook,
                    instagram: instagram,
                    X: X,
                }
            }
            setProfessionalCred(credData, {
                onSuccess: () => {
                    reset()
                    navigate("/complete-profile/subscription-pricing", { replace: true })
                }
            })
        }
    }

    return (
        <form className="space-y-8" onSubmit={handleSubmit(onsubmit)}>
            <div className="space-y-6">
                {/* Professional Credentials */}
                <section className="container flex flex-col gap-6">
                    <h1 className="text-blue-900 font-bold text-xl capitalize">Professional Credentials</h1>
                    <ProfessionalCredentialsForm
                        watch={watch}
                        errors={errors}
                        control={control}
                        register={register}
                        disabled={isLoading}
                    />
                </section>

                {/* Qualifications and Achievements */}
                <section className="container space-y-4">
                    <h2 className="text-xl text-blue-900 font-bold">Qualifications and Achievements*</h2>
                    <QualificationAndAchievement />
                </section>

                {/* Clients Transformation Photos */}
                <section className="container space-y-4">
                    <h2 className="text-xl text-blue-900 font-bold">Clients Transformation Photos <span className="font-medium text-lg">(optional)</span></h2>
                    <Transformations />
                </section>

                {/* Social Media and Contact Links */}
                <section className="container space-y-4">
                    <h2 className="text-xl text-blue-900 font-bold">Social Media and Contact Links</h2>
                    <div className="space-y-2">
                        <SocialMedia link={{ url: socialMedia?.facebook ?? "", name: 'Facebook', img: '/images/facebook.png' }}
                            watch={watch("facebook")}
                            disabled={isLoading}
                            register={{ ...register("facebook", { required: false }) }}
                        />
                        <SocialMedia link={{ url: socialMedia?.instagram ?? "", name: 'Instagram', img: '/images/instagram.png' }}
                            watch={watch("instagram")}
                            disabled={isLoading}
                            register={{ ...register("instagram", { required: false }) }}
                        />
                        <SocialMedia link={{ url: socialMedia?.X ?? "", name: 'Twitter (X)', img: '/images/X.png' }}
                            watch={watch("X")}
                            disabled={isLoading}
                            register={{ ...register("X", { required: false }) }}
                        />
                    </div>
                </section>
            </div >

            <div className="flex justify-between items-center">
                <Button disabled={isLoading} type="secondary" onClick={(e) => {
                    e.preventDefault()
                    navigate("/complete-profile/personal-information", { replace: true })
                }}>back</Button>
                <Button disabled={isLoading}>{isLoading ? <SpinnerMini /> :
                    <p className="flex justify-center font-bold tracking-wide items-center gap-2">
                        <span>next page</span>
                        <span className="text-xl"><HiArrowLongRight /></span>
                    </p>
                }</Button>
            </div>
        </form >
    )
}

export default ProfessionalCredentials




// const [tags, setTags] = useState(['weight loss', 'muscle gain', 'fitness']);
// const [inputValue, setInputValue] = useState('');
// const removeTag = (index) => {
//     setTags(tags.filter((_, i) => i !== index));
// };
// const addTag = (e) => {
//     if (e.key === 'Enter' && e.target.value) {
//         setTags([...tags, e.target.value]);
//         setInputValue('');
//     }
// };


// // get specialization data from user and database and merge them into one array of objects to send the new one the database
// // const specializes = values.specializations.length ? [...values.specializations, ...specializations] : specializations;
// const specializes = specializations;

// // Filter the duplicated specializes
// const uniqueSpecializes = specializes.filter((item, index, self) =>
//     index === self.findIndex((t) => (
//         t.value === item.value && t.label === item.label
//     ))
// );

// const profileCred = {
//     socialMedia: {
//         facebook: facebook,
//         instagram: instagram,
//         X: X,
//     },
//     yearsOfExperience,
//     specializations: uniqueSpecializes,
// }