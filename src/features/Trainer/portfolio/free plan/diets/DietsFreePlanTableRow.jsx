import { HiPencil, HiTrash } from "react-icons/hi"
import Button from "../../../../../ui/Button"
import Table from "../../../../../ui/Table"
import Modal from "../../../../../ui/Modal"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import ActiveButton from "../../../../../ui/ActiveButton"
import ConfirmDelete from "../../../../../ui/ConfirmDelete"
import DietTableRowMacros from "../../../../common/nutrition/Trainer/trainerDiets/DietTableRowMacros"
import { useDeleteDietTemplate } from "../../../../common/nutrition/Trainer/trainerDiets/useDeleteDietTemplate"
import { useUpdateDietTemplate } from "../../../../common/nutrition/Trainer/trainerDiets/useUpdateDietTemplate"

function DietsFreePlanTableRow({ diet }) {
    const navigate = useNavigate()
    const { _id, planName, planmacros, published } = diet
    const [isActive, setIsActive] = useState(published ?? true)
    const { deleteDietTemplate, isDeleting } = useDeleteDietTemplate();
    const { updateDietTemplate, isUpdating } = useUpdateDietTemplate()
    function onDelete(id) {
        // todo: implement delete diet plan
        if (!id) return
        deleteDietTemplate(id)
    }
    useEffect(function () {
        if (published === isActive) return
        updateDietTemplate({ _id, dietData: { published: isActive } })
    }, [isActive, published, _id, setIsActive, updateDietTemplate])
    return (
        <Table.Row>
            <td className="p-4 whitespace-nowrap text-left">{planName}</td>

            <td className="p-4 whitespace-nowrap text-left">subscribers</td>

            <td className="p-4 whitespace-nowrap text-left">rating</td>

            <td className="p-4 whitespace-nowrap text-left">
                <DietTableRowMacros
                    fats={planmacros.fats}
                    carbs={planmacros.carbs}
                    calories={planmacros.calories}
                    proteins={planmacros.proteins}
                />
            </td>

            <td className="p-4 whitespace-nowrap text-left">{<ActiveButton isActive={isActive} setIsActive={setIsActive} disabled={isUpdating} />}</td>

            <td className="p-4 whitespace-nowrap text-sm text-left font-medium">
                <div className='flex items-center gap-1'>
                    <Button onClick={() => navigate(`diets/${_id}`)} type="icon-update">
                        <HiPencil />
                    </Button>

                    <Modal>
                        <Modal.Open opens="delete-diet-template">
                            <Button type="icon-delete"
                            >
                                <HiTrash />
                            </Button>
                        </Modal.Open>
                        <Modal.Window opens="delete-diet-template">
                            <ConfirmDelete isLoading={isDeleting} onConfirm={() => onDelete(_id)} resourceName="diet plan" />
                        </Modal.Window>
                    </Modal>
                </div>
            </td>
        </Table.Row>
    )
}

export default DietsFreePlanTableRow
