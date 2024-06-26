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
import { useDarkMode } from "../../../../context/DarkModeProvider";
import styles from "../../../../styles/styles";

function NutritionMealsTableRow({ meal, section, onCloseModal }) {
    const colors = styles();
    const navigate = useNavigate();
    const { isDarkMode } = useDarkMode();
    const { userRole } = useCurrentUser();
    const { dispatch } = useDietProvider();
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
        onCloseModal?.();
    }
    return (
        section === "meal" ?
            <Table.Row border={false}>
                <td className="p-4 whitespace-nowrap text-left">
                    <p className="flex flex-col gap-1">
                        <span className="font-bold text-lg">{mealname}</span>
                        <span className={`font-normal text-xs ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>{mealtype}</span>
                    </p>
                </td>

                <td className="p-4 gap-2 text-left flex flex-wrap">
                    {ingredients.map(ing => <span key={ing._id} className={`${isDarkMode ? `${colors.bg_white} bg-opacity-10 ${colors.text_gray_50}` : `${colors.bg_gray_100}`} px-2 py-1 rounded-full text-xs font-semibold w-fit`}>{`${ing.foodname} ${ing.amount} ${ing.servingUnit.at(0).toLowerCase()}`}</span>)}
                </td>

                <td className="p-4 whitespace-nowrap text-left w-full">
                    <DietTableRowMacros
                        calories={mealmacros?.calories}
                        proteins={mealmacros?.proteins}
                        carbs={mealmacros?.carbs}
                        fats={mealmacros?.fats}
                    />
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
                                <Button onClick={() => navigate(`meals/${_id}`)} type="icon-update"
                                >
                                    <IoEyeOutline />
                                </Button>
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
            </Table.Row>
            :
            <Table.Row>
                <td className="p-4 whitespace-nowrap text-left">
                    <p className="flex flex-col gap-1">
                        <span className="font-bold text-lg">{mealname}</span>
                        <span className={`font-normal text-xs ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>{mealtype}</span>
                    </p>
                </td>

                <td className="p-4 gap-2 text-left flex flex-wrap">
                    {ingredients.map(ing => <span key={ing._id} className={`${isDarkMode ? `${colors.bg_white} bg-opacity-10 ${colors.text_gray_50}` : `${colors.bg_gray_100}`} px-2 py-1 rounded-full text-xs font-semibold w-fit`}>{`${ing.foodname} ${ing.amount} ${ing.servingUnit.at(0).toLowerCase()}`}</span>)}
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
            </Table.Row>
    )
}

export default NutritionMealsTableRow