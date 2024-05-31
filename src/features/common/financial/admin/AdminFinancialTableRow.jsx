import StatusLabel from "../../../../ui/StatusLabel"
import Table from "../../../../ui/Table"
import { formatDate, formatTime } from "../../../../utils/helpers"

function AdminFinancialTableRow({ transcation }) {
    const { traineeName, trainerName, startDate, subscriptionType, packageName, status, duration, Amount } = transcation ?? {}
    return (
        <Table.Row>
            <td className="p-4 whitespace-nowrap">{trainerName}</td>
            <td className="p-4 whitespace-nowrap">{traineeName}</td>
            <td className="p-4 whitespace-nowrap">
                <p className="flex flex-col justify-center gap-0.5">
                    <strong>{formatDate(startDate)}</strong>
                    <span>{formatTime(startDate)}</span>
                </p>
            </td>
            <td className="p-4 whitespace-nowrap">{subscriptionType}</td>
            <td className="p-4 whitespace-nowrap">{packageName}</td>
            <td className="p-4 whitespace-nowrap">{duration} months</td>
            <td className="p-4 whitespace-nowrap statusStyle"><StatusLabel status={status} /></td>
            <td className="p-4 whitespace-nowrap"><strong>{Amount}</strong> EG</td>
        </Table.Row >
    )
}

export default AdminFinancialTableRow
