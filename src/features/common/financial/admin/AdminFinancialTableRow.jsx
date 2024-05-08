import Table from "../../../../ui/Table"

function AdminFinancialTableRow({ transcation }) {
    let statusStyle;
    const { traineeName, trainerName, startDate, subscriptionType, packageName, status, duration, Amount } = transcation
    if (status === "Active") statusStyle = `text-green-500 bg-green-100`;
    else statusStyle = `text-red-500 bg-red-100`;
    return (
        <Table.Row>
            <tr className="border-b text-sm text-left text-blue-800 bg-white cursor-pointer hover:bg-gray-50 border capitalize">
                <td className="px-6 py-4 whitespace-nowrap">{trainerName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{traineeName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{startDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">{subscriptionType}</td>
                <td className="px-6 py-4 whitespace-nowrap">{packageName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{duration} months</td>
                <td className="px-6 py-4 whitespace-nowrap statusStyle"><span className={`px-2 py-0.5 rounded-md text-xs font-semibold ${statusStyle}`}>{status}</span></td>
                <td className="px-6 py-4 whitespace-nowrap"><strong>{Amount}</strong> EG</td>
            </tr>
        </Table.Row >
    )
}

export default AdminFinancialTableRow
