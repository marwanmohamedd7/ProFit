import { HiArrowLongRight, HiTrash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";
import { Controller, useForm } from "react-hook-form";
import { useGetTransformations } from "./useGetTransformations";
import { useSetProfileCredentials } from "./useSetProfileCredentials";
import Select from "react-select";
import toast from "react-hot-toast";
import SocialMedia from "./SocialMedia";
import Empty from "../../../../../ui/Empty";
import Modal from "../../../../../ui/Modal";
import Button from "../../../../../ui/Button";
import Transformation from "./Transformation";
import AddTransformation from "./AddTransformation";
import SpinnerMini from "../../../../../ui/SpinnerMini";
import InputFloatingLabel from "../../../../../ui/InputFloatingLabel"

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
    const { id, qualificationImgs: imgs, socialMedia, ...values } = getProfessionalCred || {};
    const getSession = Boolean(id)
    const { transformations = [], isLoading: isLoadingTransformations } = useGetTransformations()
    const { register, formState: { errors }, control, handleSubmit, reset } = useForm({
        defaultValues: getSession ? { ...values, ...socialMedia } : {}
    })
    const isLoading = isLoadingTransformations || isLoadingSettingCred

    function onsubmit(data) {
        if (!data) return null
        let isTrue = true;
        if (getProfessionalCred) {
            // 1- structure necessary properties
            let formData = { ...data }
            let userData = { ...values, ...socialMedia }
            // 2- Convert the "specialization" array into a sorted string
            formData.specialization = formData.specialization.map(item => item.value).sort().join(",")
            userData.specialization = userData.specialization.map(item => item.value).sort().join(",")
            // 3- compare data with the server's one and make changes
            formData = Object.values(formData)
            userData = Object.values(userData)
            for (const [i, value] of formData.entries()) if (value !== userData[i]) isTrue = false
        }
        console.log(isTrue)
        if (isTrue) {
            navigate("/complete-profile/subscription-pricing")
        } else {
            const {
                experience,
                specialization,
                x = socialMedia.x,
                facebook = socialMedia.facebook,
                instagram = socialMedia.instagram,
            } = data;

            // get specialization data from user and database and merge them into one array of objects to send the new one the database
            const specializes = values.specialization.length ? [...values.specialization, ...specialization] : specialization;
            // Filter the duplicated specializes
            const uniqueSpecializes = specializes.filter((item, index, self) =>
                index === self.findIndex((t) => (
                    t.value === item.value && t.label === item.label
                ))
            );
            const profileCred = {
                socialMedia: {
                    facebook: facebook,
                    instagram: instagram,
                    x: x,
                },
                experience,
                specialization: uniqueSpecializes,
            }
            setProfessionalCred(profileCred, {
                onSuccess: () => {
                    reset()
                    toast.success("Data saved successfully");
                    navigate("/complete-profile/subscription-pricing")
                }
            })
        }
    }

    function handleImage(file) {
        const image = `${Math.random()}-${file.name}`;
        // get the image from user and imgs from database and merge them into one array
        const qualificationImgs = imgs?.length ? [...imgs, image] : [image]
        setProfessionalCred({ qualificationImgs }, {
            onSuccess: () => {
                toast.success("Image added successfully");
            }
        })
    }

    function handleDeleteImage(img) {
        const newImages = imgs.filter(item => item !== img);
        setProfessionalCred({ qualificationImgs: newImages }, {
            onSuccess: () => {
                toast.success("Image deleted successfully");
            }
        })
    }

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
                                name="specialization"
                                control={control}
                                rules={{ required: 'Specialization field cannot be empty.' }}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        disabled={isLoading}
                                        options={options} // Make sure 'options' is defined somewhere in your component
                                        isMulti
                                        placeholder="specialization"
                                        classNamePrefix="select"
                                    />
                                )}
                            />
                            {errors.specialization && <span className="text-xs text-red-700">{errors.specialization.message}</span>}
                        </div>
                        <div className="flex flex-col justify-end">
                            <InputFloatingLabel item={{ label: "Years of experience*", id: "experience", type: "number" }}
                                disabled={isLoading}
                                register={{ ...register("experience", { required: "experience field cannot be empty." }) }}
                                error={errors?.experience?.message} />
                        </div>
                    </div>

                </section>

                {/* Qualifications and Achievements */}
                <section className="container space-y-4">
                    <h2 className="text-xl text-blue-900 font-bold">Qualifications and Achievements*</h2>
                    <div className="flex flex-wrap items-center gap-3">
                        {imgs?.map((img, index) => (
                            <div key={index} className="relative">
                                <div onClick={() => handleDeleteImage(img)}
                                    className="cursor-pointer absolute right-[-7.5%] top-[-7.5%] text-blue-50 p-1 rounded-full bg-red-700"
                                >
                                    <HiTrash />
                                </div>
                                <img src={img ? "/uifaces-popular-image (1).jpg" : img} alt="achievement" className="w-28 h-28 rounded-md" />
                            </div>
                        ))}
                        <div className="relative">
                            <label
                                htmlFor={"image"}
                                className="cursor-pointer absolute right-[-7.5%] top-[-7.5%] text-blue-50 p-1 rounded-full bg-blue-700"
                            >
                                <MdOutlineEdit />
                            </label>
                            <div
                                className={`rounded-md text-gray-500 text-xs flex flex-col items-center justify-center gap-2 tracking-wide text-center border h-28 w-28 capitalize`}
                            >
                                {isLoadingSettingCred ?
                                    <SpinnerMini />
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
                                id="image"
                                className="hidden"
                                disabled={isLoading}
                                onChange={(e) => handleImage(e.target.files[0])}
                            />
                        </div>
                    </div>
                </section>

                {/* Clients Transformation Photos */}
                <section className="container space-y-4">
                    <h2 className="text-xl text-blue-900 font-bold">Clients Transformation Photos <span className="font-medium text-lg">(optional)</span></h2>
                    {
                        !transformations.length ?
                            <div className="w-1/2">
                                <Empty resource={"transformations"} />
                            </div>
                            :
                            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
                                {transformations.map((transformation, index) => <Transformation transformation={transformation} key={index} />)}
                            </div>
                    }
                    <Modal>
                        <Modal.Window opens="add-new-transformation">
                            <AddTransformation />
                        </Modal.Window>
                        <Modal.Open opens="add-new-transformation">
                            <Button
                                disabled={isLoading}
                                onClick={(e) => e.preventDefault()} type="secondary">
                                <p className="flex justify-center items-center gap-2 capitalize">
                                    <span>add new tranformation</span>
                                    <span className="text-lg">&#43;</span>
                                </p>
                            </Button>
                        </Modal.Open>
                    </Modal>
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
                        <SocialMedia link={{ url: socialMedia?.x ?? "", name: 'Twitter (X)', img: '/images/X.png' }}
                            disabled={isLoading}
                            register={{ ...register("x", { required: false }) }}
                        />
                    </div>
                </section>
            </div >
            <div className="flex justify-between items-center">
                <Button type="secondary" onClick={(e) => {
                    e.preventDefault()
                    navigate("/complete-profile/personal-information")
                }} disabled={isLoading}>back</Button>
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