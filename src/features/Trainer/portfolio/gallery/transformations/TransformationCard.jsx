import { HiPencil, HiTrash } from "react-icons/hi2"
import { useDeleteTransformation } from "./useDeleteTransformation"
import Modal from "../../../../../ui/Modal"
import Button from "../../../../../ui/Button"
import AddTransformation from "./AddTransformation"
import ConfirmDelete from "../../../../../ui/ConfirmDelete"

function TransformationCard({ transformation }) {
    const { deleteTransformation, isDeleting } = useDeleteTransformation()
    function onDelete(e, id) {
        e.preventDefault()
        if (!id) return
        deleteTransformation(id);
    }

    return (
        <div className="grid grid-rows-[14rem_auto] gap-2 p-2 shadow rounded-lg">
            <div className="flex items-center justify-center gap-2">
                <div className="w-full h-full">
                    <img src={transformation.beforeImage} alt="Before" className="w-full h-full rounded-md" />
                </div>
                <div className="w-full h-full">
                    <img src={transformation.afterImage} alt="After" className="w-full h-full rounded-md" />
                </div>
                {/* <img src={transformation.beforeImage} alt="Before" className="w-[49%] rounded-md" /> */}
                {/* <img src={transformation.afterImage} alt="After" className="w-[49%] rounded-md" /> */}
            </div>
            <div className="flex flex-col justify-between gap-4 h-full">
                <div className="flex flex-col gap-1 p-1">
                    <h4 className="text-lg text-blue-700 font-bold capitalize">{transformation.title}</h4>
                    <p className="text-sm text-gray-500">
                        {transformation.description}
                    </p>
                </div>
                <div className="flex items-center justify-end gap-2">
                    <Modal>
                        <Modal.Open opens="update-transformation">
                            <Button type="icon-update"
                                disabled={isDeleting}
                            >
                                <HiPencil />
                            </Button>
                        </Modal.Open>
                        <Modal.Window opens="update-transformation">
                            <AddTransformation transformationToUpdate={transformation} />
                        </Modal.Window>
                    </Modal>

                    <Modal>
                        <Modal.Open opens="delete-food">
                            <Button type="icon-delete"
                            >
                                <HiTrash />
                            </Button>
                        </Modal.Open>
                        <Modal.Window opens="delete-food">
                            <ConfirmDelete isLoading={isDeleting} onConfirm={(e) => onDelete(e, transformation._id)} resourceName="transformation" />
                        </Modal.Window>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default TransformationCard
