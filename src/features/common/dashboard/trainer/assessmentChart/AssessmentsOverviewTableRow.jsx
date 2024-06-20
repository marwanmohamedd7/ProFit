// import { useNavigate } from "react-router-dom";
// import StatusLabel from "../../../../../ui/StatusLabel"
import { CiApple, CiDumbbell } from "react-icons/ci";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { useDarkMode } from "../../../../../context/DarkModeProvider";
import styles from "../../../../../styles/styles";
import { useNavigate } from "react-router-dom";
import ImageViewer from "../../../../../ui/ImageViewer";
// import { differenceInDays, parseISO } from "date-fns";

function AssessmentsOverviewTableRow({ assessment }) {
    const colors = styles();
    const navigate = useNavigate();
    const { isDarkMode } = useDarkMode();
    const dietAssessmentIconStyle = isDarkMode ? `text-green-500 hover:text-green-400 bg-green-900 hover:bg-green-800 bg-opacity-50` : `text-green-600 hover:text-green-600 bg-green-100 hover:bg-green-200`;
    const assessmentIconStyle = isDarkMode ? `text-blue-500 hover:text-blue-400 bg-blue-900 hover:bg-blue-800 bg-opacity-50` : `text-blue-600 hover:text-blue-600 bg-blue-100 hover:bg-blue-200`;
    const { traineeId, firstName, lastName, email, profilePhoto, assessmentStatus } = assessment;
    return (
        <div onClick={() => navigate(`trainee/${traineeId}`)} className={`flex items-center justify-between border-t border-b p-2 text-sm cursor-pointer transition-all duration-300 ${isDarkMode ? `${colors.text_white} ${colors.border_gray_700} hover:${colors.bg_slate_700}` : `${colors.text_gray_900} hover:${colors.bg_gray_50}`}`}>
            <div className="flex items-center gap-3">
                <div onClick={(e) => e.stopPropagation()} className="flex-shrink-0 h-12 w-12">
                    <ImageViewer imageURL={profilePhoto}>
                        <img className="h-12 w-12 rounded-md" src={profilePhoto} alt={firstName} />
                    </ImageViewer>
                </div>
                <div className="flex flex-col justify-center gap-1">
                    <p className="flex items-center gap-1 capitalize">
                        <span className="text-sm font-bold">{firstName}</span>
                        <span className="text-sm font-bold">{lastName}</span>
                    </p>
                    <p className={`text-xs ${isDarkMode ? colors.text_gray_100 : colors.text_gray_700}`}>{email}</p>
                </div>
            </div>
            <div className='flex items-center justify-start gap-2'>
                <button
                    disabled={(assessmentStatus === "Ready" || assessmentStatus === "Working") ? false : true}
                    onClick={(e) => {
                        e.stopPropagation();
                        navigate(`diets/${traineeId}`);

                    }}
                    className={`p-2 rounded-md text-lg transition-all duration-300 cursor-pointer disabled:cursor-auto ${assessmentStatus === "Ready" ? `${dietAssessmentIconStyle} animate-bounce` : `${assessmentIconStyle}`}`}
                >
                    <CiApple />
                </button>
                <button
                    className={`p-2 rounded-md text-lg transition-all duration-300 ${assessmentIconStyle}`}
                >
                    <CiDumbbell />
                </button>
                <button
                    className={`p-2 rounded-md text-lg transition-all duration-300 ${assessmentIconStyle}`}
                >
                    <BiMessageRoundedDetail />
                </button>
            </div>
        </div>
        // <Table.Row>
        //     <td className="p-4 whitespace-nowrap">{"trainee details"}</td>
        //     <td className="p-4 whitespace-nowrap">{"12"} months</td>
        //     {/* <td className="p-4 whitespace-nowrap statusStyle"><StatusLabel status={"active"} /></td> */}
        //     <td className="px-9 py-2 whitespace-nowrap capitalize">
        //         <div className="flex items-center gap-2">
        //             {
        //                 "status" === "Active" ?
        //                     <>
        //                         {/* <span><CircularProgress allDays={(differenceInDays(parseISO(endDate), new Date()) / differenceInDays(parseISO(endDate), parseISO(startDate))) * 100} days={differenceInDays(parseISO(endDate), new Date()) - 1} size="size-12" variations="daysCount" /></span> */}
        //                         <span><CircularProgress allDays={100} days={0} size="size-12" variations="daysCount" /></span>
        //                         <span>days left</span>
        //                     </>
        //                     :
        //                     <>
        //                         <span><CircularProgress allDays={100} days={0} size="size-12" variations="daysCount" /></span>
        //                         <span>days left</span>
        //                     </>
        //             }

        //         </div>
        //     </td>
        //     <td className="px-10 py-4 whitespace-nowrap text-right text-sm font-medium">
        //         <div className='flex items-center justify-start gap-2'>
        //             <button
        //                 // disabled={(assessmentStatus === "Ready" || dietAssessmentStatus === "Working") ? false : true}
        //                 onClick={(e) => {
        //                     e.stopPropagation();
        //                     // navigate(`diets/${_id}`);
        //                 }}
        //                 className={`p-2 rounded-md text-lg cursor-pointer ${"dietAssessmentStatus" === "Ready" ? "text-green-600 hover:text-green-700 bg-green-100 animate-bounce" : "text-blue-600 hover:text-blue-700 bg-blue-100"}`}
        //             >
        //                 <CiApple />
        //             </button>
        //             <button
        //                 className="text-blue-600 p-2 hover:text-blue-700 bg-blue-100 rounded-md text-lg"
        //             >
        //                 <CiDumbbell />
        //             </button>
        //             <button
        //                 className="text-blue-600 p-2 hover:text-blue-700 bg-blue-100 rounded-md text-lg"
        //             >
        //                 <BiMessageRoundedDetail />
        //             </button>
        //         </div>
        //     </td>
        // </Table.Row >
    )
}

export default AssessmentsOverviewTableRow
