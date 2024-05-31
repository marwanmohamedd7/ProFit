// import { useNavigate } from "react-router-dom";
// import StatusLabel from "../../../../../ui/StatusLabel"
import Table from "../../../../../ui/Table"
import { CiApple, CiDumbbell } from "react-icons/ci";
import { BiMessageRoundedDetail } from "react-icons/bi";
import CircularProgress from "../../../../../ui/CircularProgress";
// import { differenceInDays, parseISO } from "date-fns";

function AssessmentsOverviewTableRow() {
    // const navigate = useNavigate()
    return (
        <Table.Row>
            <td className="p-4 whitespace-nowrap">{"trainee details"}</td>
            <td className="p-4 whitespace-nowrap">{"12"} months</td>
            {/* <td className="p-4 whitespace-nowrap statusStyle"><StatusLabel status={"active"} /></td> */}
            <td className="px-9 py-2 whitespace-nowrap capitalize">
                <div className="flex items-center gap-2">
                    {
                        "status" === "Active" ?
                            <>
                                {/* <span><CircularProgress allDays={(differenceInDays(parseISO(endDate), new Date()) / differenceInDays(parseISO(endDate), parseISO(startDate))) * 100} days={differenceInDays(parseISO(endDate), new Date()) - 1} size="size-12" variations="daysCount" /></span> */}
                                <span><CircularProgress allDays={100} days={0} size="size-12" variations="daysCount" /></span>
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
            <td className="px-10 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className='flex items-center justify-start gap-2'>
                    <button
                        // disabled={(dietAssessmentStatus === "Ready" || dietAssessmentStatus === "Working") ? false : true}
                        onClick={(e) => {
                            e.stopPropagation();
                            // navigate(`diets/${_id}`);
                        }}
                        className={`p-2 rounded-md text-lg cursor-pointer ${"dietAssessmentStatus" === "Ready" ? "text-green-600 hover:text-green-700 bg-green-100 animate-bounce" : "text-blue-600 hover:text-blue-700 bg-blue-100"}`}
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
        </Table.Row >
    )
}

export default AssessmentsOverviewTableRow
