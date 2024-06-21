import { HiTrash } from "react-icons/hi2";
import { useDeleteQualification } from "./useDeleteQualification";
import Modal from "../../../../../ui/Modal";
import ConfirmDelete from "../../../../../ui/ConfirmDelete";
import ImageViewer from "../../../../../ui/ImageViewer";
import { useDarkMode } from "../../../../../context/DarkModeProvider";

function QualificationAndAchievementPhoto({ img }) {
    const { isDarkMode } = useDarkMode();
    const iconStyle = isDarkMode ? `text-red-400 hover:bg-red-800 bg-red-900` : `text-red-50 hover:bg-red-600 bg-red-700`;
    const { _id, photo } = img ?? {};
    const { deleteQualification, isLoading: isDeletingQualification } = useDeleteQualification();

    function handleDeleteImage() {
        if (!_id) return;
        deleteQualification(_id);
    }

    return (
        <div className="relative">
            <Modal>
                <Modal.Open opens="delete-food">
                    <button onClick={handleDeleteImage}
                        className={`cursor-pointer absolute right-[-12.5%] top-[-10%] p-1.5 rounded-full ${iconStyle}`}
                    >
                        <HiTrash />
                    </button>
                </Modal.Open>
                <Modal.Window opens="delete-food">
                    <ConfirmDelete isLoading={isDeletingQualification} onConfirm={handleDeleteImage} resourceName="photo" />
                </Modal.Window>
            </Modal>
            <ImageViewer imageURL={photo} imageStyle="w-32 h-32 rounded-md cursor-pointer">
                <img src={photo} alt="achievement" className="w-32 h-32 rounded-md cursor-pointer" />
            </ImageViewer>
        </div>
    );
}

export default QualificationAndAchievementPhoto;
