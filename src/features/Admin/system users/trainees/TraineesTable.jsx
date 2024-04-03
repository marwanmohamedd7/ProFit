import Table from "../../../../ui/Table"
import TraineeRow from "./TraineeRow";

const trainees = [
    {
        id: 1,
        arabicName: "مروان عبد المحسن",
        name: "Ahmed Tarek",
        email: "ahmedtarek@gmail.com",
        package: "Golden",
        startAt: "17-09-2023",
        endAt: "17-12-2023",
        status: "Active",
        phone: "+20 100 982 1081"
    },
    {
        id: 2,
        arabicName: "أحمد البدوي",
        name: "Mohamed Ahmed",
        email: "mohamedahmed@gmail.com",
        package: "Golden",
        startAt: "17-09-2023",
        endAt: "17-12-2023",
        status: "Active",
        phone: "+20 100 982 1081"
    },
    {
        id: 3,
        arabicName: "مروان ماجدي بيه",
        name: "Sirag Mohamed",
        email: "siragmohamed@gmail.com",
        package: "Golden",
        startAt: "17-09-2023",
        endAt: "17-12-2023",
        status: "Active",
        phone: "+20 100 982 1081"
    },
    {
        id: 4,
        arabicName: "مؤمن نافع فتوح",
        name: "Eman Hassan",
        email: "emanhassan@gmail.com",
        package: "Golden",
        startAt: "17-09-2023",
        endAt: "17-12-2023",
        status: "Active",
        phone: "+20 100 982 1081"
    },
    {
        id: 5,
        arabicName: "شهاب الدين أسامة",
        name: "Moataz Ahmed",
        email: "moatazahmed@gmail.com",
        package: "Golden",
        startAt: "17-09-2023",
        endAt: "17-12-2023",
        status: "Cancelled",
        phone: "+20 100 982 1081"
    },
    {
        id: 6,
        arabicName: "بريهان أسامة",
        name: "Mahmoud Mohamed",
        email: "mahmoudmoham@gmail.com",
        package: "Golden",
        startAt: "17-09-2023",
        endAt: "17-12-2023",
        status: "Active",
        phone: "+20 100 982 1081"
    },
    // ... other trainers as per your data
];


function TraineesTable() {
    return (
        <Table>
            <Table.Header>
                <tr className="capitalize text-left">
                    <th className="px-6 py-2">trainee details</th>
                    <th className="px-6 py-2">trainer subscribed</th>
                    <th className="px-6 py-2">package</th>
                    <th className="px-6 py-2">start at</th>
                    <th className="px-6 py-2">end at</th>
                    <th className="px-6 py-2">status</th>
                    <th className="px-6 py-2">actions</th>
                </tr>
            </Table.Header>
            <Table.Body data={trainees} render={(trainee) => <TraineeRow trainee={trainee} key={trainee.id} />} />
            <Table.Footer />
        </Table>
    )
}

export default TraineesTable
