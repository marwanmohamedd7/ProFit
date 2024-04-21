import { useState } from "react";
import { Controller } from "react-hook-form";
import { HiMiniCheckCircle } from "react-icons/hi2";
import { MdOutlineEdit } from "react-icons/md";

function UploadImageForm({
    id,
    error,
    rules,
    control,
    src = null,
    dimentions = "h-28 w-28",
    disabled = false,
    photo: photoType,
},
) {
    const [image, setImage] = useState(src); // Default image path
    return (
        <div className="space-y-1">
            <div className={`relative ${dimentions}`}>
                <label
                    htmlFor={id}
                    className={`cursor-pointer absolute right-[-5%] top-[-5%] text-blue-50 p-1 rounded-full bg-blue-700`}
                >
                    <MdOutlineEdit />
                </label>
                {typeof image === "string" ?
                    <div className="w-full h-full">
                        <img className="w-full h-full rounded" src={image} alt={id} />
                    </div>
                    :
                    <>
                        {image ?
                            <div
                                className={`rounded-md text-gray-500 text-xs flex flex-col items-center justify-center gap-2 tracking-wide text-center border ${dimentions} capitalize`}
                            >
                                <span className="text-blue-700 text-3xl"><HiMiniCheckCircle /></span>
                                <span className="text-blue-700 text-lg font-bold capitalize">uploaded</span>
                            </div>
                            :
                            <div
                                className={`rounded-md text-gray-500 text-xs flex flex-col items-center justify-center gap-2 tracking-wide text-center border ${dimentions} capitalize`}
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
            {error && <div className="text-red-700 text-xs">{error}</div>}
        </div>
    );
}

export default UploadImageForm;