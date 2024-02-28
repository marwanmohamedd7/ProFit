import Table from "../../../ui/Table"
import TrainerRow from "./TrainerRow";

const trainers = [
    {
        id:1,
        name: "Mahmoud Mohamed",
        email: "mahmoudmoham@gmail.com",
        phone: "+20 100 982 1081",
        subscriptions: 0,
        earnings: "0 EGP",
        registrationDate: "01-10-2023",
        status: "Pending",
    },
    {
        id: 2,
        name: "Moataz Ahmed",
        email: "moatazahmed@gmail.com",
        phone: "+20 100 982 1081",
        subscriptions: 10,
        earnings: "14,189 EGP",
        registrationDate: "01-10-2023",
        status: "Blocked",
    },
    {
        id: 3,
        name: "Ahmed Tarek",
        email: "ahmedtarek@gmail.com",
        phone: "+20 100 982 1081",
        subscriptions: 19,
        earnings: "45,505 EGP",
        registrationDate: "20-05-2023",
        status: "Active",
    },
    {
        id: 4,
        name: "Adham Ghoiem",
        email: "adhamghoiem@gmail.com",
        phone: "+20 100 982 1081",
        subscriptions: 3,
        earnings: "6,569 EGP",
        registrationDate: "01-10-2023",
        status: "Active",
    },
    {
        id: 5,
        name: "Mohamed Ahmed",
        email: "mohamedahmed@gmail.com",
        phone: "+20 100 982 1081",
        subscriptions: 10,
        earnings: "16,480 EGP",
        registrationDate: "01-10-2023",
        status: "Active",
    },
    // Add other trainer objects here as needed
];

function TrainersTable() {
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
            <Table.Body data={trainers} render={(trainer) => <TrainerRow trainer={trainer} key={trainer.id} />} />
            <Table.Footer />
        </Table>
    )
}

export default TrainersTable
