import Pagination from "../../../ui/Pagination"
import Table from "../../../ui/Table"
import TrainerSubscribedTraineesTableRow from "./TrainerSubscribedTraineesTableRow"

const trainees = [
    {
        "name": "مروان عبد المحفوظ",
        "email": "marwanmohamed@gmail.com",
        "lastAssessment": "18-09-2023",
        "package": "Golden",
        "startAt": "17-09-2023",
        "endAt": "17-12-2023",
        "status": "Active"
    },
    {
        "name": "شهاب الدين سند",
        "email": "shehabeldinsand@gmail.com",
        "lastAssessment": "18-09-2023",
        "package": "Golden",
        "startAt": "17-09-2023",
        "endAt": "17-12-2023",
        "status": "Active"
    },
    {
        "name": "سهيلة أسامة",
        "email": "sohailaosama@gmail.com",
        "lastAssessment": "18-09-2023",
        "package": "Golden",
        "startAt": "17-09-2023",
        "endAt": "17-12-2023",
        "status": "Active"
    },
    {
        "name": "عبد الرحمن النذير",
        "email": "abdelrahman@gmail.com",
        "lastAssessment": "18-09-2023",
        "package": "Golden",
        "startAt": "17-09-2023",
        "endAt": "17-12-2023",
        "status": "Active"
    },
    {
        "name": "أحمد الدوخي",
        "email": "ahmedeldawaby@gmail.com",
        "lastAssessment": "18-09-2023",
        "package": "Golden",
        "startAt": "17-09-2023",
        "endAt": "17-12-2023",
        "status": "Active"
    },
    {
        "name": "مروان مجدي اسم",
        "email": "marwanmagdy@gmail.com",
        "lastAssessment": "18-09-2023",
        "package": "Golden",
        "startAt": "17-09-2023",
        "endAt": "17-12-2023",
        "status": "Active"
    },
    {
        "name": "مؤمن رأفت فتوح",
        "email": "moamenraafat@gmail.com",
        "lastAssessment": "18-09-2023",
        "package": "Golden",
        "startAt": "17-09-2023",
        "endAt": "17-12-2023",
        "status": "Active"
    }
]


function TrainerSubscribedTraineesTable() {
    return (
        <Table>
            <Table.Header>
                <tr className="capitalize text-left">
                    <th className="px-6 py-2 whitespace-nowrap">trainee details</th>
                    <th className="px-6 py-2 whitespace-nowrap">Last Assessment</th>
                    <th className="px-6 py-2 whitespace-nowrap">package</th>
                    <th className="px-6 py-2 whitespace-nowrap">start at</th>
                    <th className="px-6 py-2 whitespace-nowrap">end at</th>
                    <th className="px-6 py-2 whitespace-nowrap">status</th>
                    <th className="px-6 py-2 whitespace-nowrap">actions</th>
                </tr>
            </Table.Header>
            <Table.Body data={trainees} render={(trainee) => <TrainerSubscribedTraineesTableRow trainee={trainee} key={trainee.name} />} />
            <Table.Footer>
                <Pagination count={trainees.length} />
            </Table.Footer>
        </Table>
    )
}

export default TrainerSubscribedTraineesTable
