import Modal from "./Modal"
import SpinnerMini from "./SpinnerMini"
import ImageCropper from "./ImageCropper"
import { MdOutlineEdit } from "react-icons/md"
import { useDarkMode } from "../context/DarkModeProvider";

function Image({ id, error, src, isLoading, canUpdate = true, dimensions = "w-24 h-24", minDimension = 150, photoType, disabled = false, onCropComplete }) {
    const { isDarkMode } = useDarkMode();
    return (
        <Modal>
            <div className={`relative ${dimensions} mb-2.5 cursor-pointer`}>
                {
                    !canUpdate ?
                        <>
                            {
                                typeof src === "string" && !isLoading ?
                                    <div className="w-full h-full">
                                        <img className="rounded-md w-full h-full" src={src} alt={id} />
                                    </div>
                                    :
                                    <div
                                        className={`rounded-md text-xs flex flex-col items-center justify-center gap-2 tracking-wide text-center border ${isDarkMode ? ` text-gray-400 border-gray-700` : ` text-gray-500`} ${dimensions} capitalize`}
                                    >
                                        {isLoading ? <SpinnerMini /> :
                                            <p className="text-sm flex flex-col gap-1">
                                                <strong className="text-base">Trainer</strong>
                                                <span>{photoType} photo</span>
                                            </p>
                                        }
                                    </div>
                            }
                        </>
                        :
                        <>
                            <Modal.Open opens="upload image">
                                <button disabled={disabled || isLoading}
                                    className="cursor-pointer absolute right-[-6%] top-[-6%] text-blue-50 p-1 rounded-full bg-blue-700"
                                >
                                    <MdOutlineEdit />
                                </button>
                            </Modal.Open>
                            {
                                typeof src === "string" && !isLoading ?
                                    <div className="w-full h-full">
                                        <img className="rounded-md w-full h-full" src={src} alt={id} />
                                    </div>
                                    :
                                    <div
                                        className={`rounded-md text-xs flex flex-col items-center justify-center gap-2 tracking-wide text-center border ${isDarkMode ? ` text-gray-400 border-gray-700 bg-slate-800` : ` text-gray-500`} ${dimensions} capitalize`}
                                    >
                                        {isLoading ? <SpinnerMini /> :
                                            <>
                                                <span>upload</span>
                                                <span>{photoType} photo</span>
                                            </>
                                        }
                                    </div>
                            }
                            {error && <span className={`${isDarkMode ? "text-red-500" :"text-red-700"} text-xs`}>{error}</span>}
                        </>
                }
            </div>
            <Modal.Window opens="upload image" outsideCloseClick={false}>
                <ImageCropper minDimension={minDimension} onCropComplete={onCropComplete} />
            </Modal.Window>
        </Modal>
    )
}

export default Image
