import Table from "../../../../../ui/Table"
import PendingTrainerPackageRow from "./PendingTrainerPackageRow";

function PendingTrainerPackagesTable({ packages = [] }) {
    return (
        <Table>
            <Table.Header>
                    <th className="px-6 py-2">package name</th>
                    <th className="px-6 py-2">type</th>
                    <th className="px-6 py-2">price</th>
                    <th className="px-6 py-2">duration</th>
                    <th className="px-6 py-2">subscribers limit</th>
                    <th className="px-6 py-2">active</th>
                    <th className="px-6 py-2">actions</th>
            </Table.Header>
            <Table.Body data={packages} render={(packagee) => <PendingTrainerPackageRow packagee={packagee} key={packagee._id} />} />
            <Table.Footer />
        </Table>
    )
}

export default PendingTrainerPackagesTable
