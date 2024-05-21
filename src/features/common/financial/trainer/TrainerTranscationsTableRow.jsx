import Table from "../../../../ui/Table"

function TrainerTranscationsTableRow({ transcation }) {
    let statusStyle;
    const { fullName, startDate, subscriptionType, packageName, status, duration, Amount } = transcation
    if (status === "Active") statusStyle = `text-green-500 bg-green-100`;
    else statusStyle = `text-red-500 bg-red-100`;
    return (
        <Table.Row>
            <tr className="border-b text-sm text-left text-blue-800 bg-white cursor-pointer hover:bg-gray-50 border capitalize">
                <td className="p-4 whitespace-nowrap">{fullName}</td>
                <td className="p-4 whitespace-nowrap">{startDate}</td>
                <td className="p-4 whitespace-nowrap">{subscriptionType}</td>
                <td className="p-4 whitespace-nowrap">{packageName}</td>
                <td className="p-4 whitespace-nowrap">{duration} months</td>
                <td className="p-4 whitespace-nowrap statusStyle"><span className={`px-2 py-0.5 rounded-md text-xs font-semibold ${statusStyle}`}>{status}</span></td>
                <td className="p-4 whitespace-nowrap"><strong>{Amount}</strong> EG</td>
            </tr>
        </Table.Row >
    )
}

export default TrainerTranscationsTableRow
