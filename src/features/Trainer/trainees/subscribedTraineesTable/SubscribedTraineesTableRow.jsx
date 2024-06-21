import Table from "../../../../ui/Table";
import { useNavigate } from "react-router-dom";
import { CiApple, CiDumbbell } from "react-icons/ci";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { differenceInDays, format, parseISO } from "date-fns";
import CircularProgress from "../../../../ui/CircularProgress";
import ImageViewer from "../../../../ui/ImageViewer";
import StatusLabel from "../../../../ui/StatusLabel";
import { useDarkMode } from "../../../../context/DarkModeProvider";
import styles from "../../../../styles/styles";

function SubscribedTraineesTableRow({ trainee }) {
    const colors = styles();
    const navigate = useNavigate();
    const { isDarkMode } = useDarkMode();
    const dietAssessmentIconStyle = isDarkMode ? `text-green-500 hover:text-green-400 bg-green-900 hover:bg-green-800 bg-opacity-50` : `text-green-600 hover:text-green-600 bg-green-100 hover:bg-green-200`;
    const assessmentIconStyle = isDarkMode ? `text-blue-500 hover:text-blue-400 bg-blue-900 hover:bg-blue-800 bg-opacity-50` : `text-blue-600 hover:text-blue-600 bg-blue-100 hover:bg-blue-200`;

    if (!trainee || !trainee.traineeId) {
        return null; // Return null if trainee or traineeId is null or undefined
    }

    const {
        traineeId: { _id = "", firstName, lastName, email, profilePhoto, dietAssessmentStatus } = {},
        package: packageTrainee,
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
            <td className="px-4 py-2 whitespace-nowrap mx-auto">
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
                        <p className={`text-xs flex flex-col ${isDarkMode ? colors.text_gray_100 : colors.text_gray_700}`}>
                            <span>{email}</span>
                        </p>
                    </div>
                </div>
            </td>
            <td className="px-9 py-4 whitespace-nowrap">{format(new Date(startDate), 'dd MMMM, yyyy')}</td>
            <td className="px-9 py-4 whitespace-nowrap">{packageTrainee?.packageName || "N/A"}</td>
            <td className="px-9 py-4 whitespace-nowrap">{duration} months</td>
            <td className="px-8 py-2 whitespace-nowrap capitalize">
                <div className="flex items-center gap-2">
                    {status === "Active" ? (
                        <>
                            <span><CircularProgress allDays={(differenceInDays(parseISO(endDate), new Date()) / differenceInDays(parseISO(endDate), parseISO(startDate))) * 100} days={differenceInDays(parseISO(endDate), new Date()) - 1} size="size-12" variations="daysCount" /></span>
                            <span>days left</span>
                        </>
                    ) : (
                        <>
                            <span><CircularProgress allDays={100} days={0} size="size-11" variations="daysCount" /></span>
                            <span>days left</span>
                        </>
                    )}
                </div>
            </td>
            <td className="px-9 py-4 whitespace-nowrap capitalize"><StatusLabel status={status} /></td>
            <td className="px-9 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className='flex items-center justify-start gap-2'>
                    <button
                        disabled={(dietAssessmentStatus === "Ready" || dietAssessmentStatus === "Working") ? false : true}
                        onClick={(e) => {
                            e.stopPropagation();
                            navigate(`diets/${_id}`);
                        }}
                        className={`p-2 rounded-md text-lg transition-all duration-300 cursor-pointer disabled:cursor-auto ${dietAssessmentStatus === "Ready" ? `${dietAssessmentIconStyle} animate-bounce` : `${assessmentIconStyle}`}`}
                    >
                        <CiApple />
                    </button>
                    <button className={`p-2 rounded-md text-lg transition-all duration-300 ${assessmentIconStyle}`}>
                        <CiDumbbell />
                    </button>
                    <button className={`p-2 rounded-md text-lg transition-all duration-300 ${assessmentIconStyle}`}>
                        <BiMessageRoundedDetail />
                    </button>
                </div>
            </td>
        </Table.Row>
    )
}

export default SubscribedTraineesTableRow;
