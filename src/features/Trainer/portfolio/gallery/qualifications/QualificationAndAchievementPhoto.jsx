import { HiTrash } from "react-icons/hi2"
import { useDeleteQualification } from "./useDeleteQualification"
import Modal from "../../../../../ui/Modal";
import ConfirmDelete from "../../../../../ui/ConfirmDelete";

function QualificationAndAchievementPhoto({ img }) {
    const { deleteQualification, isLoading: isDeletingQualification } = useDeleteQualification()
    function handleDeleteImage() {
        if (!img?._id) return;
        deleteQualification(img._id)
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
            <img src={img.photo.replace("http://localhost:4000/uploads/", "")} alt="achievement" className="w-28 h-28 rounded-md" />
        </div>
    )
}

export default QualificationAndAchievementPhoto
