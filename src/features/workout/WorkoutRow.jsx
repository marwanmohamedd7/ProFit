import { HiPencil, HiTrash } from "react-icons/hi"

function WorkoutRow({ exercise }) {
    return (
        <tr key={exercise.id} className="border-b text-sm text-left text-blue-800 bg-white cursor-pointer hover:bg-gray-50">
            <td className="px-6 py-2 whitespace-nowrap">
                <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-md ml-[-10px]" src="/danielle-cerullo-CQfNt66ttZM-unsplash.jpg" alt={exercise.name} />
                    </div>
                    <div className="">
                        <div className="text-sm font-bold">{exercise.name}</div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-2 whitespace-nowrap">{exercise.tool}</td>
            <td className="px-6 py-2 whitespace-nowrap">{exercise.targetMuscle}</td>
            <td className="px-6 py-2 whitespace-nowrap">{exercise.type}</td>
            <td className="px-6 py-2 whitespace-nowrap">{exercise.level}</td>
            <td className="px-6 py-2 whitespace-nowrap">{exercise.location}</td>
            <td className="px-6 py-2 whitespace-nowrap">{exercise.category}</td>
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
    )
}

export default WorkoutRow
