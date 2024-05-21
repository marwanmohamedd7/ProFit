import Table from "../../../../ui/Table"
import Pagination from "../../../../ui/Pagination";
import SystemTraineesTableRow from "./SystemTraineesTableRow";

function SystemTraineesTable({ users, count }) {
    return (
        <Table>
            <Table.Header>
                <tr className="capitalize text-left">
                    <th className="px-4 py-2 whitespace-nowrap">trainee details</th>
                    <th className="px-4 py-2 whitespace-nowrap">trainer subscribed</th>
                    <th className="px-4 py-2 whitespace-nowrap">package</th>
                    {/* <th className="px-4 py-2 whitespace-nowrap">start at</th>
                    <th className="px-4 py-2 whitespace-nowrap">end at</th> */}
                    <th className="px-4 py-2 whitespace-nowrap">status</th>
                    <th className="px-4 py-2 whitespace-nowrap">registration date</th>
                    <th className="px-4 py-2 whitespace-nowrap">actions</th>
                </tr>
            </Table.Header>
            <Table.Body data={users} render={(trainee) => <SystemTraineesTableRow trainee={trainee} key={trainee.id} />} />
            <Table.Footer>
                <Pagination count={count} />
            </Table.Footer>
        </Table>
    )
}

export default SystemTraineesTable
