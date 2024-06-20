import StatusLabel from "../../../../ui/StatusLabel";
import Table from "../../../../ui/Table";
import { formatDate_time } from "../../../../utils/helpers";
function TraineeSubscriptionsTableRow({ subscription }) {
    const { package: { packageName }, subscriptionType, duration, paidAmount, startDate, endDate, status } = subscription ?? {};
    return (
        <Table.Row>
            <td className="p-4 whitespace-nowrap">{packageName}</td>
            <td className="p-4 whitespace-nowrap">{subscriptionType}</td>
            <td className="p-4 whitespace-nowrap">{duration} months</td>
            <td className="p-4 whitespace-nowrap">{paidAmount}</td>
            <td className="p-4 whitespace-nowrap">{formatDate_time(startDate)}</td>
            <td className="p-4 whitespace-nowrap">{formatDate_time(endDate)}</td>
            <td className="p-4 whitespace-nowrap"><StatusLabel status={status} /></td>
        </Table.Row>
    )
}

export default TraineeSubscriptionsTableRow
