import Table from "../../../../../ui/Table"
import { IoEyeOutline } from "react-icons/io5"
import ActiveButton from "../../../../../ui/ActiveButton"

function PendingTrainerPackageRow({ packagee }) {
    return (
        <Table.Row>
            <tr className="border-b text-sm text-left text-blue-800 bg-white cursor-pointer hover:bg-gray-50 capitalize">
                <td className="px-6 py-2 whitespace-nowrap">{packagee.packageName}</td>
                <td className="px-6 py-2 whitespace-nowrap">{packagee.packageType}</td>
                <td className="px-6 py-2 whitespace-nowrap">{packagee.price} EGP</td>
                <td className="px-6 py-2 whitespace-nowrap">{packagee.duration} Months</td>
                <td className="px-6 py-2 whitespace-nowrap">{packagee.subscribersLimit}</td>
                <td className="px-6 py-2 whitespace-nowrap">{<ActiveButton isActive={packagee.active} disabled={true} />}</td>
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
        </Table.Row >
    )
}

export default PendingTrainerPackageRow
