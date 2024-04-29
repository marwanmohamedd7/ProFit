import { FaPlus } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { useDeleteFood } from "./useDeleteFood";
import { HiPencil, HiTrash } from "react-icons/hi"
import { useCurrentUser } from "../../../../context/UserProvider";
import { useMealProvider } from "../../../../context/MealProvider";
import toast from "react-hot-toast";
import CreateFood from "./CreateFood";
import Table from "../../../../ui/Table"
import Modal from "../../../../ui/Modal";
import Button from "../../../../ui/Button";
import ConfirmDelete from "../../../../ui/ConfirmDelete";
import { useParams } from "react-router-dom";

function NutritionRow({ food, section, onCloseModal }) {
    const { id: mealId } = useParams();
    const { userRole } = useCurrentUser();
    const { dispatch, foods } = useMealProvider();
    const { deleteFood, isDeleting } = useDeleteFood();
    const { macros, foodImage, foodname, servingUnit, per: amount, _id } = food;

    function onDelete(id) {
        if (!id) return;
        deleteFood(id)
    }

    function handleAddFood() {
        // 1- check if there's already a food with the same id
        let isExist;
        if (!mealId) isExist = foods.find(food => food.food === food._id)
        else isExist = foods.find(food => (food.food._id === food._id) || (food.food === food._id))

        if (isExist) {
            toast.error("This food has been added before.")
            return
        }

        // 2- add the new food to the meals if it doesn't exist
        // dispatch({ type: "meal/addFood", payload: food })
        dispatch({ type: "meal/addFood", payload: { macros, foodImage, foodname, servingUnit, amount, food: _id } })
        toast.success("Added a new food item!")
        onCloseModal()
    }

    return (
        <Table.Row>
            {
                section === "food"
                    ?
                    <tr key={food.id} className="border-b text-sm text-left text-blue-800 bg-white cursor-pointer hover:bg-gray-50">
                        <td className="pl-6 pr-4 py-2 whitespace-nowrap">
                            <div className="flex items-center gap-3">
                                <div className="flex-shrink-0 h-10 w-10">
                                    <img className="h-10 w-10 rounded-md ml-[-10px]" src={food.foodImage} alt={food.foodname} />
                                </div>
                                <div className="">
                                    <div className="text-sm font-bold">{food.foodname}</div>
                                </div>
                            </div>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">{food.servingUnit}</td>
                        <td className="px-4 py-2 whitespace-nowrap">{food.per + " " + food.servingUnit.at(0).toLowerCase()}</td>
                        <td className="px-4 py-2 whitespace-nowrap">{food.macros.proteins + " " + food.servingUnit.at(0).toLowerCase()}</td>
                        <td className="px-4 py-2 whitespace-nowrap">{food.macros.fats + " " + food.servingUnit.at(0).toLowerCase()}</td>
                        <td className="px-4 py-2 whitespace-nowrap">{food.macros.carbs + " " + food.servingUnit.at(0).toLowerCase()}</td>
                        <td className="px-4 py-2 whitespace-nowrap">{food.macros.calories}</td>
                        <td className="px-4 py-2 whitespace-nowrap"><span className="bg-green-100 px-2 py-1 rounded-md text-xs font-semibold text-green-600">{food.category}</span></td>
                        <td className="px-4 py-2 whitespace-nowrap text-right text-sm font-medium">
                            {
                                userRole === "admin" ?
                                    <div className='flex items-center justify-start gap-2'>
                                        <Modal>
                                            <Modal.Open opens="update-food">
                                                <Button type="icon-update">
                                                    <HiPencil />
                                                </Button>
                                            </Modal.Open>
                                            <Modal.Window opens="update-food" >
                                                <CreateFood foodToUpdate={food} />
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
                                                <ConfirmDelete isLoading={isDeleting} onConfirm={() => onDelete(food._id)} resourceName="food" />
                                            </Modal.Window>
                                        </Modal>
                                    </div>
                                    :
                                    <>
                                        {
                                            food.admin ?
                                                <div className='flex items-center justify-start gap-2'>
                                                    <span
                                                        href="#"
                                                        className="text-blue-600 p-2 hover:text-blue-900 bg-blue-100 rounded-md"
                                                    >
                                                        <IoEyeOutline />
                                                    </span>
                                                </div>
                                                :
                                                <div className='flex items-center justify-start gap-2'>
                                                    <Modal>
                                                        <Modal.Open opens="update-food">
                                                            <Button type="icon-update">
                                                                <HiPencil />
                                                            </Button>
                                                        </Modal.Open>
                                                        <Modal.Window opens="update-food" >
                                                            <CreateFood foodToUpdate={food} />
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
                                                            <ConfirmDelete isLoading={isDeleting} onConfirm={() => onDelete(food._id)} resourceName="food" />
                                                        </Modal.Window>
                                                    </Modal>
                                                </div>
                                        }
                                    </>
                            }
                        </td>
                    </tr>
                    :
                    <tr key={food.id} className="border-b text-sm text-left text-blue-800 bg-white cursor-pointer hover:bg-gray-50">
                        <td className="pl-6 pr-4 py-2 whitespace-nowrap">
                            <div className="flex items-center gap-3">
                                <div className="flex-shrink-0 h-10 w-10">
                                    <img className="h-10 w-10 rounded-md ml-[-10px]" src={food.foodImage} alt={food.foodname} />
                                </div>
                                <div className="">
                                    <div className="text-sm font-bold">{food.foodname}</div>
                                </div>
                            </div>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">{food.servingUnit}</td>
                        <td className="px-4 py-2 whitespace-nowrap">{food.macros.proteins + " " + food.servingUnit.at(0).toLowerCase()}</td>
                        <td className="px-4 py-2 whitespace-nowrap">{food.macros.fats + " " + food.servingUnit.at(0).toLowerCase()}</td>
                        <td className="px-4 py-2 whitespace-nowrap">{food.macros.carbs + " " + food.servingUnit.at(0).toLowerCase()}</td>
                        <td className="px-4 py-2 whitespace-nowrap">{food.macros.calories}</td>
                        <td className="px-4 py-2 whitespace-nowrap"><span className="bg-green-100 px-2 py-1 rounded-md text-xs font-semibold text-green-600">{food.category}</span></td>
                        <td className="px-4 py-2 whitespace-nowrap text-center">
                            <button onClick={handleAddFood} className="bg-blue-700 text-white p-3.5 rounded-md flex justify-center text-xs w-full"><FaPlus /></button>
                        </td>
                    </tr>
            }
        </Table.Row>
    )
}

export default NutritionRow
