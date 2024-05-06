import TrainerRow from "./TrainerRow";
import Table from "../../../../ui/Table";
import Pagination from "../../../../ui/Pagination";

function TrainersTable({ users, count }) {
    return (
        <Table>
            <Table.Header>
                <tr className="capitalize text-left">
                    <th className="px-6 py-2">trainer details</th>
                    <th className="px-6 py-2">Subscriptions</th>
                    <th className="px-6 py-2">earnings(EGP)</th>
                    <th className="px-6 py-2">registration date</th>
                    <th className="px-6 py-2">status</th>
                    <th className="px-6 py-2">actions</th>
                </tr>
            </Table.Header>
            <Table.Body data={users} render={(trainer) => <TrainerRow trainer={trainer} key={trainer.id} />} />
            <Table.Footer>
                <Pagination count={count} />
            </Table.Footer>
        </Table>
    )
}

export default TrainersTable
