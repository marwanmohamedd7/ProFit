import { useState } from "react";
import { Controller } from "react-hook-form";
import { HiMiniCheckCircle } from "react-icons/hi2";
import { MdOutlineEdit } from "react-icons/md";
import { useDarkMode } from "../context/DarkModeProvider";
import styles from "../styles/styles";
import ImageViewer from "./ImageViewer";


function UploadImageForm({
    id,
    error,
    rules,
    control,
    src = null,
    dimentions = "h-28 w-28",
    disabled = false,
    photo: photoType,
}) {
    const [image, setImage] = useState(src); // Default image path
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    return (
        <div className="space-y-1">
            <div className={`relative ${dimentions} ${isDarkMode && colors.border_gray_700}`}>
                <label
                    htmlFor={id}
                    className={`absolute right-[-5%] top-[-5%] p-1 rounded-full  ${isDarkMode ? `text-blue-400 ${disabled ? `cursor-not-allowed` : `hover:bg-blue-800 cursor-pointer `} bg-blue-900` : `text-blue-50 ${disabled ? `cursor-not-allowed` : `hover:bg-blue-600 cursor-pointer `} bg-blue-700`}`}
                >
                    <MdOutlineEdit />
                </label>
                {typeof image === "string" ?
                    <div className="w-full h-full">
                        <ImageViewer imageURL={image}>
                            <img className="w-full h-full rounded" src={image} alt={id} />
                        </ImageViewer>
                    </div>
                    :
                    <>
                        {image ?
                            <div
                                className={`rounded-md text-xs flex flex-col items-center justify-center gap-2 tracking-wide text-center border ${dimentions} capitalize ${isDarkMode ? `${colors.text_gray_400} ${colors.bg_slate_700} ${colors.border_gray_700}` : `${colors.text_gray_500} ${colors.bg_gray_100}`}`}
                            >
                                <span className={`text-3xl ${isDarkMode ? colors.text_gray_100 : colors.text_gray_700}`}><HiMiniCheckCircle /></span>
                                <span className={`text-lg font-bold capitalize ${isDarkMode ? colors.text_gray_100 : colors.text_gray_700}`}>uploaded</span>
                            </div>
                            :
                            <div
                                className={`rounded-md text-xs flex flex-col items-center justify-center gap-2 tracking-wide text-center border ${dimentions} capitalize ${isDarkMode ? `${colors.text_gray_400} ${colors.bg_slate_700} ${colors.border_gray_700}` : `${colors.text_gray_500} ${colors.bg_gray_100}`}`}
                            >
                                <span className={`${isDarkMode ? colors.text_gray_300 : colors.text_gray_500}`}>upload</span>
                                <span className={`${isDarkMode ? colors.text_gray_300 : colors.text_gray_500}`}>{photoType} photo</span>
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
