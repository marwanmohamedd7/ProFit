import Table from "../../../../ui/Table";
import { useNavigate } from "react-router-dom";
import { CiApple, CiDumbbell } from "react-icons/ci";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { differenceInDays, format, parseISO } from "date-fns";
import CircularProgress from "../../../../ui/CircularProgress";
import ImageViewer from "../../../../ui/ImageViewer";
import StatusLabel from "../../../../ui/StatusLabel";

function SubscribedTraineesTableRow({ trainee }) {
    const navigate = useNavigate();
    const {
        traineeId: { _id, firstName, lastName, email, profilePhoto, dietAssessmentStatus } = {},
        package: { packageName } = {},
        startDate,
        duration,
        endDate,
        status,
    } = trainee ?? {};
    return (
        <Table.Row onClick={(e) => {
            e.stopPropagation();
            navigate(`trainee/${_id}`);
        }}>
            <td className="pl-4 py-2 whitespace-nowrap mx-auto">
                <div className="flex items-center gap-3">
                    <div onClick={(e) => e.stopPropagation()} className="flex-shrink-0 h-14 w-14">
                        <ImageViewer imageURL={profilePhoto}>
                            <img className="h-14 w-14 rounded-md" src={profilePhoto} alt={firstName} />
                        </ImageViewer>
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
            <td className="px-10 py-4 whitespace-nowrap">{packageName}</td>
            <td className="px-10 py-4 whitespace-nowrap">{duration} months</td>
            {/* <td className="px-10 py-4 whitespace-nowrap">{lastAssessment}</td> */}
            <td className="px-9 py-2 whitespace-nowrap capitalize">
                <div className="flex items-center gap-2">
                    {
                        status === "Active" ?
                            <>
                                <span><CircularProgress allDays={(differenceInDays(parseISO(endDate), new Date()) / differenceInDays(parseISO(endDate), parseISO(startDate))) * 100} days={differenceInDays(parseISO(endDate), new Date()) - 1} size="size-12" variations="daysCount" /></span>
                                <span>days left</span>
                            </>
                            :
                            <>
                                <span><CircularProgress allDays={100} days={0} size="size-12" variations="daysCount" /></span>
                                <span>days left</span>
                            </>
                    }

                </div>
            </td>
            <td className="px-10 py-4 whitespace-nowrap capitalize"><StatusLabel status={status} /></td>
            <td className="px-10 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className='flex items-center justify-start gap-2'>
                    <button
                        disabled={(dietAssessmentStatus === "Ready" || dietAssessmentStatus === "Working") ? false : true}
                        onClick={(e) => {
                            e.stopPropagation();
                            navigate(`diets/${_id}`);
                        }}
                        className={`p-2 rounded-md text-lg cursor-pointer ${dietAssessmentStatus === "Ready" ? "text-green-600 hover:text-green-700 bg-green-100 animate-bounce" : "text-blue-600 hover:text-blue-700 bg-blue-100"}`}
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
        </Table.Row>
    )
}

export default SubscribedTraineesTableRow
