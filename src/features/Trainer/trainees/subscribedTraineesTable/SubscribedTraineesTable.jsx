import Empty from "../../../../ui/Empty"
import Pagination from "../../../../ui/Pagination"
import Table from "../../../../ui/Table"
import SubscribedTraineesTableRow from "./SubscribedTraineesTableRow"

// const trainees = [
//     {
//         "name": "مروان عبد المحفوظ",
//         "email": "marwanmohamed@gmail.com",
//         "lastAssessment": "18-09-2023",
//         "package": "Golden",
//         "startAt": "17-09-2023",
//         "endAt": "17-12-2023",
//         "status": "Active"
//     },
//     {
//         "name": "شهاب الدين سند",
//         "email": "shehabeldinsand@gmail.com",
//         "lastAssessment": "18-09-2023",
//         "package": "Golden",
//         "startAt": "17-09-2023",
//         "endAt": "17-12-2023",
//         "status": "Active"
//     },
//     {
//         "name": "سهيلة أسامة",
//         "email": "sohailaosama@gmail.com",
//         "lastAssessment": "18-09-2023",
//         "package": "Golden",
//         "startAt": "17-09-2023",
//         "endAt": "17-12-2023",
//         "status": "Active"
//     },
//     {
//         "name": "عبد الرحمن النذير",
//         "email": "abdelrahman@gmail.com",
//         "lastAssessment": "18-09-2023",
//         "package": "Golden",
//         "startAt": "17-09-2023",
//         "endAt": "17-12-2023",
//         "status": "Active"
//     },
//     {
//         "name": "أحمد الدوخي",
//         "email": "ahmedeldawaby@gmail.com",
//         "lastAssessment": "18-09-2023",
//         "package": "Golden",
//         "startAt": "17-09-2023",
//         "endAt": "17-12-2023",
//         "status": "Active"
//     },
//     {
//         "name": "مروان مجدي اسم",
//         "email": "marwanmagdy@gmail.com",
//         "lastAssessment": "18-09-2023",
//         "package": "Golden",
//         "startAt": "17-09-2023",
//         "endAt": "17-12-2023",
//         "status": "Active"
//     },
//     {
//         "name": "مؤمن رأفت فتوح",
//         "email": "moamenraafat@gmail.com",
//         "lastAssessment": "18-09-2023",
//         "package": "Golden",
//         "startAt": "17-09-2023",
//         "endAt": "17-12-2023",
//         "status": "Active"
//     }
// ]


function SubscribedTraineesTable({ trainees, count, empty = "", section }) {
    if (!count) return <Empty resource={empty ? empty : "trainees"} />
    return (
        <Table>
            <Table.Header>
                <tr className="capitalize text-left">
                    <th className="pl-4 py-2 whitespace-nowrap">trainee details</th>
                    {/* <th className="px-4 py-2 whitespace-nowrap">Last Assessment</th> */}
                    <th className="px-10 py-2 whitespace-nowrap">subscription date</th>
                    {
                        section !== "dashboard" &&
                        <>
                            <th className="px-10 py-2 whitespace-nowrap">package name</th>
                            <th className="px-10 py-2 whitespace-nowrap">duration</th>
                            <th className="px-10 py-2 whitespace-nowrap">remaining days</th>
                            <th className="px-10 py-2 whitespace-nowrap">status</th>
                        </>
                    }
                    <th className="px-10 py-2 whitespace-nowrap">actions</th>
                </tr>
            </Table.Header>
            <Table.Body data={trainees} render={(trainee) => <SubscribedTraineesTableRow trainee={trainee} key={trainee._id} section={section} />} />
            <Table.Footer>
                <Pagination count={count} />
            </Table.Footer>
        </Table>
    )
}

export default SubscribedTraineesTable
