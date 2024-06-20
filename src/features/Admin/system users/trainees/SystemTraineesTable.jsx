import Table from "../../../../ui/Table"
import Pagination from "../../../../ui/Pagination";
import SystemTraineesTableRow from "./SystemTraineesTableRow";
import { useSorting } from "../../../../hooks/useSorting";
import SortTableColumnsHeader from "../../../../ui/SortTableColumnsHeader";
import Empty from "../../../../ui/Empty";

const columns = [
    { key: "firstName", label: "trainee details" },
    { key: ["assignedTrainer", "firstName"], label: "trainer subscribed" },
    { key: ["package","packageName"], label: "package" },
    { key: "status", label: "status" },
    { key: "Registration_Date", label: "registration date" },
];

function SystemTraineesTable({ users, count }) {
    const { sortedData, sortConfig, setSortConfig } = useSorting(users);
    if (!count || !users.length) return <Empty resource={"users"} />
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
                <th className="px-4 py-2 whitespace-nowrap">actions</th>
                {/* <th className="px-4 py-2 whitespace-nowrap">start at</th>
                    <th className="px-4 py-2 whitespace-nowrap">end at</th> */}
            </Table.Header>
            <Table.Body data={sortedData} render={(trainee) => <SystemTraineesTableRow trainee={trainee} key={trainee.id} />} />
            <Table.Footer>
                <Pagination count={count} />
            </Table.Footer>
        </Table>
    )
}

export default SystemTraineesTable
