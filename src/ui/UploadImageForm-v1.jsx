import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { HiMiniCheckCircle } from "react-icons/hi2";
import { MdOutlineEdit } from "react-icons/md";

function UploadImageForm({
    id,
    error,
    rules,
    control,
    onReset,
    src = null,
    dimentions = "",
    disabled = false,
    photo: photoType,
},
) {
    const [image, setImage] = useState(src); // Default image path
    useEffect(function () {
        setImage((value) => onReset ? null : value)
    }, [onReset])
    return (
        <div>
            <div className={`relative ${dimentions ? dimentions : "w-24"}`}>
                <label
                    htmlFor={id}
                    className="cursor-pointer absolute right-[-7.5%] top-[-7.5%] text-blue-50 p-1 rounded-full bg-blue-700"
                >
                    <MdOutlineEdit />
                </label>
                {typeof image === "string" ?
                    <img className="rounded-md p-2" src={image} alt={id} />
                    :
                    <>
                        {image ?
                            <div
                                className={`rounded-md text-gray-500 text-xs flex flex-col items-center justify-center gap-2 tracking-wide text-center border ${dimentions ? dimentions : "h-24 w-24"
                                    } capitalize`}
                            >
                                <span className="text-blue-700 text-3xl"><HiMiniCheckCircle /></span>
                                <span className="text-blue-700 text-lg font-bold capitalize">uploaded</span>
                            </div>
                            :
                            <div
                                className={`rounded-md text-gray-500 text-xs flex flex-col items-center justify-center gap-2 tracking-wide text-center border ${dimentions ? dimentions : "h-24 w-24"
                                    } capitalize`}
                            >
                                <span>upload</span>
                                <span>{photoType} photo</span>
                            </div>
                        }
                    </>
                }
                <Controller
                    name={id}
                    control={control}
                    rules={rules}
                    render={({ field: { onChange } }) => (
                        <input
                            id={id}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            disabled={disabled}
                            onChange={(e) => {
                                onChange(e.target.files[0]); // Pass the files to React Hook Form
                                setImage(e.target.files[0]);
                            }}
                        />
                    )}
                />
            </div>
            {error && <span className="text-red-700 text-xs">{error}</span>}
        </div>
    );
}

export default UploadImageForm;

// import { useState } from "react";
// import { Controller } from "react-hook-form";
// import { MdOutlineEdit } from "react-icons/md"

// function UploadImage({ id, src = null, error, rules, control, photo: photoType, list = false, dimentions = "" }) {
//     const [imageSrc, setImageSrc] = useState(src); // Default image path

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         console.log(file)
//         if (file && file.type.startsWith('image/')) {
//             const reader = new FileReader();
//             reader.onload = (e) => {
//                 setImageSrc(e.target.result);
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     return (
//         <div>
//             <div className={`relative ${dimentions ? dimentions : "w-24"}`}>
//                 <label htmlFor={id} className="cursor-pointer absolute right-[-7.5%] top-[-7.5%] text-blue-50 p-1 rounded-full bg-blue-700">
//                     <MdOutlineEdit />
//                 </label>
//                 {imageSrc && <img className="rounded-md" src={imageSrc} alt="" />}
//                 {!imageSrc && <div className={`rounded-md text-gray-500 text-xs flex flex-col items-center justify-center gap-2 tracking-wide text-center border ${dimentions ? dimentions : "h-24 w-24"} capitalize`} >
//                     <span>upload</span>
//                     <span>{photoType} photo</span>
//                 </div>}
//                 {/* Your existing code for displaying the image or upload prompt */}
// <Controller
//     name={id}
//     control={control}
//     rules={rules}
//     render={({ field: { onChange, onBlur, value, ref } }) => (
//         <input
//             id={id}
//             type="file"
//             accept="image/*"
//             className="hidden"
//             onBlur={onBlur}
//             onChange={(e) => {
//                 handleFileChange(e);
//                 onChange(e.target.files[0]); // Pass the files to React Hook Form
//             }}
//             ref={ref}
//         />
//     )}
// />
//             </div>
//             {error && !imageSrc && <span className="text-red-700 text-xs">{error}</span>}
//         </div>
//     )
// }

// export default UploadImage
