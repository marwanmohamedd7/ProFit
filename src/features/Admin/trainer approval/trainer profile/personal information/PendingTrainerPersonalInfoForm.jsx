import { useForm } from "react-hook-form"
import Image from "../../../../../ui/Image"
import InputFloatingLabel from "../../../../../ui/InputFloatingLabel"
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import ImageViewer from "../../../../../ui/ImageViewer";

function PendingTrainerPersonalInfoForm({ getPendingTrainerInfo = {} }) {
    const navigate = useNavigate()
    const { _id, profilePhoto, ...personalInfo } = getPendingTrainerInfo ?? {};
    const isExist = Boolean(_id);
    const { register, formState: { errors }, watch, } = useForm({
        defaultValues: isExist ? personalInfo : {}
    })
    useEffect(function () {
        if (!isExist) navigate('/admin/trainer-approval')
    }, [isExist, navigate])
    return (
        <div className="flex flex-col gap-4 shadow-sm bg-white py-1 rounded-md">
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
                <InputFloatingLabel item={{ id: "country", label: "country*", value: watch("country") }}
                    disabled={true}
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
                    disabled={true}
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
                    disabled={true}
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
                    disabled={true}
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
                    disabled={true}
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
                    disabled={true}
                    //  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque quidem, doloribus, laboriosam odit repudiandae sint fugit optio id, itaque necessitatibus hic. Expedita vitae cupiditate fuga distinctio atque, earum quo! ipsum dolor sit amet consectetur adipisicing elit. A beatae atque iure obcaecati officiis, totam earum numquam incidunt amet nam."
                    className="mt-1 disabled:bg-gray-50 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                        disabled={true}
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
                        disabled={true}
                        {...register("gender", { required: 'This field is required' })}
                        type="radio"
                        value="Female"
                        className="form-radio"
                    />
                    <span>Female</span>
                </label>
                {errors?.gender?.message && <span className="text-red-700 text-xs">{errors?.gender?.message}</span>}
            </div>

        </div>
    )
}
export default PendingTrainerPersonalInfoForm

// <div className = "container max-w-7xl mx-auto p-4 sm:p-6 bg-white rounded-md border" >
//     <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>

//         <div className=" grid gap-4">
//             <h1 className="text-blue-900 font-bold text-lg capitalize">personal information</h1>
//             <img className="w-28 h-auto rounded-md" src="/marwan.jpg" alt="" />
//         </div>

//         <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 capitalize">
//             <div className="space-y-1">
//                 <label className="block text-sm font-medium capitalize text-gray-700">first name</label>
//                 <input type="text" placeholder="Ahmed" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//             <div className="space-y-1">
//                 <label className="block text-sm font-medium capitalize text-gray-700">last name</label>
//                 <input type="text" placeholder="Mohamed" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//             <div className="space-y-1">
//                 <label className="block text-sm font-medium capitalize text-gray-700">email</label>
//                 <input type="text" placeholder="Ahmed@gmail.com" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//         </div>

//         <div className=" grid grid-cols-2 w-11/12 sm:w-full sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-6 xl:grid-cols-7  gap-4">
//             <label className="block text-sm col-span-full font-medium capitalize text-gray-700">national ID*</label>
//             <div className="flex gap-1">
//                 <img className="w-auto h-auto rounded-md" src="/uifaces-popular-image (1).jpg" alt="" />
//                 <img className="w-auto h-auto rounded-md" src="/uifaces-popular-image.jpg" alt="" />
//             </div>
//         </div>

//         <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 capitalize">
//             <div className="space-y-1">
//                 <label className="block text-sm font-medium capitalize text-gray-700">national ID*</label>
//                 <input type="text" placeholder="1202125213" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//             <div className="space-y-1">
//                 <label className="block text-sm font-medium capitalize text-gray-700">country*</label>
//                 <input type="text" placeholder="Egypt" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//             <div className="space-y-1">
//                 <label className="block text-sm font-medium capitalize text-gray-700">state*</label>
//                 <input type="text" placeholder="Alexandria" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//             <div className="space-y-1">
//                 <label className="block text-sm font-medium capitalize text-gray-700">city*</label>
//                 <input type="text" placeholder="Miami" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//             <div className="space-y-1">
//                 <label className="block text-sm font-medium capitalize text-gray-700">phone number*</label>
//                 <input type="number" placeholder="01009821081" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//             <div className="space-y-1">
//                 <label className="block text-sm font-medium capitalize text-gray-700">birth date*</label>
//                 <input type="date" placeholder="Miami" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//         </div>

//         <div className="space-y-1">
//             <label className="block text-sm font-medium capitalize text-gray-700">biography*</label>
//             <textarea placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque quidem, doloribus, laboriosam odit repudiandae sint fugit optio id, itaque necessitatibus hic. Expedita vitae cupiditate fuga distinctio atque, earum quo! ipsum dolor sit amet consectetur adipisicing elit. A beatae atque iure obcaecati officiis, totam earum numquam incidunt amet nam." className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//         </div>

//         <div className="flex flex-col gap-2">
//             <label className="text-sm font-medium capitalize text-gray-700 flex items-center gap-2">
//                 <input className="text-blue-900" defaultChecked={true} type="radio" name="myRadio" value="option1" />
//                 <span>Male</span>
//             </label>
//             <label className="text-sm font-medium capitalize text-gray-700 flex items-center gap-2">
//                 <input type="radio" name="myRadio" value="option2" />
//                 <span>Female</span>
//             </label>
//         </div>
//     </form>
// </div >