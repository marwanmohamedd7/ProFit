import { useNavigate } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import { Controller, useForm } from "react-hook-form";
import { useSetProfileCredentials } from "./useSetProfileCredentials";
import Select from "react-select";
import SocialMedia from "./SocialMedia";
import Button from "../../../../../ui/Button";
import Transformations from "./Transformations";
import SpinnerMini from "../../../../../ui/SpinnerMini";
import InputFloatingLabel from "../../../../../ui/InputFloatingLabel"
import QualificationAndAchievement from "./QualificationAndAchievement"

const options = [
    { value: "weight_loss", label: "Weight Loss" },
    { value: "muscle_gain", label: "Muscle Gain" },
    { value: "body_building", label: "Body Building" },
    { value: "power_lifting", label: "Power Lifting" },
    { value: "crossfit", label: "Crossfit" },
    { value: "nutrition", label: "Nutrition" },
    { value: "body_lifting", label: "Body Lifting" },
];

function ProfessionalCredentialsForm({ getProfessionalCred = {} }) {
    const navigate = useNavigate()
    const { setProfessionalCred, isLoading: isLoadingSettingCred } = useSetProfileCredentials()
    const { _id, socialMedia, qualificationsAndAchievements, ...values } = getProfessionalCred || {};
    const getSession = Boolean(_id)
    const { register, formState: { errors }, control, handleSubmit,watch, reset } = useForm({
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
        if (isMatching) navigate("/complete-profile/subscription-pricing")
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
                    navigate("/complete-profile/subscription-pricing")
                }
            })
        }
    }

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            border: '1px solid #ccc', // Adjust the border color to match your theme
            padding: '2px',   // Increase padding
            boxShadow: 'none', // Remove boxShadow
            borderRadius: "8px",
            '&:hover': { borderColor: '#aaa' }, // Adjust hover state
        }),
        placeholder: (provided, state) => ({
            ...provided,
            color: '#666', // Placeholder text color
        }),
        multiValue: (provided, state) => ({
            ...provided,
            backgroundColor: '#e9e9e9', // Background of selected values
        }),
        multiValueLabel: (provided, state) => ({
            ...provided,
            color: '#333', // Text color of selected values
        }),
        multiValueRemove: (provided, state) => ({
            ...provided,
            '&:hover': {
                backgroundColor: '#c23b22', // Background of the remove icon on hover
                color: 'white', // Color of the remove icon on hover
            },
        }),
    };

    return (
        <form className="space-y-8" onSubmit={handleSubmit(onsubmit)}>
            <div className="space-y-6">
                {/* Professional Credentials */}
                <section className="container flex flex-col gap-6">
                    <h1 className="text-blue-900 font-bold text-lg capitalize">Professional Credentials</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* <div className="flex flex-col gap-2">
                            <label htmlFor="tag-input" className="block text-sm font-medium text-gray-700">Specialization*</label>
                            <div className="flex flex-wrap gap-1 bg-gray-50 items-center border rounded-md p-1">
                                {tags.map((tag, index) => (
                                    <div className="flex items-center gap-2 bg-gray-200 rounded px-2 py-1" key={index}>
                                        <span>{tag}</span>
                                        <Button type="remove" onClick={() => removeTag(index)}>&times;</Button>
                                    </div>
                                ))}
                                <input
                                    type="text"
                                    id="tag-input"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyUp={addTag}
                                    className="flex-1 outline-none bg-gray-50"
                                    disabled={true}
                                    placeholder=""
                                />
                            </div>
                        </div> */}
                        <div className="relative">
                            <Controller
                                name="specializations"
                                control={control}
                                rules={{ required: 'specializations field cannot be empty.' }}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        disabled={isLoading}
                                        options={options} // Make sure 'options' is defined somewhere in your component
                                        isMulti
                                        placeholder="specializations"
                                        classNamePrefix="select"
                                        styles={customStyles}
                                    />
                                )}
                            />
                            {errors.specializations && <span className="text-xs text-red-700">{errors.specializations.message}</span>}
                        </div>
                        <div className="flex flex-col justify-end">
                            <InputFloatingLabel item={{ label: "Years of Experience*", id: "yearsOfExperience", type: "number", value: watch("yearsOfExperience") }}
                                disabled={isLoading}
                                register={{ ...register("yearsOfExperience", { required: "Experience field cannot be empty." }) }}
                                error={errors?.yearsOfExperience?.message} />
                        </div>
                    </div>

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
                            disabled={isLoading}
                            register={{ ...register("facebook", { required: false }) }}
                        />
                        <SocialMedia link={{ url: socialMedia?.instagram ?? "", name: 'Instagram', img: '/images/instagram.png' }}
                            disabled={isLoading}
                            register={{ ...register("instagram", { required: false }) }}
                        />
                        <SocialMedia link={{ url: socialMedia?.X ?? "", name: 'Twitter (X)', img: '/images/X.png' }}
                            disabled={isLoading}
                            register={{ ...register("X", { required: false }) }}
                        />
                    </div>
                </section>
            </div >

            <div className="flex justify-between items-center">
                <Button disabled={isLoading} type="secondary" onClick={(e) => {
                    e.preventDefault()
                    navigate("/complete-profile/personal-information")
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

export default ProfessionalCredentialsForm




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