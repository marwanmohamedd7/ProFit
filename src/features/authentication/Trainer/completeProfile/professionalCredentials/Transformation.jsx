import { HiPencil, HiTrash } from "react-icons/hi2"
import Button from "../../../../../ui/Button"
import { useDeleteTransformation } from "./useDeleteTransformation"
import SpinnerMini from "../../../../../ui/SpinnerMini"
import Modal from "../../../../../ui/Modal"
import AddTransformation from "./AddTransformation"

function Transformation({ transformation }) {
    const { deleteTransformation, isDeleting } = useDeleteTransformation()
    function onDelete(e, id) {
        e.preventDefault()
        if (!id) return
        deleteTransformation(id);
    }
    return (
        <div className="flex flex-col justify-between gap-2 p-2 shadow rounded-lg bg-gray-50">
            <div className="flex items-center justify-center gap-2">
                <img src={"/uifaces-popular-image (1).jpg"} alt="Before" className="w-[49%] rounded-md" />
                <img src={"/uifaces-popular-image.jpg"} alt="After" className="w-[49%] rounded-md" />
            </div>
            <div className="flex flex-col justify-between gap-4 h-full">
                <div className="flex flex-col gap-1 p-1">
                    <h4 className="text-lg text-blue-700 font-bold capitalize">{transformation.title}</h4>
                    <p className="text-sm text-gray-500">
                        {transformation.description}
                        {/* {transformation.description2} */}
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
                    <Button type="icon-delete"
                        onClick={(e) => onDelete(e, transformation.id)}
                        disabled={isDeleting}
                    >
                        {isDeleting ? <SpinnerMini /> : <HiTrash />}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Transformation
