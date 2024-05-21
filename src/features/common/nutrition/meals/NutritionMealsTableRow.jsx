import { GoArrowRight } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5"
import { useDeleteMeal } from "./useDeleteMeal"
import { HiPencil, HiTrash } from "react-icons/hi"
import { useNavigate } from "react-router-dom"
import { useCurrentUser } from "../../../../context/UserProvider"
import { useDietProvider } from "../../../../context/DietProvider";
import toast from "react-hot-toast";
import Table from "../../../../ui/Table"
import Modal from "../../../../ui/Modal"
import Button from "../../../../ui/Button"
import ConfirmDelete from "../../../../ui/ConfirmDelete"
import DietTableRowMacros from "../Trainer/trainerDiets/DietTableRowMacros";

function NutritionMealsTableRow({ meal, section, onCloseModal }) {
    const navigate = useNavigate()
    const { userRole } = useCurrentUser()
    const { dispatch } = useDietProvider()
    const { _id, mealname, mealtype, mealnote, mealmacros, ingredients, } = meal
    const { deleteMeal, isDeleting } = useDeleteMeal()

    function onDelete(id) {
        if (!id) return;
        deleteMeal(id)
    }

    function handleLoadMeal() {
        dispatch({ type: "diet/loadMeal", payload: { day: section.day, mealId: section.mealId, meal: { mealname, mealtype, mealnote, mealmacros, foods: ingredients } } })
        dispatch({ type: "diet/calcDayMacros", payload: section.day })
        toast.success("Added meal item!")
        onCloseModal()
    }
    return (
        <Table.Row>
            {
                section === "meal" ?
                    <tr className="border-b text-sm text-left text-blue-800 bg-white cursor-pointer hover:bg-gray-50 border">
                        <td className="p-4 whitespace-nowrap text-left">
                            <p className="flex flex-col gap-1">
                                <span className="font-bold text-lg text-blue-700">{mealname}</span>
                                <span className="font-normal text-xs text-gray-500">{mealtype}</span>
                            </p>
                        </td>

                        <td className="p-4 gap-2 text-left flex flex-wrap">
                            {ingredients.map(ing => <span key={ing._id} className="bg-blue-100 px-2 py-1 rounded-full text-blue-900 text-xs font-semibold w-fit">{`${ing.foodname} ${ing.amount} ${ing.servingUnit.at(0).toLowerCase()}`}</span>)}
                        </td>

                        <td className="p-4 whitespace-nowrap text-left">
                            <div className="bg-gray-100 px-4 py-2 rounded-md border">
                                <div className="flex items-center justify-between gap-2 text-lg font-bold text-blue-700">
                                    <h3 className="flex flex-col gap-1">
                                        <p className="flex items-center gap-1">
                                            <span>{Math.round(mealmacros.calories)}</span>
                                            <span className="font-normal">Kcal</span>
                                        </p>
                                        <span className="text-xs text-blue-900 font-normal">calories</span>
                                    </h3>
                                    <h3 className="flex flex-col gap-1">
                                        <p className="flex items-center gap-1">
                                            <span>{Math.round(mealmacros.proteins)}</span>
                                            <span className="font-normal">g</span>
                                        </p>
                                        <span className="text-xs text-blue-900 font-normal">proteins</span>
                                    </h3>
                                    <h3 className="flex flex-col gap-1">
                                        <p className="flex items-center gap-1">
                                            <span>{Math.round(mealmacros.fats)}</span>
                                            <span className="font-normal">g</span>
                                        </p>
                                        <span className="text-xs text-blue-900 font-normal">fats</span>
                                    </h3>
                                    <h3 className="flex flex-col gap-1">
                                        <p className="flex items-center gap-1">
                                            <span>{Math.round(mealmacros.carbs)}</span>
                                            <span className="font-normal">g</span>
                                        </p>
                                        <span className="text-xs text-blue-900 font-normal">carbs</span>
                                    </h3>
                                </div>
                            </div>
                        </td>

                        <td className="p-4 whitespace-nowrap text-sm text-right font-medium">
                            {userRole === "admin" ?
                                <div className='flex items-center justify-end gap-1'>
                                    <Button onClick={() => navigate(`meals/${_id}`)} type="icon-update">
                                        <HiPencil />
                                    </Button>

                                    <Modal>
                                        <Modal.Open opens="delete-meal">
                                            <Button type="icon-delete"
                                            >
                                                <HiTrash />
                                            </Button>
                                        </Modal.Open>
                                        <Modal.Window opens="delete-meal">
                                            <ConfirmDelete isLoading={isDeleting} onConfirm={() => onDelete(_id)} resourceName="meal" />
                                        </Modal.Window>
                                    </Modal>
                                </div>
                                :
                                meal?.admin ?
                                    <div className='flex items-center justify-end mr-8 gap-1'>
                                        <span
                                            href="#"
                                            className="text-blue-600 p-2 hover:text-blue-900 bg-blue-100 rounded-md"
                                        >
                                            <IoEyeOutline />
                                        </span>
                                    </div>
                                    :
                                    <div className='flex items-center justify-end gap-1'>
                                        <Button onClick={() => navigate(`meals/${_id}`)} type="icon-update">
                                            <HiPencil />
                                        </Button>

                                        <Modal>
                                            <Modal.Open opens="delete-meal">
                                                <Button type="icon-delete"
                                                >
                                                    <HiTrash />
                                                </Button>
                                            </Modal.Open>
                                            <Modal.Window opens="delete-meal">
                                                <ConfirmDelete isLoading={isDeleting} onConfirm={() => onDelete(_id)} resourceName="meal" />
                                            </Modal.Window>
                                        </Modal>
                                    </div>
                            }
                        </td>
                    </tr>
                    :
                    <tr className="border-b text-sm text-left text-blue-800 bg-white cursor-pointer hover:bg-gray-50">
                        <td className="p-2 whitespace-nowrap text-left">
                            <p className="flex flex-col gap-1">
                                <span className="font-bold text-lg text-blue-700">{mealname}</span>
                                <span className="font-normal text-xs text-gray-500">{mealtype}</span>
                            </p>
                        </td>

                        <td colSpan="2" className="p-2 gap-2 text-left flex flex-wrap">
                            {ingredients.map(ing => <span key={ing._id} className="bg-blue-100 px-2 py-1 rounded-full text-blue-900 text-xs font-semibold w-fit">{`${ing.foodname} ${ing.amount} ${ing.servingUnit.at(0).toLowerCase()}`}</span>)}
                        </td>

                        <td colSpan="3" className="p-2 whitespace-nowrap text-left">
                            <DietTableRowMacros
                                fats={mealmacros.fats}
                                carbs={mealmacros.carbs}
                                calories={mealmacros.calories}
                                proteins={mealmacros.proteins}
                            />
                        </td>

                        <td className="p-2 whitespace-nowrap text-sm font-medium">
                            <div className='flex items-center gap-1'>
                                <Button onClick={handleLoadMeal} type="secondary" customeStyle="py-2">
                                    <p className="flex items-center justify-center gap-2 capitalize">
                                        <span>select</span>
                                        <span><GoArrowRight /></span>
                                    </p>
                                </Button>
                            </div>
                        </td>
                    </tr>
            }

        </Table.Row>
    )
}

export default NutritionMealsTableRow