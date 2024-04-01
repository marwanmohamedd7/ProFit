import { MdOutlineEdit } from "react-icons/md"
import Modal from "./Modal"
import SpinnerMini from "./SpinnerMini"
import ImageCropper from "./ImageCropper"

function Image({ id, error, src, dimensions = "w-24 h-24", minDimension, photoType, disabled, onCropComplete, register }) {
    return (
        <Modal>
            <Modal.Open opens="upload image">
                <div className={`relative ${dimensions} mb-4`}>
                    <button
                        className="cursor-pointer absolute right-[-6%] top-[-6%] text-blue-50 p-1 rounded-full bg-blue-700"
                    >
                        <MdOutlineEdit />
                    </button>
                    {typeof src === "string" && !disabled ?
                        <div className="w-full h-full">
                            <img className="rounded-md w-full h-full" src={src} alt={id} />
                        </div>
                        :
                        <div
                            className={`rounded-md text-gray-500 text-xs flex flex-col items-center justify-center gap-2 tracking-wide text-center border ${dimensions} capitalize`}
                        >
                            {disabled ? <SpinnerMini /> :
                                <>
                                    <span>upload</span>
                                    <span>{photoType} photo</span>

                                </>
                            }
                        </div>
                    }
                    {error && <span className="text-red-700 text-xs">{error}</span>}
                </div>
            </Modal.Open>
            <Modal.Window opens="upload image">
                <ImageCropper register={register} minDimension={minDimension} onCropComplete={onCropComplete} />
            </Modal.Window>
        </Modal>
    )
}

export default Image
