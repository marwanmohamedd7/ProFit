import styles from "../../../../../styles/styles";
import AppleIcon from "../../../../../Icons/AppleIcon";
import DumbbellIcon from "../../../../../Icons/DumbbellIcon";
import { useDarkMode } from "../../../../../context/DarkModeProvider";
import AssessmentsOverviewTableRow from "./AssessmentsOverviewTableRow";

function AssessmentsOverviewTable({ traineesAssessments }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const { readyDietTraineesCount, readyWorkoutTraineesCount, trainees } = traineesAssessments
    return (
        // <Table>
        //     <Table.Header>
        //         <th className="px-4 py-2 whitespace-nowrap">trainee details</th>
        //         <th className="px-4 py-2 whitespace-nowrap">duration</th>
        //         {/* <th className="px-4 py-2 whitespace-nowrap">status</th> */}
        //         <th className="px-10 py-2 whitespace-nowrap">remaining days</th>
        //         <th className="px-4 py-2 whitespace-nowrap">action</th>
        //     </Table.Header>
        //     <Table.Body data={[1,2,3,4,5]} render={(assessment, index) => <AssessmentsOverviewTableRow transcation={assessment} key={index} />} />
        //     <Table.Footer>
        //         <Pagination count={2} pages={PAGE_SIZE_MEALS} />
        //     </Table.Footer>
        // </Table>
        <>
            <div className="grid grid-cols-2 gap-4">
                <div className={`flex justify-between items-center p-4 border ${isDarkMode ? `${colors.bg_slate_700} ${colors.border_gray_700} ${colors.text_white}` : `${colors.bg_gray_50} ${colors.text_gray_900}`} rounded-md font-bold`}>
                    <p className="flex justify-center items-center gap-2 capitalize">
                        <span><AppleIcon /></span>
                        <span>total diet assessment</span>
                    </p>
                    <p className="text-3xl">{readyDietTraineesCount}</p>
                </div>
                <div className={`flex justify-between items-center p-4 border ${isDarkMode ? `${colors.bg_slate_700} ${colors.border_gray_700} ${colors.text_white}` : `${colors.bg_gray_50} ${colors.text_gray_900}`} rounded-md font-bold`}>
                    <p className="flex justify-center items-center gap-2 capitalize">
                        <span><DumbbellIcon /></span>
                        <span>total workout assessment</span>
                    </p>
                    <p className="text-3xl">{readyWorkoutTraineesCount}</p>
                </div>
                {/* <div className="col-span-2">
                    <SubscribedTrainees />
                </div> */}
            </div>
            <div className="flex flex-col gap-2 overflow-y-scroll scrollbar--hide h-96">
                {
                    trainees.map(assessment => <AssessmentsOverviewTableRow assessment={assessment} key={assessment?.traineeId} />)
                }
            </div>
        </>
    )
}

export default AssessmentsOverviewTable
