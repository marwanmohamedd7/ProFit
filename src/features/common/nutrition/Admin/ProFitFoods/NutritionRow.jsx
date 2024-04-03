import { HiPencil, HiTrash } from "react-icons/hi"
import Table from "../../../../../ui/Table"

function NutritionRow({ food }) {
    return (
        <Table.Row>
            <tr key={food.id} className="border-b text-sm text-left text-blue-800 bg-white cursor-pointer hover:bg-gray-50">
                <td className="px-6 py-2 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-md ml-[-10px]" src={food.imageUrl} alt={food.name} />
                        </div>
                        <div className="">
                            <div className="text-sm font-bold">{food.name}</div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-2 whitespace-nowrap">{food.quantity}</td>
                <td className="px-6 py-2 whitespace-nowrap">{food.calories}</td>
                <td className="px-6 py-2 whitespace-nowrap">{food.protein}</td>
                <td className="px-6 py-2 whitespace-nowrap">{food.fats}</td>
                <td className="px-6 py-2 whitespace-nowrap">{food.carbs}</td>
                <td className="px-6 py-2 whitespace-nowrap">{food.category}</td>
                <td className="px-6 py-2 whitespace-nowrap text-right text-sm font-medium">
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
                </td>
            </tr>
        </Table.Row>

    )
}

export default NutritionRow
