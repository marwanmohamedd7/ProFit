import { MdOutlineEdit } from "react-icons/md";
import SpinnerMini from "./SpinnerMini";
// import { HiMiniCheckCircle } from "react-icons/hi2";

function UploadImage({
    id,
    error,
    onChange,
    src = null,
    dimentions = "w-24 h-24",
    disabled = false,
    photo: photoType,
},
) {
    return (
        <div>
            <div className={`relative ${dimentions} rounded-full`}>
                <label
                    htmlFor={id}
                    className="cursor-pointer absolute right-[-7%] top-[-5%] text-blue-50 p-1 rounded-full bg-blue-700"
                >
                    <MdOutlineEdit />
                </label>
                {typeof src === "string" && !disabled ?
                    <div className="w-full h-full">
                        <img className="rounded-md w-full h-full" src={src} alt={id} />
                    </div>
                    :
                    <div
                        className={`rounded-md text-gray-500 text-xs flex flex-col items-center justify-center gap-2 tracking-wide text-center border ${dimentions} capitalize`}
                    >
                        {disabled ? <SpinnerMini /> :
                            <>
                                <span>upload</span>
                                <span>{photoType} photo</span>

                            </>
                        }
                    </div>
                }
                <input
                    id={id}
                    type="file"
                    className="hidden"
                    accept="image/*"
                    disabled={disabled}
                    onChange={onChange}
                />
            </div>
            {error && <span className="text-red-700 text-xs">{error}</span>}
        </div>
    );
}

export default UploadImage;