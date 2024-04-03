import Table from "../../../../../ui/Table"
import PendingTrainerPackageRow from "./PendingTrainerPackageRow";

const packages = [
    {
        id: 1,
        packageName: "Bronze Package",
        type: "Diet & Workout",
        price: 1650,
        currency: "EGP",
        duration: "3 Months",
        subscribersLimit: 10
    },
    {
        id: 2,
        packageName: "Silver Package",
        type: "Diet & Workout",
        price: 2800,
        currency: "EGP",
        duration: "6 Months",
        subscribersLimit: 50
    },
    {
        id: 3,
        packageName: "Gold Package",
        type: "Diet & Workout",
        price: 3600,
        currency: "EGP",
        duration: "12 Months",
        subscribersLimit: 60
    }
];
function PendingTrainerPackagesTable() {
    return (
        <Table>
            <Table.Header>
                <tr className="capitalize text-left">
                    <th className="px-6 py-2">package name</th>
                    <th className="px-6 py-2">type</th>
                    <th className="px-6 py-2">price</th>
                    <th className="px-6 py-2">duration</th>
                    <th className="px-6 py-2">subscribers limit</th>
                    <th className="px-6 py-2">actions</th>
                </tr>
            </Table.Header>
            <Table.Body data={packages} render={(packagee) => <PendingTrainerPackageRow packagee={packagee} key={packagee.id} />} />
            <Table.Footer />
        </Table>
    )
}

export default PendingTrainerPackagesTable
