import Table from "../../../../ui/Table"
import Pagination from "../../../../ui/Pagination"
import { PAGE_SIZE_DEFAULT } from "../../../../utils/constants"
import TraineeSubscriptionsTableRow from "./TraineeSubscriptionsTableRow";
import Empty from "../../../../ui/Empty";
import { useSorting } from "../../../../hooks/useSorting";
import SortTableColumnsHeader from "../../../../ui/SortTableColumnsHeader";

const columns = [
    { key: ["package", "packageName"], label: "package name" },
    { key: "subscriptionType", label: "type" },
    { key: "duration", label: "duration" },
    { key: "paidAmount", label: "paid amount" },
    { key: "startDate", label: "start at" },
    { key: "endDate", label: "end at" },
    { key: "status", label: "status" },
];

function TraineeSubscriptionsTable({ subscriptions, count }) {
    const { sortedData, sortConfig, setSortConfig } = useSorting(subscriptions);
    if (!count) return <Empty resource="subscriptions" />
    return (
        <Table>
            <Table.Header>
                {columns.map(({ key, label }) => (
                    <th className="px-4 py-2 whitespace-nowrap" key={label}>
                        <SortTableColumnsHeader
                            sortingKey={key}
                            columnName={label}
                            sortConfig={sortConfig}
                            setSortConfig={setSortConfig}
                        />
                    </th>
                ))}
            </Table.Header>
            <Table.Body data={sortedData} render={(subscription) => <TraineeSubscriptionsTableRow subscription={subscription} key={subscription._id} />} />
            <Table.Footer>
                <Pagination count={count} pages={PAGE_SIZE_DEFAULT} />
            </Table.Footer>
        </Table>
    )
}

export default TraineeSubscriptionsTable
