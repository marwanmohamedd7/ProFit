import Table from "../../../../ui/Table"
import Pagination from "../../../../ui/Pagination"
import { PAGE_SIZE_DEFAULT } from "../../../../utils/constants"
import TraineeSubscriptionsTableRow from "./TraineeSubscriptionsTableRow";
import Empty from "../../../../ui/Empty";

function TraineeSubscriptionsTable({ subscriptions, count }) {
    if (!count) return <Empty resource="subscriptions" />
    return (
        <Table>
            <Table.Header>
                <th className="px-4 py-2 whitespace-nowrap">package name</th>
                <th className="px-4 py-2 whitespace-nowrap">type</th>
                <th className="px-4 py-2 whitespace-nowrap">duration</th>
                <th className="px-4 py-2 whitespace-nowrap">paid amount</th>
                <th className="px-4 py-2 whitespace-nowrap">start at</th>
                <th className="px-4 py-2 whitespace-nowrap">end at</th>
                <th className="px-4 py-2 whitespace-nowrap">status</th>
            </Table.Header>
            <Table.Body data={subscriptions} render={(subscription) => <TraineeSubscriptionsTableRow subscription={subscription} key={subscription._id} />} />
            <Table.Footer>
                <Pagination count={count} pages={PAGE_SIZE_DEFAULT} />
            </Table.Footer>
        </Table>
    )
}

export default TraineeSubscriptionsTable
