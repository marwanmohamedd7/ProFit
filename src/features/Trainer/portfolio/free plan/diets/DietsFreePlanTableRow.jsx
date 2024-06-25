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
import { useDarkMode } from "../../../../../context/DarkModeProvider"
import styles from "../../../../../styles/styles"

function DietsFreePlanTableRow({ diet }) {
    const navigate = useNavigate()
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const { _id, planName, plantype, daysCount, planmacros, published } = diet
    const [isActive, setIsActive] = useState(published)
    const { deleteDietTemplate, isDeleting } = useDeleteDietTemplate();
    const { updateDietTemplate, isUpdating } = useUpdateDietTemplate()
    function onDelete(id) {
        // todo: implement delete diet plan
        if (!id) return
        deleteDietTemplate(id)
    }
    useEffect(() => setIsActive(published), [published])
    return (
        <Table.Row>
            <td className="p-4 whitespace-nowrap text-left">
                <p className="flex flex-col gap-1">
                    <span className="font-bold text-lg">{planName}</span>
                    <span className={`font-normal text-xs ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>{plantype}</span>
                </p>
            </td>
            <td className="p-4 whitespace-nowrap text-left">{daysCount}</td>
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

            <td className="p-4 whitespace-nowrap text-left">
                {
                    <ActiveButton onClick={() => updateDietTemplate({ _id, dietData: { published: !isActive } })}
                        isActive={isActive}
                        setIsActive={setIsActive}
                        disabled={isUpdating}
                    />
                }
            </td>

            <td className="p-4 whitespace-nowrap text-sm text-left font-medium">
                <div className='flex items-center gap-1'>
                    <Button onClick={() => navigate(`diets/${_id}`)} type="icon-update">
                        <HiPencil />
                    </Button>

                    <Modal>
                        <Modal.Open opens="delete-free-plan">
                            <Button type="icon-delete"
                            >
                                <HiTrash />
                            </Button>
                        </Modal.Open>
                        <Modal.Window opens="delete-free-plan">
                            <ConfirmDelete isLoading={isDeleting} onConfirm={() => onDelete(_id)} resourceName="diet plan" />
                        </Modal.Window>
                    </Modal>
                </div>
            </td>
        </Table.Row>
    )
}

export default DietsFreePlanTableRow
