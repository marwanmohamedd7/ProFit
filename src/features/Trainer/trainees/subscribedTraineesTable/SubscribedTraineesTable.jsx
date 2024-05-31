import Empty from "../../../../ui/Empty"
import Pagination from "../../../../ui/Pagination"
import Table from "../../../../ui/Table"
import SubscribedTraineesTableRow from "./SubscribedTraineesTableRow"

function SubscribedTraineesTable({ trainees, count, empty = "" }) {
    if (!count) return <Empty resource={empty ? empty : "trainees"} />
    return (
        <Table>
            <Table.Header>
                <th className="pl-4 py-2 whitespace-nowrap">trainee details</th>
                {/* <th className="px-4 py-2 whitespace-nowrap">Last Assessment</th> */}
                <th className="px-10 py-2 whitespace-nowrap">subscription date</th>
                <th className="px-10 py-2 whitespace-nowrap">package name</th>
                <th className="px-10 py-2 whitespace-nowrap">duration</th>
                <th className="px-10 py-2 whitespace-nowrap">remaining days</th>
                <th className="px-10 py-2 whitespace-nowrap">status</th>
                <th className="px-10 py-2 whitespace-nowrap">actions</th>
            </Table.Header>
            <Table.Body data={trainees} render={(trainee) => <SubscribedTraineesTableRow trainee={trainee} key={trainee._id} />} />
            <Table.Footer>
                <Pagination count={count} />
            </Table.Footer>
        </Table>
    )
}

export default SubscribedTraineesTable
