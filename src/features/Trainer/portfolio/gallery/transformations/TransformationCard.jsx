import { HiPencil, HiTrash } from "react-icons/hi2";
import { useDeleteTransformation } from "./useDeleteTransformation";
import Modal from "../../../../../ui/Modal";
import Button from "../../../../../ui/Button";
import AddTransformation from "./AddTransformation";
import ConfirmDelete from "../../../../../ui/ConfirmDelete";
import ImageViewer from "../../../../../ui/ImageViewer";
import { useDarkMode } from "../../../../../context/DarkModeProvider";
import styles from "../../../../../styles/styles";

function TransformationCard({ transformation }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const { beforeImage, afterImage, title, description } = transformation ?? {};
    const { deleteTransformation, isDeleting } = useDeleteTransformation();

    function onDelete(e, id) {
        e.preventDefault();
        if (!id) return;
        deleteTransformation(id);
    }

    function renderUpdateButton() {
        return (
            <Modal>
                <Modal.Open opens="update-transformation">
                    <Button type="icon-update" disabled={isDeleting}>
                        <HiPencil />
                    </Button>
                </Modal.Open>
                <Modal.Window opens="update-transformation">
                    <AddTransformation transformationToUpdate={transformation} />
                </Modal.Window>
            </Modal>
        );
    }

    function renderDeleteButton() {
        return (
            <Modal>
                <Modal.Open opens="delete-transformation">
                    <Button type="icon-delete" disabled={isDeleting}>
                        <HiTrash />
                    </Button>
                </Modal.Open>
                <Modal.Window opens="delete-transformation">
                    <ConfirmDelete isLoading={isDeleting} onConfirm={(e) => onDelete(e, transformation._id)} resourceName="transformation" />
                </Modal.Window>
            </Modal>
        );
    }

    return (
        <div className={`rounded-lg p-4 space-y-2 border grid grid-rows-[auto_1fr] ${isDarkMode ? `${colors.bg_slate_700} ${colors.text_white} ${colors.border_gray_700}` : `${colors.bg_gray_50} ${colors.text_gray_700} ${colors.border_gray_200}`}`}>
            <div className="flex items-center justify-center gap-2">
                {/* <ImageViewer imageStyle={`w-56 h-56 rounded-md cursor-pointer`} imageURL={[afterImage, beforeImage]} />  */}
                <ImageViewer imageStyle={`rounded-md cursor-pointer`} imageURL={[afterImage, beforeImage]} /> { /* going to remove this (w-56 h-56) as the image isn't working anymore, so let dynamic width/height for better view */}
            </div>


            <div className="flex flex-col justify-center gap-4">
                <div className="flex flex-col gap-1 p-1 h-full">
                    <h4 className="text-lg font-bold capitalize">{title || 'Transformation Title'}</h4>
                    <p className={`text-sm ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>
                        {description || 'No description available.'}
                    </p>
                </div>
                <div className="flex items-center justify-end gap-2">
                    {renderUpdateButton()}
                    {renderDeleteButton()}
                </div>
            </div>
        </div>
    );
}

export default TransformationCard;
