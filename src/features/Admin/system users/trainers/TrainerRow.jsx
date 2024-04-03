import { IoCheckmarkOutline, IoEyeOutline } from "react-icons/io5"
import { MdOutlineBlock } from "react-icons/md";

function TrainerRow({ trainer }) {
    return (
        <tr key={trainer.id} className="border-b text-sm text-left text-blue-800 bg-white cursor-pointer hover:bg-gray-50">
            <td className="px-6 py-2 whitespace-nowrap mx-auto">
                <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-md ml-[-10px]" src="/uifaces-popular-image.jpg" alt={trainer.name} />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <span className="text-sm font-bold">{trainer.name}</span>
                        <div className="text-xs flex flex-col text-gray-800">
                            <span>{trainer.email}</span>
                            <span className="underline">{trainer.phone}</span>
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-2 whitespace-nowrap">{trainer.subscriptions}</td>
            <td className="px-6 py-2 whitespace-nowrap">{trainer.earnings}</td>
            <td className="px-6 py-2 whitespace-nowrap">{trainer.registrationDate}</td>
            <td className="px-6 py-2 whitespace-nowrap">{trainer.status}</td>
            <td className="px-6 py-2 whitespace-nowrap text-right text-sm font-medium">
                <div className='flex items-center justify-start gap-2'>
                    <span
                        href="#"
                        className="text-blue-600 p-2 hover:text-blue-900 bg-blue-100 rounded-md"
                    >
                        <IoEyeOutline />
                    </span>

                    <span
                        href="#"
                        className="text-green-600 p-2 hover:text-green-900 bg-green-100 rounded-md"
                    >
                        <IoCheckmarkOutline />

                    </span>


                    <span
                        href="#"
                        className="text-red-600 p-2 hover:text-red-900 bg-red-100 rounded-md"
                    >
                        <MdOutlineBlock />
                    </span>
                </div>
            </td>
        </tr>
    )
}

export default TrainerRow
