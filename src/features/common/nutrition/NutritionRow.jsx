import { HiPencil, HiTrash } from "react-icons/hi"
import Table from "../../../ui/Table"
import { IoEyeOutline } from "react-icons/io5";

function NutritionRow({ food }) {
    console.log(food);
    return (
        <Table.Row>
            <tr key={food.id} className="border-b text-sm text-left text-blue-800 bg-white cursor-pointer hover:bg-gray-50">
                <td className="px-6 py-2 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-md ml-[-10px]" src={food.foodImage} alt={food.foodname} />
                        </div>
                        <div className="">
                            <div className="text-sm font-bold">{food.foodname}</div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-2 whitespace-nowrap">{food.quantity ? food.quantity : 100 + ' g'}</td>
                <td className="px-6 py-2 whitespace-nowrap">{food.macros.calories}</td>
                <td className="px-6 py-2 whitespace-nowrap">{food.macros.proteins}</td>
                <td className="px-6 py-2 whitespace-nowrap">{food.macros.fats}</td>
                <td className="px-6 py-2 whitespace-nowrap">{food.macros.carbs}</td>
                <td className="px-6 py-2 whitespace-nowrap">{food.category}</td>
                <td className="px-6 py-2 whitespace-nowrap text-right text-sm font-medium">
                    {
                        !food.Trainer ?
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
                                <span
                                    href="#"
                                    className="text-blue-600 p-2 hover:text-blue-900 bg-blue-100 rounded-md"
                                >
                                    <HiPencil />
                                </span>

                                <span
                                    href="#"
                                    className="text-red-600 p-2 hover:text-red-900 bg-red-100 rounded-md"
                                >
                                    <HiTrash />
                                </span>
                            </div>
                    }

                </td>
            </tr>
        </Table.Row>

    )
}

export default NutritionRow
