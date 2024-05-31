import { HiTrash } from "react-icons/hi2"
import { useDeleteQualification } from "./useDeleteQualification"
import Modal from "../../../../../ui/Modal";
import ConfirmDelete from "../../../../../ui/ConfirmDelete";
import ImageViewer from "../../../../../ui/ImageViewer";

function QualificationAndAchievementPhoto({ img }) {
    const { _id, photo } = img ?? {}
    const { deleteQualification, isLoading: isDeletingQualification } = useDeleteQualification()
    function handleDeleteImage() {
        if (!_id) return;
        deleteQualification(_id)
    }
    return (
        <div className="relative">
            <Modal>
                <Modal.Open opens="delete-food">
                    <button onClick={handleDeleteImage}
                        className="cursor-pointer absolute right-[-7.5%] top-[-7.5%] text-blue-50 p-1 rounded-full bg-red-700"
                    >
                        <HiTrash />
                    </button>

                </Modal.Open>
                <Modal.Window opens="delete-food">
                    <ConfirmDelete isLoading={isDeletingQualification} onConfirm={handleDeleteImage} resourceName="photo" />
                </Modal.Window>
            </Modal>
            <ImageViewer imageURL={photo} imageStyle="w-28 h-28 rounded-md cursor-pointer">
                <img src={photo} alt="achievement" className="w-28 h-28 rounded-md cursor-pointer" />
            </ImageViewer>
        </div>
    )
}

export default QualificationAndAchievementPhoto
