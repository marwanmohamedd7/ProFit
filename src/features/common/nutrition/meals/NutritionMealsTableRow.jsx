import { HiPencil, HiTrash } from "react-icons/hi"
import Button from "../../../../ui/Button"
import Modal from "../../../../ui/Modal"
import Table from "../../../../ui/Table"
// import SpinnerMini from "../../../../../ui/SpinnerMini"

function NutritionMealsTableRow({ meal }) {
    const { mealDetails, mealIngredients, totalMacros } = meal
    return (
        <Table.Row>
            <tr key={meal.id} className="border-b text-sm text-left text-blue-800 bg-white cursor-pointer hover:bg-gray-50">

                <td className="px-4 py-4 whitespace-nowrap text-left">
                    <p className="flex flex-col gap-1">
                        <span className="font-bold text-lg text-blue-700">{mealDetails.mealName}</span>
                        <span className="font-normal text-xs text-gray-500">{mealDetails.mealType}</span>
                    </p>
                </td>

                <td className="px-4 py-4 gap-2 text-left flex flex-wrap">
                    {mealIngredients.map(ing => <span className="bg-blue-100 px-2 py-1 rounded-full text-blue-900 text-xs font-semibold w-fit">{ing}</span>)}
                </td>

                <td className="px-4 py-4 whitespace-nowrap text-left">
                    <div className="bg-gray-100 px-4 py-2 rounded-md">
                        <div className="flex items-center justify-between gap-1 text-lg font-bold text-blue-700">
                            <h3 className="flex flex-col gap-1">
                                <p className="flex items-center gap-1">
                                    <span>{totalMacros.calories}</span>
                                    <span className="font-normal">Kcal</span>
                                </p>
                                <span className="text-xs text-blue-900 font-normal">calories</span>
                            </h3>
                            <h3 className="flex flex-col gap-1">
                                <p className="flex items-center gap-1">
                                    <span>{totalMacros.proteins}</span>
                                    <span className="font-normal">g</span>
                                </p>
                                <span className="text-xs text-blue-900 font-normal">proteins</span>
                            </h3>
                            <h3 className="flex flex-col gap-1">
                                <p className="flex items-center gap-1">
                                    <span>{totalMacros.fats}</span>
                                    <span className="font-normal">g</span>
                                </p>
                                <span className="text-xs text-blue-900 font-normal">fats</span>
                            </h3>
                            <h3 className="flex flex-col gap-1">
                                <p className="flex items-center gap-1">
                                    <span>{totalMacros.carbs}</span>
                                    <span className="font-normal">g</span>
                                </p>
                                <span className="text-xs text-blue-900 font-normal">carbs</span>
                            </h3>
                        </div>
                    </div>
                </td>

                <td className="px-2 py-4 whitespace-nowrap text-sm text-right font-medium">
                    <div className='flex items-center justify-end gap-1'>
                        <Modal>
                            <Modal.Open opens="update-meal">
                                <Button type="icon-update">
                                    <HiPencil />
                                </Button>
                            </Modal.Open>
                            <Modal.Window opens="update-meal" >
                                <div></div>
                                {/* <Createmeal mealToUpdate={meal} /> */}
                            </Modal.Window>
                        </Modal>
                        <Button type="icon-delete"
                        >
                            {<HiTrash />}
                        </Button>
                    </div>
                </td>
            </tr>
        </Table.Row>
    )
}

export default NutritionMealsTableRow
{/* <Button type="icon-delete"
                            onClick={() => onDelete(meal._id)}
                            disabled={isDeleting}
                        >
                            {isDeleting ? <SpinnerMini /> : <HiTrash />}
                        </Button> */}
{/* <td className="px-4 py-2 whitespace-nowrap text-right text-sm font-medium">
                    {
                        userRole === "admin" ?
                            <div className='flex items-center justify-start gap-2'>
                                <Modal>
                                    <Modal.Open opens="update-meal">
                                        <Button type="icon-update">
                                            <HiPencil />
                                        </Button>
                                    </Modal.Open>
                                    <Modal.Window opens="update-meal" >
                                        <Createmeal mealToUpdate={meal} />
                                    </Modal.Window>
                                </Modal>

                                <Button type="icon-delete"
                                    onClick={() => onDelete(meal._id)}
                                    disabled={isDeleting}
                                >
                                    {isDeleting ? <SpinnerMini /> : <HiTrash />}
                                </Button>
                            </div>
                            :
                            <>
                                {
                                    meal.admin ?
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
                                                <Modal.Open opens="update-meal">
                                                    <Button type="icon-update">
                                                        <HiPencil />
                                                    </Button>
                                                </Modal.Open>
                                                <Modal.Window opens="update-meal" >
                                                    <Createmeal mealToUpdate={meal} />
                                                </Modal.Window>
                                            </Modal>

                                            <Button type="icon-delete"
                                                onClick={() => onDelete(meal._id)}
                                                disabled={isDeleting}
                                            >
                                                {isDeleting ? <SpinnerMini /> : <HiTrash />}
                                            </Button>
                                        </div>
                                }
                            </>

                    }
                </td> */}