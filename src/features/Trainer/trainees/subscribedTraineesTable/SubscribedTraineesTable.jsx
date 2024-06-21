import { useSorting } from "../../../../hooks/useSorting";
import Empty from "../../../../ui/Empty"
import Pagination from "../../../../ui/Pagination"
import SortTableColumnsHeader from "../../../../ui/SortTableColumnsHeader";
import Table from "../../../../ui/Table"
import SubscribedTraineesTableRow from "./SubscribedTraineesTableRow"

const columns = [
    { key: ["traineeId", "firstName"], label: "trainee details" },
    { key: "startDate", label: "subscription date" },
    { key: ["package", "packageName"], label: "package name" },
    { key: "duration", label: "duration" },
    { key: "endDate", label: "remaining days" },
    { key: "status", label: "status" },
];

function SubscribedTraineesTable({ trainees, count, empty = "" }) {
    const { sortedData, sortConfig, setSortConfig } = useSorting(trainees);
    if (!count || !trainees.length) return <Empty resource={empty ? empty : "trainees"} />
    return (
        <Table>
            <Table.Header>
                {columns.map(({ key, label }) => (
                    <th className={`${label === "trainee details" ? `px-4` : `px-9`} py-2 whitespace-nowrap`} key={label}>
                        <SortTableColumnsHeader
                            sortingKey={key}
                            columnName={label}
                            sortConfig={sortConfig}
                            setSortConfig={setSortConfig}
                        />
                    </th>
                ))}
                <th className="px-9 py-2 whitespace-nowrap">actions</th>
                {/* <th className="px-4 py-2 whitespace-nowrap">Last Assessment</th> */}
            </Table.Header>
            <Table.Body data={sortedData} render={(trainee) => <SubscribedTraineesTableRow trainee={trainee} key={trainee._id} />} />
            <Table.Footer>
                <Pagination count={count} />
            </Table.Footer>
        </Table>
    )
}

export default SubscribedTraineesTable
