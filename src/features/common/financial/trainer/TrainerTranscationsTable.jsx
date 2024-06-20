import Table from "../../../../ui/Table"
import Empty from "../../../../ui/Empty"
import Pagination from "../../../../ui/Pagination"
import { PAGE_SIZE_DEFAULT } from "../../../../utils/constants"
import TrainerTranscationsTableRow from "./TrainerTranscationsTableRow"
import SortTableColumnsHeader from "../../../../ui/SortTableColumnsHeader"
import { useSorting } from "../../../../hooks/useSorting"

const columns = [
    { key: "firstName", label: "trainee name" },
    { key: "startDate", label: "date" },
    { key: "subscriptionType", label: "subscription type" },
    { key: "packageName", label: "package" },
    { key: "duration", label: "duration" },
    { key: "status", label: "status" },
    { key: "Amount", label: "amount" },
];

function TrainerTranscationsTable({ transcations, count }) {
    const { sortedData, sortConfig, setSortConfig } = useSorting(transcations);
if (!count || !transcations.length) return <Empty resource={"subscriptions"} />
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
            <Table.Body data={sortedData} render={(transcation) => <TrainerTranscationsTableRow transcation={transcation} key={transcation.id} />} />
            <Table.Footer>
                <Pagination count={count} pages={PAGE_SIZE_DEFAULT} />
            </Table.Footer>
        </Table>
    )
}

export default TrainerTranscationsTable
