import { useNavigate } from "react-router-dom"
import { useDeleteMeal } from "./useDeleteMeal"
import { HiPencil, HiTrash } from "react-icons/hi"
import Table from "../../../../ui/Table"
import Modal from "../../../../ui/Modal"
import Button from "../../../../ui/Button"
import ConfirmDelete from "../../../../ui/ConfirmDelete"
import { useCurrentUser } from "../../../../context/UserProvider"
import { IoEyeOutline } from "react-icons/io5"

function NutritionMealsTableRow({ meal }) {
    const navigate = useNavigate()
    const { userRole } = useCurrentUser()
    const { _id, mealname, mealtype, mealmacros, ingredients, } = meal
    const { deleteMeal, isDeleting } = useDeleteMeal()
    function onDelete(id) {
        if (!id) return;
        deleteMeal(id)
    }
    return (
        <Table.Row>
            <tr className="border-b text-sm text-left text-blue-800 bg-white cursor-pointer hover:bg-gray-50">
                <td className="px-4 py-4 whitespace-nowrap text-left">
                    <p className="flex flex-col gap-1">
                        <span className="font-bold text-lg text-blue-700">{mealname}</span>
                        <span className="font-normal text-xs text-gray-500">{mealtype}</span>
                    </p>
                </td>

                <td className="px-4 py-4 gap-2 text-left flex flex-wrap">
                    {ingredients.map(ing => <span key={ing._id} className="bg-blue-100 px-2 py-1 rounded-full text-blue-900 text-xs font-semibold w-fit">{`${ing.foodname} ${ing.amount} ${ing.servingUnit.at(0).toLowerCase()}`}</span>)}
                </td>

                <td className="px-4 py-4 whitespace-nowrap text-left">
                    <div className="bg-gray-100 px-4 py-2 rounded-md border">
                        <div className="flex items-center justify-between gap-4 text-lg font-bold text-blue-700">
                            <h3 className="flex flex-col gap-1">
                                <p className="flex items-center gap-1">
                                    <span>{mealmacros.calories.toFixed(2)}</span>
                                    <span className="font-normal">Kcal</span>
                                </p>
                                <span className="text-xs text-blue-900 font-normal">calories</span>
                            </h3>
                            <h3 className="flex flex-col gap-1">
                                <p className="flex items-center gap-1">
                                    <span>{mealmacros.proteins.toFixed(2)}</span>
                                    <span className="font-normal">g</span>
                                </p>
                                <span className="text-xs text-blue-900 font-normal">proteins</span>
                            </h3>
                            <h3 className="flex flex-col gap-1">
                                <p className="flex items-center gap-1">
                                    <span>{mealmacros.fats.toFixed(2)}</span>
                                    <span className="font-normal">g</span>
                                </p>
                                <span className="text-xs text-blue-900 font-normal">fats</span>
                            </h3>
                            <h3 className="flex flex-col gap-1">
                                <p className="flex items-center gap-1">
                                    <span>{mealmacros.carbs.toFixed(2)}</span>
                                    <span className="font-normal">g</span>
                                </p>
                                <span className="text-xs text-blue-900 font-normal">carbs</span>
                            </h3>
                        </div>
                    </div>
                </td>

                <td className="px-2 py-4 whitespace-nowrap text-sm text-right font-medium">
                    {userRole === "admin" ?
                        <div className='flex items-center justify-end gap-1'>
                            <Button onClick={() => navigate(`meal/${_id}`)} type="icon-update">
                                <HiPencil />
                            </Button>

                            <Modal>
                                <Modal.Open opens="delete-food">
                                    <Button type="icon-delete"
                                    >
                                        <HiTrash />
                                    </Button>
                                </Modal.Open>
                                <Modal.Window opens="delete-food">
                                    <ConfirmDelete isLoading={isDeleting} onConfirm={() => onDelete(_id)} resourceName="meal" />
                                </Modal.Window>
                            </Modal>
                        </div>
                        :
                        meal?.admin ?
                            <div className='flex items-center justify-center ml-6 gap-1'>
                                <span
                                    href="#"
                                    className="text-blue-600 p-2 hover:text-blue-900 bg-blue-100 rounded-md"
                                >
                                    <IoEyeOutline />
                                </span>
                            </div>
                            :
                            <div className='flex items-center justify-end gap-1'>
                                <Button onClick={() => navigate(`meal/${_id}`)} type="icon-update">
                                    <HiPencil />
                                </Button>

                                <Modal>
                                    <Modal.Open opens="delete-food">
                                        <Button type="icon-delete"
                                        >
                                            <HiTrash />
                                        </Button>
                                    </Modal.Open>
                                    <Modal.Window opens="delete-food">
                                        <ConfirmDelete isLoading={isDeleting} onConfirm={() => onDelete(_id)} resourceName="meal" />
                                    </Modal.Window>
                                </Modal>
                            </div>
                    }

                </td>
            </tr>
        </Table.Row>
    )
}

export default NutritionMealsTableRow