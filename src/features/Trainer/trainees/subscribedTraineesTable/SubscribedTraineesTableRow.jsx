import Table from "../../../../ui/Table";
import { useNavigate } from "react-router-dom";
import { CiApple, CiDumbbell } from "react-icons/ci";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { differenceInDays, format, parseISO } from "date-fns";
import CircularProgress from "../../../../ui/CircularProgress";
function SubscribedTraineesTableRow({ trainee, section }) {
    let statusStyle;
    const navigate = useNavigate();
    const {
        traineeId: { _id, firstName, lastName, email, profilePhoto, dietAssessmentStatus } = {},
        package: { packageName } = {},
        startDate,
        duration,
        endDate,
        status,
    } = trainee ?? {};
    if (status === "cancelled") statusStyle = `text-red-500 bg-red-100`;
    if (status === "pending") statusStyle = `text-gray-500 bg-gray-100`;
    if (status === "expired") statusStyle = `text-blue-500 bg-blue-100`;
    if (status === "Active") statusStyle = `text-green-500 bg-green-100`;
    // if (status === "subscriber") statusStyle = `text-teal-500 bg-teal-100`;
    // else statusStyle = `text-rose-500 bg-rose-100`;
    return (
        <Table.Row>
            <tr onClick={() => navigate(`trainee/${_id}`)} className="capitalize border-b text-sm text-left text-blue-800 bg-white cursor-pointer hover:bg-gray-50 border" >
                <td className="pl-4 py-2 whitespace-nowrap mx-auto">
                    <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 h-14 w-14">
                            <img className="h-14 w-14 rounded-md" src={profilePhoto} alt={firstName} />
                        </div>
                        <div className="flex flex-col justify-center gap-1">
                            <p className="flex items-center gap-1 capitalize">
                                <span className="text-sm font-bold">{firstName}</span>
                                <span className="text-sm font-bold">{lastName}</span>
                            </p>
                            <p className="text-xs flex flex-col text-blue-900">
                                <span>{email}</span>
                                {/* <span>{phoneNumber}</span> */}
                            </p>
                        </div>
                    </div>
                </td>
                <td className="px-10 py-4 whitespace-nowrap">{format(new Date(startDate), 'dd MMMM, yyyy')}</td>
                {
                    section !== "dashboard" &&
                    <>
                        <td className="px-10 py-4 whitespace-nowrap">{packageName}</td>
                        <td className="px-10 py-4 whitespace-nowrap">{duration} months</td>
                        {/* <td className="px-10 py-4 whitespace-nowrap">{lastAssessment}</td> */}
                        <td className="px-9 py-2 whitespace-nowrap capitalize">
                            <div className="flex items-center gap-2">
                                <span><CircularProgress allDays={(differenceInDays(parseISO(endDate), new Date()) / differenceInDays(parseISO(endDate), parseISO(startDate))) * 100} days={differenceInDays(parseISO(endDate), new Date()) - 1} size="size-12" variations="daysCount" /></span>
                                <span>days left</span>
                            </div>
                        </td>
                        <td className="px-10 py-4 whitespace-nowrap capitalize text-xs font-semibold"><span className={`px-2 py-0.5 rounded-md ${statusStyle}`}>{status.replaceAll("-", " ")}</span></td>
                    </>
                }
                <td className="px-10 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className='flex items-center justify-start gap-2'>
                        <button
                            disabled={dietAssessmentStatus === "In Preparation" || dietAssessmentStatus === "Pending"}
                            onClick={(e) => {
                                e.stopPropagation();
                                navigate(`diets/${_id}`);
                            }}
                            className={`p-2 rounded-md text-lg ${dietAssessmentStatus === "Ready" ? "text-green-600 hover:text-green-700 bg-green-100 animate-bounce" : "text-blue-600 hover:text-blue-700 bg-blue-100"}`}
                        >
                            <CiApple />
                        </button>
                        <button
                            className="text-blue-600 p-2 hover:text-blue-700 bg-blue-100 rounded-md text-lg"
                        >
                            <CiDumbbell />
                        </button>
                        <button
                            className="text-blue-600 p-2 hover:text-blue-700 bg-blue-100 rounded-md text-lg"
                        >
                            <BiMessageRoundedDetail />
                        </button>
                    </div>
                </td>
            </tr>
        </Table.Row>
    )
}

export default SubscribedTraineesTableRow
