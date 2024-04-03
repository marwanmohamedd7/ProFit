import { IoCheckmarkOutline, IoEyeOutline } from "react-icons/io5"
import { MdOutlineBlock } from "react-icons/md";

function TraineeRow({ trainee }) {
    return (
        <tr key={trainee.id} className="border-b text-sm text-left text-blue-800 bg-white cursor-pointer hover:bg-gray-50">
            <td className="px-6 py-2 whitespace-nowrap mx-auto">
                <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-md ml-[-10px]" src="/uifaces-popular-image (1).jpg" alt={trainee.arabicName} />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <span className="text-sm font-bold">{trainee.arabicName}</span>
                        <div className="text-xs flex flex-col text-gray-800">
                            <span>{trainee.email}</span>
                            <span className="underline">{trainee.phone}</span>
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-2 whitespace-nowrap font-bold">{trainee.name}</td>
            <td className="px-6 py-2 whitespace-nowrap">{trainee.package}</td>
            <td className="px-6 py-2 whitespace-nowrap">{trainee.startAt}</td>
            <td className="px-6 py-2 whitespace-nowrap">{trainee.endAt}</td>
            <td className="px-6 py-2 whitespace-nowrap">{trainee.status}</td>
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

export default TraineeRow
