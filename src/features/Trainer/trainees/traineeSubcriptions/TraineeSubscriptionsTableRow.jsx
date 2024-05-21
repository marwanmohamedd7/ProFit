import Table from "../../../../ui/Table";
import { formatDate } from "../../../../utils/helpers";
function TraineeSubscriptionsTableRow({ subscription }) {
    let statusStyle;
    const { package:{packageName}, subscriptionType, duration, paidAmount, startDate, endDate, status } = subscription ?? {};
    if (status === "Cancelled") statusStyle = `text-red-500 bg-red-100`;
    if (status === "Active") statusStyle = `text-green-500 bg-green-100`;
    if (status === "Expired") statusStyle = `text-orange-500 bg-orange-100`;
    return (
        <Table.Row>
            <tr className="border-b text-sm text-left text-blue-800 bg-white cursor-pointer hover:bg-gray-50 border capitalize">
                <td className="p-4 whitespace-nowrap">{packageName}</td>
                <td className="p-4 whitespace-nowrap">{subscriptionType}</td>
                <td className="p-4 whitespace-nowrap">{duration} months</td>
                <td className="p-4 whitespace-nowrap">{paidAmount}</td>
                <td className="p-4 whitespace-nowrap">{formatDate(startDate)}</td>
                <td className="p-4 whitespace-nowrap">{formatDate(endDate)}</td>
                <td className="p-4 whitespace-nowrap"><span className={`px-2 py-0.5 rounded-md capitalize text-xs font-semibold ${statusStyle}`}>{status}</span></td>
            </tr>
        </Table.Row>
    )
}

export default TraineeSubscriptionsTableRow
