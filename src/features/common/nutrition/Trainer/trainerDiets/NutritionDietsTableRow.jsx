import { useNavigate } from "react-router-dom"
import { HiPencil, HiTrash } from "react-icons/hi2"
import Modal from "../../../../../ui/Modal"
import Table from "../../../../../ui/Table"
import Button from "../../../../../ui/Button"
import ConfirmDelete from "../../../../../ui/ConfirmDelete"
import { useDeleteDietTemplate } from "./useDeleteDietTemplate"

function NutritionDietsTableRow({ diet }) {
    const navigate = useNavigate();
    const { deleteDietTemplate, isDeleting } = useDeleteDietTemplate();
    const { _id, planName, plantype, planmacros, daysCount } = diet;
    function onDelete(id) {
        if (!id) return;
        deleteDietTemplate(id);
    }

    return (
        <Table.Row>
            <tr className="border-b text-sm text-left text-blue-800 bg-white cursor-pointer hover:bg-gray-50">
                <td className="px-4 py-4 whitespace-nowrap text-left">
                    <p className="flex flex-col gap-1">
                        <span className="font-bold text-lg text-blue-700">{planName}</span>
                        <span className="font-normal text-xs text-gray-500">{plantype}</span>
                    </p>
                </td>

                <td className="px-4 py-4">{daysCount}</td>

                <td className="px-4 py-4 whitespace-nowrap text-left">
                    <div className="bg-gray-100 px-4 py-2 rounded-md border">
                        <div className="flex items-center justify-between text-lg font-bold text-blue-700">
                            <h3 className="flex flex-col gap-1">
                                <p className="flex items-center gap-1">
                                    <span>{Math.round(planmacros.calories)}</span>
                                    <span className="font-normal">Kcal</span>
                                </p>
                                <span className="text-xs text-blue-900 font-normal">calories</span>
                            </h3>
                            <h3 className="flex flex-col gap-1">
                                <p className="flex items-center gap-1">
                                    <span>{Math.round(planmacros.proteins)}</span>
                                    <span className="font-normal">g</span>
                                </p>
                                <span className="text-xs text-blue-900 font-normal">proteins</span>
                            </h3>
                            <h3 className="flex flex-col gap-1">
                                <p className="flex items-center gap-1">
                                    <span>{Math.round(planmacros.fats)}</span>
                                    <span className="font-normal">g</span>
                                </p>
                                <span className="text-xs text-blue-900 font-normal">fats</span>
                            </h3>
                            <h3 className="flex flex-col gap-1">
                                <p className="flex items-center gap-1">
                                    <span>{Math.round(planmacros.carbs)}</span>
                                    <span className="font-normal">g</span>
                                </p>
                                <span className="text-xs text-blue-900 font-normal">carbs</span>
                            </h3>
                        </div>
                    </div>
                </td>

                <td className="px-2 py-4 whitespace-nowrap text-sm text-right font-medium">
                    <div className='flex items-center justify-end gap-1'>
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
                                <ConfirmDelete isLoading={isDeleting} onConfirm={() => onDelete(_id)} resourceName="diet" />
                            </Modal.Window>
                        </Modal>
                    </div>
                </td>
            </tr>
        </Table.Row>
    )
}

export default NutritionDietsTableRow
