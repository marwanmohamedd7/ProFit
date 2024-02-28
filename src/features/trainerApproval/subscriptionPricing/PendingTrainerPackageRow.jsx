import Table from "../../../ui/Table"
import { IoEyeOutline } from "react-icons/io5"

function PendingTrainerPackageRow({ packagee }) {
    return (
        <Table.Row>
            <tr className="border-b text-sm text-left text-blue-800 bg-white cursor-pointer hover:bg-gray-50">
                <td className="px-6 py-2 whitespace-nowrap">{packagee.packageName}</td>
                <td className="px-6 py-2 whitespace-nowrap">{packagee.type}</td>
                <td className="px-6 py-2 whitespace-nowrap space-x-2">
                    <span>
                        {packagee.price}
                    </span>
                    <span>{packagee.currency}</span>
                </td>
                <td className="px-6 py-2 whitespace-nowrap">{packagee.duration}</td>
                <td className="px-6 py-2 whitespace-nowrap">{packagee.subscribersLimit}</td>
                <td className="px-6 py-2 whitespace-nowrap text-right text-md font-medium">
                    <div className='flex items-center justify-start gap-2'>
                        <span
                            href="#"
                            className="text-blue-600 p-2 hover:text-blue-900 bg-blue-100 rounded-md"
                        >
                            <IoEyeOutline />
                        </span>
                    </div>
                </td>
            </tr>
        </Table.Row>
    )
}

export default PendingTrainerPackageRow
