import Pagination from "../../../../ui/Pagination";
import Table from "../../../../ui/Table"
import TraineeRow from "./TraineeRow";

function TraineesTable({ users, count }) {
    return (
        <Table>
            <Table.Header>
                <tr className="capitalize text-left">
                    <th className="px-6 py-2">trainee details</th>
                    <th className="px-6 py-2">trainer subscribed</th>
                    <th className="px-6 py-2">package</th>
                    {/* <th className="px-6 py-2">start at</th>
                    <th className="px-6 py-2">end at</th> */}
                    <th className="px-6 py-2">registration date</th>
                    <th className="px-6 py-2">status</th>
                    <th className="px-6 py-2">actions</th>
                </tr>
            </Table.Header>
            <Table.Body data={users} render={(trainee) => <TraineeRow trainee={trainee} key={trainee.id} />} />
            <Table.Footer>
                <Pagination count={count} />
            </Table.Footer>
        </Table>
    )
}

export default TraineesTable
