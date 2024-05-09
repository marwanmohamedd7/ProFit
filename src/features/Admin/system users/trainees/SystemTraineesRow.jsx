import { MdOutlineBlock } from "react-icons/md";
import Table from "../../../../ui/Table";
// import { IoCheckmarkOutline, IoEyeOutline } from "react-icons/io5"

function SystemTraineesRow({ trainee }) {
    let statusStyle;
    const { firstName, lastName, email, phoneNumber, profilePhoto, Registration_Date, status, assignedTrainer, package: packageDetails } = trainee ?? {};
    if (status === "rejected") statusStyle = `text-red-500 bg-red-100`;
    if (status === "pending") statusStyle = `text-gray-500 bg-gray-100`;
    if (status === "incomplete") statusStyle = `text-blue-500 bg-blue-100`;
    if (status === "accepted") statusStyle = `text-green-500 bg-green-100`;
    if (status === "subscriber") statusStyle = `text-teal-500 bg-teal-100`;
    else statusStyle = `text-rose-500 bg-rose-100`;
    return (
        <Table.Row>
            <tr className="border-b text-sm text-left text-blue-800 bg-white cursor-pointer hover:bg-gray-50 border">
                <td className="px-6 py-2 whitespace-nowrap mx-auto">
                    <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 h-14 w-14">
                            <img className="h-14 w-14 rounded-md ml-[-10px]" src={profilePhoto} alt={firstName} />
                        </div>
                        <div className="flex flex-col justify-center gap-1 bg-">
                            <p className="flex items-center gap-1 capitalize">
                                <span className="text-sm font-bold">{firstName}</span>
                                <span className="text-sm font-bold">{lastName}</span>
                            </p>
                            <div className="text-xs flex flex-col text-gray-800">
                                <span>{email}</span>
                                <span className="underline">{phoneNumber}</span>
                            </div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-2 whitespace-nowrap font-bold">
                    <p className="flex items-center gap-1 capitalize">
                        <span className="text-sm font-bold">{assignedTrainer?.firstName}</span>
                        <span className="text-sm font-bold">{assignedTrainer?.lastName}</span>
                    </p></td>
                <td className="px-6 py-2 whitespace-nowrap">{packageDetails?.packageName}</td>
                {/* <td className="px-6 py-2 whitespace-nowrap">{trainee.startAt}</td>
            <td className="px-6 py-2 whitespace-nowrap">{trainee.endAt}</td> */}
                <td className="px-6 py-2 whitespace-nowrap capitalize text-xs font-semibold"><span className={`px-2 py-0.5 rounded-md ${statusStyle}`}>{status.replaceAll("-", " ")}</span></td>
                <td className="px-6 py-2 whitespace-nowrap">{Registration_Date}</td>
                <td className="px-6 py-2 whitespace-nowrap text-right text-sm font-medium">
                    <div className='flex items-center justify-start gap-2'>
                        {/* <span
                        href="#"
                        className="text-blue-600 p-2 hover:text-blue-900 bg-blue-100 rounded-md"
                    >
                        <IoEyeOutline />

                    </span> */}

                        {/* <span
                        href="#"
                        className="text-green-600 p-2 hover:text-green-900 bg-green-100 rounded-md"
                    >
                        <IoCheckmarkOutline />

                    </span> */}

                        <span
                            href="#"
                            className="text-red-600 p-2 hover:text-red-900 bg-red-100 rounded-md"
                        >
                            <MdOutlineBlock />
                        </span>
                    </div>
                </td>
            </tr>
        </Table.Row>
    )
}

export default SystemTraineesRow
